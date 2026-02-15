# 🚀 Vercel Deployment Guide - Spark Web

## Overview

Deploy the Spark landing page to Vercel's free tier with automatic HTTPS and global CDN.

**Benefits of Vercel**:
- ✅ Free tier (unlimited bandwidth)
- ✅ Automatic deployments from GitHub
- ✅ Global CDN
- ✅ HTTPS included
- ✅ Custom domains
- ✅ Built-in analytics
- ✅ Zero configuration for Next.js

---

## Step 1: Prerequisites

1. **GitHub Repository**
   - Code must be pushed to GitHub
   - Repository: https://github.com/joeyant43/spark-app

2. **Vercel Account**
   - Sign up at https://vercel.com
   - Use GitHub to sign in (recommended)

---

## Step 2: Deploy to Vercel

### Method A: Vercel Dashboard (Easiest)

1. **Log in to Vercel**
   - Go to https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Repository**
   - Select "Import Git Repository"
   - Choose your GitHub account
   - Select `spark-app` repository

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `spark-web`
   - **Build Command**: `npm run build` (auto-configured)
   - **Output Directory**: `.next` (auto-configured)
   - **Install Command**: `npm install` (auto-configured)

4. **Environment Variables** (Optional)

   Add these if you want to connect to backend:
   ```
   NEXT_PUBLIC_API_URL=https://spark-backend-xxxx.onrender.com
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - Get your production URL: `https://spark-web.vercel.app`

### Method B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd spark-web
vercel

# Follow prompts:
# - Set up and deploy: Yes
# - Which scope: Your account
# - Link to existing project: No
# - Project name: spark-web
# - Directory: ./
# - Override settings: No

# Deploy to production
vercel --prod
```

---

## Step 3: Get Your Production URL

After deployment completes, you'll receive:

- **Production URL**: `https://spark-web.vercel.app`
- **Preview URL**: `https://spark-web-git-master-yourname.vercel.app`

Save your production URL!

---

## Step 4: Configure Custom Domain (Optional)

### Add Custom Domain

1. **In Vercel Dashboard**:
   - Go to your project → "Settings" → "Domains"
   - Click "Add"
   - Enter your domain (e.g., `spark-app.com`)

2. **Configure DNS**:

   **For apex domain** (`spark-app.com`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain** (`www.spark-app.com`):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for SSL**:
   - SSL certificate provisioned automatically
   - Takes 1-5 minutes
   - Vercel handles renewal automatically

---

## Step 5: Configure Automatic Deployments

Vercel automatically deploys when you push to GitHub.

### Production Deployments
- Push to `master` or `main` branch
- Automatic deployment to production URL

### Preview Deployments
- Push to any other branch
- Creates preview URL for testing
- Perfect for testing before merging to main

### Disable Auto-Deploy
- Project Settings → Git → "Deploy Hooks"
- Toggle "Automatically deploy commits pushed to..."

---

## Step 6: Update Backend CORS

After deploying, update your backend CORS to allow requests from Vercel:

**In Render Dashboard** (spark-backend):
1. Go to your backend service
2. Environment → Edit `ALLOWED_ORIGINS`
3. Add your Vercel URL:
   ```
   https://spark-web.vercel.app,https://spark-app.com
   ```
4. Save changes (triggers redeploy)

---

## Monitoring & Analytics

### Vercel Analytics (Free)

1. **Enable Analytics**:
   - Go to your project → "Analytics"
   - Click "Enable Analytics"
   - View Core Web Vitals, page views, etc.

2. **Speed Insights**:
   - Automatic performance monitoring
   - Real User Monitoring (RUM)
   - No configuration needed

### Custom Analytics

Add Google Analytics or Plausible:

**Install** (example with GA4):
```bash
npm install @next/third-parties
```

**Update layout.tsx**:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

---

## Environment Variables Management

### Add Environment Variables

**Via Dashboard**:
1. Project → Settings → Environment Variables
2. Add key-value pairs
3. Select environments (Production, Preview, Development)

**Via CLI**:
```bash
# Add variable
vercel env add NEXT_PUBLIC_API_URL production

# Pull variables locally
vercel env pull .env.local
```

### Variable Types

- `NEXT_PUBLIC_*` - Exposed to browser
- Without prefix - Server-side only (more secure)

---

## Performance Optimization

### Enable Features

1. **Image Optimization**
   - Automatic with Next.js `<Image>` component
   - No configuration needed

2. **Automatic Code Splitting**
   - Next.js handles automatically
   - Each page loads only what it needs

3. **Edge Functions** (Optional)
   ```javascript
   export const config = {
     runtime: 'edge',
   }
   ```

4. **Incremental Static Regeneration**
   ```javascript
   export const revalidate = 60 // Revalidate every 60 seconds
   ```

---

## Troubleshooting

### Build Fails

**Error**: `Module not found`
```
Error: Cannot find module '@/components/...'
```

**Fix**: Check imports and tsconfig.json paths

---

**Error**: `Build exceeded maximum duration`
```
Error: Command "npm run build" exceeded timeout
```

**Fix**:
- Optimize build (remove unused dependencies)
- Upgrade to Pro plan (longer build time)

---

### Runtime Errors

**Error**: `CORS policy blocked`
```
Access to fetch blocked by CORS
```

**Fix**: Add Vercel URL to backend CORS allowlist

---

**Error**: `Environment variable not found`
```
process.env.NEXT_PUBLIC_API_URL is undefined
```

**Fix**:
- Add env var in Vercel dashboard
- Redeploy after adding env vars

---

### Domain Issues

**Error**: `Domain not verified`

**Fix**:
- Check DNS records are correct
- Wait 24-48 hours for DNS propagation
- Use `dig` or `nslookup` to verify

---

## Cost Breakdown

### Hobby (Free)
- **Cost**: $0/month
- **Bandwidth**: Unlimited
- **Deployments**: Unlimited
- **Custom Domains**: Yes
- **Team Members**: 1

### Pro
- **Cost**: $20/month
- **Bandwidth**: 1TB
- **Deployments**: Unlimited
- **Custom Domains**: Unlimited
- **Team Members**: Unlimited
- **Priority Support**: Yes
- **Advanced Analytics**: Yes

---

## Next Steps

After deploying:

1. ✅ **Test Production URL** - Visit `https://spark-web.vercel.app`
2. ✅ **Update Backend CORS** - Add Vercel URL to allowlist
3. ✅ **Configure Custom Domain** (optional)
4. ✅ **Enable Analytics** - Monitor traffic and performance
5. ✅ **Setup Email** - For waitlist notifications

---

## Useful Commands

```bash
# Check deployment status
vercel ls

# View project details
vercel inspect

# Remove deployment
vercel remove

# View logs
vercel logs [deployment-url]

# Pull environment variables
vercel env pull
```

---

## Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Status**: https://www.vercel-status.com

---

**Deployment Date**: December 23, 2025
**Version**: 1.0
**Status**: Ready to deploy! 🚀
