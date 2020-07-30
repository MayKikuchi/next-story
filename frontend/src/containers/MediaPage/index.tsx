import React, {useEffect, useState} from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import ReviewList from '../../components/ReviewList';
import {MediaType, SingleQueryType} from '../../constants/dataTypes';
import styled from 'styled-components';
import {Box, FormControl, Grid, InputLabel, MenuItem, Select} from '@material-ui/core';
import TagsSection from '../../components/TagsSection';
import StarRater from '../../components/StarRater';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadAllReviewsAction} from '../../actions/reviewRatingActions';
import AddToUserButton from '../../components/AddToUserButton';
import FavoritesDropDown from '../../components/FavoritesDropDown';
import Interweave from 'interweave';
import {useHistory} from 'react-router';
import LoadingSpinner from '../../components/LoadingSign';

const StyledImage = styled.img`
    width: 100%;
    max-width: 300px;
    margin-bottom: 15px;
`;

const ImagePlaceholder = styled.div`
    width: 100%;
    max-width: 300px;
    min-height: 300px;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.palette.grey[300]};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledGridItem = styled(Grid)`
    text-align: center;
`;

const VerticallyCenteredDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const StyledFormControl = styled(FormControl)`
    width: 100%;
    margin: 5px !important;
`;

const MediaPage: React.FC<{}> = (props: any) => {
    const [mediaType, id] = props.location.pathname.split('/').filter((o: string) => o);
    const [isForLater, setForLater] = useState(false);
    const [isFavorite, setFavorite] = useState(false);
    const [watchedOrRead, setWatchedOrRead] = useState(false);
    const [mediaObject, setMediaObject] = useState({
        title: 'No title',
        id: id,
        mediaType: MediaType.start,
        image: '',
        people: [''],
        genres: [''],
        blurb: 'No description'
    });
    const [reviewsObject, setReviewsObject] = useState({
        avgRating: 0,
        userRating: 0,
        userHasReviewText: false
    });
    const [userLists, setUserLists] = useState({
        booksRead: [],
        moviesWatched: [],
        watchLater: [],
        readLater: [],
        favoriteMovies: [],
        favoriteBooks: [],
        favoriteAuthors: [],
        favoriteDirectors: [],
        favoriteGenres: []
    });

    const [storyTags, setStoryTags] = useState([]);
    const [unaddedStoryTags, setUnaddedStoryTags] = useState<Array<{ tagId: string, tagName: string }>>([]);
    const [addedStoryTags, setAddedStoryTags] = useState<Array<{ tagId: string, tagName: string }>>([]);

    const sessionDataString = sessionStorage.getItem('NS-session-data');
    const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
    const userName = sessionDataObj.username;
    const userId = sessionDataObj.userId;
    const history = useHistory();
    let numberSubscriptions = 0;
    const [isLoading, setIsLoading] = useState(false);

    const {
        title,
        image,
        people,
        blurb,
        genres
    } = mediaObject;

    const {
        avgRating,
        userRating,
        userHasReviewText
    } = reviewsObject;

    useEffect(() => {
        numberSubscriptions = numberSubscriptions + 1;
        setIsLoading(true);
        const mediaRouteType = mediaType === MediaType.book ? 'books' : 'movies';
        axios.get(`/${mediaRouteType}/${id}`)
            .then((mediaRes: any) => {
                const mediaData = mediaRes.data;
                if (!mediaData.title) {
                    numberSubscriptions = 0;
                    history.push('/notFound');
                }
                if (numberSubscriptions) {
                    setMediaObject({
                        title: mediaData.title || 'No title',
                        id: id,
                        mediaType: mediaType,
                        image: mediaData.image,
                        people: mediaData.people,
                        genres: mediaData.genres,
                        blurb:  mediaData.blurb || 'No description'
                    });
                    numberSubscriptions = numberSubscriptions - 1;
                    setIsLoading(false);
                }
            })
            .catch((error: any) => {
                console.log('Error getting media', error);
            });
    }, [props, id, mediaType, userId]);

    useEffect(() => {
        numberSubscriptions = numberSubscriptions + 1;
        const mediaRouteType = mediaType === MediaType.book ? 'books' : 'movies';
        axios.get(`/${mediaRouteType}/tags/${id}`)
            .then((mediaRes: any) => {
                const mediaData = mediaRes.data;
                if (numberSubscriptions) {
                    setStoryTags(mediaData.nextStoryTags);
                    numberSubscriptions = numberSubscriptions - 1;
                }
            })
            .catch((error: any) => {
                console.log('Error getting media', error);
            });
    }, [props, id, mediaType, userId]);

    useEffect(() => {
        numberSubscriptions = numberSubscriptions + 1;
        axios.get(`/reviewRatings/${mediaType}/${id}`)
            .then((reviewRatingRes: any) => {
                const reviews = reviewRatingRes.data.reviewArray;
                props.loadAllReviewsAction(reviews);
                const userRatingReviewArr = reviews.filter((r: any) => r.userId === userId);
                const userRating = userRatingReviewArr.length > 0 ? userRatingReviewArr[0].rating : undefined;
                const userHasReviewText = userRatingReviewArr.length > 0 && !!userRatingReviewArr[0].text;
                if (numberSubscriptions) {
                    setReviewsObject({
                        avgRating: reviewRatingRes.data.average,
                        userRating: userRating,
                        userHasReviewText: userHasReviewText
                    });
                    numberSubscriptions = numberSubscriptions - 1;
                }
            })
            .catch((error: any) => {
                console.log('Error getting reviews', error);
            });
    }, [props, id, mediaType, userId]);

    useEffect(() => {
        numberSubscriptions = numberSubscriptions + 1;
        axios.get(`/users/userLists/${userId}`)
            .then((response: any) => {
                const userLists = response.data;
                if (numberSubscriptions) {
                    if (mediaType === MediaType.movie) {
                        if (userLists.watchLater.includes(id)) {
                            setForLater(true);
                        }
                        if (userLists.favoriteMovies.includes(id)) {
                            setFavorite(true);
                        }
                        if (userLists.moviesWatched.includes(id)) {
                            setWatchedOrRead(true);
                        }
                    } else {
                        if (userLists.readLater.includes(id)) {
                            setForLater(true);
                        }
                        if (userLists.favoriteBooks.includes(id)) {
                            setFavorite(true);
                        }
                        if (userLists.booksRead.includes(id)) {
                            setWatchedOrRead(true);
                        }
                    }
                    setUserLists({
                        booksRead: userLists.booksRead,
                        moviesWatched: userLists.moviesWatched,
                        watchLater: userLists.watchLater,
                        readLater: userLists.readLater,
                        favoriteMovies: userLists.favoriteMovies,
                        favoriteBooks: userLists.favoriteBooks,
                        favoriteAuthors: userLists.favoriteAuthors,
                        favoriteDirectors: userLists.favoriteDirectors,
                        favoriteGenres: userLists.favoriteGenres
                    });
                    numberSubscriptions = numberSubscriptions - 1;
                }
            })
            .catch((error: any) => {
                console.log('Error getting media', error);
            });
    }, [userId, mediaType, id]);

    useEffect(() => {
        numberSubscriptions = numberSubscriptions + 1;
        axios.get('/nextStoryTags')
            .then((res: any) => {
                const tagData = res.data;
                const sortedTags = tagData.sort(function(a: any, b: any) {
                    if(a.tagName < b.tagName) { return -1; }
                    if(a.tagName > b.tagName) { return 1; }
                    return 0;
                });
                const storyTagNames = storyTags.map((t: any) => t.tagName);
                const unAdded: Array<{ tagId: string, tagName: string }> = [];
                const added: Array<{ tagId: string, tagName: string }> = [];
                sortedTags.forEach((t: any) => {
                    if (storyTagNames.includes(t.tagName)) {
                        added.push(t);
                    } else unAdded.push(t);
                });
                if (numberSubscriptions) {
                    setUnaddedStoryTags(unAdded);
                    setAddedStoryTags(added);
                    numberSubscriptions = numberSubscriptions - 1;
                }
            })
            .catch((error: any) => {
                console.log('Error getting all story tags', error);
            });
    }, [storyTags]);

    const updateMediaInDB = (tagsArray: any[]) => {
        const mediaRouteType = mediaType === MediaType.book ? 'books' : 'movies';
        axios.put(`/${mediaRouteType}/updateNextStoryTags/${id}`,
            { tagsArray: tagsArray })
            .then((res: any) => {
                console.log('updated tags for media', res.data);
            }).catch((err: any) => {
                console.log('error setting tags for media', err);
            });
    };

    const addOrRemoveCall = (key: string, mediaId: string, action:string) => {
        axios.put(`/users/${key}/${mediaId}/${userId}`, {
            action:action
        }).then((response: any) => {
            console.log(response);
        })
            .catch((error: any) => {
                console.log('Error getting reviews', error);
            });
    };

    const addOrRemoveWatchOrRead = (mediaId: string) => {
        const key = mediaType === MediaType.movie ? 'moviesWatched' : 'booksRead';
        if (watchedOrRead) {
            setWatchedOrRead(false);
            addOrRemoveCall(key, mediaId, 'REMOVE');
        } else {
            setWatchedOrRead(true);
            addOrRemoveCall(key, mediaId, 'ADD');
        }
    };

    const addOrRemoveWatchReadLater = (mediaId: string) => {
        console.log('watch or read later, mediaType: ', mediaType, 'id: ', mediaId);
        const key = mediaType === MediaType.movie ? 'watchLater' : 'readLater';
        if (isForLater) {
            setForLater(false);
            addOrRemoveCall(key, mediaId, 'REMOVE');
        } else {
            setForLater(true);
            addOrRemoveCall(key, mediaId, 'ADD');
        }
    };

    const addOrRemoveFavorites = (mediaId: string) => {
        const key = mediaType === MediaType.movie ? 'favoriteMovies' : 'favoriteBooks';
        if (isFavorite) {
            setFavorite(false);
            addOrRemoveCall(key, mediaId, 'REMOVE');
        } else {
            setFavorite(true);
            addOrRemoveCall(key, mediaId, 'ADD');
        }
    };

    const handleAddTag = (event: any) => {
        console.log(event.target.value);
        const newAddedTags = [...addedStoryTags, event.target.value];
        const filteredDeleteTags = unaddedStoryTags.filter((t: any) => t.tagId !== event.target.value.tagId);
        setAddedStoryTags(newAddedTags);
        setUnaddedStoryTags(filteredDeleteTags);
        updateMediaInDB(newAddedTags);
    };

    const handleDeleteTag = (event: any) => {
        console.log(event.target.value);
        const filteredStoryTags = addedStoryTags.filter((t: any) => t.tagId !== event.target.value.tagId);
        const newDeleteTags = [...unaddedStoryTags, event.target.value];
        setAddedStoryTags(filteredStoryTags);
        setUnaddedStoryTags(newDeleteTags);
        updateMediaInDB(filteredStoryTags);
    };

    return (
        <>
            {isLoading && <LoadingSpinner/>}
            <Container maxWidth='lg'>
                <Grid container direction={'row'}  spacing={5}>
                    <StyledGridItem item sm={3}>
                        {image ? <StyledImage src={image}/> : <ImagePlaceholder>No Image</ImagePlaceholder>}
                        <div>
                            Your rating:
                            <CenteredDiv>
                                <StarRater
                                    userRating={userRating}
                                    readonly={false}
                                    userId={userId}
                                    userName={userName}
                                    userHasReviewText={userHasReviewText}
                                    mediaId={id}
                                    mediaType={mediaType}
                                />
                            </CenteredDiv>
                            <div>
                                <AddToUserButton
                                    toBackendOnClick={() => addOrRemoveWatchOrRead(id)}
                                    isAdded={watchedOrRead}
                                    addLabel={`Add to ${mediaType === MediaType.movie ? 'watched' : 'read'}`}
                                    removeLabel={`Remove from ${mediaType === MediaType.movie ? 'watched' : 'read'}`}
                                />
                            </div>
                            <div>
                                <AddToUserButton
                                    toBackendOnClick={() => addOrRemoveWatchReadLater(id)}
                                    isAdded={isForLater}
                                    addLabel={`Add to ${mediaType === MediaType.movie ? 'watch' : 'read'} later`}
                                    removeLabel={`Remove from ${mediaType === MediaType.movie ? 'watch' : 'read'} later`}
                                />
                            </div>
                            <div>
                                <AddToUserButton
                                    toBackendOnClick={() => addOrRemoveFavorites(id)}
                                    isAdded={isFavorite}
                                    addLabel={'Add favorite'}
                                    removeLabel={'Remove favorite'}
                                />
                            </div>
                        </div>
                    </StyledGridItem>
                    <Grid item sm={6}>
                        <Typography variant='h1'>{title} {mediaType === MediaType.movie ? '(Movie)' : '(Book)'}</Typography>
                        <Box fontStyle='italic'>
                            <Typography variant='subtitle1' gutterBottom>
                                {people?.join(', ')}
                                {people && people[0] !== '' && <FavoritesDropDown
                                    allOptions={people}
                                    favoriteOptions={mediaType === MediaType.movie ? userLists.favoriteDirectors : userLists.favoriteAuthors}
                                    userId={userId}
                                    favKey={mediaType === MediaType.movie ? 'favoriteDirectors' : 'favoriteAuthors'}
                                />}
                            </Typography>
                        </Box>
                        <VerticallyCenteredDiv>
                            <Typography variant='subtitle2' >Avg members rating: </Typography>
                            <StarRater readOnlyRating={avgRating} readonly />
                        </VerticallyCenteredDiv>
                        <Interweave content={blurb} />
                    </Grid>
                    <Grid item sm={3}>
                        Genres:
                        <TagsSection tags={genres} singleQueryType={SingleQueryType.genre}/>
                        <div>
                            {genres.length > 0 && <FavoritesDropDown
                                allOptions={genres}
                                favoriteOptions={userLists.favoriteGenres}
                                userId={userId}
                                favKey={'favoriteGenres'}
                            />}
                        </div>
                        Tags:
                        <TagsSection tagObjects={addedStoryTags} singleQueryType={SingleQueryType.tag}/>
                        {unaddedStoryTags.length > 0 && <StyledFormControl variant='outlined'>
                            <InputLabel id='demo-simple-select-outlined-label'>Add a tag</InputLabel>
                            <Select
                                labelId='add-tag-label'
                                id='add-tag'
                                value={''}
                                onChange={handleAddTag}
                                label='Add a tag'
                            >
                                {unaddedStoryTags.map((t: any, index) => {
                                    return <MenuItem key={`${index}_add`} value={t}>{t.tagName}</MenuItem>;
                                })}
                            </Select>
                        </StyledFormControl>}
                        {addedStoryTags.length > 0 && <StyledFormControl variant='outlined'>
                            <InputLabel id='demo-simple-select-outlined-label'>Delete a tag</InputLabel>
                            <Select
                                labelId='delete-tag-label'
                                id='delete-tag'
                                value={''}
                                onChange={handleDeleteTag}
                                label='Delete a tag'
                            >
                                {addedStoryTags.map((t: any, index) => {
                                    return <MenuItem key={`${index}_delete`} value={t}>{t.tagName}</MenuItem>;
                                })}
                            </Select>
                        </StyledFormControl>}
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='md'>
                <ReviewList
                    mediaId={id}
                    mediaType={mediaType}
                    userName={userName}
                    userId={userId}
                    userRating={userRating}
                />
            </Container>
        </>
    );
};

export default connect(null, { loadAllReviewsAction })(MediaPage);
