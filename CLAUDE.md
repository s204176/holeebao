# Claude Development Guidelines

## CRITICAL: Quality Check Protocol

**ALWAYS verify your work after implementing ANY feature or change:**

1. After writing code, STOP and review what you created
2. Check if the implementation matches what was requested
3. Look at the actual visual output if it's UI-related - USE PLAYWRIGHT TO SCREENSHOT AND VERIFY
4. Test the functionality yourself before claiming it's done
5. If it looks wrong, fix it immediately - don't wait for the user to complain

**Never assume your code works without verification. Always double-check.**

---

## Current Project: Ho Lee Bao Landing Page

### KNOWN ISSUES / ONGOING WORK

#### Menu Page Scroll Issue (NOT FIXED)
**Problem:** When clicking "View Full Menu" from homepage, the menu page loads scrolled to "To Share" section instead of the top ("Menu" header).

**What was tried:**
- Aggressive ScrollToTop component with multiple timeouts (10ms, 50ms, 100ms, 200ms, 400ms)
- Changed `whileInView` to `animate` on MenuSection components to prevent viewport-triggered scrolling
- Removed animation delays (set to 0)
- Various padding adjustments (pt-16, pt-20, pt-32, pt-40)

**Current state:** Scroll position reports as 0 but visually shows "To Share" section at top. The issue might be related to:
- Framer Motion animations causing layout shifts during render
- Content being pushed up by animation transforms
- Need to investigate if `initial={{ y: 30 }}` on sections causes the offset

**Next steps to try:**
1. Remove ALL framer-motion animations from MenuPage temporarily to test
2. Check if the `y: 30` initial offset is causing cumulative layout shift
3. Try using `layoutId` or `layout` prop to stabilize positions
4. Consider using CSS scroll-behavior instead of JS scroll

---

### Latest Session Updates
- Loading screen now uses CookingPot icon from lucide-react (replaces ugly handmade SVG)
- Pot animation: appears then fades away while logo pops out
- Waves background: removed blur effect on scroll (was causing uneven distortion)
- Waves min opacity increased to 0.5 when scrolled
- Footer padding reduced (pt-24 pb-12)

### Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS v3
- Framer Motion
- lucide-react (for icons)
- OGL (WebGL library for effects)
- Playwright (for testing)

### Project Structure
- Main branch: `main`
- Current working branch: `feature/loading-animation-polish`

### Key Components
- LoadingScreen.tsx - Golden loading screen with CookingPot icon animation
- HomePage.tsx - Main landing page
- MenuPage.tsx - Menu display page
- AppRouter.tsx - Routing with ScrollToTop component
- Threads.tsx - WebGL wavy background effect

### Development Rules
1. **ALWAYS double-check your work before saying it's done**
2. **USE PLAYWRIGHT** to take screenshots and verify visual changes
3. Test visual changes by actually looking at them
4. Don't make assumptions about how code will render
5. Fix issues immediately when they're spotted
6. Keep designs clean and professional - no "ugly" implementations
