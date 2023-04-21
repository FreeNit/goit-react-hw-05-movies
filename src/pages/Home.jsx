import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import fetchPopularMovies from 'services/fetchMovies';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getPopularMovies = async () => {
      const {
        data: { results: popularMovies },
      } = await fetchPopularMovies();

      setMovies(popularMovies);
    };

    getPopularMovies();
  }, []);

  return (
    <div>
      <p>Trending today</p>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
