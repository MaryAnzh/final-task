import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
flex-direction: column`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Name = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-weight: 600;
`;