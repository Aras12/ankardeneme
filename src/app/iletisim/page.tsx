'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import SiteLayout from '@/components/layout/SiteLayout'

export default function IletisimPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    const supabase = createClient()
    await supabase.from('contact_submissions').insert([form])
    setSuccess(true); setLoading(false)
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"

  return (
    <SiteLayout>
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-3xl">İletişim</h1>
          <p className="text-white/70 mt-2">Bize ulaşın, size yardımcı olalım</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* İletişim bilgileri */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-heading font-bold text-lg text-primary-700 mb-4">İletişim Bilgileri</h2>
              <div className="space-y-4 text-sm">
                <a href="tel:+905XXXXXXXXX" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center"><Phone size={18} className="text-primary-600" /></div>
                  <div><div className="font-semibold">Telefon</div><div>0532 XXX XX XX</div></div>
                </a>
                <a href="mailto:info@ankarparcaesyanakliye.com.tr" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center"><Mail size={18} className="text-primary-600" /></div>
                  <div><div className="font-semibold">E-posta</div><div>info@ankarparcaesyanakliye.com.tr</div></div>
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center"><MapPin size={18} className="text-primary-600" /></div>
                  <div><div className="font-semibold">Adres</div><div>Ankara, Türkiye</div></div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center"><Clock size={18} className="text-primary-600" /></div>
                  <div><div className="font-semibold">Çalışma Saatleri</div><div>Her Gün: 07:00 - 22:00</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {success ? (
              <div className="bg-white rounded-xl p-12 shadow-sm text-center border border-gray-100">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h2 className="font-heading font-bold text-xl text-primary-700">Mesajınız Alındı!</h2>
                <p className="text-gray-600 mt-2">En kısa sürede dönüş yapacağız.</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-heading font-bold text-lg text-primary-700 mb-6">Bize Yazın</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" className={inputClass} placeholder="Ad Soyad *" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
                    <input type="tel" className={inputClass} placeholder="Telefon *" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} required />
                    <input type="email" className={inputClass} placeholder="E-posta" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                    <input type="text" className={inputClass} placeholder="Konu" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} />
                  </div>
                  <textarea className={inputClass} rows={5} placeholder="Mesajınız" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
                  <button type="submit" disabled={loading} className="bg-accent-500 hover:bg-accent-600 text-primary-800 font-bold px-8 py-3 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50">
                    <Send size={18} /> {loading ? 'Gönderiliyor...' : 'Gönder'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
