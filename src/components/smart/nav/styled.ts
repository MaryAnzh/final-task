import styled from 'styled-components'

export const NavStyled = styled.nav`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 650px) {
        width: 150px;
    }

  .nav-item {

    @media (max-width: 650px) {
        padding-top: 20px;
    }

    &__link {
        padding: 0 20px;
        text-transform: uppercase;
        font-size: 0.8em;
        transition: 3s;
        
        &:hover {
          text-decoration: underline;
        }

        @media (max-width: 650px) {
        padding: 0;
    }
    }
  }
  
`;