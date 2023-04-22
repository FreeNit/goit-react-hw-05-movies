import ReviewList from './ReviewList';

const ReviewsSection = ({ reviews }) => {
  return (
    <>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews fot this movie</p>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </>
  );
};

export default ReviewsSection;
