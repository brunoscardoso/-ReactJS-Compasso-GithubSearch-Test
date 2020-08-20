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
  ReposContainer,
  StarredsContainer,
  ListContainer,
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
  language: string;
}

interface StarsArray {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

const Home: React.FC = () => {
  const [github, setGithub] = useState('');
  const [user, setUser] = useState<UserObject>();
  const [repos, setRepos] = useState<ReposArray[]>([]);
  const [starreds, setStarreds] = useState<StarsArray[]>([]);
  const [showRepos, setShowRepos] = useState(false);
  const [showStarreds, setShowStarreds] = useState(false);

  async function handleSearchUsers(): Promise<void> {
    setShowStarreds(false);
    setShowRepos(false);
    const response = await api.get(`/${github}`);
    setUser(response.data);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setGithub(event.target.value);
  };

  async function handleRepos(): Promise<void> {
    const response = await api.get(`/${github}/repos`);
    setRepos(response.data);
    setShowStarreds(false);
    setShowRepos(true);
  }

  async function handleStarreds(): Promise<void> {
    const response = await api.get(`/${github}/starred`);
    setStarreds(response.data);
    setShowRepos(false);
    setShowStarreds(true);
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
      <ListContainer>
        {showRepos === true ? (
          <ReposContainer>
            <ListUL>
              {repos.map((repo) => (
                <List key={repo.id}>
                  <CardRepo
                    name={repo.name}
                    language={repo.language}
                    url={repo.html_url}
                  />
                </List>
              ))}
            </ListUL>
          </ReposContainer>
        ) : null}

        {showStarreds === true ? (
          <StarredsContainer>
            <ListUL>
              {starreds.map((star) => (
                <List key={star.id}>
                  <CardRepo
                    name={star.name}
                    language={star.language}
                    url={star.html_url}
                  />
                </List>
              ))}
            </ListUL>
          </StarredsContainer>
        ) : null}
      </ListContainer>
    </Container>
  );
};

export default Home;
