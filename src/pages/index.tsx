import { useRouter } from 'next/router'
import {Inter} from '@next/font/google'
import { en } from '@/data/locales/en'
import { ru } from '@/data/locales/ru'
import { AnimationBlock } from '@/components/smart/animation-block'
import { TeamInfoArticle } from '@/components/common/info-article/team-info'
import { TeamInfoBlock } from '@/components/simple/teem-info-block'
import { AboutPageWrap, TeamsBackground } from './styled'
// import '../index.css'
import Feedbacks from '@/components/feedbacks'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <AboutPageWrap>
      <AnimationBlock />
      <TeamsBackground />
      <TeamInfoArticle />
      <TeamInfoBlock />
      <Feedbacks/>
    </AboutPageWrap>
  )
}
