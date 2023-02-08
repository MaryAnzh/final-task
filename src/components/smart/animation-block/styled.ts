import styled from "styled-components";

export const AnimationBlockStyled = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimationButtonWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${({theme}) => theme.variable.mainExtraLight};

    .animation-button-wrap {
        width: 100%;
        max-width: 1200px;
        display: flex;
    justify-content: flex-end;
    }
`;