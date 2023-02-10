import { useRouter } from 'next/router';
import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import {
    TeamInfoWrap,
    AboutTeamWorkTitle,
    AboutTeamWorkText
} from "./styled";

export const TeamInfoBlock = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
    
    return (
        <TeamInfoWrap>
            <AboutTeamWorkTitle>{t.TEAM_WORK}</AboutTeamWorkTitle>
            <AboutTeamWorkText>{t.TEAM_WORK_TEXT}</AboutTeamWorkText>
        </TeamInfoWrap>
    );
}