import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout/layout'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  )
}
