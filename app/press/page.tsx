import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import pressConfig from '@/press.config.json'

export const metadata: Metadata = {
  title: 'Press & Media | Selway Design Studio - Interior Design Coverage',
  description: 'Press coverage and media features of Selway Design Studio and Tanya Selway. Featured in Financial Times, Architectural Digest, House & Garden, and leading design publications.',
  keywords: ['press', 'media', 'news', 'interior design', 'Tanya Selway', 'design press', 'interior design coverage', 'architecture press', 'design media', 'Financial Times', 'House & Garden', 'Architectural Digest'],
  openGraph: {
    type: 'website',
    title: 'Press & Media | Selway Design Studio',
    description: 'Press coverage and media features of Selway Design Studio and Tanya Selway. Featured in Financial Times, Architectural Digest, House & Garden, and more.',
  },
}

type PressItem =
  | { file: string; publication: string; date: string; title: string; crop?: { scale: number; positionX: string; positionY: string } }
  | { url: string; publication: string; date: string; title: string; image?: string }
  | { image: string; title: string; publication?: string; date?: string }

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const parts = dateStr.split('.');
  const month = parseInt(parts[1], 10);
  const year = parts[0];
  return `${months[month - 1]} ${year}`;
}

const pressItems: PressItem[] = [
  {
    url: 'https://www.ft.com/content/230dee97-eaeb-4be3-8001-c6143dd061d6',
    publication: 'Financial Times',
    date: '2025.04',
    title: 'Should you put a bath in the bedroom?',
    image: '0G0A6882 (1).jpg'
  },
  {
    file: '2026.07.07_PRINT-Financial Times_Bedroom Bath.pdf',
    publication: 'Financial Times',
    date: '2026.07.07',
    title: 'Bedroom Bath'
  },
  {
    file: '2025.12.13_The Guardian_FULL CLIPPING.pdf',
    publication: 'The Guardian',
    date: '2025.12.13',
    title: 'Full Clipping',
    image: 'project images/whitehall road/selway_design_studio-jessica_alexander-whitehall_road-primary_bedroom-12.jpg'
  },
  {
    url: 'https://www.architecturaldigest.com/story/creative-couples-texas-craftsman-stelly-selway',
    publication: 'Architectural Digest',
    date: '2025.10.15',
    title: 'Creative Couples Texas Craftsman',
    image: 'project images/rosedale/selway_design_studio-lindsay_brown-rosedale-16.jpg'
  },
  {
    file: '2025.08.22_The London Magazine_Past Glories.pdf',
    publication: 'The London Magazine',
    date: '2025.08.22',
    title: 'Past Glories',
    crop: { scale: 1.3, positionX: '50%', positionY: '50%' }
  },
  {
    url: 'https://design-milk.com/an-austin-apartment-that-reflects-its-film-producer-owner/',
    publication: 'Design Milk',
    date: '2023.08.31',
    title: 'An Austin Apartment That Reflects Its Film Producer Owner',
    image: 'project images/44 east/selway_design_studio-44_east-living_room-1.jpg'
  },
  {
    url: 'https://www.houseandgarden.co.uk/article/anatomy-of-a-room-a-playful-rendition-of-a-contemporary-kitchen-by-stelly-selway',
    publication: 'House & Garden',
    date: '2026.05',
    title: 'Anatomy of a Room',
    image: 'Selway-Design-Studio-Jessica-Alexander-Jersey-Road-London-LoRes-16.jpg'
  },
  {
    url: 'https://designanthologyuk.com/article/london-townhouse-stelly-selway/',
    publication: 'Design Anthology',
    date: '2026.05',
    title: 'London Townhouse',
    image: 'Stelly-Selway-Simon-Brown-Upper-Mall-London-Web-23.jpg'
  },
  {
    url: 'https://www.sightunseen.com/2025/06/week-of-june-16-2025/',
    publication: 'Sight Unseen',
    date: '2025.06',
    title: 'Week of June 16 2025',
    image: 'Stelly-Selway-Jessica-Alexander-Port-Xabia-LoRes34.jpg'
  },
  {
    image: 'AUH-HDA-WINNER-logo-w[72].png',
    title: 'WINNERS FOR EXCELLENCE IN INTERIOR DESIGN 2026'
  },
  {
    file: '2023.04.23_Livingetc_3 steps designers take to achieve \'quiet luxury\' - the vibe that makes a home feel more expensive.pdf',
    publication: 'Living Etc',
    date: '2023.04.23',
    title: '3 Steps to Achieve Quiet Luxury'
  },
]

export default function Press() {
  // Generate structured data for press articles
  const pressArticles = pressItems
    .filter((item) => 'url' in item || 'file' in item)
    .map((item, index) => ({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: item.title,
      description: `Featured in ${item.publication}`,
      publisher: {
        '@type': 'Organization',
        name: item.publication,
      },
      datePublished: item.date ? `${item.date.replace(/\./g, '-')}` : undefined,
      image: 'image' in item && item.image ? `/${item.image}` : undefined,
    }));

  return (
    <>
      {/* Structured Data for Press Collection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Press & Media Coverage',
            description: "Press coverage and media features of Selway Design Studio and Tanya Selway",
            url: 'https://selwaydesignstudio.com/press',
            mainEntity: {
              '@type': 'Organization',
              name: 'Selway Design Studio',
              url: 'https://selwaydesignstudio.com',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="border-b-2 border-accent-rubis bg-selway-cream py-28 sm:py-24">
        <div className="container-full">
        </div>
      </section>

      {/* Press Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-full">
          <h1 className="heading-section mb-8">Press</h1>
          <p className="text-lg text-selway-stone mb-12 leading-relaxed">
            Selway Design Studio&rsquo;s work has been featured across leading interiors and lifestyle press, from the Financial Times and House &amp; Garden to Architectural Digest and Design Anthology. Below is a selection of recent coverage of projects across London, Los Angeles and Austin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressItems.map((item, index) => {
              const isImageOnly = 'image' in item && !('url' in item) && !('file' in item);
              const isExternalUrl = 'url' in item;
              let imageUrl = '';
              let href = '';

              if (isImageOnly) {
                imageUrl = `/${item.image}`;
                href = '';
              } else if (isExternalUrl) {
                imageUrl = item.image ? `/${item.image}` : '';
                href = (item as any).url || '';
              } else {
                const fileItem = item as any;
                const config = pressConfig.items.find(c => c.file === fileItem.file);
                imageUrl = config?.image
                  ? `/${config.image}`
                  : `/press-thumbnails/${fileItem.file.replace('.pdf', '.jpg')}`;
                href = `/press/${fileItem.file}`;
              }

              const content = (
                <>
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      style={
                        'crop' in item && item.crop
                          ? {
                              transform: `scale(${item.crop.scale})`,
                              objectPosition: `${item.crop.positionX} ${item.crop.positionY}`,
                            }
                          : undefined
                      }
                    />
                  </div>
                  <div>
                    {item.publication && <p className="text-sm text-gray-500 mb-1">{item.publication}</p>}
                    {item.date && <p className="text-xs text-gray-400">{formatDate(item.date)}</p>}
                    {isImageOnly && <p className="text-xs text-gray-600">{item.title}</p>}
                  </div>
                </>
              );

              const itemSchema = !isImageOnly ? {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: item.title,
                description: item.publication ? `Featured in ${item.publication}` : item.title,
                publisher: item.publication ? {
                  '@type': 'Organization',
                  name: item.publication,
                } : undefined,
                datePublished: item.date ? item.date.replace(/\./g, '-') : undefined,
                author: {
                  '@type': 'Organization',
                  name: 'Selway Design Studio',
                },
                image: imageUrl ? `https://selwaydesignstudio.com${imageUrl}` : undefined,
              } : null;

              if (isImageOnly) {
                return (
                  <div key={index} className="block overflow-hidden">
                    {content}
                  </div>
                );
              }

              return (
                <>
                  {itemSchema && (
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemSchema) }}
                    />
                  )}
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden hover:opacity-75 transition-opacity"
                    itemProp="url"
                  >
                    {content}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}
