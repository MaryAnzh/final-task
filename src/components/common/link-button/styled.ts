import styled from "styled-components";

export const LinkButton = styled.button`
     width: fit-content;
     margin: 10px 0;
     padding: 5px 10px;
     text-transform: uppercase;
     font-size: 1rem;
     border: none;
     outline: none;
     border-radius: 4px;
     box-shadow: 2px 2px 10px ${({ theme }) => theme.variable.mainLight2};
     background: ${({ theme }) => theme.themeColor.buttonBackground};
     color: ${({ theme }) => theme.themeColor.buttonTextColor};
     cursor: pointer;
     transition: .3s;

     &:hover {
        background: ${({ theme }) => theme.themeColor.buttonHover};
     }

     &:active {
        background: ${({ theme }) => theme.themeColor.buttonActive};

     }
 `;