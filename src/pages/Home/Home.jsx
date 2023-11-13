import { fetchMoviesTrend } from 'components/fetchMovie';
import React, { useEffect } from 'react';
import { useState } from 'react';
import css from './Home.module.css';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movieList, setMovieList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const listTrendMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await fetchMoviesTrend();
      if (data.results) {
        setIsLoading(false);
        setMovieList(data.results);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    listTrendMovies();
  }, []);

  return (
    <div>
      <h2 className={css.home_title}>Trending today</h2>
      {isLoading && <Loader />}
      <MovieList movieList={movieList} />
    </div>
  );
};

export default HomePage;
