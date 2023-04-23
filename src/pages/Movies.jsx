import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchByQuery from 'services/fetchByQuery';
import MoviesSearchCollection from 'components/MoviesSearchCollection';

const Movies = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [movieCollection, setMovieCollection] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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
        <MoviesSearchCollection movieCollection={movieCollection} />
      )}
    </>
  );
};

export default Movies;
