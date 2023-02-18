import styled from 'styled-components'

export const ContactsDescriptionWrapper = styled.section`
  background: ${({ theme }) => theme.themeColor.contacts.descriptionSectionBackground};
  width: 100% !important;
  padding: 80px 0;

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
`
export const ContactsContent = styled.div`
  background: ${({ theme }) => theme.themeColor.contacts.descriptionSectionBackground};
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

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
`

export const ContactsDescriptionTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 35px;
  font-weight: 900;
  color: ${({ theme }) => theme.themeColor.contacts.descriptionSectionTextColor};
`

export const ContactsDescriptionText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.themeColor.contacts.descriptionSectionTextColor};
  font-size: 14px;
  max-width: 400px;
  line-height: 1.7;
`
