import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import { getHeroImages, getProjects } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Award-Winning Interior Design Studio | Selway Design Studio',
  description: 'Selway Design Studio creates hyper-personalised, beautifully considered spaces for private clients, residential projects, hospitality and commercial partners across London, Los Angeles and worldwide.',
  keywords: [
    'interior design',
    'interior design studio',
    'interior designer London',
    'interior designer Los Angeles',
    'bespoke interior design',
    'residential interior design',
    'hospitality interior design',
    'luxury interior design',
    'London',
    'Los Angeles',
    'Austin',
    'design studio',
    'Stelly Selway',
    'Selway Design Studio',
    'Tanya Selway',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.selwaydesignstudio.com',
    title: 'Award-Winning Interior Design Studio | Selway Design Studio',
    description: 'Selway Design Studio (formerly Stelly Selway) creates hyper-personalised, beautifully considered interiors for private clients, residential projects, hospitality and commercial partners across London, Los Angeles and worldwide.',
    images: [
      {
        url: 'https://www.selwaydesignstudio.com/carousel_pics/Selway-Jessica-Alexander-Whitehall-Road-London-Primary-Bedroom-3.jpg',
        width: 1200,
        height: 630,
        alt: 'Selway Design Studio - Award-winning interior design',
      },
    ],
  },
}

export default async function Home() {
  const sanityImages = await getHeroImages()
  const projects = await getProjects()
  const featuredProject = projects.length > 0 ? projects[0] : null

  const carouselImages = [
    { _id: 'carousel-1', image: { asset: { url: '/carousel_pics/selway_design_studio-jessica_alexander-jersey_road-29.jpg' } }, alt: 'Jersey Road kitchen with custom cherry joinery, leather-fronted cabinets and marble countertops' },
    { _id: 'carousel-2', image: { asset: { url: '/carousel_pics/Selway-Austin-Leis-44-East-Living-Room-5.jpg' } }, alt: '44 East Austin living room with warm interiors and considered material selection' },
    { _id: 'carousel-3', image: { asset: { url: '/carousel_pics/Selway-Jessica-Alexander-Cervantes-Place-Los-Angeles-Living-Room-0.jpg' } }, alt: 'Cervantes Place Los Angeles living room with luxury interior design and bespoke furnishings' },
    { _id: 'carousel-4', image: { asset: { url: '/carousel_pics/Selway-Jessica-Alexander-Whitehall-Road-London-Primary-Bedroom-3.jpg' } }, alt: 'Whitehall Road London primary bedroom with custom joinery and soft furnishings' },
    { _id: 'carousel-5', image: { asset: { url: '/carousel_pics/Selway-Jessica-Alexander-Whitehall-Road-London-Primary-Bedroom-17.jpg' } }, alt: 'Whitehall Road London bedroom detail with natural materials and considered design' },
    { _id: 'carousel-6', image: { asset: { url: '/carousel_pics/Selway-Lindsay-Brown-W36-Austin-LoRes-7.jpg' } }, alt: 'W36 Austin residence with warm interiors and bespoke interior design elements' },
    { _id: 'carousel-7', image: { asset: { url: '/carousel_pics/Selway-Lindsay-Brown-W36-Austin-LoRes-17_B.jpg' } }, alt: 'W36 Austin living space showcasing luxury interior design and material depth' },
    { _id: 'carousel-8', image: { asset: { url: '/carousel_pics/Selway-Simon-Brown-Upper-Mall-London-Web-80.jpg' } }, alt: 'Upper Mall London interior design project featuring limewashed walls and natural materials' },
  ]

  const heroImages = [...carouselImages, ...sanityImages]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Selway Design Studio',
            description: 'Selway Design Studio is an award-winning, full-service interior design studio led by principal Tanya Selway. The studio creates hyper-personalised, beautifully considered spaces for private clients, residential projects, hospitality and commercial partners across London, Los Angeles and worldwide.',
            url: 'https://www.selwaydesignstudio.com',
            telephone: 'info@selwaydesignstudio.com',
            email: 'info@selwaydesignstudio.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Bramber Court, 2 Bramber Road',
              addressLocality: 'London',
              addressRegion: 'England',
              postalCode: 'W14 9PW',
              addressCountry: 'GB',
            },
            image: 'https://www.selwaydesignstudio.com/carousel_pics/Selway-Jessica-Alexander-Whitehall-Road-London-Primary-Bedroom-3.jpg',
            sameAs: [
              'https://www.instagram.com/selway.design.studio/',
              'https://www.linkedin.com/in/tanya-selway-a4a11019/',
              'https://uk.pinterest.com/selwaydesignstudio/',
            ],
            founder: {
              '@type': 'Person',
              name: 'Tanya Selway',
              url: 'https://www.selwaydesignstudio.com/about',
              jobTitle: 'Founder & Principal',
            },
            leader: {
              '@type': 'Person',
              name: 'Tanya Selway',
              jobTitle: 'Principal',
            },
            areaServed: ['London', 'Los Angeles', 'Austin', 'UK', 'US', 'West London'],
            serviceType: [
              'Residential Interior Design',
              'Luxury Interior Design',
              'Hospitality Design',
              'Commercial Interior Design',
              'Bespoke Interior Design',
              'Family Home Interior Design',
              'New Build Interior Design',
              'Warm Interiors',
              'High End Interiors',
              'Quirky Interior Design',
              'Colourful Interior Design',
              'Mid Century Interior Design',
              'Personalised Interior Design',
              'Thoughtful Interior Design',
              'Wood Panelling Design',
              'Maximalist Interior Design',
              'Cool Interior Design',
              'Beautiful Interior Design',
            ],
          }),
        }}
      />
      {/* Hero Carousel - Full Screen */}
      <HeroCarousel images={heroImages} />

      {/* Studio Statement - Text Left, Image Right */}
      <section className="bg-selway-cream-dark py-6 sm:py-12">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-lg sm:text-xl lg:text-2xl leading-tight text-selway-ink mb-6">
                Spaces shaped by story.
              </p>
              <h1 className="heading-section mb-8 text-selway-ink">Selway Design Studio is an Award-winning full service Interior Design Studio led by Tanya Selway and based in London, England.</h1>
              <div className="space-y-6 mb-8">
                <p className="body-text text-lg leading-relaxed text-selway-stone">
                  Our approach is to create beautifully considered, personalised and emotionally intuitive spaces for private clients, residential projects, hospitality and commercial partners alike.
                </p>
                <p className="body-text text-lg leading-relaxed text-selway-stone">
                  We believe a space can shape how you feel. Your sense of ease, of possibility, of belonging exactly where you are. We work across functionality, material selection, lighting and architectural details to bring that feeling to life. Our role is to read what resonates with each client and translate that into a scheme that carries their story, which is why no two Selway Design Studio projects are ever the same.
                </p>
                <p className="body-text text-lg leading-relaxed text-selway-stone">
                  Featured in top publications including <a href="https://www.ft.com/content/230dee97-eaeb-4be3-8001-c6143dd061d6" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-rubis transition-colors">Financial Times</a>, <a href="https://www.houseandgarden.co.uk/article/anatomy-of-a-room-a-playful-rendition-of-a-contemporary-kitchen-by-stelly-selway" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-rubis transition-colors">House & Garden</a> and <a href="https://www.architecturaldigest.com/story/creative-couples-texas-craftsman-stelly-selway" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-rubis transition-colors">Architectural Digest</a>, we bring detailed attention to every project.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-full lg:min-h-96 overflow-hidden">
              <Image
                src="/pics_for_home_page/Selway-Austin-Leis-44-East-Primary-Bedroom-6.jpg"
                alt="Interior design project"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Image Left, Text Right */}
      {featuredProject && (
        <section className="bg-selway-cream-dark py-6 sm:py-12">
          <div className="container-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              {featuredProject?.image?.asset?.url && (
                <div className="relative h-96 overflow-hidden order-2 lg:order-1">
                  <Image
                    src={featuredProject.image.asset.url}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Text */}
              <div className="order-1 lg:order-2">
                <p className="text-sm uppercase tracking-widest text-selway-stone mb-4 font-semibold">
                  Featured Project
                </p>
                <h2 className="heading-section mb-6 text-selway-ink">
                  Upper Mall
                </h2>
                <p className="body-text text-base text-selway-stone mb-8 leading-relaxed">
                  A Victorian townhouse interior design and interior architecture project on Upper Mall, West London, overlooking the River Thames.
                </p>
                <p className="body-text text-base text-selway-stone mb-8 leading-relaxed">
                  This full gut renovation included a new basement, loft and rear extension, transforming the property into a refined family home rooted in craftsmanship and a strong sense of place. Selway Design Studio designed a bespoke kitchen, four bathrooms, four reception rooms and five bedrooms establishing a cohesive interior language across the entire house. Softly limewashed walls on the ground floor combine with natural materials and custom joinery, creating warmth and atmosphere, drawing on the changing light and landscape of the river beyond. Bespoke elements define the project, including custom George Smith sofas, shōji-style sliding doors crafted in timber and hemp linen wrap the basement and primary bedroom walls, custom stone vanities in the bathrooms and sculptural lighting from Aerin, Bocci and Volker Haug.
                </p>
                <p className="body-text text-base text-selway-stone mb-8 leading-relaxed">
                  As featured in <a href="https://designanthologyuk.com/article/london-townhouse-stelly-selway/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-rubis transition-colors">Design Anthology</a>
                </p>
                <Link href="/projects/upper-mall" className="btn-primary">
                  View project
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Approach - Text Left, Image Right */}
      <section className="bg-selway-cream-dark py-6 sm:py-12">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <h2 className="sr-only">Our Approach</h2>
              <div className="relative w-72 h-24 mb-8">
                <Image
                  src="/hand_drawn_assets/files/our_approach_button.png"
                  alt="Our Approach"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6 mb-12">
                <p className="body-text text-lg leading-relaxed text-selway-stone">
                  Every project starts the same way: with listening. Before a single material is chosen, we take the time to understand a client's instincts, the rhythms of how they live, and the character of the space itself, so that spatial planning, material selection, lighting and bespoke joinery all grow from one coherent idea.
                </p>
                <p className="body-text text-lg leading-relaxed text-selway-stone">
                  Our Process is grounded in transparency, integrity and honesty, with clients and with the makers and collaborators who work alongside us. That discipline is what earns a studio the freedom to be genuinely creative, and it carries through from the first conversation to the final installation, so nothing about the workflow ever feels like a mystery.
                </p>
                <p className="body-text text-lg leading-relaxed text-selway-stone">
                  Our ambition isn't simply to design a beautiful room. It's to create a space that feels more like itself with each year that passes, one that holds a family's story, enriches an experience, responds to its setting, and quietly makes everyday life more beautiful.
                </p>
              </div>
              <Link href="/about" className="btn-primary">
                Learn more about us
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-full lg:min-h-96 overflow-hidden">
              <Image
                src="/Stelly-Selway-Simon-Brown-Upper-Mall-London-Web-23.jpg"
                alt="Interior design"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
