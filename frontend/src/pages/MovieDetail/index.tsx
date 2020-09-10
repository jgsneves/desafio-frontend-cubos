import React from 'react';
import { 
    Wrapper,
    Header,
    MovieContainer,
    TitleContainer,
    Title,
    ReleaseDate,
    Main,
    Content,
    SinopseTitle,
    Sinopse,
    InfoTitle,
    DetailsContainer,
    Detail,
    GenreContainer,
    Genre,
    ScoreContainer,
    Score,
    MoviePoster
} from './styles';
import { Link } from 'react-router-dom';

const MovieDetail = () => {
    return (
        <>
        <Wrapper>

            <Link to='/' style={{textDecoration: 'none'}}>
                <Header>
                    <h1>Movies</h1>
                </Header>
            </Link>

            <MovieContainer>

                <TitleContainer>
                    <Title>Thor: Ragnarok</Title>
                    <ReleaseDate>25/10/2017</ReleaseDate>
                </TitleContainer>
                
                <Main>
                    <Content>
                        <SinopseTitle>Sinopse</SinopseTitle>
                        
                        <Sinopse>
                            Sed arcu metus sagittis proin aenean vulputate eu rutrum, rhoncus id congue ipsum lorem scelerisque facilisis, lacinia adipiscing quam lacinia aliquet quis hac. pulvinar sed per et curae aliquam, donec vestibulum nostra tellus vitae, cras sollicitudin ultricies venenatis. suscipit lorem tincidunt vel velit nibh duis lacinia interdum turpis, mollis nibh aliquet conubia ut aptent enim orci, litora lacus iaculis ornare luctus vel praesent velit. at pellentesque justo phasellus nec tincidunt viverra per, donec ligula aliquam vel torquent in phasellus elit, metus elementum imperdiet tortor quis consectetur. proin ut lacinia donec ipsum integer porta faucibus, suscipit enim porta netus mauris lacus. 
                        </Sinopse>
                        
                        <InfoTitle>Informações</InfoTitle>
                        
                        <DetailsContainer>
                            <Detail>
                                <h4>Situação</h4>
                                <p>Lançado</p>
                            </Detail>
                            <Detail>
                                <h4>Situação</h4>
                                <p>Lançado</p>
                            </Detail>
                        </DetailsContainer>
                        
                        <GenreContainer>
                            <Genre>ação</Genre>
                            <Genre>aventura</Genre>
                        </GenreContainer>
                        
                        <ScoreContainer>
                            <Score>75%</Score>
                        </ScoreContainer>
                    </Content>
                
                    <MoviePoster src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yB3AkkGMFplGlnPqQZ38W7bdD10.jpg" />
                </Main>
            </MovieContainer>
        </Wrapper>
        </>
    );
}

export default MovieDetail;