import { useRouter } from 'next/router';
import { en } from '../../../../data/locales/en';
import { ru } from '../../../../data/locales/ru';
import { LinkButton } from '../../link-button/styled';
import {
    ArticleWrap,
    ArticleInfo,
    ArticleTitle,
    ArticleText,
    ArticleButtonWrap,
    ArticleTextP,
} from "../styled";

export const TeamInfoArticle = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <ArticleWrap>
            <ArticleInfo>
                <ArticleTitle>{t.TEAM_INFO_TITLE}</ArticleTitle>
                <ArticleText>
                    <ArticleTextP>
                        {t.TEAM_INFO_TEXT}
                    </ArticleTextP>
                </ArticleText>
            </ArticleInfo>
            <ArticleButtonWrap>
                <LinkButton>{t.MORE}</LinkButton>
            </ArticleButtonWrap>

        </ArticleWrap>
    );
}