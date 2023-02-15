import { IHeaderTheme } from './headerTheme';
import {IFooterTheme} from '@/interfaces/footerTheme'
import {IContactPageTheme} from '@/interfaces/contactsTheme'

export enum ThemeEnum {
    light,
    dark,
}

export interface ITheme {
    background: string,
    color: string,
    fontFamily: string,
    titleFamily: string,
    variable: IColor,
    themeColor: IThemeColor,
    size: ISize,
    opacity: string,
    borderRadius: string,
}

export interface IColor {
    main: string,
    mainLight: string,
    mainLight2: string,
    mainDark: string,
    mainDark2: string,
    mainExtraLight: string,
    secondary: string,
    secondaryLight: string,
    secondaryLight2: string,
    secondaryDark: string,
    secondaryDark2: string,
    contrastRed: string,
    contrastRedLight: string,
    contrastRedLight2: string,
    contrastRedDark: string,
    contrastRedDark2: string,
    contrastYellow: string,
    contrastYellowLight: string,
    contrastYellowLight2: string,
    contrastYellowDark: string,
    contrastYellowDark2: string,
}

export interface IThemeColor {
    header: IHeaderTheme,
    footer: IFooterTheme,
    background: string,
    font: string,
    title: string,
    link: string,
    contacts: IContactPageTheme
    buttonBackground: string,
    buttonTextColor: string,
    buttonHover: string,
    buttonActive: string,
    cardBackground: string,
    cardFontColor: string,
}

export interface ISize {
    maxDeskYop: string,
    tablet: string,
    mobil: string,
}
