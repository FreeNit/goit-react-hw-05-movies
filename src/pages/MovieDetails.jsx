import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import fetchMovieDetails from 'services/fetchMoviesByID';
import Movie from 'components/Movie';
import { BASIC_POSTER_URL } from 'services/constants';

const MovieDetails = () => {
  const [movieDetail, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
    };

    getMovieDetails();
  }, [movieId]);

  return (
    movieDetail && (
      <>
        <Link to={backLinkHref}>
          <FiArrowLeft /> Go Back
        </Link>
        <Movie movieDetail={movieDetail} />
      </>
    )
  );
};

export default MovieDetails;
