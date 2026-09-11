# Selway Design Studio - Quick Start Guide

## 📋 Overview

Your website is ready! Here's exactly what you need to do to get it live.

**Timeline:** 
- 15 minutes to set up Sanity CMS
- 5 minutes to deploy to Vercel
- Site goes live immediately

---

## Step 1: Install Node.js (5 minutes)

1. **Download & Install:**
   - Go to [nodejs.org](https://nodejs.org)
   - Download the LTS (Long Term Support) version
   - Install it (click through the installer)

2. **Verify installation:**
   - Open Terminal/Command Prompt
   - Type: `node --version`
   - Should show something like `v18.x.x` or `v20.x.x`

---

## Step 2: Set Up Your Project Locally (10 minutes)

1. **Extract the project folder** to a location on your computer
   - For example: `/Users/tanya/projects/selway-design-studio`

2. **Open Terminal and navigate to the project:**
   ```bash
   cd /path/to/selway-design-studio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   (This takes 2-3 minutes, lots of files download)

4. **Create `.env.local` file:**
   - Copy the `.env.example` file
   - Rename copy to `.env.local`
   - Keep it in the root project folder

---

## Step 3: Set Up Sanity CMS (10 minutes)

### Create a Free Sanity Account

1. **Go to:** [sanity.io/sign-up](https://sanity.io/sign-up)
2. **Sign up** with your email
3. **Create a new project:**
   - Click "Create project"
   - Name it: "Selway Design Studio"
   - Choose "Production" as dataset
   - Select "Blank" template

### Get Your Project ID

1. **In Sanity dashboard:**
   - Go to Settings → API → Project ID
   - Copy the Project ID (looks like: `abc123def456`)

2. **In your `.env.local` file:**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def456
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   CONTACT_EMAIL_TO=tanya@selwaydesignstudio.com
   ```

### Create Content Types in Sanity

You'll need to add two document types to Sanity:

**Option A: Use Sanity CLI (Easiest)**

1. In Terminal, run:
   ```bash
   npm install -g @sanity/cli
   sanity login
   sanity link
   ```

**Option B: Create Via Dashboard**

1. In Sanity dashboard → Manage
2. Click "Schemas"
3. Create new schema files:

**schemas/project.ts:**
```typescript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { 
      name: 'slug', 
      type: 'slug', 
      title: 'Slug',
      options: { source: 'title' }
    },
    { name: 'description', type: 'text', title: 'Short Description' },
    { name: 'image', type: 'image', title: 'Main Image' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'year', type: 'number', title: 'Year' },
  ],
}
```

**schemas/heroImage.ts:**
```typescript
export default {
  name: 'heroImage',
  title: 'Hero Image',
  type: 'document',
  fields: [
    { name: 'image', type: 'image', title: 'Image' },
    { name: 'alt', type: 'string', title: 'Alt Text' },
    { name: 'order', type: 'number', title: 'Order', initialValue: 1 },
  ],
}
```

---

## Step 4: Test Locally (5 minutes)

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Open in browser:**
   - Go to [http://localhost:3000](http://localhost:3000)
   - You should see your website!
   - Pages should load (but portfolio will be empty until you add projects)

3. **Stop the server:**
   - Press `Ctrl+C` in Terminal

---

## Step 5: Deploy to Vercel (5 minutes)

### Create Vercel Account

1. **Go to:** [vercel.com](https://vercel.com)
2. **Sign up** (can use your email or GitHub account)

### Push Code to GitHub

1. **Create GitHub account** at [github.com](https://github.com) if you don't have one

2. **In Terminal, from your project folder:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Selway Design Studio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/selway-design-studio.git
   git push -u origin main
   ```
   *(Replace `yourusername` with your GitHub username)*

### Deploy to Vercel

1. **In Vercel dashboard:**
   - Click "New Project"
   - Click "Import Git Repository"
   - Select your `selway-design-studio` repository
   - Click "Import"

2. **Configure Environment Variables:**
   - Under "Environment Variables", add:
     - Key: `NEXT_PUBLIC_SANITY_PROJECT_ID`
       Value: `abc123def456` (your Sanity project ID)
     - Key: `NEXT_PUBLIC_SANITY_DATASET`
       Value: `production`
     - Key: `NEXT_PUBLIC_SANITY_API_VERSION`
       Value: `2024-01-01`
     - Key: `CONTACT_EMAIL_TO`
       Value: `tanya@selwaydesignstudio.com`

3. **Click "Deploy"**
   - Vercel builds and deploys (takes 2-3 minutes)
   - You'll get a live URL!

### Connect Your Domain

1. **In Vercel project settings:**
   - Go to "Domains"
   - Add `selwaydesignstudio.com`
   - Follow DNS instructions for your domain registrar

---

## Step 6: Add Your First Project (10 minutes)

1. **Go to Sanity Studio:**
   - In Sanity dashboard, click "Launch Studio"

2. **Create a new Project:**
   - Click "+" next to "Projects"
   - Fill in:
     - **Title:** e.g., "Marylebone Kitchen"
     - **Description:** "A contemporary kitchen renovation..."
     - **Upload Image:** Select a project photo
     - **Location:** e.g., "London, UK"
     - **Year:** 2024

3. **Click "Publish"**
   - Your project appears on the website within seconds!
   - Website auto-updates (no manual deploy needed)

4. **Repeat for more projects**
   - Add all ~50 projects the same way
   - I can help batch-add them if you prefer

---

## Step 7: Add Hero Carousel Images (5 minutes)

1. **In Sanity Studio:**
   - Click "+" next to "Hero Images"
   - Upload an image (use one of your project photos)
   - Add alt text: e.g., "Modern kitchen with marble island"
   - Set Order: 1 (first image)
   - Click "Publish"

2. **Add 3-5 hero images**
   - Each one increments the order number
   - They auto-advance every 5 seconds on homepage

---

## 🎉 You're Live!

Your website is now:
- ✅ Live at `selwaydesignstudio.com` (or your Vercel URL)
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Ready for projects & updates
- ✅ Secure with HTTPS

---

## 📝 Adding Content Going Forward

**To add a new project:**
1. Open Sanity Studio
2. Click "+" next to Projects
3. Fill in details & upload images
4. Click "Publish"
5. Done! It's live on the website

**To update hero carousel:**
1. Add more "Hero Images" in Sanity
2. Adjust order numbers
3. Publish

**To make text changes:**
- Most text is hardcoded in the pages for now
- Let me know what to update, and I'll handle it

---

## 🆘 Troubleshooting

**Website won't load?**
- Check `.env.local` has correct Sanity project ID
- Make sure you published content in Sanity

**Vercel deployment failed?**
- Check environment variables are set correctly
- Try redeploying from Vercel dashboard

**Can't connect domain?**
- Verify domain DNS settings match Vercel instructions
- Wait up to 48 hours for DNS to propagate

---

## 📧 Next Steps

Once you're live, send me:
1. Your project images (organized by category)
2. Project titles, locations, years
3. Brief descriptions for each project (1-2 sentences)

I'll add them all to your website and you'll be in full business mode!

---

**Questions? Reach out anytime.**

Your website is ready to impress clients! 🎨
