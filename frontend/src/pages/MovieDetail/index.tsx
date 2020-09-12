import React, { useEffect, useState } from 'react';
import { 
    LoadingSpinner,
    Wrapper,
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
import Header from '../../components/header/index';
import {RouteComponentProps} from 'react-router-dom';
import api from '../../service/api';

type IProps = RouteComponentProps<{id: string}>;

const MovieDetail = (props: IProps) => {
    const {id} = props.match.params;
    const [chosenMovie, setChosenMovie] = useState<Imovie>();
    const apiKey = 'fc86ffd2138d748994445f1d5686e213';
    const baseUrlOfPosters = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    const languageParam = 'language=pt-br';

    useEffect(() => {
        api.get(`/movie/${id}?api_key=${apiKey}&${languageParam}`).then(response => {
            const {data} = response;
            setChosenMovie(data);
        })
    }, [id]);

    if (!chosenMovie) {
        return <LoadingSpinner />
    }
    
    return (
        <>
        <Wrapper>

            <Header />

            <MovieContainer>

                <TitleContainer>
                    <Title>{chosenMovie?.title}</Title>
                    <ReleaseDate>{chosenMovie?.release_date}</ReleaseDate>
                </TitleContainer>
                
                <Main>
                    <Content>
                        <SinopseTitle>Sinopse</SinopseTitle>
                        
                        <Sinopse>
                            {chosenMovie?.overview}
                        </Sinopse>
                        
                        <InfoTitle>Informações</InfoTitle>
                        
                        <DetailsContainer>
                            <Detail>
                                <h4>Situação</h4>
                                <p>{chosenMovie?.status}</p>
                            </Detail>
                            <Detail>
                                <h4>Idioma</h4>
                                {chosenMovie?.spoken_languages.map(lang => (
                                    <p>{lang.name}</p>
                                ))}
                            </Detail>
                            <Detail>
                                <h4>Duração</h4>
                                <p>{chosenMovie?.runtime} minutos</p>
                            </Detail>
                            <Detail>
                                <h4>Orçamento</h4>
                                <p>US$ {chosenMovie?.budget}</p>
                            </Detail>
                            <Detail>
                                <h4>Receita</h4>
                                <p>US$ {chosenMovie?.revenue}</p>
                            </Detail>
                            <Detail>
                                <h4>Lucro</h4>
                                <p>US$ {chosenMovie.revenue - chosenMovie.budget}</p>
                            </Detail>
                        </DetailsContainer>
                        
                        <GenreContainer>
                            <Genre>ação</Genre>
                            <Genre>aventura</Genre>
                        </GenreContainer>
                        
                        <ScoreContainer>
                            <Score>{chosenMovie?.vote_average}</Score>
                        </ScoreContainer>
                    </Content>
                
                    <MoviePoster src={baseUrlOfPosters + chosenMovie.poster_path} />
                </Main>
            </MovieContainer>
        </Wrapper>
        </>
    );
}

export default MovieDetail;