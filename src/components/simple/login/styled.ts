import styled from "styled-components";

export const LoginStyled = styled.div`
width: 80px;
display: flex;
justify-content: space-between;
align-items: flex-end;
transition: .3s;

  a {
    color: ${({theme}) => theme.themeColor.link};
    cursor: pointer;
    &:hover {
      color: ${({theme}) => theme.variable.mainDark2};
    }
  }

`;