import { ITheme, ThemeEnum } from '../interfaces/theme.interface';
import { DefaultTheme } from 'styled-components';

export const theme: ITheme = {
    background: 'red',
    color: 'black',
}

export const lightTheme: DefaultTheme = {
    ...theme,
    type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
    ...theme,
    type: ThemeEnum.dark,
    background: 'black',
    color: 'red',
};