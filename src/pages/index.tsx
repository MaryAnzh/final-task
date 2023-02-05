import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { en } from '@/data/locales/en'
import { ru } from '@/data/locales/ru'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <>
      <div>
        <h2>{t.ABOUT.toUpperCase()}</h2>
      </div>
    </>
  )
}
