import styled from "styled-components";

export const TeamAnimationBlockWrap = styled.div`
    max-width: 1200px;
    width: 100%;
    min-height: 200px;
    margin-bottom: 20px;
    padding: 0 20px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 660px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;