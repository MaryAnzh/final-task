import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 60px 0;
  background-color: #002B4E;
  color: white;
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
`;

export const FirstRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 35px;
`

export const FirstRowLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FirstRowTitle = styled.h2`
  font-family: 'Readex Pro', sans-serif;
  font-size: 25px;
`

export const FirstRowText = styled.p`
  color: white;
  font-family: 'Readex Pro', sans-serif;
  margin-top: 20px;
  font-size: 13px;
  line-height: 1.4;
  max-width: 300px;
`

export const FirstRowInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid white;
  border-radius: 5px;
  overflow: hidden;
  background-color: #FFF;
`

export const FirstRowInput = styled.input`
  background-color: #C9DCEB;
  border: none;
  font-size: 17px;
  outline: none;
  padding: 7px 10px;
  color: black;
  box-shadow: inset 0 0 0 white;
  transition: 0.4s all;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 100;
  
  &:focus {
    box-shadow: inset 0 0 60px rgba(255, 255, 255, 1);
  }
`

export const FirstRowButton = styled.button`
  background-color: #fffffd;
  color: black;
  outline: none;
  border: none;
  font-size: 15px;
  padding: 0 20px;
  
  transition: all 0.3s;
  background-position: center center;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
  }
  
  &:active {
    transform: scale(0.9);
  }
`

export const FooterLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
`

export const SecondRow = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const SecondRowLeftPart = styled.div`
  display: flex;
  flex-direction: column;
`

export const SecondRowImage = styled.img`
  margin-bottom: 10px;
  
`

export const SecondRowText = styled.p`
  font-weight: 100;
  font-family: 'Readex Pro', sans-serif;
  font-size: 11px;
  max-width: 250px;
`
export const SecondRowSocials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const SecondRowSocial = styled.a`
  text-transform: none;
  text-decoration: none;
`

export const SecondRowRightPart = styled.div`
  display: flex;
  flex-direction: column;
`

export const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const ThirdRowCopyright = styled.span`
  font-weight: 100;
  font-size: 12px;
  font-family: 'Readex Pro', sans-serif;
  
`
