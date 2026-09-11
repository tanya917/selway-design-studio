import { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata(
  'Shop - Coming Soon',
  'Selway Design Studio Shop - curated design pieces coming soon',
  undefined,
  '/shop'
)

export default function Shop() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-selway-cream py-16 sm:py-24">
        <div className="container-full">
          <h1 className="heading-1 mb-8 text-center">Selway Design Shop</h1>
          <p className="text-center text-lg text-selway-stone max-w-2xl mx-auto">
            Curated design pieces and products from our studio
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-full">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-accent-rubis opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className="heading-2 mb-6">Coming Soon</h2>

            <p className="text-lg text-selway-stone mb-8 leading-relaxed">
              We're currently curating a thoughtfully selected collection of design pieces, materials, and products that reflect our studio's aesthetic and values. Each item has been chosen for its craft, quality, and story.
            </p>

            <p className="text-base text-selway-stone mb-12 opacity-75">
              Stay tuned for the launch of Selway Design Shop, where you'll discover carefully selected pieces for your home.
            </p>

            {/* Notification Signup (optional) */}
            <div className="bg-selway-cream p-8 rounded mb-12">
              <h3 className="text-lg font-semibold text-selway-ink mb-4">Get Notified When We Launch</h3>
              <p className="text-sm text-selway-stone mb-6">
                Be among the first to discover our curated collection
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-selway-stone rounded focus:outline-none focus:border-accent-rubis"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-selway-ink text-white font-semibold rounded hover:bg-accent-rubis transition-colors"
                >
                  Notify Me
                </button>
              </form>
            </div>

            <Link href="/" className="inline-block text-accent-rubis hover:text-accent-blue transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories (for later) */}
      <section className="bg-selway-cream py-16 sm:py-24">
        <div className="container-full">
          <h2 className="heading-2 mb-12 text-center">What's Coming</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Furniture', desc: 'Bespoke and curated pieces for every space' },
              { title: 'Lighting', desc: 'Lighting design and carefully selected fixtures' },
              { title: 'Textiles', desc: 'Rugs, cushions, and soft furnishings' },
              { title: 'Accessories', desc: 'Design-led home accessories and décor' },
              { title: 'Materials', desc: 'Material samples and interior finishes' },
              { title: 'Collaborations', desc: 'Exclusive pieces from our maker network' },
            ].map((category) => (
              <div key={category.title} className="bg-white p-8 rounded text-center">
                <h3 className="text-lg font-semibold text-selway-ink mb-3">{category.title}</h3>
                <p className="text-sm text-selway-stone">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
