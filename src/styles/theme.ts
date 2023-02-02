import { ITheme, ThemeEnum } from '../interfaces/theme.interface';
import { DefaultTheme } from 'styled-components';

export const theme: ITheme = {
    background: 'white',
    color: 'black',
    variable: {
        main: '#91B3F9',
        mainLight: '#BDD1FB',
        mainLight2: '#E9F0FE',
        mainDark: '#6D86BB',
        mainDark2: '#495A7D',
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
    },
    size: {
        maxDeskYop: '1200px',
        tablet: '760px',
        mobil: '360px',
    },
    themeColor: {
        background: '#ffffff',
        font: '#6D86BB',
        title: '#6D86BB',
        link: '#91B3F9',
    },
    opacity: '0.5',
    borderRadius: '6px',
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