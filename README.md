# Spark Web - Landing Page

This is the official landing page and web app for Spark - Content Idea Generator.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
spark-web/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── public/               # Static assets
├── next.config.ts        # Next.js config
├── tailwind.config.ts    # Tailwind config
└── package.json
```

## Features

- ✨ Beautiful gradient animations
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎨 Dark theme with brand colors
- 🔍 SEO optimized

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

See `VERCEL_DEPLOYMENT.md` for detailed instructions.

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=https://spark-backend-xxxx.onrender.com
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

## License

© 2025 Spark. All rights reserved.
