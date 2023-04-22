import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import fetchByQuery from 'services/fetchByQuery';

const Movies = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [movieCollection, setMovieCollection] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const queryValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryValue) {
      const getMovieCollectionByQuery = async () => {
        const {
          data: { results },
        } = await fetchByQuery(queryValue);
        setMovieCollection(results);
      };
      getMovieCollectionByQuery();
    }
  }, [queryValue]);

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase();
    setInputQuery(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const requestQuery = inputQuery !== '' ? { query: inputQuery } : {};

    setSearchParams(requestQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" value={inputQuery} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {movieCollection && (
        <div>
          {movieCollection.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
