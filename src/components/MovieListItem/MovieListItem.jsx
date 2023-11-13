import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './MovieListItem.module.css';
import PropTypes from 'prop-types';

const MovieListItem = ({ title, name, id, poster_path }) => {
  const location = useLocation();

  return (
    <li className={css.mov_item} key={id}>
      <NavLink
        className={css.mov_title}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <img
          className={css.mov_title_img}
          src={'https://www.themoviedb.org/t/p/w300' + poster_path}
          alt=""
        />
        <p className={css.mov_text}>{title || name}</p>
      </NavLink>
    </li>
  );
};

MovieListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default MovieListItem;
