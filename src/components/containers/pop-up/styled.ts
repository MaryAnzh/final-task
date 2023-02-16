import styled from "styled-components";

export const PopUpStyled = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    z-index: 10;
`;