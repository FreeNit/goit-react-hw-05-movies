import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import fetchMovieDetails from 'services/fetchMoviesByID';
import Movie from 'components/Movie';
import { BASIC_POSTER_URL } from 'services/constants';

const MovieDetails = () => {
  const [movieDetail, setMovieDetails] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const { data } = await fetchMovieDetails(movieId);

      const tempMovieDetails = {
        title: data.title,
        userScore: data.vote_average,
        overView: data.overview,
        genres: data.genres.map(genre => genre.name).join(', '),
        posterPath: `${BASIC_POSTER_URL}${data.poster_path}`,
      };

      setMovieDetails(tempMovieDetails);

      console.log(tempMovieDetails);
    };

    getMovieDetails();
  }, []);

  return <Movie movieDetail={movieDetail} />;
};

export default MovieDetails;
