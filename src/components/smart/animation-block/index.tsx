import { AnimationButton } from './animationButton/styled';
import { AnimationBlockStyled, AnimationButtonWrap } from './styled';
import { TaskInfo } from '@/components/common/info-article/task-info';

export const AnimationBlock = () => {
    return (
        <AnimationBlockStyled>
            <AnimationButtonWrap>
                <div className='animation-button-wrap'>
                    <AnimationButton>Click</AnimationButton>
                </div>
            </AnimationButtonWrap>
            <TaskInfo />
        </AnimationBlockStyled>
    );
}