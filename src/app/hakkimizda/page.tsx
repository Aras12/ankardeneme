import { Metadata } from 'next'
import { Shield, Truck, Clock, Award } from 'lucide-react'
import SiteLayout from '@/components/layout/SiteLayout'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Ankara Parça Eşya Taşıma hakkında. Güvenilir, profesyonel nakliye hizmeti.',
  alternates: { canonical: 'https://ankarparcaesyanakliye.com.tr/hakkimizda' },
}

const features = [
  { icon: Shield, title: 'Sigortalı Taşıma', desc: 'Tüm eşyalarınız sigorta güvencesi altında taşınır.' },
  { icon: Truck, title: 'Modern Araç Filosu', desc: 'Kamyonet, panelvan ve pikap araçlarımızla hizmetinizdeyiz.' },
  { icon: Clock, title: 'Zamanında Teslimat', desc: 'Söz verdiğimiz saatte eşyalarınız adresinde.' },
  { icon: Award, title: 'Profesyonel Ekip', desc: 'Deneyimli ve eğitimli personelimizle kaliteli hizmet.' },
]

export default function HakkimizdaPage() {
  return (
    <SiteLayout>
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-3xl">Hakkımızda</h1>
          <p className="text-white/70 mt-2">Ankara&apos;nın güvenilir nakliye firması</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-html text-gray-600 text-lg leading-relaxed">
          <p>Ankara Parça Eşya Taşıma olarak yılların deneyimi ile Ankara genelinde küçük nakliye ve parça eşya taşıma hizmeti sunuyoruz. Müşteri memnuniyetini ön planda tutan çalışma anlayışımız ile fark yaratıyoruz.</p>
          <p>Kamyonet, panelvan ve pikap araçlardan oluşan modern filomuz ile tek parça eşyadan komple eve kadar her türlü taşıma işini profesyonelce gerçekleştiriyoruz. Ankara&apos;nın 25 ilçesine ve şehirler arası nakliye hizmeti veriyoruz.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <f.icon size={24} className="text-primary-600" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-700 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  )
}
