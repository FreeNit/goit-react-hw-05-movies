import { useState, useEffect } from 'react';

import fetchPopularMovies from 'services/fetchMovies';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  // -> get popular movies
  useEffect(() => {
    const getPopularMovies = async () => {
      const {
        data: { results: popularMovies },
      } = await fetchPopularMovies();

      setMovies(popularMovies);
    };

    getPopularMovies();
  }, []);

  return <MoviesList movies={movies} />;
};

export default Home;
