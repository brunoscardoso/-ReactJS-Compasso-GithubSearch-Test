import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
`;

export const BackIcon = styled(FiArrowLeft)`
  margin-right: 16px;
  color: var(--primary-color);
`;

export const BackText = styled(Link)`
  color: var(--title-color);
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const TextButton = styled.strong`
  flex: 1;
  text-align: center;
  color: #fff;
`;
