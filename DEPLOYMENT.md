# 🚀 Deployment Guide - Meow Monk Landing Page

## Pre-Deployment Checklist

### 1. Update Content
- [ ] Replace placeholder hero image (line 38 in `MeowMonk.jsx`)
- [ ] Update DexScreener link (line 62)
- [ ] Update Twitter/X link (line 234)
- [ ] Update Telegram link (line 244)
- [ ] Verify Twitter video embed is working

### 2. Test Locally
```bash
npm install
npm run dev
```
- [ ] Check all animations are smooth
- [ ] Verify video embed loads correctly
- [ ] Test all button links
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### 3. Build for Production
```bash
npm run build
```
This creates an optimized build in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow prompts**
- Link to your Vercel account
- Confirm project settings
- Deploy!

**Advantages:**
- Free hosting
- Automatic HTTPS
- Global CDN
- Instant deployments
- Custom domain support

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Build and Deploy**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Advantages:**
- Free hosting
- Automatic HTTPS
- Form handling
- Serverless functions

### Option 3: GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/meow-monk"
}
```

3. **Update vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/meow-monk/' // Your repo name
})
```

4. **Deploy**
```bash
npm run deploy
```

### Option 4: Custom Server (VPS/Cloud)

1. **Build the project**
```bash
npm run build
```

2. **Upload `dist/` folder to your server**

3. **Configure web server (nginx example)**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Custom Domain Setup

### For Vercel/Netlify:
1. Go to project settings
2. Add custom domain
3. Update DNS records:
   - Add CNAME record pointing to deployment URL
   - Or A record for apex domain

### DNS Records Example:
```
Type    Name    Value
CNAME   www     cname.vercel-dns.com
A       @       76.76.21.21
```

## Performance Optimization

### Already Included:
- ✅ Vite's automatic code splitting
- ✅ Optimized font loading (Google Fonts)
- ✅ Lazy loading for animations
- ✅ Minified CSS and JS

### Additional Optimizations:
1. **Compress Images**
   - Use WebP format for hero image
   - Optimize to ~200KB max

2. **Enable Gzip/Brotli**
   - Most platforms enable this by default
   - Reduces file sizes by ~70%

3. **Add Analytics** (Optional)
   ```bash
   npm install @vercel/analytics
   ```
   Then add to `main.jsx`:
   ```javascript
   import { Analytics } from '@vercel/analytics/react';
   
   <Analytics />
   ```

## Environment Variables

If you need to add environment variables (e.g., for API keys):

1. **Create `.env` file**
```
VITE_DEXSCREENER_URL=https://dexscreener.com/solana/yourtoken
VITE_TWITTER_URL=https://twitter.com/yourhandle
VITE_TELEGRAM_URL=https://t.me/yourgroup
```

2. **Update MeowMonk.jsx**
```javascript
const DEXSCREENER_URL = import.meta.env.VITE_DEXSCREENER_URL;
```

3. **Add to deployment platform**
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

## Monitoring & Analytics

### Recommended Tools:
- **Vercel Analytics** - Built-in, free
- **Google Analytics** - Detailed tracking
- **Plausible** - Privacy-friendly alternative

## Post-Deployment

### Test Checklist:
- [ ] Visit deployed URL
- [ ] Test all links
- [ ] Check video embed
- [ ] Verify animations work
- [ ] Test on mobile devices
- [ ] Check page load speed (use PageSpeed Insights)
- [ ] Verify HTTPS is working
- [ ] Test social media previews (Twitter Card Validator)

### Social Media Meta Tags

Add to `index.html` for better social sharing:
```html
<meta property="og:title" content="Meow Monk ($MONK) - Find Inner Peace" />
<meta property="og:description" content="The most devoted cat on Solana" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
<meta property="og:url" content="https://yoursite.com" />
<meta name="twitter:card" content="summary_large_image" />
```

## Troubleshooting

### Video Not Loading:
- Check Twitter embed URL is correct
- Verify CORS settings
- Try alternative embed method

### Fonts Not Loading:
- Check Google Fonts URL in `index.css`
- Verify internet connection
- Check browser console for errors

### Build Errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all dependencies are installed
3. Test in incognito mode
4. Check deployment platform logs

---

**Ready to deploy? Let's get Meow Monk live! 🧘‍♂️✨**

