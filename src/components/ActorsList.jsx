import styled from 'styled-components';

import { BASIC_POSTER_URL } from 'services/constants';

const Actor = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ActorImg = styled.img`
  width: 100px;
`;

const ActorsList = ({ cast }) => {
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <Actor key={actor.id}>
            {actor.profile_path ? (
              <ActorImg src={`${BASIC_POSTER_URL}${actor.profile_path}`} />
            ) : (
              <ActorImg src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" />
            )}

            <span>{actor.original_name}</span>
            <span>Character: {actor.character}</span>
          </Actor>
        ))}
      </ul>
    </div>
  );
};

export default ActorsList;
