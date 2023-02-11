import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Layout } from '@/components/layout/layout'
import { lightTheme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )
}
