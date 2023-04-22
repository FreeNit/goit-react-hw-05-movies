const ReviewItem = ({ review }) => {
  return (
    <li>
      <p>
        <b>Author: {review.author}</b>
      </p>
      <p>{review.content}</p>
    </li>
  );
};

export default ReviewItem;
