import { createServerSupabaseClient } from '@/lib/supabase/server'
import SiteLayout from '@/components/layout/SiteLayout'
import HeroSlider from '@/components/home/HeroSlider'
import HeroArticle from '@/components/home/HeroArticle'
import TabArticles from '@/components/home/TabArticles'
import RegionsGrid from '@/components/home/RegionsGrid'
import ServicesGrid from '@/components/home/ServicesGrid'
import GallerySection from '@/components/home/GallerySection'
import CampaignSection from '@/components/home/CampaignSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import BlogSection from '@/components/home/BlogSection'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const supabase = createServerSupabaseClient()

  const [
    { data: sliders },
    { data: heroContent },
    { data: tabArticles },
    { data: regions },
    { data: services },
    { data: gallery },
    { data: campaigns },
    { data: testimonials },
    { data: blogPosts },
    { data: seoData },
  ] = await Promise.all([
    supabase.from('sliders').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('homepage_content').select('*').eq('section_key', 'hero_article').single(),
    supabase.from('tab_articles').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('regions').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('services').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('gallery').select('*').eq('is_active', true).order('sort_order').limit(6),
    supabase.from('campaigns').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('testimonials').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('blog_posts').select('*').eq('is_published', true).order('published_at', { ascending: false }).limit(3),
    supabase.from('page_seo').select('*').eq('page_key', 'homepage').single(),
  ])

  return (
    <SiteLayout>
      <HeroSlider slides={sliders || []} />
      <HeroArticle data={heroContent} />
      <TabArticles articles={tabArticles || []} />
      <ServicesGrid services={services || []} />
      <RegionsGrid regions={regions || []} />
      <GallerySection images={gallery || []} />
      <CampaignSection campaigns={campaigns || []} />
      <TestimonialsSection items={testimonials || []} />
      <BlogSection posts={blogPosts || []} />

      {/* CTA */}
      <section className="py-14 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-4">Hemen Teklif Alın</h2>
          <p className="text-white/80 mb-6 text-lg">Ankara parça eşya taşıma hizmeti için ücretsiz fiyat teklifi alın.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/teklif" className="bg-accent-500 hover:bg-accent-600 text-primary-800 font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105">Ücretsiz Teklif Al</a>
            <a href="tel:+905XXXXXXXXX" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-lg border-2 border-white/30 transition-all">0532 XXX XX XX</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'LocalBusiness',
        name: 'Ankara Parça Eşya Taşıma',
        description: seoData?.meta_description || 'Ankara parça eşya taşıma ve küçük nakliye hizmeti.',
        url: 'https://ankarparcaesyanakliye.com.tr',
        telephone: '+905XXXXXXXXX', email: 'info@ankarparcaesyanakliye.com.tr',
        address: { '@type': 'PostalAddress', addressLocality: 'Ankara', addressCountry: 'TR' },
        areaServed: { '@type': 'City', name: 'Ankara' },
        serviceType: ['Parça Eşya Taşıma', 'Küçük Nakliye', 'Evden Eve Nakliyat'],
      })}} />
    </SiteLayout>
  )
}
