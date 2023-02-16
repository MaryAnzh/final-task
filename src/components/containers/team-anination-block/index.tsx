import { useRouter } from 'next/router';
import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import { AnimatedTeamMemberCard } from "@/components/smart/animated-team-member-card";
import masha from '@/assets/img/masha.jpg';
import user from '@/assets/img/login.svg';

import { TeamAnimationBlockWrap } from "./styled";
import { StaticImageData } from 'next/image';

export const TeamAnimationBlock = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    const teamsList = [1, 2, 3];
    const teamsListElement = teamsList.map((member) => {
        let name = t.TEAM_MASHA_NAME;
        let photo: StaticImageData | string = masha;
        let text = t.TEAM_MASHA_INFO;

        if (member === 2) {
            name = t.TEAM_NIKITA_NAME;
            photo = user;
            text = t.TEAM_NIKITA_INFO;
        }
        if (member === 3) {
            name = t.TEAM_DIMA_NAME;
            photo = user;
            text = t.TEAM_DIMA_INFO;
        }
        return (
            <AnimatedTeamMemberCard
                key={member}
                name={name}
                photo={photo}
                text={text}
            />
        )
    });

    return (
        <TeamAnimationBlockWrap>
            {teamsListElement}
        </TeamAnimationBlockWrap>

    );
}