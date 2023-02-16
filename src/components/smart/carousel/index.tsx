import {
    CarouselWrap,
    CarouselButton,
    CarouselContainer,
    CarouselBody,
    CarouselCard
} from "./styled";

export const Carousel = () => {
    
    const cardList = [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
        return (
            <CarouselCard key={el} style={{transform: `rotateY(${45 * i}deg) translateZ(290px)`}}>
                {el}
            </CarouselCard>
        );
    });

    return (
        <CarouselWrap>
            <CarouselButton>❮</CarouselButton>
            <CarouselContainer>
                <CarouselBody>
                    {cardList}
                </CarouselBody>
            </CarouselContainer>
            <CarouselButton>❯</CarouselButton>
        </CarouselWrap>
    );
}