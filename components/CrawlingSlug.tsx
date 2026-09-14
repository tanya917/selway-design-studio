import React from 'react'
import Image from 'next/image'

export default function CrawlingSlug() {
  return (
    <section style={{ padding: 0, margin: 0, background: 'transparent', width: '100%' }}>
      <style>{`
        .slug-stage {
          position: relative;
          width: 100%;
          height: 130px;
          overflow: hidden;
          background: transparent;
        }
        .slug {
          position: absolute;
          top: 60%;
          left: -200px;
          width: 130px;
          transform-origin: 50% 50%;
          animation: crawl-across 28s linear infinite, crawl-squish 0.9s ease-in-out infinite;
          filter: drop-shadow(0 10px 8px rgba(0,0,0,0.25));
        }
        .slug img {
          display: block;
          width: 100%;
          height: auto;
        }
        @keyframes crawl-across {
          0% { left: -200px; }
          100% { left: 110%; }
        }
        @keyframes crawl-squish {
          0% { transform: scaleX(1) scaleY(1) translateY(0px); }
          25% { transform: scaleX(1.04) scaleY(0.96) translateY(2px); }
          50% { transform: scaleX(0.97) scaleY(1.03) translateY(-1px); }
          75% { transform: scaleX(1.03) scaleY(0.97) translateY(1px); }
          100% { transform: scaleX(1) scaleY(1) translateY(0px); }
        }
      `}</style>
      <div className="slug-stage">
        <div className="slug">
          <img src="/slug.png" alt="Crawling slug" width={130} height={130} />
        </div>
      </div>
    </section>
  )
}
