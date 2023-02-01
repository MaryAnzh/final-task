import Header from '@/components/common/header/header'
import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from 'styled-components'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <main>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  )
}
