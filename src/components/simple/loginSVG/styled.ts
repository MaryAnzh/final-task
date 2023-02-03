import styled from "styled-components";

export const LoginSVgStyled = styled.div`
    width: 20px;
    height: 20px;
    
    svg {
    height: 100%;
    
    circle {
        fill: ${(({theme}) => theme.themeColor.header.loginFill)};
    }

    path {
        fill: ${(({theme}) => theme.themeColor.header.loginFill)};
    }
  }

`;