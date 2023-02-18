import styled from 'styled-components'

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 70px;
  padding-bottom: 80px;
  width: 100%;
  max-width: 1000px;

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
`

export const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  
  &:nth-child(3n-1) {
    transform: translateY(-50px);
  }
`


