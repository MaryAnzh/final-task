import React, { useState } from 'react';
import {
    CarouselWrap,
    CarouselButton,
    CarouselContainer,
    CarouselBody,
    CarouselCard,
    CarouselCardBackFace,
    CarouselBodyWrap
} from './styled';

export const Carousel = () => {
    const [rotate, setRotate] = useState(0);
    const rotateAngle = 45;

    const rotateStyle = {
        transform: `perspective(1000px) rotateY(${rotate}deg)`,
    }

    const cardList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselCard key={el} style={{ transform: `rotateY(${45 * i}deg) translateZ(290px)` }}>
                {el}
            </CarouselCard>
        );
    });

    const cardBackFaceList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselCardBackFace key={el} style={{ transform: `rotateY(${45 * i}deg) translateZ(290px)` }}>
                {el}
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