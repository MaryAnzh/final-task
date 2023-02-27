import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';

import { CarouselCardText, CarouselCard } from '../carousel/styled';
import {
    CarouselVerticalWrap,
    CarouselVerticalButton,
    CarouselVerticalContainer,
    CarouselVerticalBody,
    CarouselVerticalBodyWrap,
    CarouselVerticalButtonWrap
} from './styled';

export const CarouselVertical = () => {
    const router = useRouter();
    const t: typeof en | typeof ru = router.locale === 'en' ? en : ru;
    const tArr = [t.SITE_FEAT_1, t.SITE_FEAT_2, t.SITE_FEAT_3,
    t.SITE_FEAT_4, t.SITE_FEAT_5, t.SITE_FEAT_6, t.SITE_FEAT_7, t.SITE_FEAT_8];
    
    const [rotate, setRotate] = useState(0);
    const rotateAngle = 45;

    const rotateStyle = {
        transform: `perspective(1000px) rotateX(${rotate}deg)`,
    }

    const cardList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselCard
                key={el}
                style={{ transform: `rotateX(${45 * i}deg) translateZ(200px)` }}>
              <CarouselCardText>{tArr[i]}</CarouselCardText>
            </CarouselCard>
        );
    });

    const prevItemOnClick = () => {
        setRotate((prevState) => prevState = prevState - rotateAngle);
    }

    const nextItemOnClick = () => {
        setRotate((prevState) => prevState = prevState + rotateAngle);
    }
    return (
        <CarouselVerticalWrap>
            <CarouselVerticalButtonWrap>
                <CarouselVerticalButton
                    onClick={prevItemOnClick}>
                    ❮
                </CarouselVerticalButton>
                <CarouselVerticalButton
                    onClick={nextItemOnClick}>
                    ❯
                </CarouselVerticalButton>
            </CarouselVerticalButtonWrap>

            <CarouselVerticalContainer>
                <CarouselVerticalBodyWrap>
                    <CarouselVerticalBody style={rotateStyle}>
                        {cardList}
                    </CarouselVerticalBody>
                </CarouselVerticalBodyWrap>
            </CarouselVerticalContainer>

        </CarouselVerticalWrap>
    );
}