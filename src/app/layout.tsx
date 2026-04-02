import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Ankara Parça Eşya Taşıma | Küçük Nakliye Hizmeti',
    template: '%s | Ankara Parça Eşya Taşıma',
  },
  description: 'Ankara parça eşya taşıma ve küçük nakliye hizmeti. Kamyonet, panelvan, pikap nakliye. Ekonomik fiyatlar, güvenilir hizmet.',
  metadataBase: new URL('https://ankarparcaesyanakliye.com.tr'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Ankara Parça Eşya Taşıma',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ankarparcaesyanakliye.com.tr' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
