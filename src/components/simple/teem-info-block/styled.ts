import styled from 'styled-components';

export const TeamInfoWrap = styled.article`
    max-width: 1200px;
    width: 100%;
    min-height: 300px;
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-image: url(img/team-info.png);
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: center;
    background-size: 48%;
    margin-bottom: 30px;
    line-height: 1.6;
    
`;

export const AboutTeamWorkTitle = styled.h3`
    max-width: 400px;
    width: 100%;
    font-size: 2rem;
    font-family: ${({theme}) => theme.titleFamily};
    font-weight: 600;
    color: ${({theme}) => theme.themeColor.font};
`;

export const AboutTeamWorkText = styled.p`
    max-width: 400px;
    width: 100%;

    &::first-letter {
        padding-left: 10px;
    }
`;