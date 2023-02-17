import React, { useState } from 'react';
import {
    CarouselVerticalWrap,
    CarouselVerticalButton,
    CarouselVerticalContainer,
    CarouselVerticalBody,
    CarouselVerticalCard,
    CarouselVerticalCardBackFace,
    CarouselVerticalBodyWrap,
    CarouselVerticalButtonWrap
} from './styled';

export const CarouselVertical = () => {
    const [rotate, setRotate] = useState(0);
    const rotateAngle = 45;

    const rotateStyle = {
        transform: `perspective(1000px) rotateX(${rotate}deg)`,
    }

    const cardList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselVerticalCard
                key={el}
                style={{ transform: `rotateX(${45 * i}deg) translateZ(200px)` }}>
                {el}
            </CarouselVerticalCard>
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