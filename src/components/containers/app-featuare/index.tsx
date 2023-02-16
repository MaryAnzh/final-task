import { useRouter } from 'next/router';
import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import { AppFeatureStyled, AppFeatureTitle } from './styled';
import { Carousel } from '@/components/smart/carousel';

export const AppFeature = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <AppFeatureStyled>
            <AppFeatureTitle>
                {t.APP_FEAT}
            </AppFeatureTitle>
            <Carousel />
        </AppFeatureStyled>
    );
}