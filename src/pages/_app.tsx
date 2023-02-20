import { SessionProvider } from 'next-auth/react';
// import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components/layout/layout';

import { StoreProvider } from '@/context';

import '@/styles/globals.scss';
import { lightTheme } from '@/styles/theme';

import '../index.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <SessionProvider session={session}>
        <StoreProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
