import React from 'react';

import {
  Container,
  Title,
  InfosContainer,
  Description,
  IconLanguage,
} from './styles';

interface Props {
  name: string;
  language: string;
  url: string;
}

const CardRepo: React.FC<Props> = ({ name, language, url }) => {
  return (
    <Container>
      <Title target="_blank" href={url}>
        {name}
      </Title>
      <InfosContainer>
        <IconLanguage />
        <Description>{language}</Description>
      </InfosContainer>
    </Container>
  );
};

export default CardRepo;
