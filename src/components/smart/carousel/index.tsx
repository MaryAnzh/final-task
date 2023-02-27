import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import {
    CarouselWrap,
    CarouselButton,
    CarouselContainer,
    CarouselBody,
    CarouselCard,
    CarouselCardBackFace,
    CarouselBodyWrap,
    CarouselCardText
} from './styled';


export const Carousel = () => {
    const router = useRouter();
    const t: typeof en | typeof ru = router.locale === 'en' ? en : ru;
    const tArr = [t.SITE_FEAT_1, t.SITE_FEAT_2, t.SITE_FEAT_3, t.SITE_FEAT_4, t.SITE_FEAT_5, t.SITE_FEAT_6, t.SITE_FEAT_7, t.SITE_FEAT_8];

    const [rotate, setRotate] = useState(0);
    const rotateAngle = 45;

    const rotateStyle = {
        transform: `perspective(1000px) rotateY(${rotate}deg)`,
    }

    const cardList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {

        return (
            <CarouselCard key={el} style={{ transform: `rotateY(${45 * i}deg) translateZ(290px)` }}>
                <CarouselCardText>
                    {tArr[i]}
                </CarouselCardText>
            </CarouselCard>
        );
    });

    const cardBackFaceList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselCardBackFace key={el} style={{ transform: `rotateY(${45 * i}deg) translateZ(290px)` }}>
                
            </CarouselCardBackFace>
        );
    });

    const prevItemOnClick = () => {
        setRotate((prevState) => prevState = prevState + rotateAngle);
    }

    const nextItemOnClick = () => {
        setRotate((prevState) => prevState = prevState - rotateAngle);
    }

    return (
        <CarouselWrap>
            <CarouselButton onClick={prevItemOnClick}>❮</CarouselButton>
            <CarouselContainer>
                <CarouselBodyWrap>
                    <CarouselBody style={rotateStyle}>
                        {cardBackFaceList}
                        {cardList}
                    </CarouselBody>
                </CarouselBodyWrap>
            </CarouselContainer>
            <CarouselButton onClick={nextItemOnClick}>❯</CarouselButton>
        </CarouselWrap>
    );
}