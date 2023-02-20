import styled from 'styled-components';

export const AppFeatureStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppFeatureTitle = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.titleFamily};
  font-weight: 400;
  color: ${({ theme }) => theme.themeColor.font};
`;