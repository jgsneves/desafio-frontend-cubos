import React, { useState, ChangeEvent, useEffect } from 'react';
import {Link} from 'react-router-dom';
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
import api from '../../service/api';

interface Imovie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: [number];
    title: string;
    vote_average: number;
    overview: string;
    release_date: number;    
}

const Home = () => {
    const [dataToSearch, setDataToSearch] = useState<string>('');
    const [arrayOfMovies, setArrayOfMovies] = useState<Imovie[]>([]);
    const baseUrlOfPosters = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;
        setDataToSearch(value);
    }

    useEffect(() => {
        api.get(dataToSearch).then(response => {
            const moviesQuery = response.data.results;
            setArrayOfMovies(moviesQuery);
        });
    }, [dataToSearch]);

    return (
        <>
            <Wrapper>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Header>
                        <h1>Movies</h1>
                    </Header>
                </Link>

                <SearchInput 
                    placeholder="Busque um filme por nome ou gênero..." 
                    onChange={handleInputChange}
                />

                <Link to='/movies' style={{textDecoration: 'none'}}>
                    {arrayOfMovies.map(movie => (
                        <SingleMovieContent key={movie.id}>
                            <MoviePoster src={`${baseUrlOfPosters}${movie.poster_path}`}/>

                            <Details>
                                <Title>
                                    <h2>{movie.title}</h2>
                                </Title>

                                <Score>{(movie.vote_average) * 10}%</Score>

                                <DateRelease>{movie.release_date}</DateRelease>

                                <Sinopse>{movie.overview}</Sinopse>

                                <GenreContainer>
                                    {movie.genre_ids.map(genre => (
                                        <Genre>{genre}</Genre>
                                    ))}
                                </GenreContainer>
                            </Details>
                        </SingleMovieContent>
                    ))}
                </Link>

            </Wrapper>
        </>
    );
}

export default Home;