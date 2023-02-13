import { contacts_ru as ru } from '@/data/locales/contacts_ru';
import { contacts_en as en } from '@/data/locales/contacts_en';
import { useRouter } from 'next/router';
import {ContactsDescription} from '@/components/simple/contactsDescription'
import {ContactsProfilesList} from '@/components/containers/contactsProfilesList'
import {ContactProfile} from '@/interfaces/contactsPersonData'



export default function Contacts() {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    const workers: Array<ContactProfile> = [
        {name: t.WORKERS.DMITRY.NAME, duty: t.WORKERS.DMITRY.JOB, photo: '/user.png'},
        {name: t.WORKERS.MARYA.NAME, duty: t.WORKERS.MARYA.JOB, photo: '/user.png'},
        {name: t.WORKERS.NIKITA.NAME, duty: t.WORKERS.NIKITA.JOB, photo: '/user.png'},
        {name: t.WORKERS.MENTOR_DMITRY.NAME, duty: t.WORKERS.MENTOR_DMITRY.JOB, photo: '/user.png'},
        {name: t.WORKERS.FREE_VACANCY.NAME, duty: t.WORKERS.FREE_VACANCY.JOB, photo: '/user.png'},
        {name: t.WORKERS.FREE_VACANCY.NAME, duty: t.WORKERS.FREE_VACANCY.JOB, photo: '/user.png'},
    ]

    return (
        <>
           <ContactsDescription/>
           <ContactsProfilesList workers={workers}/>
        </>
    )
}
