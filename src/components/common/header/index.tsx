import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { LoginWrap } from '@/components/simple/login';
import LoginOut from '@/components/simple/loginout';
import { LogoSVG } from '@/components/simple/logoSVG';
import { Locales } from '@/components/smart/locales';
import { Nav } from '@/components/smart/nav';

import { useStore } from '@/context';
import { TStore } from '@/context/interfaces';

import { RoutingEnum } from '@/data/constants/routing';

import { en } from '../../../data/locales/en';
import { ru } from '../../../data/locales/ru';
import UserFace from '../userFace';
import {
  HeaderStyled,
  HeaderWrap,
  LeftHeaderWrap,
  RightHeaderWrap,
} from './styled';

export const Header = () => {
  const [state] = useStore();
  const { data, authorization } = state;
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
        {authorization && (
          <UserFace
            href={(data as TStore).image as string}
            name={(data as TStore).name as string}
          />
        )}

        <RightHeaderWrap>
          {authorization ? (
            <>
              <LoginOut />
              <Locales />
            </>
          ) : (
            <>
              <LoginWrap text={t.LOGIN} />
              <Locales />
            </>
          )}
        </RightHeaderWrap>
      </HeaderWrap>
    </HeaderStyled>
  );
};
