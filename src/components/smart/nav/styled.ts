import styled from 'styled-components'

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .nav-item {
    
    &__link {
      padding: 0 20px;
        text-transform: uppercase;
        font-size: 0.8em;
        transition: 3s;
        
        &:hover {
          text-decoration: underline;
        }
    }
  }
  
`;