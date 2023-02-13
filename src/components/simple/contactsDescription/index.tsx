import {ContactsContent, ContactsDescriptionTitle, ContactsDescriptionWrapper, ContactsDescriptionText} from './styled';
import { contacts_en as en } from '@/data/locales/contacts_en';
import { contacts_ru as ru } from '@/data/locales/contacts_ru';
import {useRouter} from 'next/dist/client/router'


export const ContactsDescription = (): JSX.Element => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <ContactsDescriptionWrapper>
            <ContactsContent>
                <ContactsDescriptionTitle>{t.TITLE}</ContactsDescriptionTitle>
                <ContactsDescriptionText>{t.DESCRIPTION}</ContactsDescriptionText>
            </ContactsContent>
        </ContactsDescriptionWrapper>
    )
}
