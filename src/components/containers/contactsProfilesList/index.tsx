import {PhotosContainer, PhotoWrapper} from './styled'
import {ContactPhoto} from '@/components/simple/contactPhoto'
import {ContactProfile} from '@/interfaces/contactsPersonData'


interface ContactsProfilesListProps {
    workers: Array<ContactProfile>
}

export const ContactsProfilesList = (props: ContactsProfilesListProps): JSX.Element => (
    <PhotosContainer>
        {
            props.workers.map(({name, duty, photo}: ContactProfile): JSX.Element => (
                <PhotoWrapper key={`${name}${duty}`}>
                    <ContactPhoto imageLink={photo} personName={name} personDuty={duty}/>
                </PhotoWrapper>
            ))
        }
    </PhotosContainer>
)
