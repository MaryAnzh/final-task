import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import { en } from '@/data/locales/en'
import { ru } from '@/data/locales/ru'
import { AnimationBlock } from '@/components/smart/animation-block'
import { TeamInfoArticle } from '@/components/common/info-article/team-info'
import { TeamInfoBlock } from '@/components/simple/teem-info-block'
import { AboutPageWrap, TeamsBackground } from './styled'

import Feedbacks from '@/components/feedbacks'
import { TeamAnimationBlock } from '@/components/containers/team-anination-block'
import { StarSCG } from '@/components/simple/starSVG'
import { PopUpStyled } from '@/components/containers/pop-up/styled'
import { ModalWindow } from '@/components/containers/modal-window'
import { AppFeature } from '@/components/containers/app-featuare'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <AboutPageWrap>
      <PopUpStyled>
        <ModalWindow width='900' hight='500' />
      </PopUpStyled>
      <AnimationBlock />
      <TeamsBackground>
        <StarSCG />
      </TeamsBackground>
      <TeamInfoArticle />
      <TeamAnimationBlock />
      <TeamInfoBlock />
      <Feedbacks />
    </AboutPageWrap>
  )
}
