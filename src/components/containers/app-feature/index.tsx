import { useRouter } from 'next/router';
import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import { Carousel } from '@/components/smart/carousel';
import { CarouselVertical } from '@/components/smart/carousel-vertical';
import { AppFeatureStyled, AppFeatureTitle } from './styled';

export const AppFeature = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <AppFeatureStyled>
            <AppFeatureTitle>
                {t.APP_FEAT}
            </AppFeatureTitle>
            <Carousel />
            <CarouselVertical />
        </AppFeatureStyled>
    );
}