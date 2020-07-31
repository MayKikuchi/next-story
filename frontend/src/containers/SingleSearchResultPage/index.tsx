import React, {useEffect, useMemo, useState} from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {SingleQueryType} from '../../constants/dataTypes';
import SearchResultsInfiniteScroll from '../../components/SearchResultsInfiniteScroll';

const getQueryTypeAndQuery = (locationSearch: string) => {
    const trimmedUri = locationSearch.substr(1);
    const [singleQueryTypeUri, queryUri] = trimmedUri.split('&');
    const queryType = singleQueryTypeUri.split('=')[1];
    const query = queryUri.split('=')[1];
    return [queryType, query];
};

const SingleSearchResultPage: React.FC = (props: any) => {
    const searchUri = decodeURI(props.location.search);
    const [queryType, query] = getQueryTypeAndQuery(searchUri);
    const increaseIndexBy = 5;

    const [queryStartIndex, setQueryStartIndex] = useState(0);

    const [movieResults, setMovieResults] = useState<Array<any>>([]);
    const [bookResults, setBookResults] = useState<Array<any>>([]);

    const [allResults, setAllResults] = useState<Array<any>>([]);
    const [filterState, setFilterState] = useState<'all' | 'books' | 'movies'>('all');

    const [hasMoreMovieResults, setHasMoreMovieResults] = useState<boolean>(true);
    const [hasMoreBookResults, setHasMoreBookResults] = useState<boolean>(true);

    async function getMediaForTag() {
        let mongoMovies = [];
        let mongoBooks = [];
        try {
            const mongoMovieRes = await axios.get(`/movies/withTag/${query}`);
            mongoMovies = mongoMovieRes.data;
        } catch (e) {
            console.log('error fetching movies from mongo for tag', e);
        }
        try {
            const mongoBookRes = await axios.get(`/books/withTag/${query}`);
            mongoBooks = mongoBookRes.data;
        } catch (e) {
            console.log('error fetching books from mongo for tag', e);
        }
        return [mongoMovies, mongoBooks];
    }

    async function getFromThirdParty(mongoMovies: any[], mongoBooks: any[]) {
        const bookData: any[] = [];
        const movieData: any[] = [];
        const maxEndIndex = queryStartIndex + increaseIndexBy;
        const movieEndIndex = mongoMovies.length >= maxEndIndex ? maxEndIndex : mongoMovies.length;
        const bookEndIndex = mongoBooks.length >= maxEndIndex ? maxEndIndex : mongoBooks.length;
        for(let i = queryStartIndex; i < movieEndIndex; i++){
            const movieId = mongoMovies[i].movieId;
            try {
                const movieRes = await axios.get(`/thirdPartyMovieApi/tmdbMovies/searchOneById/${movieId}`);
                let movieWithNextStoryTags = movieRes.data;
                const thisMongoMovieMaybe = mongoMovies.filter((m) => m.movieId === movieId);
                const thisMongoMovie = thisMongoMovieMaybe.length > 0 && thisMongoMovieMaybe[0];
                if (thisMongoMovie) {
                    movieWithNextStoryTags.nextStoryTags = thisMongoMovie.nextStoryTags;
                } else {
                    movieWithNextStoryTags.nextStoryTags = [];
                }
                movieData.push(movieWithNextStoryTags);
                setAllResults((allResults) => [...allResults, movieWithNextStoryTags]);
                setMovieResults((movieResults) => [...movieResults, movieWithNextStoryTags]);
            } catch (e) {
                console.log(e);
            }
        }
        for(let i = queryStartIndex; i < bookEndIndex; i++){
            const bookId = mongoBooks[i].bookId;
            try {
                const bookRes = await axios.get(`/thirdPartyBookApi/googleBooks/searchOneById/${bookId}`);
                let bookWithNextStoryTags = bookRes.data;
                const thisMongoBookMaybe = mongoBooks.filter((b) => b.bookId === bookId);
                const thisMongoBook = thisMongoBookMaybe.length > 0 && thisMongoBookMaybe[0];
                if (thisMongoBook) {
                    bookWithNextStoryTags.nextStoryTags = thisMongoBook.nextStoryTags;
                } else {
                    bookWithNextStoryTags.nextStoryTags = [];
                }
                bookData.push(bookWithNextStoryTags);
                setAllResults((allResults) => [...allResults, bookWithNextStoryTags]);
                setBookResults((bookResults) => [...bookResults, bookWithNextStoryTags]);
            } catch (e) {
                console.log(e);
            }
        }
        if (movieData.length === 0) {
            setHasMoreMovieResults(false);
        }
        if (bookData.length === 0) {
            setHasMoreBookResults(false);
        }
        return [movieData, bookData];
    }

    useEffect(() => {
        switch (queryType) {
            case SingleQueryType.tag:
                getMediaForTag().then((res) => {
                    const [mongoMovies, mongoBooks] = res;
                    console.log('mongo movies and books:', res);
                    getFromThirdParty(mongoMovies, mongoBooks).then((res) => {
                        console.log(res);
                        const [movieData, bookData] = res;
                        setMovieResults(movieData);
                        setBookResults(bookData);
                    }).catch((e) => console.log(e));
                }).catch((e) => console.log(e));
                break;
            case SingleQueryType.searchBar:
            case SingleQueryType.genre:
            case SingleQueryType.person:
                axios.get(`/thirdPartyMovieApi/tmdbMovies/singleQuery/${queryType}/${query}/${queryStartIndex}/${increaseIndexBy}`)
                    .then((res: any) => {
                        const movies = res.data;
                        console.log(movies);
                        if (movies.length === 0) {
                            setHasMoreMovieResults(false);
                        } else {
                            setMovieResults(movies);
                        }
                        axios.get(`/thirdPartyBookApi/googleBooks/singleQuery/${queryType}/${query}/${queryStartIndex}/${increaseIndexBy}`)
                            .then((res: any) => {
                                const books = res.data;
                                console.log(books);
                                if (books.length === 0) {
                                    setHasMoreBookResults(false);
                                } else {
                                    setBookResults(books);
                                    setAllResults((allResults) => [...allResults, ...movies, ...books]);
                                }
                            })
                            .catch((error: any) => {
                                console.log('Error getting third party books', error);
                            });
                    })
                    .catch((error: any) => {
                        console.log('Error getting third party movies', error);
                    });
                break;
            default:
                break;
        }
    }, [queryType, query, queryStartIndex]);

    const resultsToDisplay = useMemo(() => {
        switch(filterState) {
            case 'movies':
                return movieResults;
            case 'books':
                return bookResults;
            case 'all':
            default:
                return allResults;
        }
    }, [filterState, movieResults, bookResults, allResults]);

    const doNext = () => {
        console.log('set next');
        setQueryStartIndex(queryStartIndex + increaseIndexBy);
    };

    return (
        <Container maxWidth='md'>
            <Typography variant='h1'>Search Results</Typography>
            <br/>
            <SearchResultsInfiniteScroll
                resultsToDisplay={resultsToDisplay}
                hasMore={hasMoreMovieResults || hasMoreBookResults}
                doNext={doNext}
            />
        </Container>
    );
};

export default SingleSearchResultPage;
