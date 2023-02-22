import Image, { StaticImageData } from 'next/image'
import { TeamAnimationBlockWrap } from './styled';

type AnimatedTeamMemberCardProps = {
    name: string,
    photo: StaticImageData | string,
    text: string,
}

export const AnimatedTeamMemberCard = (props: AnimatedTeamMemberCardProps) => {
    let photo = '/masha.jpg';
    if (props.photo === '2') {
        photo = '/nikita.png'
     }
     if (props.photo === '3') {
        photo = '/dima.png'
     }
    return (
        <TeamAnimationBlockWrap>
            <h3>{props.name}</h3>
            <figure>
                <img
                    src={photo}
                    alt='img'
                />
                <p>{props.text}</p>
            </figure>
        </TeamAnimationBlockWrap>
    );
}