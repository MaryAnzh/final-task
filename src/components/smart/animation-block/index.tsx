import { useRouter } from 'next/router';

import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';

import { AnimationButton } from './animationButton/styled';
import { AnimationBlockStyled, AnimationButtonWrap } from './styled';
import { TaskInfo } from '@/components/common/info-article/task-info';

type AnimationBlockPropsType = {
    click: () => void,
}

export const AnimationBlock = (props: AnimationBlockPropsType) => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <AnimationBlockStyled>
            <AnimationButtonWrap>
                <div className='animation-button-wrap'>
                    <AnimationButton onClick={props.click}>{t.BACKEND_BUTTON}</AnimationButton>
                </div>
            </AnimationButtonWrap>
            <TaskInfo />
        </AnimationBlockStyled>
    );
}