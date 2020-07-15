var express = require('express');
var router = express.Router();
const Profile = require('../models/Profile');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var { uuid } = require('uuidv4');

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
    const userId = req.params.userId;
    Profile.findOne({ userId : userId })
        .then((user) => {
            console.log(user);
            res.status(200).json(user);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        })
});

router.get('/userLists/:userId', function(req, res, next) {
    const userId = req.params.userId;
    Profile.findOne({ userId : userId })
        .then((user) => {
            const lists = {
                booksRead: user.booksRead,
                moviesWatched: user.moviesWatched,
                watchLater: user.watchLater,
                readLater: user.readLater,
                favoriteMovies: user.favoriteMovies,
                favoriteBooks: user.favoriteBooks,
                favoriteAuthors: user.favoriteAuthors,
                favoriteDirectors: user.favoriteDirectors
            };
            console.log(lists);
            res.status(200).json(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        })
});

/* REMOVE a favorite movies or books. */
router.put('/:key/:mediaId/:userId', (req, res) => {
    const { mediaId,  userId, key } = req.params;
    const action = JSON.stringify(req.body.action);
    console.log(key);
    console.log(mediaId);
    if(action.includes("REMOVE")){
        Profile.findOneAndUpdate({ userId: userId},
            {
                $pull :{
                    [key] : {$in: [mediaId]}
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user[key] );
                res.status(200).json(user);
            })
            .catch((err) => {
                console.log('Error upserting review: ', err);
                res.status(500);
            });
    } else if(action.includes("ADD")){
        Profile.findOneAndUpdate({ userId: userId},
            {
                $push :{
                    [key]: mediaId
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user[key]);
                res.status(200).json(user);
            })
            .catch((err) => {
                console.log('Error upserting review: ', err);
                res.status(500);
            });
    }
});

router.post('/notGoogleSignUp', function(req, res, next) {
    const { userName, email, textPass } = req.body;
    Profile.findOne({ email : email })
        .then((user) => {
            if (user && user.email === email) {
                // res.status(400).send('User with this email exists');
                res.status(400).json({ message: 'A user with this email exists' });
            } else {
                bcrypt.hash(textPass, saltRounds, function(err, hash) {
                    if (hash) {
                        const profile = {
                            userId: uuid(),
                            email: email,
                            encrypted: hash,
                            name: userName,
                            type: 'general',
                            avatar: '',
                            message: '',
                            booksRead: [],
                            moviesWatched: [],
                            readLater: [],
                            watchLater: [],
                            favoriteGenres: [],
                            favoriteNextStoryTags: [],
                            favoriteMovies: [],
                            favoriteBooks: [],
                            favoriteAuthors: [],
                            favoriteDirectors: []
                        }
                        new Profile(profile).save()
                            .then((user) => {
                                const returnData = {
                                    userId: user.userId,
                                    name: user.name
                                }
                                res.status(200).json(returnData);
                            })
                            .catch((error) => {
                                console.log(error);
                                res.status(500);
                            })
                    }
                    if (err) {
                        console.log('Hashing error');
                        res.status(500);
                    }
                });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});

router.get('/notGoogleLogin/:email/:textPass', function(req, res, next) {
    const { email, textPass } = req.params;
    Profile.findOne({ email : email })
        .then((user) => {
            if (user) {
                const hash = user.encrypted;
                console.log(user);
                bcrypt.compare(textPass, hash, function(err, result) {
                    if (err) {
                        console.log('Could not check hash', err);
                        res.status(401).json({ message: 'Could not check hash' });
                    } else {
                        res.status(200).send(result);
                    }
                });
            } else {
                res.status(400).json({ message: 'A user with this email does not exist' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});

module.exports = router;
