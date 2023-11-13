import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './MovieListItem.module.css';
import PropTypes from 'prop-types';

const MovieListItem = ({ title, name, id }) => {
  const location = useLocation();
  return (
    <li key={id}>
      <NavLink
        className={css.mov_title}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title || name}
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
