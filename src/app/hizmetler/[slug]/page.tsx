import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import SiteLayout from '@/components/layout/SiteLayout'
import { getImageUrl } from '@/lib/constants'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = createServerSupabaseClient()
  const { data } = await supabase.from('services').select('*').eq('slug', params.slug).single()
  if (!data) return {}
  return {
    title: data.title || data.name,
    description: data.meta_description,
    alternates: { canonical: `https://ankarparcaesyanakliye.com.tr/hizmetler/${data.slug}` },
    openGraph: {
      title: data.title || data.name,
      description: data.meta_description || '',
      images: [{ url: getImageUrl(data.image_url) }],
      type: 'article',
    },
  }
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const supabase = createServerSupabaseClient()
  const { data: service } = await supabase.from('services').select('*').eq('slug', params.slug).single()
  if (!service) notFound()

  return (
    <SiteLayout>
      <div className="relative h-64 md:h-80 bg-primary-900">
        <Image src={getImageUrl(service.image_url)} alt={service.name} fill className="object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white font-heading font-extrabold text-2xl md:text-4xl">{service.name}</h1>
            <p className="text-white/70 mt-2 text-lg">{service.short_description}</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        <div className="content-html" dangerouslySetInnerHTML={{ __html: service.content || '<p>İçerik yakında eklenecektir.</p>' }} />
        <div className="mt-10 bg-accent-50 border border-accent-200 rounded-xl p-6 text-center">
          <h2 className="font-heading font-bold text-xl text-primary-700 mb-3">Hemen Teklif Alın</h2>
          <p className="text-gray-600 mb-4">{service.name} hizmeti için ücretsiz fiyat teklifi alın.</p>
          <a href="/teklif" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg transition-all">Teklif Al</a>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: service.name, description: service.meta_description,
        provider: { '@type': 'LocalBusiness', name: 'Ankara Parça Eşya Taşıma' },
        areaServed: { '@type': 'City', name: 'Ankara' },
      })}} />
    </SiteLayout>
  )
}
