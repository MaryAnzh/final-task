import { AnimationButton } from "./animationButton/styled";
import { AnimationBlockStyled, AnimationButtonWrap } from "./styled";

export const AnimationBlock = () => {
    return (
        <AnimationBlockStyled>
            <AnimationButtonWrap>
                <div className="animation-button-wrap">
                    <AnimationButton>Click</AnimationButton>
                </div>
            </AnimationButtonWrap>
        </AnimationBlockStyled>
    );
}