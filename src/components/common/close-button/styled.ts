import styled from "styled-components";

export const CloseButtonStyled = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
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