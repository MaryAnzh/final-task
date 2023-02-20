import styled from 'styled-components';


export const SliderContainer = styled.div`
  max-width: 1050px;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    max-width: 650px;
  }

  @media (max-width: 700px) {
    max-width: 400px;
  }

  @media (max-width: 450px) {
    max-width: 200px;
  }
`;
export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 100px;
`;

export const Message = styled.p`
  max-width: 200px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
`;

export const Container = styled.div`
  max-widtch: ${({ theme }) => theme.size.maxDeskYop};
  margin-bottom: 30px;
`;

export const Title = styled.h3`
  font-size: 2em;
  font-family: ${({ theme }) => theme.titleFamily};
  font-weight: 600;
  color: ${({ theme }) => theme.themeColor.font};
`;

export const Wrapper = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.themeColor.header.button};
  color: ${({ theme }) => theme.variable.mainExtraLight};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.variable.mainDark};
  }
`;

export const PopupButton = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.variable.mainExtraLight};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.variable.mainDark};
  }
`;

export const PopupButtonLight = styled(PopupButton)`
  background-color: ${({ theme }) => theme.themeColor.header.button};
`;

export const PopupButtonDark = styled(PopupButton)`
  background-color: ${({ theme }) => theme.variable.contrastRedLight};
`;

export const Feedbackfeld = styled.textarea`
  box-sizing: border-box;
  outline: none;
  resize: none;
  border: 1px solid black;
  border-color: ${({ theme }) => theme.variable.mainLight};
  border-radius: 10px;
  padding: 5px 10px;
`;

export const PopupContainer = styled.div`
  box-sizing: border-box;
  max-width: 470px;
  width: 100%;
  padding: 20px;
  border: 1px solid black;
  border-color: ${({ theme }) => theme.variable.mainLight};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor.footer.inputBackground};
`;

export const PopupButtonContainer = styled.div`
 display: flex;
 gap: 20px;
 `