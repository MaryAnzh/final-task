import { contacts_ru as ru } from '@/data/locales/contacts_ru';
import { contacts_en as en } from '@/data/locales/contacts_en';
import { useRouter } from 'next/router';
import {ContactsDescription} from '@/components/simple/contactsDescription'
import {ContactsProfilesList} from '@/components/containers/contactsProfilesList'
import {ContactProfile} from '@/interfaces/contactsPersonData'



export default function Contacts() {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <>
            <h2>{t.CONTACTS.toUpperCase()}</h2>
        </>
    )
}
