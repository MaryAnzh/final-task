import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { en } from '@/data/locales/en'
import { ru } from '@/data/locales/ru'
import { AnimationBlock } from '@/components/smart/animation-block'
import { AboutPageWrap } from './styled'
import { TeamsBackground } from './styled'
import { TeamInfoWrap } from '@/components/simple/teem-info/styled'
import { TeamInfoArticle } from '@/components/common/info-article/team-info'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <AboutPageWrap>
      <AnimationBlock />
      <TeamsBackground />
      <TeamInfoArticle/>
      <TeamInfoWrap />
    </AboutPageWrap>
  )
}
