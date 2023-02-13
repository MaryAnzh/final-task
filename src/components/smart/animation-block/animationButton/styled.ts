import styled from 'styled-components';

export const AnimationButton = styled.button`
  width: 60px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.themeColor.header.button};
  color: ${({ theme }) => theme.variable.mainExtraLight};
  cursor: pointer;
  text-transform: uppercase;
  padding-bottom: 5px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.variable.mainDark};
    box-shadow: 2px 2px 4px ${({ theme }) => theme.variable.mainLight2};
  }
`;
