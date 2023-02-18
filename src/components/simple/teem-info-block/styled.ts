import styled from 'styled-components';

export const TeamInfoWrap = styled.article`
    max-width: 1200px;
    width: 100%;
    min-height: 300px;
    height: fit-content;
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-image: url(https://raw.githubusercontent.com/MaryAnzh/final-task-assets/main/img/team-info.png);
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: center;
    background-size: 48%;
    line-height: 1.6;
    
    @media (max-width: 760px) {
        background: none;
    }
`;

export const AboutTeamWorkTitle = styled.h3`
    max-width: 400px;
    width: 100%;
    font-size: 2rem;
    font-family: ${({theme}) => theme.titleFamily};
    font-weight: 600;
    color: ${({theme}) => theme.themeColor.font};

    @media (max-width: 800ypx) {
        max-width: 100%;
        width: 100%;
    }
`;

export const AboutTeamWorkText = styled.p`
    max-width: 400px;
    width: 100%;

    &::first-letter {
        padding-left: 10px;
    }
    @media (max-width: 760px) {
        max-width: 100%;
        width: 100%;
    }
`;