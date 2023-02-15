import { t } from 'i18next';
import styled from 'styled-components';

export const StarSVGStyled = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 15%;
    top: -30px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s;
    
    &::before {
        position: absolute;
        content: '';
        width: 70%;
        height: 70%;
        border-radius: 50%;
        border: 1px dashed ${({ theme }) => theme.variable.mainExtraLight};
        z-index: 4;
        pointer-events: none;  
    }

    &::after {
        position: absolute;
        content: '';
        width: 65%;
        height: 65%;
        border-radius: 50%;
        background: ${({ theme }) => theme.variable.main};
        opacity: .5;
        box-shadow: inset 0px 0px 5px ${({ theme }) => theme.variable.mainDark};
        z-index: 3;
        pointer-events: none;
    }

    svg {
        fill: ${({ theme }) => theme.themeColor.buttonBackground};

        &:hover {
            fill: ${({ theme }) => theme.themeColor.buttonHover};
        }
    }

    span {
      position: absolute;
      font-weight: bold;
      color: ${({ theme }) => theme.variable.mainExtraLight};
      pointer-events: none;  

    }
`;