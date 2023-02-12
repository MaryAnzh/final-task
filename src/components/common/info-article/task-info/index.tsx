import { useRouter } from 'next/router';
import { en } from '../../../../data/locales/en';
import { ru } from '../../../../data/locales/ru';
import {
    ArticleWrap,
    ArticleInfo,
    ArticleTitle,
    ArticleText,
    ArticleTextP
} from '../styled';

export const TaskInfo = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <ArticleWrap>
            <ArticleInfo>
                <ArticleTitle>{t.GREETING_TITLE}</ArticleTitle>
                <ArticleText>
                    <ArticleTextP>
                        {t.GREETING_TEXT}
                    </ArticleTextP>
                    <ArticleTextP>
                        {t.GREETING_TEXT_2}
                    </ArticleTextP>
                </ArticleText>
            </ArticleInfo>
        </ArticleWrap >
    );
}