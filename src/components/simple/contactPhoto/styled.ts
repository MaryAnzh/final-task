import styled from 'styled-components'


export const ImageWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.themeColor.contacts.photosOverlay};
  box-shadow: 0 0 7px rgba(0, 0, 0, .1);
  transition: 0.2s all;
  cursor: default;
  user-select: none;
  
  &:hover {
    transform: scale(1.04);
  }
`


export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`

export const Description = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
`

export const Name = styled.h1`
  font-weight: 900;
  color: ${({ theme }) => theme.themeColor.contacts.photoText};
  font-size: 20px;
`

export const Duty = styled.h2`
  font-weight: 300;
  color: ${({ theme }) => theme.themeColor.contacts.photoText};
  font-size: 16px;
  margin-top: 3px;
`
