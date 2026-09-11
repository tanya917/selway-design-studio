# Selway Design Studio Website

A modern, SEO-optimized portfolio and e-commerce website for Selway Design Studio built with Next.js 14, Tailwind CSS, and Sanity CMS.

## Features

- 🎨 **Beautiful Hero Carousel** - Auto-advancing image gallery (5-second intervals)
- 🔍 **SEO Optimized** - Comprehensive SEO setup with structured data, meta tags, and JSON-LD
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **High Performance** - Optimized images, fast loading with Next.js
- 🛒 **Shop Integration** - Ready for Shopify integration (currently marked as "Coming Soon")
- 📝 **Content Management** - Powered by Sanity CMS for easy content updates
- 📬 **Contact Forms** - Integrated contact form with email submission
- 🎨 **Brand Consistent** - Complete brand color palette and typography system

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **CMS**: Sanity.io
- **Deployment**: Vercel
- **Language**: TypeScript

## Project Structure

```
selway-design-studio/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API route
│   ├── portfolio/
│   │   └── [slug]/           # Individual project pages
│   ├── about/                # About page with studio info
│   ├── shop/                 # Shop page (Coming Soon)
│   ├── contact/              # Contact page
│   ├── layout.tsx            # Root layout with Header/Footer
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Global styles
│   └── sitemap.ts            # SEO sitemap
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer
│   └── HeroCarousel.tsx      # Hero image carousel
├── lib/
│   ├── sanity.ts             # Sanity CMS client & queries
│   └── seo.ts                # SEO utilities & structured data
├── public/
│   └── robots.txt            # SEO robots file
└── package.json              # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- A Sanity.io account

### Installation

1. **Extract the project files** to your desired location

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Sanity project ID and dataset:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
     NEXT_PUBLIC_SANITY_DATASET=production
     NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
     CONTACT_EMAIL_TO=tanya@selwaydesignstudio.com
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Sanity CMS Setup

### Creating Your Sanity Project

1. Visit [sanity.io](https://sanity.io) and create a free account
2. Create a new project
3. Get your project ID from project settings
4. Add to `.env.local`

### Setting Up Content Types

You'll need to set up the following Sanity schemas:

**Project Schema** (`project.ts`):
```typescript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'detailedDescription', type: 'array', title: 'Detailed Description', of: [{ type: 'block' }] },
    { name: 'image', type: 'image', title: 'Main Image' },
    { name: 'gallery', type: 'array', title: 'Gallery', of: [{ type: 'image' }] },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'year', type: 'number', title: 'Year' },
    { name: 'scope', type: 'string', title: 'Project Scope' },
    { name: 'services', type: 'array', title: 'Services', of: [{ type: 'string' }] },
  ],
}
```

**Hero Image Schema** (`heroImage.ts`):
```typescript
export default {
  name: 'heroImage',
  title: 'Hero Image',
  type: 'document',
  fields: [
    { name: 'image', type: 'image', title: 'Image' },
    { name: 'alt', type: 'string', title: 'Alt Text' },
    { name: 'order', type: 'number', title: 'Order' },
  ],
}
```

## Deployment to Vercel

### Easy Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/selway-design-studio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`
     - `CONTACT_EMAIL_TO`
   - Click "Deploy"

3. **Configure custom domain:**
   - In Vercel project settings → Domains
   - Add your domain (e.g., selwaydesignstudio.com)

## Adding Projects to the Portfolio

1. **In Sanity Studio:**
   - Navigate to "Projects" collection
   - Click "Create new"
   - Fill in project details:
     - Title
     - Slug (auto-generated from title)
     - Description
     - Upload main image
     - Add gallery images
     - Location and year
   - Click "Publish"

2. **The website will auto-update:**
   - New projects appear on portfolio page
   - Images are optimized automatically
   - Content is cached efficiently

## Adding Hero Carousel Images

1. **In Sanity Studio:**
   - Navigate to "Hero Images" collection
   - Click "Create new"
   - Upload image
   - Add alt text for accessibility
   - Set order number (1, 2, 3, etc.)
   - Click "Publish"

2. **The carousel will:**
   - Auto-advance every 5 seconds
   - Show pagination dots
   - Be fully responsive

## Email Integration

### Setting Up Contact Form Emails

The contact form currently logs submissions to console. To send emails:

**Option 1: SendGrid (Recommended)**
```bash
npm install @sendgrid/mail
```

**Option 2: Nodemailer**
```bash
npm install nodemailer
```

Update `/app/api/contact/route.ts` with your email service.

## SEO Features

- ✅ Semantic HTML5
- ✅ Meta tags (title, description, OG tags)
- ✅ JSON-LD structured data
- ✅ Image alt text
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt
- ✅ Mobile-friendly
- ✅ Fast Core Web Vitals
- ✅ Open Graph tags for social sharing

## Brand Colors

- **Ink**: `#2b2a28` - Primary text/lines
- **Cream**: `#f2ede4` - Ground color
- **Rubis**: `#74393B` - Accent burgundy
- **Outremer**: `#4D6AA8` - Accent blue
- **Sage**: `#A9C19A` - Accent green
- **Ochre**: `#FFD447` - Accent mustard

All colors are configured in `tailwind.config.ts`.

## Fonts

- **Primary**: Poppins (Google Fonts)
- Fallbacks: Century Gothic, Futura, sans-serif

## Future Enhancements

- [ ] Shopify integration for e-commerce
- [ ] Blog section for design insights
- [ ] Client testimonials section
- [ ] Social media integration
- [ ] Analytics dashboard
- [ ] Email newsletter signup
- [ ] Project filtering by category
- [ ] Lightbox gallery for projects

## Support & Maintenance

For updates or content changes, send the following to Claude:

1. **New projects:**
   - Images (high resolution, 2000x2000px recommended)
   - Project title, location, year
   - Description (1-2 paragraphs)
   - Any additional details

2. **Hero carousel images:**
   - Images (2000x1200px or similar 16:9 ratio)
   - Alt text for each image

3. **Content updates:**
   - Any copy changes
   - New sections or information

## License

© 2024 Selway Design Studio. All rights reserved.

---

**Built with ❤️ for Selway Design Studio**
