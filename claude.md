# Claude Development Session Log

## Current Session: 2025-11-06

### Latest Changes (Scroll Experiment Branch)
- **NEW EXPERIMENTAL BRANCH**: `claude/scroll-experiment-011CUpog5k5x8axH97NZAj8B` - can easily revert back to main branch
- **Fixed Duplicate Steam**: Removed steam from landing page to avoid duplicate steam effect when scrolling between sections - only logo steam in section 2 remains
- **Enhanced Steam Effect**: Made steam bigger, more visible, and immediately active (20 particles, 50-110px size, 0.9 max opacity, negative delays for mid-cycle start)
- **Removed Opening Date**: Deleted "Estimated Opening Early 2026" section for cleaner design
- **Two-Section Scroll Design**:
  - Section 1: Minimal - just "Scroll to see what's steaming" text with gradual blur effect
  - Section 2: ALL content at once (logo, tagline, COMING SOON, Instagram) with ScrollFloat effects
- **ScrollFloat Effects**: Parallax scroll effects on individual elements (logo, tagline, badge, button) with varying speeds and directions
- **Scroll Indicator**: Centered bouncing arrow (no duplicate text)
- **Gradual Blur Effect**: First section blurs as you scroll down
- **Fixed Threads Background**: Threads effect stays fixed while content scrolls
- **Threads Settings Optimized**: Set amplitude=0.6, distance=1 for subtler, more spread-out wavy threads effect
- **Threads WebGL Effect**: Added animated wavy threads overlay using OGL library - white threads that flow across the screen with mouse interaction
- **Typewriter Golden Glow**: Changed "is Steaming..." to white text with golden glow effect (visible on golden background while keeping the steaming aesthetic)
- **Golden Yellow Background**: Solid golden yellow background (#E8B84D) with Threads effect overlay
- **White Text**: Changed "Something Delicious" and subtitle to white for better visibility on golden background
- **Kept Steam Effect**: Logo steam particles still active (white steam rising from logo)
- **Fixed Steam Cutoff**: Removed overflow-hidden constraint, extended steam animation distance to -250px (from -150px), increased scale to 2x for smoother fluid effect
- **Removed Rotating Border Artifact**: Replaced rotating gradient border with static golden border (border-4 border-bao-golden) on COMING SOON badge
- **Epic COMING SOON Badge**: Dark gradient bg, pulsing glow, glowing gradient text, floating animation - clean and eye-catching!
- **Simplified IG Button**: Replaced big Instagram card with simple gradient button
- **Minimal Design**: Removed all extras (countdown, location, facts, visitor counter) - kept only logo, name, coming soon, IG button

### Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS v3
- Framer Motion
- OGL (WebGL library for Threads effect)
- canvas-confetti

### Current Components
- `Threads.tsx` - WebGL animated wavy threads effect with Perlin noise and mouse interaction
- `ScrollFloat.tsx` - Parallax scroll effect component for individual elements
- `ScrollIndicator.tsx` - Bouncing arrow scroll indicator
- `GradualBlur.tsx` - Scroll-triggered blur effect component
- `LoadingScreen.tsx` - Golden yellow loading screen with HOLEE BAO logo
- `FloatingBaos.tsx` - Clickable floating baos with confetti easter egg
- `SteamEffect.tsx` - White steam particles rising from logo
- `TiltWrapper.tsx` - 3D tilt effect for logo
- `Typewriter.tsx` - Typewriter effect for tagline

### Key Features
- **Two-Section Scroll Design** (experimental - easy to revert):
  - Section 1: Minimal scroll prompt "Scroll to see what's steaming"
  - Section 2: All content at once with parallax ScrollFloat effects
- **ScrollFloat Parallax Effects**: Individual elements float at different speeds as you scroll (logo, tagline, badge, opening date, button)
- **Gradual Blur Effect**: First section blurs as you scroll down
- **Scroll Indicator**: Bouncing arrow below scroll prompt
- **Fixed Threads Background**: WebGL threads stay in place while content scrolls
- **Threads WebGL Effect**: Animated wavy white threads overlay with mouse interaction using Perlin noise
- Clean solid golden yellow background (#E8B84D)
- White steam particles rising from logo
- 3D tilt logo effect
- Typewriter animation "is Steaming..." with golden glow effect (white text with golden shadow)
- White text for main heading and subtitle
- Clickable floating baos (confetti easter egg)
- Loading screen (2.5s)

### Branches
- **Main Branch** (no scroll): `claude/holee-bao-landing-page-011CUpog5k5x8axH97NZAj8B`
- **Scroll Experiment Branch** (current): `claude/scroll-experiment-011CUpog5k5x8axH97NZAj8B`

To revert to no-scroll version: `git checkout claude/holee-bao-landing-page-011CUpog5k5x8axH97NZAj8B`

### Instagram
https://www.instagram.com/holeebao.cph/

### Location
Åboulevard 9, 1635 København V (currently not displayed on page)

---

## Recent Commits

### e857651 - Replace big IG card with simple button
- Removed InstagramCTA component
- Simple inline Instagram button
- Purple/pink gradient

### cb4f9a5 - Implement real WebGL Plasma effect with OGL
- Added Plasma.tsx with full WebGL shader
- Mouse-interactive plasma
- 60 iteration shader loop
- Color: #E8B84D

### 12d835f - Replace background with plasma effect on golden yellow
- Initial plasma attempt with SVG (replaced later)
- Golden yellow base color

### b484172 - Simplify to minimal design
- Removed countdown, location, bao facts, footer
- Focus on logo + name + coming soon + IG only

### 9fe0a29 - Remove visitor counter and duplicate IG link
- Cleaned up confusing fake visitor stats
- Removed duplicate social links

### Previous sessions available in git history
