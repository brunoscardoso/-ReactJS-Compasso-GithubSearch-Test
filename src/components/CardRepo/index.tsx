import React from 'react';

import { Container, Title, InfosContainer } from './styles';

interface Props {
  name: string;
}

const CardRepo: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <InfosContainer>
        <Title>{name}</Title>
      </InfosContainer>
    </Container>
  );
};

export default CardRepo;
