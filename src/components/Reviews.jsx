import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import fetchMovieReviews from 'services/fetchReviews';
import ReviewsSection from './ReviewsSection';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      const {
        data: { results },
      } = await fetchMovieReviews(movieId);

      setReviews(results);
    };

    getReview();
  }, [movieId]);

  return reviews && <ReviewsSection reviews={reviews} />;
};

export default Reviews;
