import { useRouter } from 'next/router';

import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import { AboutBackEnd, ModalAboutTask, ModalAboutTaskCross, ModalAboutTaskText, WarningWrap } from './styled';

type AboutBackEndMessageProps = {
    click: () => void,
}

export const AboutBackEndMessage = (props: AboutBackEndMessageProps) => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <AboutBackEnd>
            <ModalAboutTask>
                <ModalAboutTaskCross onClick={props.click}></ModalAboutTaskCross>
                <ModalAboutTaskText>{t.ALERT_1}</ModalAboutTaskText>
                <ModalAboutTaskText>{t.ALERT_2}</ModalAboutTaskText>
                <ModalAboutTaskText>{t.ALERT_3}</ModalAboutTaskText>
                <ModalAboutTaskText>{t.ALERT_4}</ModalAboutTaskText>
                <ModalAboutTaskText>final-task.ru</ModalAboutTaskText>
                <ModalAboutTaskText>{t.ALERT_5}</ModalAboutTaskText>
                <ModalAboutTaskText>https://github.com/DmitryBaranovAndreevich/final-task-plus</ModalAboutTaskText>
                <h3>{t.ALERT_6}</h3>
                <ModalAboutTaskText>{t.ALERT_7}</ModalAboutTaskText>
                <ModalAboutTaskText>{t.ALERT_8}</ModalAboutTaskText>
                <ModalAboutTaskText>{t.ALERT_9}</ModalAboutTaskText>
                <ModalAboutTaskText>{t.ALERT_10}</ModalAboutTaskText>
                <WarningWrap></WarningWrap>
            </ModalAboutTask>
        </AboutBackEnd>
    );
}
