import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin-right: 24px;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  width: 80px;
  height: 50px;
  cursor: pointer;
  border-radius: 4px;
  scale: 1;
  transform: scale;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;
