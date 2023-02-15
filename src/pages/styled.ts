import styled from 'styled-components';

const bgHight = 285;
const bgWidth = 490;
const k = bgHight / bgWidth;

export const AboutPageWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TeamsBackground = styled.div`
   width: 100%;
   height: 300px;
   background-repeat: no-repeat;
   background-position: center;
   background-size: 1200px;
   background-color: ${({ theme }) => theme.variable.mainLight2};
   background-image: url(https://raw.githubusercontent.com/MaryAnzh/final-task-assets/main/img/bg1.png);
   
   @media (max-width: 1200px) {
    background-size: 100%;
   }

   @media (max-width: 490px) {
    height: calc(100vw * ${k});
    background-image: url(https://raw.githubusercontent.com/MaryAnzh/final-task-assets/main/img/bg.png);
    background-size: 100%;
   }
`;