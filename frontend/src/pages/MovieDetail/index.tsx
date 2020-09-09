import React from 'react';
import { 
    Wrapper,
    Header,
    MovieContainer,
    TitleContainer,
    Title,
    ReleaseDate,
    Content,
    SinopseTitle,
    Sinopse,
    InfoTitle,
    DetailsContainer,
    Detail
} from './styles';

const MovieDetail = () => {
    return (
        <>
        <Wrapper>
            <Header>
                <h1>Movies</h1>
            </Header>

            <MovieContainer>
                <TitleContainer>
                    <Title>Thor: Ragnarok</Title>
                    <ReleaseDate>25/10/2017</ReleaseDate>
                </TitleContainer>
                <Content>
                    <SinopseTitle>Sinopse</SinopseTitle>
                    <Sinopse>Texto grande sinopse</Sinopse>
                    <InfoTitle>Informações</InfoTitle>
                    <DetailsContainer>
                        <Detail>
                            <h4>Situação</h4>
                            <p>Lançado</p>
                        </Detail>
                    </DetailsContainer>
                </Content>
            </MovieContainer>
        </Wrapper>
        </>
    );
}

export default MovieDetail;