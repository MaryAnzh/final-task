import { ITheme } from '@/interfaces/theme.interface';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.background};
}
`;
