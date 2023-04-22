import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import fetchMoviesCredits from 'services/fetchMoviesCredits';

const Cast = () => {
  const [casts, setCast] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfo = async () => {
      const {
        data: { cast },
      } = await fetchMoviesCredits(movieId);
      console.log(cast);
    };

    getCastInfo();
  }, []);

  return <div>CAST Info</div>;
};

export default Cast;
