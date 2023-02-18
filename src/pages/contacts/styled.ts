import styled from 'styled-components'

export const ContactsPage = styled.section`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Container = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

export const AllocationTitle = styled.h2`
  color: ${({ theme }) => theme.themeColor.contacts.allocationTitleText};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 33px;
  font-weight: 500;
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
  margin-top: 10px;
`
