import Header from '@/components/common/header/header'
import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <main>
            <Main />
          </main>
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  )
}
