import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const quickLinks = [
  { href: '/hizmetler/evden-eve-nakliyat', label: 'Evden Eve Nakliyat' },
  { href: '/hizmetler/panelvan-nakliye', label: 'Panelvan Nakliye' },
  { href: '/hizmetler/kucuk-nakliye-araci', label: 'Küçük Nakliye Aracı' },
  { href: '/hizmetler/sehirler-arasi-nakliye', label: 'Şehirler Arası Nakliye' },
  { href: '/hizmetler/sehir-ici-nakliye', label: 'Şehir İçi Nakliye' },
]

const regionLinks = [
  { href: '/bolge/kecioren-kucuk-nakliye', label: 'Keçiören Nakliye' },
  { href: '/bolge/cankaya-kucuk-nakliye', label: 'Çankaya Nakliye' },
  { href: '/bolge/yenimahalle-kucuk-nakliye', label: 'Yenimahalle Nakliye' },
  { href: '/bolge/etimesgut-kucuk-nakliye', label: 'Etimesgut Nakliye' },
  { href: '/bolge/sincan-kucuk-nakliye', label: 'Sincan Nakliye' },
  { href: '/bolge/mamak-kucuk-nakliye', label: 'Mamak Nakliye' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white pb-20 md:pb-4">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firma Bilgileri */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent-500 text-primary-700 font-heading font-extrabold text-lg px-3 py-1.5 rounded-lg">
                ANKAR
              </div>
              <div>
                <div className="font-heading font-bold text-sm leading-tight">Parça Eşya</div>
                <div className="font-heading font-bold text-sm leading-tight text-accent-400">Nakliye</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Ankara parça eşya taşıma ve küçük nakliye hizmeti. Güvenilir, hızlı ve ekonomik nakliyat çözümleri.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+905XXXXXXXXX" className="flex items-center gap-2 text-white/80 hover:text-accent-400 transition-colors">
                <Phone size={16} /> 0532 XXX XX XX
              </a>
              <a href="mailto:info@ankarparcaesyanakliye.com.tr" className="flex items-center gap-2 text-white/80 hover:text-accent-400 transition-colors">
                <Mail size={16} /> info@ankarparcaesyanakliye.com.tr
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={16} /> Ankara, Türkiye
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock size={16} /> Her Gün: 07:00 - 22:00
              </div>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-accent-400">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölgeler */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-accent-400">Hizmet Bölgeleri</h3>
            <ul className="space-y-2">
              {regionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sayfalar */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-accent-400">Kurumsal</h3>
            <ul className="space-y-2">
              <li><Link href="/hakkimizda" className="text-white/70 hover:text-white text-sm transition-colors">Hakkımızda</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link href="/teklif" className="text-white/70 hover:text-white text-sm transition-colors">Teklif Al</Link></li>
              <li><Link href="/iletisim" className="text-white/70 hover:text-white text-sm transition-colors">İletişim</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Ankara Parça Eşya Taşıma. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
