import { useRouter } from 'next/router';
import { en } from '../../../../data/locales/en';
import { ru } from '../../../../data/locales/ru';
import { LinkButton } from '../../link-button/styled';
import {
    ArticleWrap,
    ArticleInfo,
    ArticleTitle,
    ArticleText,
    ArticleButtonWrap
} from "../styled";

export const TeamInfoArticle = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <ArticleWrap>
            <ArticleInfo>
                <ArticleTitle>{t.TEAM_INFO_TITLE}</ArticleTitle>
                <ArticleText>{t.TEAM_INFO_TEXT}</ArticleText>
            </ArticleInfo>
            <ArticleButtonWrap>
                <LinkButton>{t.MORE}</LinkButton>
            </ArticleButtonWrap>

        </ArticleWrap>
    );
}