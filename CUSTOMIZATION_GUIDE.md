# 🎨 Customization Guide - Meow Monk

## Quick Customizations

### 1. Change Colors

**Location:** `src/MeowMonk.jsx` and `tailwind.config.js`

#### Primary Color (Saffron/Orange)
Replace all instances of:
- `orange-500` → your color
- `orange-400` → your color
- `orange-100` → your color

#### Accent Color (Temple Red)
Replace all instances of:
- `red-400` → your color
- `red-500` → your color

#### Background Gradient
Line 17 in `MeowMonk.jsx`:
```javascript
className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50"
```

### 2. Change Fonts

**Location:** `src/index.css` (line 1)

Replace Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Update in `MeowMonk.jsx`:
```javascript
style={{ fontFamily: "'YourFont', sans-serif" }}
```

### 3. Update Hero Image

**Location:** `src/MeowMonk.jsx` (line 38)

Replace:
```javascript
src="https://via.placeholder.com/400x400/FFA500/FFFFFF?text=Meow+Monk"
```

With your image URL or local path:
```javascript
src="/assets/meow-monk-hero.png"
```

**Recommended specs:**
- Size: 800x800px
- Format: PNG or WebP
- Background: Transparent or matching gradient
- File size: < 200KB

### 4. Change Video Embed

**Location:** `src/MeowMonk.jsx` (line 115)

#### Option A: Twitter/X Embed (Current)
```javascript
<iframe
  src="https://platform.twitter.com/embed/Tweet.html?id=YOUR_TWEET_ID"
  ...
/>
```

#### Option B: YouTube Embed
```javascript
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  className="absolute top-0 left-0 w-full h-full"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Meow Monk Meditation"
/>
```

#### Option C: Direct Video File
```javascript
<video
  className="w-full h-full object-cover rounded-[2rem]"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/assets/meow-monk-video.mp4" type="video/mp4" />
</video>
```

### 5. Modify Tokenomics

**Location:** `src/MeowMonk.jsx` (lines 155-215)

Change card content:
```javascript
<p className="text-xl text-gray-600">Your Supply</p>
<p className="text-lg text-gray-500">(Your Amount)</p>
```

Add more cards by duplicating the card structure.

### 6. Update Social Links

**Location:** `src/MeowMonk.jsx`

- **DexScreener:** Line 62
- **Twitter:** Line 234
- **Telegram:** Line 244

Replace with your actual links:
```javascript
href="https://twitter.com/yourhandle"
href="https://t.me/yourgroup"
```

### 7. Add More Sections

#### Example: Add "Roadmap" Section

After "The Path" section (around line 217), add:

```javascript
{/* Roadmap Section */}
<section className="py-20 px-6">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-4xl mx-auto"
  >
    <h2
      className="text-5xl font-bold text-center text-gray-800 mb-16"
      style={{ fontFamily: "'Fredoka', sans-serif" }}
    >
      The Journey
    </h2>
    
    <div className="space-y-8">
      <motion.div
        whileHover={{ x: 10 }}
        className="bg-white p-6 rounded-3xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-orange-500 mb-2">Phase 1: Awakening</h3>
        <p className="text-gray-600">Launch and community building</p>
      </motion.div>
      
      <motion.div
        whileHover={{ x: 10 }}
        className="bg-white p-6 rounded-3xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-orange-500 mb-2">Phase 2: Enlightenment</h3>
        <p className="text-gray-600">Exchange listings and partnerships</p>
      </motion.div>
    </div>
  </motion.div>
</section>
```

### 8. Customize Animations

**Location:** `src/MeowMonk.jsx` (lines 6-14)

#### Adjust Float Speed
```javascript
const floatAnimation = {
  y: [0, -20, 0], // Increase for more movement
  transition: {
    duration: 2, // Decrease for faster animation
    repeat: Infinity,
    ease: "easeInOut"
  }
};
```

#### Change Fade In Direction
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 50 }, // Change y to x for horizontal
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2 } // Adjust speed
};
```

### 9. Add Particle Effects

Install particles library:
```bash
npm install react-tsparticles tsparticles
```

Add to `MeowMonk.jsx`:
```javascript
import Particles from "react-tsparticles";

// In your component
<Particles
  options={{
    particles: {
      number: { value: 50 },
      color: { value: "#FF9933" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: { enable: true, speed: 1 }
    }
  }}
/>
```

### 10. Change Button Styles

**Location:** Throughout `MeowMonk.jsx`

#### Pill Button (Current)
```javascript
className="... rounded-full ..."
```

#### Square Button
```javascript
className="... rounded-xl ..."
```

#### Outlined Button
```javascript
className="bg-transparent border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white ..."
```

## Advanced Customizations

### Add Scroll Progress Indicator

```javascript
import { useScroll, motion } from 'framer-motion';

const { scrollYProgress } = useScroll();

<motion.div
  style={{ scaleX: scrollYProgress }}
  className="fixed top-0 left-0 right-0 h-2 bg-orange-500 origin-left z-50"
/>
```

### Add Sound Effects

```javascript
const playSound = () => {
  const audio = new Audio('/sounds/bell.mp3');
  audio.play();
};

<button onClick={playSound}>
  Enter the Temple
</button>
```

### Add Dark Mode Toggle

```javascript
const [darkMode, setDarkMode] = useState(false);

<div className={darkMode ? 'dark' : ''}>
  {/* Your content */}
</div>
```

Update Tailwind config for dark mode support.

## Tips for Maintaining "Kawaii-Minimalism"

✅ **DO:**
- Use soft, pastel colors
- Add generous spacing (padding/margin)
- Use rounded corners everywhere
- Keep text minimal and impactful
- Add subtle animations
- Use cute icons and emojis sparingly

❌ **DON'T:**
- Use harsh, bright colors
- Cram too much content
- Use sharp corners
- Write walls of text
- Overdo animations
- Add too many decorative elements

## Testing Your Changes

After each customization:
```bash
npm run dev
```

Check:
- [ ] Visual appearance
- [ ] Animation smoothness
- [ ] Mobile responsiveness
- [ ] Link functionality
- [ ] Loading performance

---

**Happy customizing! Make it uniquely yours while keeping that zen vibe. 🧘‍♂️✨**

