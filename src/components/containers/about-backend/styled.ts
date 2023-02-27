import styled from "styled-components";
import bg1 from '@/assets/img/woring-1.png';
import bg2 from '@/assets/img/woring-2.png';


export const AboutBackEnd = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 15%);
    z-index: 15;    
`;

export const ModalAboutTask = styled.div`
    position: relative;
    max-width: 900px;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    background: white;
`;

export const ModalAboutTaskText = styled.p`
    font-family: 'Roboto';
    font-size: 1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.themeColor.font};

    &::first-letter {
      padding-left: 10px;
    }
`;

export const ModalAboutTaskCross = styled.div`
      position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.themeColor.closeButtonBackground};
  align-self: flex-end;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, .2);
  cursor: pointer;
  transition: all .3s;

  &::after,
  &::before {
      content: '';
      position: absolute;
      width: 25px;
      height: 2px;
      border-radius: 2px;
      background: ${({ theme }) => theme.themeColor.buttonTextColor};
      pointer-events: none;
  }
  
  &::after {
    transform: rotate(-45deg);
  }
  &::before {
      transform: rotate(45deg);
  }

  &:hover {
    background: ${({ theme }) => theme.themeColor.closeButtonHover};
    box-shadow: none;
  }

  &:active {
    background: ${({ theme }) => theme.themeColor.buttonActive};
  }

`;

export const WarningWrap = styled.div`
    width: 100%;
    height: 280px;
    background-image: url(${bg1.src}), url(${bg2.src});
    background-position-x: left, right;
    background-position-y: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: 40%, 40%;

`;