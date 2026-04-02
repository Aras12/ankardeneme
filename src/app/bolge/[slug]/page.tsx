import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import SiteLayout from '@/components/layout/SiteLayout'
import { getImageUrl } from '@/lib/constants'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = createServerSupabaseClient()
  const { data } = await supabase.from('regions').select('*').eq('slug', params.slug).single()
  if (!data) return {}
  return {
    title: data.title || `${data.name} Küçük Nakliye`,
    description: data.meta_description,
    alternates: { canonical: `https://ankarparcaesyanakliye.com.tr/bolge/${data.slug}` },
    openGraph: {
      title: data.title || `${data.name} Küçük Nakliye`,
      description: data.meta_description || '',
      images: [{ url: getImageUrl(data.image_url) }],
    },
  }
}

export default async function RegionDetailPage({ params }: { params: { slug: string } }) {
  const supabase = createServerSupabaseClient()
  const { data: region } = await supabase.from('regions').select('*').eq('slug', params.slug).single()
  if (!region) notFound()

  const { data: services } = await supabase.from('services').select('name, slug').eq('is_active', true).order('sort_order')

  return (
    <SiteLayout>
      <div className="relative h-64 md:h-72 bg-primary-900">
        <Image src={getImageUrl(region.image_url)} alt={region.name} fill className="object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white font-heading font-extrabold text-2xl md:text-4xl">{region.name} Küçük Nakliye</h1>
            <p className="text-white/70 mt-2">Ankara {region.name} parça eşya taşıma hizmeti</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {region.content ? (
          <div className="content-html" dangerouslySetInnerHTML={{ __html: region.content }} />
        ) : (
          <div className="content-html">
            <p>{region.name} bölgesinde parça eşya taşıma ve küçük nakliye hizmeti veriyoruz. Kamyonet, panelvan ve pikap araçlarımızla {region.name} ve çevresine hızlı ve güvenilir nakliye hizmeti sunuyoruz.</p>
            <h2>{region.name} Nakliye Hizmetlerimiz</h2>
            <p>{region.name} ilçesinde sunduğumuz nakliye hizmetleri arasında parça eşya taşıma, evden eve nakliyat, ofis taşıma ve şehirler arası nakliyat bulunmaktadır. Profesyonel ekibimiz ve modern araç filomuz ile eşyalarınız güvende.</p>
          </div>
        )}

        {/* Hizmetler listesi */}
        {services && services.length > 0 && (
          <div className="mt-10">
            <h2 className="font-heading font-bold text-xl text-primary-700 mb-4">{region.name} Bölgesinde Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <a key={s.slug} href={`/hizmetler/${s.slug}`} className="flex items-center gap-2 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg p-3 transition-all">
                  <span className="text-primary-600 font-medium text-sm">{s.name}</span>
                  <span className="text-gray-400 text-xs ml-auto">→</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 bg-accent-50 border border-accent-200 rounded-xl p-6 text-center">
          <h2 className="font-heading font-bold text-xl text-primary-700 mb-3">{region.name} Nakliye Teklifi Alın</h2>
          <p className="text-gray-600 mb-4">{region.name} bölgesinde parça eşya taşıma için ücretsiz teklif alın.</p>
          <a href="/teklif" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg transition-all">Teklif Al</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: `${region.name} Küçük Nakliye`, description: region.meta_description,
        provider: { '@type': 'LocalBusiness', name: 'Ankara Parça Eşya Taşıma' },
        areaServed: { '@type': 'Place', name: `${region.name}, Ankara` },
      })}} />
    </SiteLayout>
  )
}
