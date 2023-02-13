import '@/styles/globals.scss';
// import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app';
import { Layout } from '@/components/layout/layout';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/global';
import { StoreProvider } from '@/context';
import { SessionProvider } from 'next-auth/react';


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <SessionProvider session={session}>
        <StoreProvider>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
