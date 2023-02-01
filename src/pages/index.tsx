import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { HeaderStyled } from '@/components/common/header/styled'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <h2>About</h2>
      </div>
  )
}
