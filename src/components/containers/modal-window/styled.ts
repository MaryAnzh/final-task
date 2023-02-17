import styled from "styled-components";

export const ModalWindowStyled = styled.div`
   max-width: 900px;
   width: 100%;
   min-height: 500px;
   padding: 20px;
   display: flex;
   flex-direction: column;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
   border-radius: 8px;
   background: ${({ theme }) => theme.themeColor.modalBackground};
   transition: .3s;
   
   @media (max-width: 800px) {
     width: 95%;
     height: 90vh;
   }

   @keyframes shadowFly {
      0%{ transform: translateY(-150%)}
      100% {transform: translateY(0%)}
   }
   @keyframes shadowFlyReverse {
      0%{ transform: translateY(0%)}
      100% {transform: translateY(-150%)}
   }
`;