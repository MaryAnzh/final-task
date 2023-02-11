import { en } from '@/data/locales/en';
import { ru } from '@/data/locales/ru';
import { useRouter } from 'next/router';
import {ContactsDescription} from '@/components/simple/contactsDescription'
import {ContactsProfilesList} from '@/components/containers/contactsProfilesList'
import {ContactProfile} from '@/interfaces/contactsPersonData'

const workers: Array<ContactProfile> = [
    {name: 'Dmitry Baranov', duty: 'Front End Developer', photo: '/user.png'},
    {name: 'Maryia Vashchayeva', duty: 'CEO, Team lead', photo: '/user.png'},
    {name: 'Nikita Slutski', duty: 'Software Engineer', photo: '/user.png'},
    {name: 'Dzmitry Iliukovich', duty: 'Mentor', photo: '/user.png'},
    {name: 'Free vacancy (Our future colleague)', duty: 'JavaScript Developer', photo: '/user.png'},
    {name: 'Free vacancy (Our future colleague)', duty: 'JavaScript Programmer', photo: '/user.png'},
]

export default function Contacts() {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <>
           <ContactsDescription/>
           <ContactsProfilesList workers={workers}/>
        </>
    )
}
