import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=fc86ffd2138d748994445f1d5686e213&language=pt-br&query='
});

export default api;