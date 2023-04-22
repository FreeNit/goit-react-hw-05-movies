import { Link } from 'react-router-dom';

const MovieListItem = ({ movieID, movieTitle }) => {
  return (
    <li>
      <Link to={`/movies/${movieID}`}>{movieTitle}</Link>
    </li>
  );
};

export default MovieListItem;
