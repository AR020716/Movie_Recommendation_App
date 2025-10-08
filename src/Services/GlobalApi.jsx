import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3/movie';
const discoverMovieURL = 'https://api.themoviedb.org/3/discover/movie';
const api_key = import.meta.env.VITE_TMDB_API_KEY;

const getPopularMovies = () => {
    return axios.get(`${movieBaseURL}/popular?api_key=${api_key}`);
};

const getMoviesByGenreID = (id) => {
    return axios.get(`${discoverMovieURL}?api_key=${api_key}&with_genres=${id}`);
};

const getHighlyRatedMovies = () => {
    return axios.get(`${discoverMovieURL}?api_key=${api_key}&vote_average.gte=7&sort_by=vote_average.desc`);
};

export default {
    getPopularMovies,
    getMoviesByGenreID,
    getHighlyRatedMovies
};

