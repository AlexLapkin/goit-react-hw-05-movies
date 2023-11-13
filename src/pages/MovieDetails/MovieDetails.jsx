import { fetchMovieDetails } from 'components/fetchMovie';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import Notiflix from 'notiflix';

let activeClassName = {
  color: 'white',
  backgroundColor: 'blue',
};

const MovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const getDetailsMovie = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await fetchMovieDetails(movieId);
      if (data) {
        setIsLoading(false);
        setDetailsMovie(data);
      }
    } catch (error) {
      //alert('Error 404 - Information for this movie not found!');
      Notiflix.Notify.failure('Information for this movie not found!', {
        position: 'center-center',
        timeout: 3000,
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDetailsMovie(movieId);
  }, [movieId]);

  const { title, overview, genres, poster_path, release_date, popularity } =
    detailsMovie ?? {};

  return (
    <div>
      {isLoading && <Loader />}
      {detailsMovie !== null && (
        <div>
          <div className={css.cont_movie}>
            <div className={css.cont_movie_add}>
              <NavLink className={css.cont_link} to={backLinkHref}>
                Go back
              </NavLink>
              <img
                className={css.mov_img}
                src={'https://www.themoviedb.org/t/p/w300' + poster_path}
                alt="Poster"
              ></img>
            </div>
            <div className={css.cont_movie_overview}>
              <h2>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p>Popularity: {popularity}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </div>
          </div>

          <h3 className={css.cont_add_title}>Additional information</h3>
          <ul className={css.cont_add}>
            <li className={css.cont_add_link}>
              <NavLink
                className={css.nav_link}
                to="cast"
                state={location.state}
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Cast
              </NavLink>
            </li>
            <li className={css.cont_add_link}>
              <NavLink
                className={css.nav_link}
                to="reviews"
                state={location.state}
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
