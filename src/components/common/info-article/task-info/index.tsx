import { useRouter } from 'next/router';
import { en } from '../../../../data/locales/en';
import { ru } from '../../../../data/locales/ru';
import {
    ArticleWrap,
    ArticleInfo,
    ArticleTitle,
    ArticleText
} from "../styled";

export const TaskInfo = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
    
    return(
        <ArticleWrap>
            <ArticleInfo>
                <ArticleTitle>{t.GREETING_TITLE}</ArticleTitle>
                <ArticleText>{t.GREETING_TEXT}</ArticleText>
            </ArticleInfo>
        </ArticleWrap>
    );
}