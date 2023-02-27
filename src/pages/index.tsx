import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import { en } from '@/data/locales/en'
import { ru } from '@/data/locales/ru'
import { AnimationBlock } from '@/components/smart/animation-block'
import { TeamInfoArticle } from '@/components/common/info-article/team-info'
import { TeamInfoBlock } from '@/components/simple/teem-info-block'
import { AboutPageWrap, TeamsBackground } from '@/styles/styled'
import { AboutBackEndMessage } from '@/components/containers/about-backend';

import Feedbacks from '@/components/feedbacks'
import { TeamAnimationBlock } from '@/components/containers/team-anination-block'
import { StarSCG } from '@/components/simple/starSVG'
import { PopUp } from '@/components/containers/pop-up';
import { EmailLetter } from '@/components/simple/emailLetter/EmailLetter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const [isBackEndInfoShow, setBackEndInfoShow] = useState(false);
  const [isModalOpen, setShowCloseModal] = useState(false);

  const showModalOnClick = () => {
    setShowCloseModal((prev) => prev = true);
  }

  const closeModalOnClick = () => {
    setShowCloseModal((prev) => prev = false);
  }

  const showBackEndInfo = () => {
    setBackEndInfoShow((prev) => prev = true);
  }

  const closeBackEndInfo = () => {
    setBackEndInfoShow((prev) => prev = false);
  }

  return (
    <AboutPageWrap>
      {isBackEndInfoShow &&
        <AboutBackEndMessage click={closeBackEndInfo} />
      }
      {
        isModalOpen &&
        <PopUp isOpen={isModalOpen} closePopUp={closeModalOnClick} />
      }
      <AnimationBlock click={showBackEndInfo}/>
      <TeamsBackground>
        <StarSCG onClick={showModalOnClick} />
      </TeamsBackground>
      <TeamInfoArticle />
      <TeamAnimationBlock />
      <TeamInfoBlock />
      <Feedbacks />
    </AboutPageWrap>
  )
}
