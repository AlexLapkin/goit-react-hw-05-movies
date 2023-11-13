import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'components/fetchMovie';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MovieList';

const MoviesPage = () => {
  const [movieList, setMovieList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');

  const formSubmit = value => {
    setSearchParams({ query: value });
  };

  const searchMovieQuery = async queryValue => {
    if (!queryValue) {
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await fetchMoviesSearch(queryValue);
      setIsLoading(false);
      if (data.results.length > 0) {
        setMovieList(data.results);
      } else {
        Notiflix.Notify.info(
          'Nothing found for your search! Please enter another query!',
          {
            position: 'center-center',
            timeout: 5000,
          }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    searchMovieQuery(queryValue);
  }, [queryValue]);

  return (
    <div>
      <SearchBar onSubmit={formSubmit} />
      {isLoading && <Loader />}
      <MovieList movieList={movieList} />
    </div>
  );
};

export default MoviesPage;
