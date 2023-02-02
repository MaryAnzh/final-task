import styled from 'styled-components'

export const NavStyled = styled.nav`
  max-width: 400px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .nav-item {
    
    &__link {
        text-transform: uppercase;
        font-size: 0.8em;
        transition: 3s;
        
        &:hover {
          text-decoration: underline;
        }
    }
  }
  
`;