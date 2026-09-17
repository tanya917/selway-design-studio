import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import CrawlingSlug from '@/components/CrawlingSlug'
import AboutAccordions from '@/components/AboutAccordions'

export const metadata: Metadata = genMeta(
  'About',
  'Selway Design Studio is an award-winning interior design studio led by Tanya Selway, working across London, Los Angeles and worldwide. Meet the studio, our values and our design process.',
  undefined,
  '/about'
)

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b-2 border-accent-rubis bg-accent-rubis py-28 sm:py-24" style={{ borderBottom: '4px solid #B7C7D1' }}>
        <div className="container-full">
        </div>
      </section>

      {/* Architectural Elevations */}
      <section className="bg-selway-cream py-8 sm:py-12">
        <div className="container-full">
          <div className="w-full">
            <img
              src="/sketches/sketch-about_page-bathroom.png"
              alt="Architectural bathroom elevations and floor plans"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Studio Statement */}
      <section className="bg-selway-cream py-3 sm:py-4">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <h2 className="sr-only">About the Studio</h2>
              <div className="relative w-64 h-24 mb-4">
                <Image
                  src="/hand_drawn_assets/about_the_studio.png"
                  alt="About the Studio"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-5 text-base leading-relaxed">
                <p>
                  Selway Design Studio is an award-winning interior design studio led by Tanya Selway, based in the UK and working regularly abroad across the US and Europe. We take on a small number of projects at any one time to ensure close collaboration and constant communication with all clients and teams on a project.
                </p>
                <p>
                  We design hyper-personalised interiors for private clients, developers and hospitality brands, managing every project from first concept through to completion. Every project takes its own shape from its architecture, its client and its setting, but each carries the same instinct for material depth, considered detail and a strong sense of place.
                </p>
                <p>
                  Weaving worldliness and a kaleidoscope of cultural references into every design decision, we're as drawn to the uncommon details as we are to the overarching concept: an unexpected upholstery, a sculptural object that catches the eye, a material choice that surprises before it settles. Much of what fills a room is collected and commissioned rather than bought off the shelf. Textiles, joinery, furniture and individual pieces made with the craftspeople and vendors we trust, sit alongside lifelong collections and bold new discoveries, so a finished space never feels furnished in one sitting.
                </p>
                <p>
                  A global network of vendors, makers and collaborators in London, Los Angeles and beyond enables us to realise custom design strategies with people whose work carries its own provenance, craft and story.
                </p>
                <p>
                  A deep understanding of material and architectural behaviour grants us unique insight into crafting interiors that are intuitive, artful and shaped to endure.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ minHeight: 'clamp(250px, 40vh, 700px)' }}>
              <img
                src="/Images%20for%20About%20page/Patagonia_Table_Watercolor_Rendering_cutout.png"
                alt="Patagonia table watercolor rendering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tanya's Bio */}
      <section className="bg-selway-cream py-0">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="flex justify-center mt-2 lg:mt-40">
              <div className="relative overflow-hidden" style={{ width: '512px', height: '512px' }}>
                <Image
                  src="/portraits_tanya/2021 John Davison/Tanya Selway - John Davison - Color.png"
                  alt="Tanya Selway"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="sr-only">About Tanya Selway</h2>
              <div className="relative w-80 h-32 mb-4">
                <Image
                  src="/hand_drawn_assets/about_tanya_selway.png"
                  alt="About Tanya Selway"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="italic text-accent-rubis font-semibold">
                  &ldquo;There's so much possibility, beauty and intrigue in designing a space. For me it begins with listening, understanding what a client has in mind, or helping uncover it when they don't yet know, and translating that into something tangible.&rdquo;
                </p>
                <p>
                  Tanya Selway is the founder and principal of Selway Design Studio, the evolution of a decade-long design practice that began in Los Angeles before transitioning back to London, the city where she was born.
                </p>
                <p>
                  Tanya's multicultural, artistic London upbringing runs through the ambitious creativity she brings to interior design. Raised in a creative household -  her father an art director and painter -  in a home that was constantly evolving. She grew up with a natural fascination for play, experimentation and the unexpected, a through-line she still brings to every project today, whether that's introducing a new artist, an unusual accessory, or a material that feels just a little surprising.
                </p>
                <p>
                  Trained as a fine art painter, Tanya works as an artist and designer all at once, bringing a keen understanding of colour, texture and materiality to every space she designs.
                </p>
                <p>
                  Her practice is informed by a breadth of cultural references - film, art, and the rich colour palettes of her transatlantic European, Middle Eastern and African roots - and a precise, emotional sensitivity to her surroundings.
                </p>
                <p>
                  Sustainability runs through her approach too, sourcing locally wherever a project allows, while holding onto the global outlook that a decade of transatlantic work has given her. Tanya is a native of London, England, where she lives with her husband and two daughters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Values / Process accordions */}
      <AboutAccordions />

      {/* CTA Section */}
      <section className="bg-selway-cream py-16 sm:py-24">
        <div className="container-full text-center">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>

      {/* Crawling Slug Animation */}
      <section className="w-full bg-selway-cream py-0">
        <CrawlingSlug />
      </section>
    </>
  )
}
