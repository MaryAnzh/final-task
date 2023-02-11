import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.themeColor.footer.background};;
  color: ${({ theme }) => theme.themeColor.footer.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Readex Pro', sans-serif;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  
  @media(max-width: 1200px) {
      max-width: 950px;
  }

  @media(max-width: 1000px) {
    max-width: 750px;
  }

  @media(max-width: 768px) {
    max-width: 540px;
  }

  @media(max-width: 576px) {
    max-width: 90%;
  }
`;

export const FirstRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 35px;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const FirstRowLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FirstRowTitle = styled.h2`
  font-family: 'Readex Pro', sans-serif;
  font-size: 25px;
`;

export const FirstRowText = styled.p`
  color: white;
  font-family: 'Readex Pro', sans-serif;
  margin-top: 20px;
  font-size: 13px;
  line-height: 1.4;
  max-width: 300px;
`;

export const FirstRowInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid ${({ theme }) => theme.themeColor.footer.textColor};;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.themeColor.footer.textColor};;

  @media(max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
  
`;

export const FirstRowInput = styled.input`
  background-color: ${({ theme }) => theme.themeColor.footer.inputBackground};;
  border: none;
  font-size: 17px;
  outline: none;
  padding: 7px 10px;
  color: ${({ theme }) => theme.themeColor.footer.inputTextColor};;
  box-shadow: inset 0 0 0 white;
  transition: 0.6s all;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 100;
  
  &:focus {
    box-shadow: inset 0 0 55px white;
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media(max-width: 768px) {
    width: 80%;
  }

  @media(max-width: 576px) {
    max-width: 90%;
  }
`;

export const FirstRowButton = styled.button`
  background-color: #fffffd;
  color: ${({ theme }) => theme.themeColor.footer.buttonColor};
  outline: none;
  border: none;
  font-size: 15px;
  padding: 0 20px;
  
  transition: all 0.3s;
  background-position: center center;
  border-radius: 5px;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.3);
  
  &:hover {
    cursor: pointer;
  }
  
  &:active {
    transform: scale(0.9);
    box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.1);
  }
`;

export const FooterLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.themeColor.footer.hrColor};
  border: none;
`;

export const SecondRow = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media(max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    gap: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media(max-width: 576px) {
    max-width: 90%;
  }
`;

export const SecondRowLeftPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondRowImage = styled.img`
  margin-bottom: 10px;
  fill: white;
  stroke: white;
`;

export const SecondRowText = styled.p`
  font-weight: 300;
  font-family: 'Readex Pro', sans-serif;
  font-size: 11px;
  max-width: 250px;
  margin-top: 7px;
  line-height: 1.5;
`;
export const SecondRowSocials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

export const SecondRowSocial = styled.a`
  text-transform: none;
  text-decoration: none;
  
  transition: 0.2s all;
  cursor: pointer;
  &:active {
    transform: scale(0.8);
  }
`;

export const SecondRowSocialImage = styled.img`
  width: 27px;
`;

export const SecondRowRightPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
`;

export const SecondRowRightPartCol = styled.div`
    display: flex;
    flex-direction: column;
  
  .nav-item {
    margin-top: 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.themeColor.footer.textColor};
    cursor: pointer;
    font-weight: 100;
    font-size: 13px;
    text-transform: capitalize;
    
    transition: 0.2s all;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SecondRowRightPartColTitle = styled.span`
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 17px;
  color: ${({ theme }) => theme.themeColor.footer.textColor};
`


export const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const ThirdRowCopyright = styled.span`
  font-weight: 100;
  font-size: 12px;
  font-family: 'Readex Pro', sans-serif;
`;
