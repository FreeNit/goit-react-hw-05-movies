import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default ReviewList;
