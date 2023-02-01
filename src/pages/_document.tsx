import Header from '@/components/common/header/header'
import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from 'styled-components'
import Button from '../components/button'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Button>Start</Button>
        <main>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  )
}
