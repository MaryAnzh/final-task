import Header from '@/components/common/header/header'
import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from 'styled-components'
import { Layout } from '@/components/layout/layout'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
