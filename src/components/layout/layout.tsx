import React, { PropsWithChildren } from 'react';
import { Header } from '../common/header'
import {
  AppWrapper,
  MainStyled
} from './styled';
import Footer from '@/components/common/footer'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <AppWrapper>
      <Header />
      <MainStyled>
        {children}
      </MainStyled>
        <Footer/>
    </AppWrapper>
  )
}
