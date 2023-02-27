import { useRouter } from 'next/router';

import { ContactsProfilesList } from '@/components/containers/contactsProfilesList';
import { ContactsDescription } from '@/components/simple/contactsDescription';

import { contacts_en as en } from '@/data/locales/contacts_en';
import { contacts_ru as ru } from '@/data/locales/contacts_ru';

import { ContactProfile } from '@/interfaces/contactsPersonData';
import {AllocationTitle, ContactsPage, Container} from '@/styles/page/styled'

export default function Contacts() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const workers: Array<ContactProfile> = [
    {
      name: t.WORKERS.DMITRY.NAME,
      duty: t.WORKERS.DMITRY.JOB,
      photo: '/user.png',
    },
    {
      name: t.WORKERS.MARYA.NAME,
      duty: t.WORKERS.MARYA.JOB,
      photo: '/user.png',
    },
    {
      name: t.WORKERS.NIKITA.NAME,
      duty: t.WORKERS.NIKITA.JOB,
      photo: '/user.png',
    },
    {
      name: t.WORKERS.MENTOR_DMITRY.NAME,
      duty: t.WORKERS.MENTOR_DMITRY.JOB,
      photo: '/user.png',
    },
    {
      name: t.WORKERS.FREE_VACANCY.NAME,
      duty: t.WORKERS.FREE_VACANCY.JOB,
      photo: '/user.png',
    },
    {
      name: t.WORKERS.FREE_VACANCY.NAME,
      duty: t.WORKERS.FREE_VACANCY.JOB,
      photo: '/user.png',
    },
  ];

  return (
    <ContactsPage>
      <ContactsDescription />
      <ContactsProfilesList workers={workers} />
      <Container>
        <AllocationTitle>{t.ALLOCATION_TITLE}</AllocationTitle>
      </Container>
      <iframe
    src="https://yandex.ru/map-widget/v1/?um=constructor%3Afb782d4ae1054119eefcbef16f297d16c972594b1c6901028d0e801e7f324934&amp;source=constructor"
    width="100%" height="300" frameBorder="0"/>
    </ContactsPage>
  );
}
