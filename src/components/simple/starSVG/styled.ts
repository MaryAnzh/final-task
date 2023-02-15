import { t } from 'i18next';
import styled from 'styled-components';

export const StarSVGStyled = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 75%;
    top: -50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s;
    
    &::before {
        position: absolute;
        content: '';
        width: 70%;
        height: 70%;
        border-radius: 50%;
        border: 1px dotted ${({ theme }) => theme.variable.mainExtraLight};
        box-shadow: inset 5px 5px 5px ${({ theme }) => theme.variable.mainDark};
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
        z-index: 4;
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