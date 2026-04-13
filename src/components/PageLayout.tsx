import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { classNames } from '@/lib/classNames'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={classNames.pageContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
