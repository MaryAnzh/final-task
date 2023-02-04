import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/common/header/header'
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
