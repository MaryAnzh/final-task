import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.5em;
  border: none;
  border-bottom: 2px solid black;
  border-color: ${({ theme }) => theme.themeColor.header.button};
  outline: none;
  background-repeat: no-repeat;
  background-position: 4px;
  background-size: 28px 28px;
  padding-left: 35px;
  @media (max-width: 420px) {
    & {
      font-size: 1.1em;
    }
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  width: 100%;
  font-size: 1em;
  color: ${({ theme }) => theme.variable.contrastRedLight};
  @media (max-width: 420px) {
    & {
      font-size: 0.8em;
    }
  }
`;
