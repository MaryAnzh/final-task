import { en } from '@/data/locales/en';
import { ru } from '@/data/locales/ru';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Contacts() {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
    
    return (
        <>
            <h2>{t.CONTACTS.toUpperCase()}</h2>
        </>
    )
}