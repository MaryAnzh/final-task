import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { en } from '@/data/locales/en'
import { ru } from '@/data/locales/ru'
import { AnimationBlockStyled } from '@/components/smart/animation-block/styled'
import { AboutPageWrap } from './styled'
import { TeamsBackground } from './styled'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <AboutPageWrap>
      <AnimationBlockStyled />
      <TeamsBackground />
    </AboutPageWrap>
  )
}
