import React from 'react';
import css from './MovieList.module.css';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import PropTypes from 'prop-types';

const MovieList = ({ movieList }) => {
  return (
    <ul className={css.mov_ul_title}>
      {movieList !== null &&
        movieList.map(({ id, name, title, poster_path }) => (
          <MovieListItem
            key={id}
            name={name}
            title={title}
            id={id}
            poster_path={poster_path}
          />
        ))}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array,
};

export default MovieList;
