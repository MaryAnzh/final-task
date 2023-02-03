import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.themeColor.header.background};
`;

export const HeaderWrap = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LeftHeaderWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const RightHeaderWrap = styled.div`
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;