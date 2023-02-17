import Image from "next/image"
import { StaticImageData } from "next/image";
import { TeamAnimationBlockWrap } from "./styled";

type AnimatedTeamMemberCardProps = {
    name: string,
    photo: StaticImageData | string,
    text: string,
}

export const AnimatedTeamMemberCard = (props: AnimatedTeamMemberCardProps) => {

    return (
        <TeamAnimationBlockWrap>
            <h3>{props.name}</h3>
            <figure>
                <Image
                    src={props.photo}
                    alt="img"
                    width={90}
                    height={90}
                />
                <p>{props.text}</p>
            </figure>
        </TeamAnimationBlockWrap>
    );
}