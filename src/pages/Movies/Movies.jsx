import React, { useEffect } from 'react';
import css from './Movies.module.css';
import { useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'components/fetchMovie';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const MoviesPage = () => {
  const [searchMoviesList, setSearchMoviesList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.currentTarget.elements.searchWord.value;
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
        setSearchMoviesList(data.results);
      } else {
        Notiflix.Notify.info(
          'Nothing found for your search! Please enter another query!',
          {
            position: 'center-center',
            timeout: 5000,
          }
        );
        //alert('Nothing found for your search! Please enter another query!');
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
      <header className={css.searchbar}>
        <form className={css.searchbar_form} onSubmit={handleSubmit}>
          <input
            name="searchWord"
            className={css.searchbar_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search movie"
          />
          <button type="submit" className={css.searchbar_btn}>
            <span className={css.button_label}>Search</span>
          </button>
        </form>
      </header>

      {isLoading && <Loader />}
      <ul className={css.mov_list}>
        {searchMoviesList !== null &&
          searchMoviesList.map(({ title, id }) => (
            <li key={id}>
              <NavLink
                className={css.mov_list_item}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
