import { IColor, ITheme, ThemeEnum } from '@/interfaces/theme.interface';
import { DefaultTheme } from 'styled-components';

const variable: IColor = {
    main: '#91B3F9',
    mainLight: '#BDD1FB',
    mainLight2: '#E9F0FE',
    mainDark: '#6D86BB',
    mainDark2: '#495A7D',
    mainExtraLight: '#F6F9FF',
    secondary: '#5370AC',
    secondaryLight: '#98A9CD',
    secondaryLight2: '#DDE2EF',
    secondaryDark: '#3E5481',
    secondaryDark2: '#2A3856',
    contrastRed: '#AC5384',
    contrastRedLight: '#CD98B5',
    contrastRedLight2: '#EFDDE6',
    contrastRedDark: '#813E63',
    contrastRedDark2: '#562A42',
    contrastYellow: '#FAE2C4',
    contrastYellowLight: '#FCEDDB',
    contrastYellowLight2: '#FEF9F3',
    contrastYellowDark: '#BBA993',
    contrastYellowDark2: '#7D7162',
};

export const theme: ITheme = {
    background: 'white',
    color: 'black',
    variable: variable,
    fontFamily: '"Roboto", sans-serif',
    titleFamily: '"Readex Pro", sans-serif',
    size: {
        maxDeskYop: '1200px',
        tablet: '760px',
        mobil: '360px',
    },
    opacity: '0.5',
    borderRadius: '6px',
    themeColor: {
        background: '#ffffff',
        font: variable.mainDark,
        title: variable.main,
        link: variable.secondary,
        buttonBackground: variable.mainDark,
        buttonTextColor: variable.mainExtraLight,
        buttonHover: variable.mainDark2,
        buttonActive: variable.mainLight,
        header: {
            logoFill: variable.secondary,
            logoStroke: variable.mainDark2,
            logoAccent: variable.main,
            loginFill: variable.mainDark,
            button: variable.main,
            background: variable.mainExtraLight,
            activeLang: variable.mainDark2,
            desActiveLang: variable.mainLight,
        },

        footer: {
            background: variable.mainDark2,
            inputBackground: variable.mainLight2,
            inputTextColor: variable.secondaryDark2,
            buttonBackground: variable.contrastYellowLight2,
            textColor: variable.contrastYellowLight2,
            hrColor: 'rgba(0, 0, 0, 0.2)',
            buttonColor: variable.secondaryDark2,
            black: variable.secondaryDark2
        },
        contacts: {
            descriptionSectionTextColor: variable.contrastYellowLight2,
            descriptionSectionBackground: variable.mainDark2,
            photosOverlay: variable.contrastYellow,
            photoText: variable.secondaryDark2,
            allocationTitleText: variable.secondaryDark2
        }

    },
}

export const lightTheme: DefaultTheme = {
    ...theme,
    type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
    ...theme,
    type: ThemeEnum.dark,
    background: 'black',
    color: variable.contrastYellowLight2,
};
