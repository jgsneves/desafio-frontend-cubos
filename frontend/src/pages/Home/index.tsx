import React, { useState, ChangeEvent, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {
    Wrapper,
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
import Header from '../../components/header/index';

const Home = () => {
    const [dataToSearch, setDataToSearch] = useState<string>('');
    const [arrayOfMovies, setArrayOfMovies] = useState<Imovie[]>([]);
    const baseUrlOfPosters = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    const baseURlofSearch = 'search/movie?api_key=fc86ffd2138d748994445f1d5686e213&language=pt-br&query=';

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;
        setDataToSearch(value);
    }

    useEffect(() => {
        api.get(`${baseURlofSearch+dataToSearch}`).then(response => {
            const moviesQuery = response.data.results;
            setArrayOfMovies(moviesQuery);
        });
    }, [dataToSearch]);

    return (
        <>
            <Wrapper>
                <Header />

                <SearchInput 
                    placeholder="Busque um filme por nome ou gênero..." 
                    onChange={handleInputChange}
                />

                {arrayOfMovies.map(movie => (
                    <Link 
                        to={`/movies/${movie.id}`} 
                        style={{textDecoration: 'none'}} 
                        key={movie.id}
                    >
                        <SingleMovieContent>
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
                    </Link>
                ))}

            </Wrapper>
        </>
    );
}

export default Home;