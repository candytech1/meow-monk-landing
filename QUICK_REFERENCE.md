# ⚡ Quick Reference - Meow Monk

## 🚀 Commands

```bash
# Install
npm install

# Development
npm run dev              # Start dev server at http://localhost:5173

# Production
npm run build            # Build to dist/
npm run preview          # Preview production build

# Deployment
vercel                   # Deploy to Vercel
netlify deploy --prod    # Deploy to Netlify
```

## 📝 Key File Locations

| What to Change | File | Line |
|----------------|------|------|
| Hero Image | `src/MeowMonk.jsx` | 38 |
| DexScreener Link | `src/MeowMonk.jsx` | 62 |
| Video Embed | `src/MeowMonk.jsx` | 115 |
| Twitter Link | `src/MeowMonk.jsx` | 234 |
| Telegram Link | `src/MeowMonk.jsx` | 244 |
| Colors | `tailwind.config.js` | 7-9 |
| Fonts | `src/index.css` | 1 |

## 🎨 Color Classes

```css
/* Primary Colors */
orange-500    /* #FF9933 - Main saffron */
orange-400    /* #FFA500 - Lighter saffron */
orange-100    /* #FFEDD5 - Very light orange */

/* Accent Colors */
red-400       /* #D97777 - Temple red */
red-500       /* #DC2626 - Darker red */

/* Backgrounds */
amber-50      /* #FFFBEB - Cream */
orange-50     /* #FFF7ED - Light orange */

/* Text */
gray-800      /* #374151 - Deep charcoal */
gray-700      /* #4B5563 - Medium gray */
gray-600      /* #6B7280 - Light gray */
```

## 🎭 Animation Presets

```javascript
// Float Animation
animate={{ y: [0, -10, 0] }}
transition={{ duration: 3, repeat: Infinity }}

// Fade In Up
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Hover Lift
whileHover={{ y: -10, scale: 1.02 }}

// Button Press
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## 📐 Spacing Scale

```
px-6   = 1.5rem = 24px
py-20  = 5rem   = 80px
mb-8   = 2rem   = 32px
mb-16  = 4rem   = 64px
gap-8  = 2rem   = 32px
```

## 🔤 Typography

```javascript
// Headings
style={{ fontFamily: "'Fredoka', sans-serif" }}
className="text-6xl md:text-7xl font-bold"

// Body
// (Default Quicksand from index.css)
className="text-xl"
```

## 🎯 Border Radius

```
rounded-full   /* Perfect circle/pill */
rounded-[3rem] /* 48px - Large container */
rounded-[2rem] /* 32px - Medium container */
rounded-xl     /* 12px - Small container */
```

## 🌈 Gradient Backgrounds

```javascript
// Main page gradient
className="bg-gradient-to-b from-amber-50 via-orange-50 to-red-50"

// Card gradient
className="bg-gradient-to-br from-orange-100 to-red-100"
```

## 🔗 External Links

```javascript
// Template
<a
  href="YOUR_URL"
  target="_blank"
  rel="noopener noreferrer"
>
  Link Text
</a>
```

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.294.0"
}
```

## 🎨 Lucide Icons Used

```javascript
import { Sparkles, Scroll, Cloud } from 'lucide-react';

<Sparkles className="w-6 h-6" />  // CTA button, Supply card
<Scroll className="w-10 h-10" />   // Tax card
<Cloud className="w-10 h-10" />    // Liquidity card, decorative
```

## 📱 Responsive Classes

```
text-6xl md:text-7xl    /* Mobile: 6xl, Desktop: 7xl */
grid md:grid-cols-3     /* Mobile: 1 col, Desktop: 3 cols */
```

## 🎬 Framer Motion Imports

```javascript
import { motion } from 'framer-motion';

// Basic usage
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Content
</motion.div>
```

## 🔧 Common Customizations

### Change Primary Color
Find/Replace: `orange-500` → `your-color-500`

### Change Button Color
Find/Replace: `red-400` → `your-color-400`

### Adjust Animation Speed
Change `duration: 3` to your preferred seconds

### Add New Section
Copy existing section structure, paste after desired section

## 📊 Performance Tips

```bash
# Optimize images
# Use WebP format, max 200KB

# Check bundle size
npm run build
# Look for dist/ folder size

# Test performance
# Use Chrome DevTools Lighthouse
```

## 🐛 Quick Fixes

### Video not loading?
```javascript
// Try direct iframe
<iframe src="https://www.youtube.com/embed/VIDEO_ID" />
```

### Fonts not loading?
```css
/* Check Google Fonts URL in index.css */
@import url('https://fonts.googleapis.com/css2?family=Fredoka...');
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentation Files

- `MEOW_MONK_README.md` - Start here
- `PROJECT_SUMMARY.md` - Overview
- `DESIGN_NOTES.md` - Design specs
- `CUSTOMIZATION_GUIDE.md` - How to customize
- `DEPLOYMENT.md` - How to deploy
- `VISUAL_MOCKUP.md` - Visual reference
- `QUICK_REFERENCE.md` - This file

## ✅ Pre-Launch Checklist

- [ ] Replace hero image
- [ ] Update DexScreener link
- [ ] Update Twitter link
- [ ] Update Telegram link
- [ ] Test video embed
- [ ] Test on mobile
- [ ] Test all buttons
- [ ] Run production build
- [ ] Check bundle size
- [ ] Deploy to Vercel

## 🎯 Support Resources

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vite Docs](https://vitejs.dev)

---

**Keep this file handy for quick reference!** 🧘‍♂️✨

