import React, { useState, ChangeEvent } from 'react';

import {
  Header,
  Logo,
  TitleText,
  Input,
  SearchContainer,
  Container,
  SearchButton,
  IconButton,
} from './styles';
import api from '../../services/api';

const Home: React.FC = () => {
  const [github, setGithub] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setGithub(event.target.value);
  };

  async function handleSearchUsers(): Promise<void> {
    const response = await api.get(`/${github}`);
    console.log(response.data);
  }

  return (
    <Container>
      <Header>
        <Logo />
        <TitleText>GitHubSearch</TitleText>
      </Header>

      <SearchContainer>
        <Input value={github} onChange={handleInputChange} />
        <SearchButton onClick={handleSearchUsers}>
          <IconButton />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
};

export default Home;
