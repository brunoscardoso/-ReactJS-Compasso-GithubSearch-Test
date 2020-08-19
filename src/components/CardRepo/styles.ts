import styled from 'styled-components';

export const Container = styled.div`
  float: left;
  width: 400px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin: 16px 0px 0px 0px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  color: #000;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;
