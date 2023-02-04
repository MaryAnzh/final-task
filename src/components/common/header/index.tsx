import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { en } from '../../../data/locales/en'
import { ru } from '../../../data/locales/ru'
import { RoutingEnum } from '@/data/constants/routing';
import { LoginWrap } from '@/components/simple/login';
import { LogoSVG } from '@/components/simple/logoSVG';
import { Nav } from '@/components/smart/nav';
import { AnimationButton } from './animationButton/styled';
import { Locales } from '@/components/smart/locales';
import {
  HeaderStyled,
  HeaderWrap,
  LeftHeaderWrap,
  RightHeaderWrap,
} from "./styled";
import { useStore } from "@/context";
import LoginOut from "@/components/simple/loginout";

export const Header = () => {
  const [state] = useStore();
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
  return (
    <HeaderStyled>
      <HeaderWrap>
        <LeftHeaderWrap>
          <Link href={RoutingEnum.about}>
            <LogoSVG />
          </Link>
          <Nav />
        </LeftHeaderWrap>

        <RightHeaderWrap>
            <AnimationButton>
                        {t.CLICK}
                    </AnimationButton>
          {state.authorization ? (
            <LoginOut/>
          ) : (
            <LoginWrap text={t.LOGIN}/>
                    <Locales />
          )}
        </RightHeaderWrap>
      </HeaderWrap>
    </HeaderStyled>
  );
};
