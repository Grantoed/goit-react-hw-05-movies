import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5209091f5cf6de6388913c98ca41361e';

export const getTrendingMovies = async () => {
  const trendingMovies = await axios
    .get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
    .then(r => r.data.results);
  return trendingMovies;
};

export const searchMovies = async searchQuery => {
  const searchResult = await axios
    .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
    .then(r => r.data.results);
  return searchResult;
};

export const getMovieDetails = async movieId => {
  const movieDetails = await axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(r => r);
  return movieDetails;
};

export const getCastInfo = async movieId => {
  const castInfo = await axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(r => r.data.cast);
  return castInfo;
};

export const getReviews = async movieId => {
  const reviews = await axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(r => r.data.results);
  return reviews;
};
