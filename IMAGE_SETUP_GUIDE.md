# 🎨 Image Setup Guide - Meow Monk

## Overview

The landing page now has 4 image placeholders that need to be replaced with actual images:

1. **Profile Image** - After the title (circular)
2. **The Awakening** - First story section
3. **The Practice** - Second story section  
4. **The Teaching** - Third story section

---

## Quick Setup

### Option 1: Use Local Images (Recommended)

1. **Create an assets folder:**
   ```bash
   mkdir -p public/assets
   ```

2. **Add your images to `public/assets/`:**
   - `meow-monk-profile.jpg` - Main profile image (square, 512x512px recommended)
   - `awakening.jpg` - Cat discovering meditation (landscape, 800x600px)
   - `practice.jpg` - Cat meditating daily (landscape, 800x600px)
   - `teaching.jpg` - Cat in peaceful pose (landscape, 800x600px)

3. **Update the image paths in `src/MeowMonk.jsx`:**

   **Line ~63** (Profile Image):
   ```javascript
   src="/assets/meow-monk-profile.jpg"
   ```

   **Line ~158** (The Awakening):
   ```javascript
   src="/assets/awakening.jpg"
   ```

   **Line ~183** (The Practice):
   ```javascript
   src="/assets/practice.jpg"
   ```

   **Line ~208** (The Teaching):
   ```javascript
   src="/assets/teaching.jpg"
   ```

---

### Option 2: Use Imgur (Quick & Easy)

1. **Upload images to Imgur:**
   - Go to https://imgur.com/upload
   - Upload your 4 images
   - Right-click each image → "Copy image address"

2. **Replace the placeholder URLs in `src/MeowMonk.jsx`:**
   - Find each `src="https://i.imgur.com/..."`
   - Replace with your actual Imgur URLs

---

## Image Specifications

### Profile Image (Circular)
- **Dimensions:** 512x512px (square)
- **Format:** JPG or PNG
- **Style:** Close-up of the meditating cat
- **Usage:** Displayed as circular profile image after title

### The Awakening
- **Dimensions:** 800x600px (landscape)
- **Format:** JPG or PNG
- **Style:** Cat discovering meditation, peaceful mountain setting
- **Mood:** Wonder, discovery, serenity

### The Practice
- **Dimensions:** 800x600px (landscape)
- **Format:** JPG or PNG
- **Style:** Cat in meditation pose, temple background
- **Mood:** Dedication, consistency, calm

### The Teaching
- **Dimensions:** 800x600px (landscape)
- **Format:** JPG or PNG
- **Style:** Cat in perfect meditation, radiating peace
- **Mood:** Wisdom, enlightenment, stillness

---

## AI Image Generation Prompts

Use these prompts with Midjourney, DALL-E, or Stable Diffusion:

### Profile Image:
```
A close-up portrait of a chubby ginger and white cat wearing miniature 
orange Shaolin monk robes, eyes closed in peaceful meditation, soft 
lighting, Pixar style, 3D render, serene expression, cute, 4k
```

### The Awakening:
```
A chubby ginger and white cat in orange monk robes sitting in front of 
a misty mountain temple at sunrise, discovering meditation for the first 
time, peaceful atmosphere, Pixar meets Claymation style, soft volumetric 
lighting, cute, serene, wide shot, 4k
```

### The Practice:
```
A chubby ginger and white cat in orange monk robes meditating in lotus 
position at the same temple spot, showing dedication and routine, peaceful 
mountain background, Pixar style 3D render, soft lighting, cute, consistent, 
4k
```

### The Teaching:
```
A chubby ginger and white cat in orange monk robes in perfect meditation 
pose, radiating inner peace and wisdom, temple setting, golden hour lighting, 
Pixar meets Claymation style, inspirational, cute, serene, 4k
```

---

## Current Image Locations in Code

**Profile Image:**
- File: `src/MeowMonk.jsx`
- Line: ~63
- Current: `src="https://i.imgur.com/placeholder-meow-monk.jpg"`

**The Awakening:**
- File: `src/MeowMonk.jsx`
- Line: ~158
- Current: `src="https://i.imgur.com/awakening-monk.jpg"`

**The Practice:**
- File: `src/MeowMonk.jsx`
- Line: ~183
- Current: `src="https://i.imgur.com/practice-monk.jpg"`

**The Teaching:**
- File: `src/MeowMonk.jsx`
- Line: ~208
- Current: `src="https://i.imgur.com/teaching-monk.jpg"`

---

## Using the Original Image You Provided

If you want to use the original image you attached:

1. **Save the image** to `public/assets/meow-monk-original.jpg`

2. **Use it for the profile image:**
   ```javascript
   src="/assets/meow-monk-original.jpg"
   ```

3. **Generate variations** for the story sections using AI with similar style

---

## Testing

After adding images:

1. **Check the browser** at http://localhost:5174/
2. **Scroll down** to see all sections
3. **Verify images load** properly
4. **Check responsiveness** on mobile view

---

## Troubleshooting

### Images not loading:
- Check file paths are correct
- Verify images are in `public/assets/` folder
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

### Images look stretched:
- Use recommended dimensions
- Ensure `object-cover` class is applied

### Images too large:
- Optimize images before uploading
- Use JPG format with 80% quality
- Keep file sizes under 500KB each

---

**Once you add the images, the page will be complete and ready to deploy!** 🧘‍♂️✨

