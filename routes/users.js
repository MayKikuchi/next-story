var express = require('express');
var router = express.Router();
const Profile = require('../models/profile');
const ReviewRating = require('../models/reviewRating');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var { uuid } = require('uuidv4');

// NOTE: keeping backend console logs for errors to aid future development

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
    const userId = req.params.userId;
    Profile.findOne({ userId : userId }).select('-__v -encrypted')
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        })
});

/* DELETE user's account */
router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const result = await Profile.deleteOne({ userId }, (err) => {
    if (err) {
      res.status(500).json(err);
    }
    ReviewRating.deleteMany({ userId }, (err) => {
      if (err) {
        res.status(500).json(err)
      }
    })
  });
  res.status(200).json(result);
})

router.get('/favoriteNSTags/:userId', function(req, res, next) {
    const userId = req.params.userId;
    Profile.findOne({ userId : userId })
        .then((user) => {
            const tags = user.favoriteNextStoryTags || [];
            res.status(200).json(tags);
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
                booksReadDetails: user.booksReadDetails,
                moviesWatchedDetails: user.moviesWatchedDetails,
                readLaterDetails: user.readLaterDetails,
                watchLaterDetails: user.watchLaterDetails,
                favoriteMoviesDetails: user.favoriteMoviesDetails,
                favoriteBooksDetails: user.favoriteBooksDetails,
                favoriteAuthors: user.favoriteAuthors,
                favoriteDirectors: user.favoriteDirectors,
                favoriteGenres: user.favoriteGenres
            };
            res.status(200).json(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        })
});

router.put('/favoriteNSTags/putToFavorites/:userId/:shouldRemove', (req, res) => {
    const { userId, shouldRemove } = req.params;
    const { tag } = req.body;
    if (shouldRemove === 'true') {
        const tagId = tag.tagId;
        Profile.findOneAndUpdate({ userId: userId},
            {
                $pull :{
                    favoriteNextStoryTags : { tagId: tagId }
                }},
            { new:true, multi:true })
            .then(user => {
                res.status(200).json(user.favoriteNextStoryTags);
            })
            .catch((err) => {
                console.log('Error removing from user fav tags: ', err);
                res.status(500);
            });
    } else {
        Profile.findOneAndUpdate({ userId: userId},
            {
                $push :{
                    favoriteNextStoryTags: tag
                }},
            { new:true, multi:true })
            .then(user => {
                res.status(200).json(user.favoriteNextStoryTags);
            })
            .catch((err) => {
                console.log('Error adding favorite tag: ', err);
                res.status(500);
            });
    }
});

/* REMOVE a favorite movies or books. */
router.put('/:key/:encodedSubject/:userId', (req, res) => {
    const { encodedSubject,  userId, key } = req.params;
    const subject = decodeURIComponent(encodedSubject);
    const action = JSON.stringify(req.body.action);
    const keyPlusDetails = decodeURIComponent(key)+'Details';
    const subjectDetails = req.body.mediaObject;
    if(action.includes("REMOVE")){
        Profile.findOneAndUpdate({ userId: userId},
            {
                $pull :{
                    [key] : {$in: [subject]},
                    [keyPlusDetails] : {id:subject}
                }
            },
            { new:true, multi:true })
            .then(user => {
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
                    [key]: subject,
                    [keyPlusDetails]: subjectDetails
                }},
            { new:true, multi:true })
            .then(user => {
                res.status(200).json(user);
            })
            .catch((err) => {
                console.log('Error upserting review: ', err);
                res.status(500);
            });
    }
});

router.post('/signUp', function(req, res, next) {
    const { userName, email, textPass } = req.body;
    Profile.findOne({ email : email })
        .then((user) => {
            if (user && user.email === email) {
                res.status(400).json({ message: 'A user with this email exists' });
            } else {
                if (textPass) {
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
                                booksReadDetails: [],
                                moviesWatchedDetails: [],
                                readLaterDetails: [],
                                watchLaterDetails: [],
                                favoriteMoviesDetails: [],
                                favoriteBooksDetails: [],
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
                                });
                        }
                        if (err) {
                            console.log('Hashing error');
                            res.status(500);
                        }
                    });
                } else {
                    const profile = {
                        userId: uuid(),
                        email: email,
                        encrypted: '',
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
                bcrypt.compare(textPass, hash, function(err, result) {
                    if (err) {
                        console.log('Could not check hash', err);
                        res.status(401).json({ message: 'Could not check hash' });
                    } else {
                        const resultObj = {
                            passwordCorrect: result,
                            name: user.name,
                            userId: user.userId
                        }
                        res.status(200).send(resultObj);
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

router.get('/googleLogin/:email', function(req, res, next) {
    const { email } = req.params;
    Profile.findOne({ email : email })
        .then((user) => {
            if (user) {
                const userObj = {
                    name: user.name,
                    userId: user.userId
                }
                res.status(200).json(userObj);
            }
            else {
                res.status(404).json({ message: 'User not found, please sign up or try again' });
            }
        })
        .catch((error) => {
            console.log('Error logging in:', error);
            res.status(500);
        });
});

/* Update Profile */
router.put('/edit/:id', async(req, res) => {
  const { id } = req.params;
  const { avatar, message } = req.body;
  try {
    const updatedProfile = await Profile.findOneAndUpdate({ _id: id },
      { avatar, message },
      {
        new: true,
        runValidators: true,
        omitUndefined: true
      }
    ).exec();
    res.status(200).json({ avatar: updatedProfile.avatar, message: updatedProfile.message});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
