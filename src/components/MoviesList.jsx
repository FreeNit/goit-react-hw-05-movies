import MovieListItem from './MovieListItem';

const MoviesList = ({ movies }) => {
  return (
    <>
      <p>Trending today</p>

      <ul>
        {movies.map(movie => (
          <MovieListItem
            key={movie.id}
            movieID={movie.id}
            movieTitle={movie.title}
          />
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
