import { ReactNode } from "react"
import Header from "../common/header"

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Header className="header" />
      <main>{children}</main>
    </>
  )
}