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
  ButtonContainer,
  ReposButton,
  IconRepos,
  TextButton,
  StarsButton,
  IconStarred,
  ListUL,
  List,
  Link,
} from './styles';

import api from '../../services/api';
import CardUser from '../../components/CardUser';
import CardRepo from '../../components/CardRepo';

interface UserObject {
  name: string;
  avatar_url: string;
  bio: string;
}

interface ReposArray {
  id: number;
  name: string;
  html_url: string;
}

interface StarsArray {
  name: string;
}

const Home: React.FC = () => {
  const [github, setGithub] = useState('');
  const [user, setUser] = useState<UserObject>();
  const [repos, setRepos] = useState<ReposArray[]>([]);
  const [starreds, setStarreds] = useState<StarsArray[]>([]);

  async function handleSearchUsers(): Promise<void> {
    const response = await api.get(`/${github}`);
    setUser(response.data);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setGithub(event.target.value);
  };

  async function handleRepos(): Promise<void> {
    const response = await api.get(`/${github}/repos`);
    setRepos(response.data);
    console.log(response.data);
  }

  async function handleStarreds(): Promise<void> {
    const response = await api.get(`/${github}/starred`);
    setStarreds(response.data);
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

      {!user ? null : (
        <Container>
          <CardUser
            name={user.name}
            photoUrl={user.avatar_url}
            bio={user.bio}
          />
          <ButtonContainer>
            <ReposButton onClick={handleRepos}>
              <IconRepos />
              <TextButton>Repos</TextButton>
            </ReposButton>
            <StarsButton onClick={handleStarreds}>
              <IconStarred />
              <TextButton>Starred</TextButton>
            </StarsButton>
          </ButtonContainer>
        </Container>
      )}

      {!repos ? null : (
        <ListUL>
          {repos.map((repo) => (
            <Link key={repo.id} href={repo.html_url} target="_blank">
              <List>
                <CardRepo name={repo.name} />
              </List>
            </Link>
          ))}
        </ListUL>
      )}
    </Container>
  );
};

export default Home;
