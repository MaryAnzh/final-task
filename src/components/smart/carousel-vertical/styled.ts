import styled from 'styled-components';

export const CarouselVerticalWrap = styled.div`
  width: 100%;
  height: 60vh;
  padding: 10px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const CarouselVerticalContainer = styled.div`
  width: 400px;
  height: calc(100% - 2 * 20px - 2 * 10px);
  display: flex;
  align-items: center;
  justify-content: center;
  mask-image: linear-gradient(to top, transparent 0%, black 30%, black 70%, transparent 100%);
  background: ${({ theme }) => theme.themeColor.cardBackground};
`;

export const CarouselVerticalBodyWrap = styled.div`
  width: 200px;
  height:150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transition: all .3s;
  //transform:  translateY(-40px);
`;

export const CarouselVerticalBody = styled.div`
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

export const CarouselVerticalCard = styled.div`
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

export const CarouselVerticalCardBackFace = styled.div`
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

export const CarouselVerticalButtonWrap = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;

`;

export const CarouselVerticalButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  background: ${({ theme }) => theme.themeColor.buttonBackground};
  color: ${({ theme }) => theme.themeColor.buttonTextColor};
  font-size: 1,8rem;
  font-weight: 600;
  transform: rotate(90deg);
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background: ${({ theme }) => theme.themeColor.buttonHover};
  }

  &:active {
    background: ${({ theme }) => theme.themeColor.buttonActive};
  }
`;