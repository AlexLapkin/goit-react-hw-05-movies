import { fetchMoviesTrend } from 'components/fetchMovie';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [movieList, setMovieList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const listTrendMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await fetchMoviesTrend();
      if (data.results) {
        setIsLoading(false);
        setMovieList(data.results);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    listTrendMovies();
  }, []);

  return (
    <div>
      <h2 className={css.home_title}>Trending today</h2>
      {isLoading && <Loader />}
      <ul className={css.mov_ul_title}>
        {movieList !== null &&
          movieList.map(({ id, title, name }) => (
            <li key={id}>
              <NavLink
                className={css.mov_title}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title || name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
