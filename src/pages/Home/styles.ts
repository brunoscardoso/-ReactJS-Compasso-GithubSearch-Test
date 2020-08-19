import styled from 'styled-components';
import { FaGithubAlt, FaSearch } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  margin: 54px 0 20px 0;
  justify-content: center;
  flex-direction: row;
`;

export const Logo = styled(FaGithubAlt)`
  color: #fff;
  width: 36px;
  height: 36px;
  margin-right: 4px;
`;

export const TitleText = styled.h1`
  font-size: 32px;
  color: var(--title-color);
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;
  flex-direction: row;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px;
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: 6px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  width: 50px;
  background-color: #34cb79;
  border-radius: 4px;
  border: 1px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover {
    background: #2fb86e;
  }
`;

export const TextButon = styled.strong`
  flex: 1;
  margin-left: 18px;
  color: #fff;
`;

export const IconButton = styled(FaSearch)`
  color: #fff;
  width: 16px;
  height: 16px;
`;
