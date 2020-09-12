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
    PageNumbersContainer,
    Page,
    PlusCircleIcon
} from './styles';
import api from '../../service/api';
import Header from '../../components/header/index';

const Home = () => {
    const [dataToSearch, setDataToSearch] = useState<string>('');
    const [arrayOfMovies, setArrayOfMovies] = useState<Imovie[]>([]);
    const [arrayOfGenres, setArrayOfGenres] = useState<IGenre[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageOfApi, setPageOfApi] = useState<number>(1);
    const moviesPerPage = 5;
    const baseUrlOfPosters = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    const baseUrlofSearch = 'search/movie?api_key=fc86ffd2138d748994445f1d5686e213&language=pt-br&query=';
    const baseUrlOfGenre = 'genre/movie/list?api_key=fc86ffd2138d748994445f1d5686e213&language=pt-br';
    const pageParam = '&page='

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;
        setDataToSearch(value);
    }

    useEffect(() => {
        api.get(`${baseUrlofSearch+dataToSearch+pageParam+pageOfApi}`).then(response => {
            const moviesQuery = response.data.results;
            const queryPerPage = moviesQuery.slice(
                currentPage*moviesPerPage, 
                currentPage*moviesPerPage+moviesPerPage
            )
            setArrayOfMovies(queryPerPage);
        });
    }, [currentPage, dataToSearch, pageOfApi]);

    useEffect(() => {
        api.get(baseUrlOfGenre).then(response => {
            const {data} = response;
            setArrayOfGenres(data);
        })
    }, []);

    console.log(arrayOfGenres);

    return (
        <>
            <Wrapper>
                <Header />

                <SearchInput 
                    placeholder="Busque um filme por nome ou gênero..." 
                    onChange={handleInputChange}
                />

                <h3>Página atual: {currentPage + 1}</h3>

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
                                    <Genre>fazer a função que percorre duas arrays</Genre>
                                </GenreContainer>
                            </Details>
                        </SingleMovieContent>
                    </Link>
                ))}

                <PageNumbersContainer>
                    <Page onClick={() => {
                        setCurrentPage(0);
                        window.scrollTo(0,0);
                    }}>1</Page>
                    <Page onClick={() => {
                        setCurrentPage(1);
                        window.scrollTo(0,0);
                    }}>2</Page>
                    <Page onClick={() => {
                        setCurrentPage(2);
                        window.scrollTo(0,0);
                    }}>3</Page>
                    <Page onClick={() => {
                        setCurrentPage(3);
                        window.scrollTo(0,0);
                    }}>4</Page>
                    <PlusCircleIcon 
                        color="#000000" 
                        onClick={() => {
                            setPageOfApi(pageOfApi + 1);
                            setCurrentPage(0);
                            window.scrollTo(0,0);
                        }}
                    />
                </PageNumbersContainer>

            </Wrapper>
        </>
    );
}

export default Home;