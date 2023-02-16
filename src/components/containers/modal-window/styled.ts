import styled from "styled-components";

export const ModalWindowStyled = styled.div`
   max-width: ${({ style }) => style?.maxWidth};
   width: 100%;
   min-height: ${({ style }) => style?.minHeight};
   padding: 20px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
   border-radius: 8px;
   background: ${({ theme }) => theme.themeColor.modalBackground};
`;