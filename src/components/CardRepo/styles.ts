import styled from 'styled-components';

export const Container = styled.div`
  float: left;
  width: 310px;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 8px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.a`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  font-size: 12px;
  color: #24292e;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
`;

export const IconLanguage = styled.span`
  width: 12px;
  height: 12px;
  position: relative;
  top: 1px;
  display: inline-block;
  border-radius: 50%;
  background-color: #f1e05a;
`;
