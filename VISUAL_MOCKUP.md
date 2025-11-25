# 🎨 Visual Mockup - Meow Monk Landing Page

## Color Palette Reference

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  🟠 Monk Saffron/Orange                                │
│  #FF9933 (orange-500)                                   │
│  Used for: Headlines, icons, accents                    │
│                                                         │
│  🟡 Soft Orange                                         │
│  #FFA500 (orange-400)                                   │
│  Used for: Backgrounds, hover states                    │
│                                                         │
│  🤍 Cream/Off-White                                     │
│  #FFF8E7 (amber-50)                                     │
│  Used for: Page background, cards                       │
│                                                         │
│  🔴 Temple Red                                          │
│  #D97777 (red-400)                                      │
│  Used for: CTA buttons, important elements              │
│                                                         │
│  ⚫ Deep Charcoal                                        │
│  #374151 (gray-800)                                     │
│  Used for: Text, headings                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Full Page Layout

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║                    🌥️ (floating cloud)                    ║
║                                                           ║
║                  ╭─────────────────╮                      ║
║                  │                 │                      ║
║                  │   🐱 Meow Monk  │  ← Gentle bobbing    ║
║                  │   (Hero Image)  │     animation        ║
║                  │                 │                      ║
║                  ╰─────────────────╯                      ║
║                                                           ║
║              Find Inner Peace.                            ║
║                 Hold $MONK.                               ║
║                                                           ║
║          The most devoted cat on Solana.                  ║
║                                                           ║
║              ┌───────────────────────┐                    ║
║              │ ✨ Enter the Temple   │ ← Hover: scale up  ║
║              └───────────────────────┘   Tap: scale down  ║
║                                                           ║
║                                      🌥️ (floating cloud)  ║
║                                                           ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║                    The Shrine                             ║
║                                                           ║
║         ╭─────────────────────────────────╮               ║
║         │ ╭───────────────────────────╮   │               ║
║         │ │                           │   │               ║
║         │ │   📹 Twitter Video        │   │ ← Floating    ║
║         │ │   (Meditating Cat)        │   │   animation   ║
║         │ │                           │   │               ║
║         │ ╰───────────────────────────╯   │               ║
║         ╰─────────────────────────────────╯               ║
║                                                           ║
║        "Nothing can shake his devotion."                  ║
║                                                           ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║                    The Path                               ║
║                                                           ║
║   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      ║
║   │     ✨      │  │     📜      │  │     ☁️      │      ║
║   │             │  │             │  │             │      ║
║   │   Supply    │  │     Tax     │  │  Liquidity  │      ║
║   │             │  │             │  │             │      ║
║   │  9 Lives    │  │  0% Karma   │  │   Burnt     │      ║
║   │ (9 Billion) │  │             │  │  Offerings  │      ║
║   │             │  │             │  │             │      ║
║   └─────────────┘  └─────────────┘  └─────────────┘      ║
║        ↑               ↑                 ↑                ║
║   Hover to lift   Hover to lift    Hover to lift         ║
║                                                           ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║                       👋                                  ║
║                  (waving mascot)                          ║
║                                                           ║
║         ┌────────────┐      ┌────────────┐               ║
║         │  Twitter   │      │  Telegram  │               ║
║         └────────────┘      └────────────┘               ║
║                                                           ║
║         © 2024 Meow Monk. All rights reserved.           ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## Component Breakdown

### Hero Section Details
```
┌─────────────────────────────────────────┐
│                                         │
│  Image Container:                       │
│  • Size: 320px × 320px (w-80 h-80)      │
│  • Shape: Perfect circle (rounded-full) │
│  • Border: 8px white                    │
│  • Shadow: Extra large (shadow-2xl)     │
│  • Animation: Float (y: 0 → -10 → 0)    │
│                                         │
│  Headline:                              │
│  • Font: Fredoka Bold                   │
│  • Size: 6xl mobile, 7xl desktop        │
│  • Color: Gray-800 / Orange-500         │
│  • Animation: Fade in from below        │
│                                         │
│  CTA Button:                            │
│  • Background: Red-400 → Red-500        │
│  • Shape: Pill (rounded-full)           │
│  • Padding: 2.5rem × 5rem               │
│  • Icon: Sparkles (left side)           │
│  • Hover: Scale 1.05                    │
│  • Tap: Scale 0.95                      │
│                                         │
└─────────────────────────────────────────┘
```

### Video Section Details
```
┌─────────────────────────────────────────┐
│                                         │
│  Outer Container:                       │
│  • Background: Orange-100 → Red-100     │
│  • Padding: 2rem                        │
│  • Border Radius: 3rem                  │
│  • Shadow: Extra large                  │
│  • Animation: Float                     │
│                                         │
│  Inner Container:                       │
│  • Background: White                    │
│  • Padding: 1rem                        │
│  • Border Radius: 2.5rem                │
│  • Shadow: Inner shadow                 │
│                                         │
│  Video Frame:                           │
│  • Aspect Ratio: 16:9                   │
│  • Border Radius: 2rem                  │
│  • Responsive: 100% width               │
│                                         │
│  Context Text:                          │
│  • Font: Quicksand Italic               │
│  • Size: 2xl                            │
│  • Color: Gray-700                      │
│  • Animation: Fade in (delayed)         │
│                                         │
└─────────────────────────────────────────┘
```

### Tokenomics Cards Details
```
┌─────────────────────────────────────────┐
│                                         │
│  Card Container:                        │
│  • Background: White                    │
│  • Padding: 2rem                        │
│  • Border Radius: 2rem                  │
│  • Shadow: Large                        │
│  • Layout: Grid (3 columns on desktop)  │
│  • Gap: 2rem                            │
│                                         │
│  Icon Circle:                           │
│  • Size: 80px × 80px (w-20 h-20)        │
│  • Shape: Perfect circle                │
│  • Background: Orange-100 / Red-100     │
│  • Icon Size: 40px (w-10 h-10)          │
│  • Centered                             │
│                                         │
│  Hover Effect:                          │
│  • Translate Y: -10px                   │
│  • Scale: 1.02                          │
│  • Transition: Spring physics           │
│  • Stiffness: 300                       │
│                                         │
└─────────────────────────────────────────┘
```

## Animation Timeline

```
Page Load:
0.0s  │ Hero image fades in and scales up
      │
0.2s  │ Headline fades in from below
      │
0.4s  │ Subheadline fades in from below
      │
0.6s  │ CTA button fades in from below
      │
      │ ▼ User scrolls down ▼
      │
1.0s  │ Video section fades in from below
      │
1.5s  │ Context text fades in
      │
      │ ▼ User scrolls down ▼
      │
2.0s  │ Tokenomics cards fade in from below
      │
      │ ▼ User scrolls down ▼
      │
2.5s  │ Footer fades in

Continuous:
      │ Hero image: gentle float (3s loop)
      │ Video container: gentle float (3s loop)
      │ Clouds: drift and float (4-5s loops)
      │ Mascot: wave animation (2s, repeats every 3s)
```

## Responsive Breakpoints

### Mobile (< 768px)
```
┌─────────────┐
│             │
│   [Image]   │
│             │
│  Headline   │
│             │
│ Subheadline │
│             │
│   [Button]  │
│             │
│   [Video]   │
│             │
│   [Card 1]  │
│   [Card 2]  │
│   [Card 3]  │
│             │
│   Footer    │
│             │
└─────────────┘
```

### Desktop (≥ 768px)
```
┌─────────────────────────────────┐
│                                 │
│          [Image]                │
│                                 │
│         Headline                │
│                                 │
│       Subheadline               │
│                                 │
│         [Button]                │
│                                 │
│         [Video]                 │
│                                 │
│  [Card 1] [Card 2] [Card 3]     │
│                                 │
│          Footer                 │
│                                 │
└─────────────────────────────────┘
```

## Interactive States

### Button States
```
Default:     [✨ Enter the Temple]
             bg-red-400, scale: 1.0

Hover:       [✨ Enter the Temple]
             bg-red-500, scale: 1.05
             ↑ Smooth transition

Active/Tap:  [✨ Enter the Temple]
             bg-red-500, scale: 0.95
             ↓ Satisfying press
```

### Card States
```
Default:     ┌─────────┐
             │   ✨    │
             │ Supply  │
             └─────────┘
             y: 0, scale: 1.0

Hover:       ┌─────────┐
             │   ✨    │  ↑ Lifts up
             │ Supply  │
             └─────────┘
             y: -10, scale: 1.02
```

## Typography Scale

```
Hero Headline:     Find Inner Peace.
                   ▲ 6xl-7xl, Fredoka Bold

Section Title:     The Shrine
                   ▲ 5xl, Fredoka Bold

Subheadline:       The most devoted cat...
                   ▲ 2xl, Quicksand

Card Title:        Supply
                   ▲ 2xl, Fredoka Bold

Card Content:      9 Lives
                   ▲ xl, Quicksand

Small Text:        © 2024 Meow Monk
                   ▲ sm, Quicksand
```

## Spacing System

```
Section Padding:   py-20 (5rem = 80px)
Container Padding: px-6 (1.5rem = 24px)
Element Margin:    mb-8 (2rem = 32px)
                   mb-16 (4rem = 64px)
Card Gap:          gap-8 (2rem = 32px)
```

## Shadow Hierarchy

```
Level 1 (Subtle):     shadow-md
                      Used for: Social links

Level 2 (Medium):     shadow-lg
                      Used for: Cards, buttons

Level 3 (Strong):     shadow-2xl
                      Used for: Hero image, video container

Level 4 (Inner):      shadow-inner
                      Used for: Video inner frame
```

---

**This mockup represents the final visual design of the Meow Monk landing page.** 🧘‍♂️✨

