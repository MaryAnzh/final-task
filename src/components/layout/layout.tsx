import { ReactNode } from "react"
import Header from "../common/header"
import Footer from '@/components/common/footer'

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="wrapper">
      <Header className="header" />
      <main>{children}</main>
        <Footer/>
    </div>
  )
}
