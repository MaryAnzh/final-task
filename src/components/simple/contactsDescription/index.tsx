import {router} from 'next/client'
import {ContactsContent, ContactsDescriptionTitle, ContactsDescriptionWrapper, ContactsDescriptionText} from './styled'
import {en} from '@/data/locales/en'
import {ru} from '@/data/locales/ru'


export const ContactsDescription = (): JSX.Element => {

    return (
        <ContactsDescriptionWrapper>
            <ContactsContent>
                <ContactsDescriptionTitle>Our team</ContactsDescriptionTitle>
                <ContactsDescriptionText>We do what we love. Doing our job well
                    We are proud of the team. We are continuously developing
                    We work flexibly and openly. Showing the result
                    Building long-term partnerships. <br/>
                    We create IT solutions. Together with our clients we make the world
                    more comfortable and perfect</ContactsDescriptionText>
            </ContactsContent>
        </ContactsDescriptionWrapper>
    )
}
