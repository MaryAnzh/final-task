import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'styled-components'
import { Layout } from '@/components/layout/layout'
import { lightTheme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'
import { StoreProvider } from '@/context'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: {session,...pageProps} }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
    <SessionProvider session={session}>
      <Layout>
        <GlobalStyle />
        <StoreProvider>
          <Component {...pageProps} />
            </StoreProvider>
      </Layout>
      </SessionProvider>
    </ThemeProvider>
  )
}
