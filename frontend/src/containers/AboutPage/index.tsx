import React from 'react';
import Container from '../Container';
import {Grid, Typography} from "@material-ui/core";
import styled from "styled-components";
import BookAndMovie from "../../assets/BookAndMovie.png";

// height calculated to take into account the margins on the Container component
const CenteredDiv = styled.div`
    width: 100%;
    height: calc(100vh - 170px);
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const AboutPage: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <CenteredDiv>
                <Grid container direction={'row'}>
                    <Grid item md={2}>
                        <img src={BookAndMovie} style={{ width: '100px', marginBottom: '20px' }}/>
                    </Grid>
                    <Grid item md={10}>
                        <Typography gutterBottom variant={'h4'}>
                            A website that allows users to search books and movies, get recommendations,
                            and add them to personal lists.
                        </Typography>
                        <Typography gutterBottom variant={'h4'}>
                            Also add reviews and ratings and add our app specific tags.
                        </Typography>
                        <Typography gutterBottom variant={'h4'}>
                            Sign up or login to get started!
                        </Typography>
                    </Grid>
                </Grid>
            </CenteredDiv>
        </Container>
    );
};

export default AboutPage;
