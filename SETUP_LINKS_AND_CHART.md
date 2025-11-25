# 🔗 Setup Links and Chart - Meow Monk

## Overview

You need to update 3 placeholder URLs in the code with your actual token information:

1. **Pump.fun Buy Button** (Line ~75)
2. **Raydium Buy Button** (Line ~86)
3. **Pump.fun Chart Embed** (Line ~165)

---

## Step 1: Get Your Token Address

Once your token is launched on Pump.fun, you'll receive a **token address** (also called contract address).

It looks like this:
```
7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU
```

---

## Step 2: Update Buy Buttons

### Pump.fun Button (Line ~75)

**Find this line:**
```javascript
href="https://pump.fun/coin/YOUR_TOKEN_ADDRESS"
```

**Replace with:**
```javascript
href="https://pump.fun/coin/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
```
(Use your actual token address)

---

### Raydium Button (Line ~86)

**Find this line:**
```javascript
href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=YOUR_TOKEN_ADDRESS"
```

**Replace with:**
```javascript
href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
```
(Use your actual token address)

**Note:** Raydium button only works after your token graduates from Pump.fun to Raydium. Before that, users should only use the Pump.fun button.

---

## Step 3: Update Chart Embed

### Pump.fun Chart (Line ~165)

**Find this line:**
```javascript
src="https://pump.fun/coin/YOUR_TOKEN_ADDRESS"
```

**Replace with:**
```javascript
src="https://pump.fun/coin/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
```
(Use your actual token address)

---

## Alternative Chart Embeds

If you want to use a different chart provider:

### DexScreener (After Raydium graduation):
```javascript
src="https://dexscreener.com/solana/YOUR_TOKEN_ADDRESS?embed=1&theme=light"
```

### Birdeye:
```javascript
src="https://birdeye.so/token/YOUR_TOKEN_ADDRESS?chain=solana&embed=true"
```

### GeckoTerminal:
```javascript
src="https://www.geckoterminal.com/solana/pools/YOUR_POOL_ADDRESS?embed=1"
```

---

## Quick Find & Replace

Use your code editor's find & replace feature:

1. **Find:** `YOUR_TOKEN_ADDRESS`
2. **Replace with:** Your actual token address
3. **Replace All** (should replace 3 instances)

---

## File Location

All changes are in: **`src/MeowMonk.jsx`**

---

## Testing

After updating:

1. **Save the file**
2. **Check browser** at http://localhost:5174/
3. **Click buy buttons** to verify they go to correct pages
4. **Scroll to chart** to verify it loads properly

---

## Before Launch

If you haven't launched yet, you can:

1. **Keep placeholders** for now
2. **Test the UI** and design
3. **Update links** immediately after launch
4. **Deploy updated version** within minutes

---

## Current Button Styles

### Pump.fun Button:
- Orange background
- White text
- Meditation emoji 🧘‍♂️
- Hover: Lifts up slightly
- Click: Scales down

### Raydium Button:
- White background
- Orange text
- Orange border
- Sparkle emoji ✨
- Hover: Lifts up slightly
- Click: Scales down

Both buttons are:
- Fully responsive
- Mobile-friendly
- Smooth animations
- Clear call-to-action

---

## Chart Section

**Title:** "The Path to Enlightenment"
**Subtitle:** "Watch the journey unfold"

**Features:**
- Same temple-style frame as video
- Floating animation
- Responsive height (500px mobile, 600px desktop)
- Rounded corners
- Soft shadows

---

## Example: Complete Setup

```javascript
// Buy Button 1
href="https://pump.fun/coin/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"

// Buy Button 2
href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"

// Chart Embed
src="https://pump.fun/coin/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
```

---

**Once you update these 3 URLs, your site will be fully functional!** 🧘‍♂️✨

