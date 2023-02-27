import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const MainStyled = styled.main`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: smoothAppear;
  
  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
