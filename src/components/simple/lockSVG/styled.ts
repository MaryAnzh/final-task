import styled from 'styled-components';

export const LoginSVgStyled = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: 5px;
  width: 20px;
  height: 20px;

  svg {
    height: 100%;

    path {
      fill: ${({ theme }) => theme.themeColor.header.loginFill};
    }
  }
`;
