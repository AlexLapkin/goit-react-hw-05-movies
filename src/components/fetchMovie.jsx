import axios from 'axios';

//const fetchImage = async (searchWord, page) => {
// const API_KEY = 'bbbeb622f5d3f197e85f3129c81f41c1';
// const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'bbbeb622f5d3f197e85f3129c81f41c1',
};

// Популярные фильмы дня
export const fetchMoviesTrend = async () => {
  return await axios.get(`/trending/all/day?language=en-US`);
};

// Детальная информация о фильме
export const fetchMovieDetails = async movie_id => {
  return await axios.get(`/movie/${movie_id}`);
};

// Поиск фильма по названию
export const fetchMoviesSearch = async query => {
  return await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
};

// Информация о актерах
export const fetchMovieCredits = async movie_id => {
  return await axios.get(`/movie/${movie_id}/credits`);
};

// Информация о отзывах
export const fetchMovieReviews = async movie_id => {
  return await axios.get(`/movie/${movie_id}/reviews`);
};

//   /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
//   /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
//   /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
//   /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
//   /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

//--------------------------------------------------------------------------------//

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const API_KEY = '3373af60a4ee1fe7510a1a61c11380e1';

//  getTrendingMovies
//  const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

// getMovieByQuery
//  const { data } = await axios.get(
//    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`

// getMovieById
//  const { data } = await axios.get(
//    `movie/${movieId}?api_key=${API_KEY}&language=en-US`

// getCastMovie
//  const { data } = await axios.get(
//    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`

// getReviewsMovie
//  const { data } = await axios.get(
//    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`

//BASE_URL = 'https://api.themoviedb.org/3/'
