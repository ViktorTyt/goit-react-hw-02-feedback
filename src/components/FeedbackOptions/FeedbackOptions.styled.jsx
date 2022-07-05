import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  width: 80px;
  height: 50px;
  cursor: pointer;
  border-radius: 4px;

  :not(:last-child) {
    margin-right: 24px;
  }
  :hover {
    background-color: blue;
    color: white;
  }
`;
