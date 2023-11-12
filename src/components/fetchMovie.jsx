import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'bbbeb622f5d3f197e85f3129c81f41c1',
};

// Популярні фільми дня
export const fetchMoviesTrend = async () => {
  return await axios.get(`/trending/all/day?language=en-US`);
};

// Детальна інформація про фільм
export const fetchMovieDetails = async movie_id => {
  return await axios.get(`/movie/${movie_id}`);
};

// Пошук фільму за назвою
export const fetchMoviesSearch = async query => {
  return await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
};

// Інформація про акторів
export const fetchMovieCredits = async movie_id => {
  return await axios.get(`/movie/${movie_id}/credits`);
};

// Інформація про відгуки
export const fetchMovieReviews = async movie_id => {
  return await axios.get(`/movie/${movie_id}/reviews`);
};
