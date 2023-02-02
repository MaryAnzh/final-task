import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.themeColor.header.background};

    .header__wrapper {
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

     &__left {
     display: flex;
     align-items: center;
     }

    &__right {
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
`;
