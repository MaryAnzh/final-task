import styled from 'styled-components';

const bgHight = 285;
const bgWidth = 490;
const k = bgHight / bgWidth;

export const AboutPageWrap = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TeamsBackground = styled.div`
   width: 100%;
   height: 300px;
   position: relative;
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

  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: smoothAppear;

  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
