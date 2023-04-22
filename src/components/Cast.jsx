import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import fetchMoviesCredits from 'services/fetchMoviesCredits';
import ActorsList from './ActorsList';

const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfo = async () => {
      const {
        data: { cast },
      } = await fetchMoviesCredits(movieId);
      setCast(cast);
    };

    getCastInfo();
  }, [movieId]);

  return cast && <ActorsList cast={cast} />;
};

export default Cast;
