import styled from 'styled-components';

export const SliderContainer = styled.div`
  max-width: 1050px;
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
`;

export const Message = styled.p`
  max-width: 200px;
  font-family: 'Readex Pro', sans-serif;
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