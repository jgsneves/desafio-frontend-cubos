import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Abel', sans-serif;
`;

export const Header = styled.header`
    display: flex;
    background-color: #116193;
    width: 100vw;
    height: 80px;
    justify-content: center;
    align-items: center;

    h1 {
        color: #02D3D7;
    }
`;

export const MovieContainer = styled.div`
    background-color: #F2F2F2;
    margin-top: 50px;
    width: 80vw;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #E6E6E6;
`;

export const Title = styled.h2`
    color: #116193;
    padding: 10px;
`;

export const ReleaseDate = styled.p`
    padding: 10px;
`;

export const Main = styled.div`
    display: flex;
`;

export const Content = styled.div``;

export const SinopseTitle = styled.h3`
    color: #048DCE;
    border-bottom-style: solid;
    border-bottom-color: #00E8E4;
    margin: 10px;
`;

export const Sinopse = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    margin: 10px;
`;

export const InfoTitle = styled.h3`
    color: #048DCE;
    border-bottom-style: solid;
    border-bottom-color: #00E8E4;
    margin: 10px;
`;

export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    h4 {
        color: #048DCE;
    }
    p {
        font-family: 'Lato', sans-serif;
        font-size: 12px;
    }
`;

export const GenreContainer = styled.div`
    display: flex;
    padding: 5px;
`;

export const Genre = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border: 1px;
    margin: 5px;
    border-color: #116193;
    border-style: solid;
    border-radius: 20px;
    width: 80px;
    color: #116193;
    font-family: 'Abel', sans-serif;
`;

export const ScoreContainer = styled.div`
    height: 33.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Score = styled.p`
	font-size: 70px;
	text-align: center;
	color: #00e8e4;
	background-color: #116193;
	padding: 0px;
	margin: 0px;
	border: 4px solid #00e8e4;
	border-radius: 200px 200px;
	width: 200px;
	height: 200px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MoviePoster = styled.img`
    width: 20vw;
`;