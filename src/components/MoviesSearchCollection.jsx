import { Link, useLocation } from 'react-router-dom';

const MoviesSearchCollection = ({ movieCollection }) => {
  const location = useLocation();

  return (
    <ul>
      {movieCollection.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesSearchCollection;
