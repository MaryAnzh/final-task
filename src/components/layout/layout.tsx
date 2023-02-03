import Header from '../common/header'

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>{children}</main>
    </div>
  )
}