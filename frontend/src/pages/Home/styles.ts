import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const SearchInput = styled.input`
    border: 0;
    margin-top: 32px;
	margin-bottom: 32px;
	padding: 12px 32px;
	border-radius: 200px 200px;
    background-color: #ebebeb;
    width: 50vw;
    max-width: 600px;
	outline: 0;
    font-family: 'Lato', sans-serif;
    
`;

export const SingleMovieContent = styled.div`
    display: flex;
    background-color: #ebebeb;
    width: 50vw;
    margin-bottom: 20px;
  
    ${media.lessThan("large")`
        width: 100vw;
    `}
`;

export const MoviePoster = styled.img`
    width: 15vw;

    ${media.lessThan("small")`
        display: none;
    `}
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
	text-align: left;
	font-family: 'Abel', sans-serif;
	color: #00e8e4;
	background-color: #116193;
	padding: 0px 0px 0px 90px;
    margin: 0px;
    width: 35vw;

    ${media.lessThan("large")`
        width: 100%;
    `}
`;

export const Score = styled.p`
	font-family: 'Abel', sans-serif;
	font-size: 20px;
	text-align: center;
	color: #00e8e4;
	background-color: #116193;
	padding: 0px;
	margin: 0px;
	border: 4px solid #00e8e4;
	border-radius: 200px 200px;
	width: 50px;
	height: 50px;
	position: relative;
	top: -25px;
	left: 20px;
	z-index: 2;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DateRelease = styled.p`
	font-family: 'Lato', sans-serif;
	color: #cacaca;
	background-color: #ebebeb;
	padding: 0px 0px 10px 90px;
	margin: 0px;
	position: relative;
	top: -50px;
`;

export const Sinopse = styled.p`
	font-family: 'Lato', sans-serif;
	color: rgb(73, 73, 73);
	background-color: #ebebeb;
	border: 20px;
	margin: 0px;
	padding: 0px 0px 10px 25px;
	position: relative;
    top: -40px;
    overflow: auto;
`;

export const GenreContainer = styled.div`
    display: flex;
    padding-left: 20px;
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