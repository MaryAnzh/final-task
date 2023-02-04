import React, { PropsWithChildren } from 'react';
import { Header } from '../common/header'
import {
  AppWrapper,
  MainStyled
} from './styled';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <AppWrapper>
      <Header />
      <MainStyled>
        {children}
      </MainStyled>
   </AppWrapper>
  )
}
