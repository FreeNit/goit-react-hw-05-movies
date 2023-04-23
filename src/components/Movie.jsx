import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledPoster = styled.img`
  width: 150px;
`;

const MovieSection = styled.section`
  margin: 15px auto;
  display: flex;
`;

const ExtraInfo = styled.div`
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`;

// title, userScore, overView, genres, posterPath;

const Movie = ({
  movieDetail: { title, userScore, overView, genres, posterPath },
}) => {
  const userScoreCalculated = Math.round(userScore * 10);

  return (
    <>
      <MovieSection>
        <div>
          <StyledPoster src={`${posterPath}`} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>User Score: {userScoreCalculated}%</p>
          <h3>Overview</h3>
          <p>{overView}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </MovieSection>
      <ExtraInfo>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>

          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </ExtraInfo>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />{' '}
      </Suspense>
    </>
  );
};

export default Movie;
