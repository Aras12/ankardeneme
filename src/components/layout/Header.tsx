'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/bolge', label: 'Bölgeler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/blog', label: 'Blog' },
  { href: '/teklif', label: 'Teklif Al' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-primary-600 shadow-lg sticky top-0 z-40">
      {/* Üst bar */}
      <div className="bg-primary-700 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span>Her Gün: 07:00 - 22:00 | Ankara Geneli Hizmet</span>
          <div className="flex items-center gap-4">
            <a href="tel:+905XXXXXXXXX" className="flex items-center gap-1 hover:text-accent-400 transition-colors">
              <Phone size={14} /> 0532 XXX XX XX
            </a>
          </div>
        </div>
      </div>

      {/* Ana navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-accent-500 text-primary-700 font-heading font-extrabold text-lg px-3 py-1.5 rounded-lg">
              ANKAR
            </div>
            <div className="text-white">
              <div className="font-heading font-bold text-sm leading-tight">Parça Eşya</div>
              <div className="font-heading font-bold text-sm leading-tight text-accent-400">Nakliye</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white hover:bg-primary-500 px-3 py-2 rounded-lg text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+905XXXXXXXXX"
              className="ml-2 bg-accent-500 hover:bg-accent-600 text-primary-800 font-bold px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2"
            >
              <Phone size={16} /> Hemen Ara
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menü"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-700 border-t border-primary-500">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/90 hover:text-white hover:bg-primary-500 px-3 py-2.5 rounded-lg text-base font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <a
                href="tel:+905XXXXXXXXX"
                className="flex-1 bg-accent-500 text-primary-800 font-bold px-4 py-2.5 rounded-lg text-center text-sm"
              >
                <Phone size={16} className="inline mr-1" /> Ara
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                className="flex-1 bg-green-500 text-white font-bold px-4 py-2.5 rounded-lg text-center text-sm"
              >
                <MessageCircle size={16} className="inline mr-1" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
