import styled from 'styled-components';

export const CarouselWrap = styled.div`
  width: 100%;
  height: 360px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
  @media (max-width: 800px) {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  width: calc(100% - 2 * 20px - 2 * 40px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  mask-image: linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%);
  background: ${({theme}) => theme.themeColor.cardBackground};
`;

export const CarouselBodyWrap = styled.div`
  width: 200px;
  height:150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transition: all .3s;
  transform:  rotateX(-6deg) translateY(-40px);

  @media (max-width: 600px) {
    overflow: hidden;
  }

`;

export const CarouselBody = styled.div`
  width: 200px;
  height:150px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transition: all .3s;
  //animation: spin linear 10s infinite;
  
  @keyframes spin {
      0% {transform: perspective(1000px) rotateY(0deg) rotateX(8deg)}
      100% {transform: perspective(1000px) rotateY(-360deg) rotateX(8deg)}
    }
`;

export const CarouselCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 8px;
    background: ${({ theme }) => theme.themeColor.modalBackground};
    z-index: 11;
`;

export const CarouselCardBackFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: visible;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 8px;
    background: ${({ theme }) => theme.variable.mainDark};
    z-index: 10;
`;

export const CarouselButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  background: ${({ theme }) => theme.themeColor.buttonBackground};
  color: ${({ theme }) => theme.themeColor.buttonTextColor};
  font-size: 1,8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background: ${({ theme }) => theme.themeColor.buttonHover};
  }

  &:active {
    background: ${({ theme }) => theme.themeColor.buttonActive};
  }
`;