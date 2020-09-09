import React from 'react';
import {
    Wrapper,
    Header,
    SearchInput,
    SingleMovieContent,
    MoviePoster,
    Details,
    Title,
    Score,
    DateRelease,
    Sinopse,
    GenreContainer,
    Genre,
} from './styles';

const Home = () => {
    return (
        <>
            <Wrapper>
                <Header>
                    <h1>Movies</h1>
                </Header>

                <SearchInput placeholder="Busque um filme por nome ou gênero..."/>

                <SingleMovieContent>
                    <MoviePoster src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/yB3AkkGMFplGlnPqQZ38W7bdD10.jpg" />
                    <Details>
                        <Title>
                            <h2>Thor: Ragnarok</h2>
                        </Title>
                        <Score>75%</Score>
                        <DateRelease>25/10/2017</DateRelease>
                        <Sinopse>
                            Sed arcu metus sagittis proin aenean vulputate eu rutrum, rhoncus id congue ipsum lorem scelerisque facilisis, lacinia adipiscing quam lacinia aliquet quis hac. pulvinar sed per et curae aliquam, donec vestibulum nostra tellus vitae, cras sollicitudin ultricies venenatis. suscipit lorem tincidunt vel velit nibh duis lacinia interdum turpis, mollis nibh aliquet conubia ut aptent enim orci, litora lacus iaculis ornare luctus vel praesent velit. at pellentesque justo phasellus nec tincidunt viverra per, donec ligula aliquam vel torquent in phasellus elit, metus elementum imperdiet tortor quis consectetur. proin ut lacinia donec ipsum integer porta faucibus, suscipit enim porta netus mauris lacus. 
                        </Sinopse>
                        <GenreContainer>
                            <Genre>Ação</Genre>
                            <Genre>Aventura</Genre>
                        </GenreContainer>
                    </Details>
                </SingleMovieContent>
            </Wrapper>
        </>
    );
}

export default Home;