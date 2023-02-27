import React from 'react'
import {ImageWrapper, Image, Description, Name, Duty} from './styled'

interface ContactPhotoProps {
    imageLink: string
    personName: string
    personDuty: string
}

export const ContactPhoto = (props: ContactPhotoProps): JSX.Element => {
    return (
        <ImageWrapper>
            <Image src={props.imageLink} alt={props.personName}/>
            <Description>
                <Name>{props.personName}</Name>
                <Duty>{props.personDuty}</Duty>
            </Description>
        </ImageWrapper>
    )
}
