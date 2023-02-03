import React, { PropsWithChildren, useEffect } from "react";
import { Header } from "../common/header";
import { AppWrapper, MainStyled } from "./styled";
import { useStore } from "@/context";
import { getSession } from "next-auth/react";
import authConstants from "@/context/conastance";
import Footer from '@/components/common/footer'

export const Layout = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useStore();
  const { data: user, loading, authorization } = state;

  useEffect(() => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    if (!authorization) {
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
  return (
    <AppWrapper>
      <Header />
      <MainStyled>
        {children}
      </MainStyled>
    <Footer/>
    </AppWrapper>
  );
};
