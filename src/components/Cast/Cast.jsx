import { fetchMovieCredits } from 'components/fetchMovie';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [castList, setCastList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const castMovies = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await fetchMovieCredits(movieId);
      if (data.cast) {
        setIsLoading(false);
        setCastList(data.cast);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    castMovies(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      <ul className={css.cast_list}>
        {castList !== null &&
          castList.map(({ profile_path, name, character, id }) => (
            <li className={css.cast_item} key={id}>
              <img
                className={css.cast_img}
                src={'https://www.themoviedb.org/t/p/w300' + profile_path}
                alt={name}
              ></img>
              <p className={css.cast_text}>Name: {name}</p>
              <p className={css.cast_text}>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
