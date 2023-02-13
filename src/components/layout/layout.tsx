import { getSession } from 'next-auth/react';
import React, { PropsWithChildren, useEffect } from 'react';

import Footer from '@/components/common/footer';

import { useStore } from '@/context';
import authConstants from '@/context/constance';

import { Header } from '../common/header';
import { AppWrapper, MainStyled } from './styled';

export const Layout = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useStore();
  const { data: user, loading, authorization } = state;
  /* eslint-disable */
  useEffect(() => {
    if (!authorization) {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      getSession().then((session) => {
        if (session) {
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: session.user,
          });
        } else {
          dispatch({ type: authConstants.LOGIN_FAILURE });
        }
      });
    }
  }, []);
  /* eslint-enable */
  return (
    <AppWrapper>
      <Header />
      <MainStyled>{children}</MainStyled>
      <Footer />
    </AppWrapper>
  );
};
