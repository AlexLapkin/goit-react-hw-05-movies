import { fetchMovieCredits } from 'components/fetchMovie';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';
import softScroll from 'components/softScroll';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const castMovies = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await fetchMovieCredits(movieId);
      if (data.cast) {
        setIsLoading(false);
        setCastList(data.cast);
        softScroll();
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
      {!isLoading && (
        <>
          {castList.length > 0 ? (
            <ul className={css.cast_list}>
              {castList.map(({ profile_path, name, character, id }) => (
                <li className={css.cast_item} key={id}>
                  <img
                    className={css.cast_img}
                    src={`${
                      profile_path
                        ? 'https://www.themoviedb.org/t/p/w300' + profile_path
                        : 'https://via.placeholder.com/300x450' +
                          '?text=' +
                          name
                    }`}
                    alt={name}
                  ></img>
                  <p className={css.cast_text}>Name: {name}</p>
                  <p className={css.cast_text}>Character: {character}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.cast_text_add}>
              We don't have information of cast for this movies!
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Cast;
