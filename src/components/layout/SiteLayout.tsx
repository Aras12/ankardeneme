import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyButtons from '@/components/layout/StickyButtons'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-wrapper min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyButtons />
    </div>
  )
}
