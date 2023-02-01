import { ITheme } from '@/interfaces/theme.interface';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
body {
    background: ${theme => theme.background};
    color: ${theme => theme.background};
}
`;

GlobalStyle.defaultProps = theme;