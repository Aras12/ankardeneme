'use client'

import { Phone, MessageCircle } from 'lucide-react'

export default function StickyButtons() {
  return (
    <>
      {/* Desktop: Sağ alt köşe */}
      <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-3 z-50">
        <a
          href="https://wa.me/905XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle size={26} />
        </a>
        <a
          href="tel:+905XXXXXXXXX"
          className="bg-accent-500 hover:bg-accent-600 text-primary-800 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
          aria-label="Hemen Ara"
        >
          <Phone size={26} />
        </a>
      </div>

      {/* Mobil: Alt yapışkan bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex">
        <a
          href="tel:+905XXXXXXXXX"
          className="flex-1 bg-accent-500 text-primary-800 font-bold py-3.5 flex items-center justify-center gap-2 text-sm"
        >
          <Phone size={20} /> Hemen Ara
        </a>
        <a
          href="https://wa.me/905XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white font-bold py-3.5 flex items-center justify-center gap-2 text-sm"
        >
          <MessageCircle size={20} /> WhatsApp
        </a>
      </div>
    </>
  )
}
