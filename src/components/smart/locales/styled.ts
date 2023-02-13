import { type } from 'os';
import styled from 'styled-components';


export const LocalesStyled = styled.div`
    width: 30px;
    padding: 10px;
`;

export const LangEn = styled.div`
    width: 100%;
    cursor: pointer;
    color: ${({ lang, theme }) => lang === 'en'
        ? theme.themeColor.header.activeLang :
        theme.themeColor.header.desActiveLang}
`;

export const LangRu = styled.div`
    width: 100%;
    cursor: pointer;
    color: ${({ lang, theme }) => lang === 'ru'
        ? theme.themeColor.header.activeLang :
        theme.themeColor.header.desActiveLang}
`;