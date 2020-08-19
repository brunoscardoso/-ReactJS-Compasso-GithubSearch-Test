import React from 'react';

import { Container, Photo, Title, InfosContainer, Description } from './styles';

interface Props {
  photoUrl: string;
  name: string;
  bio: string;
}

const CardUser: React.FC<Props> = ({ photoUrl, name, bio }) => {
  return (
    <Container>
      <Photo src={photoUrl} alt="gitsearch" />
      <InfosContainer>
        <Title>{name}</Title>
        <Description>{bio}</Description>
      </InfosContainer>
    </Container>
  );
};

export default CardUser;
