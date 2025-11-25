# 🎨 Meow Monk Design Notes

## Visual Hierarchy & Layout

### 1. Hero Section
```
┌─────────────────────────────────────────┐
│                                         │
│         [Floating Cloud ☁️]             │
│                                         │
│      ╭─────────────────────╮            │
│      │                     │            │
│      │   [Meow Monk Img]   │  ← Floating animation
│      │    (rounded-full)   │            │
│      │                     │            │
│      ╰─────────────────────╯            │
│                                         │
│     Find Inner Peace.                   │
│        Hold $MONK.                      │
│                                         │
│   The most devoted cat on Solana.       │
│                                         │
│   ┌─────────────────────────┐           │
│   │ ✨ Enter the Temple     │  ← CTA Button
│   └─────────────────────────┘           │
│                                         │
│                    [Floating Cloud ☁️]  │
└─────────────────────────────────────────┘
```

### 2. The Shrine (Video Section)
```
┌─────────────────────────────────────────┐
│                                         │
│            The Shrine                   │
│                                         │
│   ╭───────────────────────────────╮     │
│   │  ╭─────────────────────────╮  │     │
│   │  │                         │  │  ← Nested rounded containers
│   │  │   [Twitter Video]       │  │     (temple frame effect)
│   │  │                         │  │     │
│   │  ╰─────────────────────────╯  │     │
│   ╰───────────────────────────────╯     │
│                                         │
│  "Nothing can shake his devotion."      │
│                                         │
└─────────────────────────────────────────┘
```

### 3. The Path (Tokenomics)
```
┌─────────────────────────────────────────┐
│                                         │
│            The Path                     │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │   ✨    │  │   📜    │  │   ☁️    │ │
│  │         │  │         │  │         │ │
│  │ Supply  │  │   Tax   │  │Liquidity│ │
│  │         │  │         │  │         │ │
│  │9 Lives  │  │0% Karma │  │  Burnt  │ │
│  │(9B)     │  │         │  │Offerings│ │
│  └─────────┘  └─────────┘  └─────────┘ │
│       ↑ Hover to lift                   │
└─────────────────────────────────────────┘
```

### 4. Footer
```
┌─────────────────────────────────────────┐
│                                         │
│              👋  ← Waving animation     │
│                                         │
│   ┌──────────┐      ┌──────────┐       │
│   │ Twitter  │      │ Telegram │       │
│   └──────────┘      └──────────┘       │
│                                         │
│   © 2024 Meow Monk. All rights reserved.│
│                                         │
└─────────────────────────────────────────┘
```

## Color Usage Map

### Backgrounds
- `bg-gradient-to-b from-amber-50 via-orange-50 to-red-50` - Main page gradient
- `bg-orange-100` - Footer background
- `bg-white` - Cards and containers

### Buttons & CTAs
- `bg-red-400 hover:bg-red-500` - Primary CTA button
- Soft temple red for emphasis

### Icons & Accents
- `text-orange-500` - Primary icons
- `text-red-400` - Secondary icons
- `text-orange-300 opacity-50` - Decorative clouds

## Animation Specifications

### Float Animation
```javascript
{
  y: [0, -10, 0],
  duration: 3s,
  repeat: Infinity,
  easing: easeInOut
}
```
Applied to: Hero image, video container

### Fade In Up
```javascript
{
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8s
}
```
Applied to: Headlines, subheadlines

### Card Hover
```javascript
{
  whileHover: { y: -10, scale: 1.02 },
  type: "spring",
  stiffness: 300
}
```
Applied to: Tokenomics cards

### Button Interactions
```javascript
{
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}
```
Applied to: All buttons and links

## Typography Scale

- **Hero Headline**: 6xl-7xl (Fredoka Bold)
- **Section Titles**: 5xl (Fredoka Bold)
- **Subheadline**: 2xl (Quicksand)
- **Card Titles**: 2xl (Fredoka Bold)
- **Body Text**: xl (Quicksand)
- **Small Text**: sm (Quicksand)

## Spacing System

- **Section Padding**: py-20 (5rem vertical)
- **Container Max Width**: max-w-4xl to max-w-6xl
- **Card Gap**: gap-8 (2rem)
- **Element Margin**: mb-8 to mb-16

## Border Radius Scale

- **Hero Image**: rounded-full
- **Video Container**: rounded-[3rem] outer, rounded-[2rem] inner
- **Cards**: rounded-[2rem]
- **Buttons**: rounded-full
- **Icon Containers**: rounded-full

## Shadow Hierarchy

- **Hero Image**: shadow-2xl
- **Video Container**: shadow-2xl
- **Cards**: shadow-lg
- **Buttons**: shadow-lg
- **Hover States**: Enhanced shadows

## Responsive Breakpoints

- **Mobile**: Default (single column)
- **Tablet/Desktop**: md: breakpoint
  - Hero text: 6xl → 7xl
  - Grid: 1 column → 3 columns

## Accessibility Notes

- All interactive elements have hover and tap states
- Sufficient color contrast (deep charcoal on light backgrounds)
- Semantic HTML structure
- Alt text for images
- Keyboard-accessible buttons and links

