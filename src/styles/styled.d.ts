import 'styled-components';
import { ITheme, ThemeEnum } from '../interfaces/theme.interface';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}