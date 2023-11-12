import { fetchMovieReviews } from 'components/fetchMovie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';
import softScroll from 'components/softScroll';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams('movieId');

  const getReview = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await fetchMovieReviews(movieId);
      if (data.results) {
        setIsLoading(false);
        setReview(data.results);
        softScroll();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getReview(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {review.length > 0 ? (
            <ul>
              {review.map(({ author, content }) => (
                <li>
                  <h3>Author: {author}</h3>
                  <p className={css.review_cont}>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.review_text}>
              We don't have any reviews for this movies!
            </p>
          )}
        </>
      )}
    </div>
  );
};
export default Reviews;
