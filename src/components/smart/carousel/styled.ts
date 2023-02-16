import styled from "styled-components";

export const CarouselWrap = styled.div`
  width: 100%;
  height: 300px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  width: calc(100% - 2 * 20px - 2 * 40px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightblue;
`;

export const CarouselBody = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  //animation: spin linear 10s infinite;
  
  @keyframes spin {
      0% {transform: perspective(1000px) rotateY(0deg)}
      100% {transform: perspective(1000px) rotateY(-360deg)}
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
    background: ${({theme}) => theme.themeColor.modalBackground};
`;

export const CarouselButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.themeColor.buttonBackground};
  color: ${({ theme }) => theme.themeColor.buttonTextColor};
  font-size: 1,4rem;
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