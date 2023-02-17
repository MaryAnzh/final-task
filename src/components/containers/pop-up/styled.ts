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
    //animation: toShow 5s forwards;
    z-index: 10;

    @keyframes toShow {
        0% {opacity: 0}
        100% {opacity: 1}
    }
`;