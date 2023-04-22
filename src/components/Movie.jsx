import styled from 'styled-components';

const StyledPoster = styled.img`
  width: 150px;
`;

const MovieSection = styled.section`
  margin: 15px auto;
  display: flex;
`;

const Movie = ({
  movieDetail: { title, userScore, overView, genres, posterPath },
}) => {
  const userScoreCalculated = Math.round(userScore * 10);

  return (
    <>
      <button type="button">Change to LINK !!!!</button>

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
    </>
  );
};

export default Movie;
