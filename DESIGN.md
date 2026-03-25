# ADVENTURE KAYAKING LANDING PAGE â DESIGN SPECIFICATION

---

## SUMMARY
Modern, ocean-inspired landing page for adventure kayaking experiences featuring bold hero imagery, experience-focused content cards, social proof, and prominent booking CTAâoptimized for mobile-first conversion with seamless accessibility.

---

## LAYOUT

**HEADER / NAVIGATION**
- Fixed horizontal nav bar (80px height)
- Left: Logo/brand mark (48Ã48px)
- Center: Nav links (Home, Experiences, About, FAQ) â hidden on mobile, hamburger menu at 768px breakpoint
- Right: CTA button "Book Now" (120Ã44px)
- Background: Off-white (#F8F8F8) with 1px bottom border (#E5E7EB)

**HERO SECTION**
- Full viewport height (min 600px, max 800px on desktop)
- Background: Full-bleed kayaking imagery (high-res, optimized)
- Dark overlay: rgba(0, 0, 0, 0.35) for text contrast
- Centered content block (max-width 700px):
  - Headline: "Paddle Into Adventure" (56px bold)
  - Subheading: "Explore pristine waters and hidden coves" (20px regular)
  - CTA button: "Start Your Journey" (large, 160Ã52px)
- Scroll indicator at bottom (animated chevron, 24Ã24px)

**EXPERIENCE CARDS SECTION**
- Section title: "Our Experiences" (48px bold, left-aligned)
- Grid layout: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- 6px gap between cards (8px grid standard)
- Card height: 380px fixed
- 4 experience cards displayed in grid:
  - *Sunset Paddle*
  - *Whitewater Explorer*
  - *Wildlife Sanctuary Tour*
  - *Beginner's Bay Adventure*
- Each card: 320Ã380px (responsive flex)
  - Image container: 320Ã180px (top)
  - Content area: 320Ã200px (bottom)
  - Title: 22px bold
  - Description: 14px, 3-line clamp
  - Badge (top-right corner): "Popular" / "Beginner-Friendly" / "Advanced"
  - Footer: "From $X" + "â Learn More" link

**SOCIAL PROOF SECTION**
- Two-column layout (stacked on mobile):
  - Left: Testimonials carousel (3 visible cards, swipeable)
    - 300Ã200px cards, 8px gap
    - Star rating (5Ãâ­ï¸)
    - Quote text (14px italic)
    - Author name + location (12px bold + 12px regular)
  - Right: Stats block (stacked vertical)
    - 4 stat cards (250Ã100px each)
    - Large number (40px bold, ocean blue)
    - Label text (14px, dark gray)
    - E.g., "2,500+ Paddlers", "15+ Routes", "4.9â Rating", "10+ Years"

**MID-PAGE CTA SECTION**
- Full-width banner (background: gradient ocean blue â teal)
- Centered content (max-width 600px):
  - Heading: "Ready to Get Wet?" (36px bold, white)
  - Subtext: "Join our community and save 15% on your first booking" (16px, light text)
  - Email input field (400Ã48px): placeholder "your@email.com"
  - Subscribe button (120Ã48px, sunset orange)

**FAQ ACCORDION SECTION**
- Section title: "Questions?" (48px)
- 8 accordion items, default collapsed
- Max-width 700px, centered
- Each item: 700Ãauto height
  - Header: 16px bold, 48px min-height, clickable
  - Icon: +/â toggle (right-aligned, 24Ã24px)
  - Body: 14px line-height 1.6, 16px padding
  - Smooth expand/collapse animation (200ms)

**CONTACT / BOOKING FORM**
- Section title: "Book Your Adventure" (48px)
- Form layout: 2 columns (desktop) / 1 column (mobile)
- Form fields (all 100% width on mobile):
  - Name (text input, 300Ã44px)
  - Email (email input, 300Ã44px)
  - Experience type (dropdown, 300Ã44px)
  - Date picker (date input, 300Ã44px)
  - Party size (number input, 300Ã44px)
  - Message (textarea, 600Ã120px)
  - Submit button: "Complete Booking" (160Ã48px)
- All inputs: 4px border-radius, 1px border (#D1D5DB), 12px padding

**GOOGLE MAPS EMBED**
- Below contact form
- 100% width, 400px height (responsive)
- Shows main kayaking base location
- Interactive map with zoom/pan

**FOOTER**
- Background: Dark gray (#1F2937)
- 4-column layout (desktop) / 2-column (tablet) / 1-column (mobile)
- Columns: About, Experiences, Support, Social Links
- Bottom bar: Copyright text (12px) + link row

---

## COLORS

**Primary Palette**
- Ocean Blue (primary): `#0369A1`
- Sunset Orange (accent/CTA): `#EA580C`
- Off-White (background): `#F8F8F8`
- Dark Gray (text/secondary): `#1F2937`

**Secondary Palette**
- Teal (gradient, hover): `#06B6D4`
- Light Gray (borders): `#E5E7EB`
- Pale Blue (light bg): `#E0F2FE`
- Success Green (validation): `#10B981`
- Error Red (validation): `#EF4444`

**Text Colors**
- Primary text: `#1F2937` (dark gray, 4.5:1 contrast on light)
- Secondary text: `#6B7280` (medium gray, 4.5:1 contrast)
- Light text (on dark): `#FFFFFF` (white, 7:1 contrast)
- Link color: `#0369A1` (ocean blue, underlined)
- Link hover: `#0284C7` (darker blue)

**Gradients**
- Hero overlay: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 100%)`
- CTA banner: `linear-gradient(135deg, #0369A1 0%, #06B6D4 100%)`

---

## COMPONENTS

**NAVIGATION LINK**
- Label: 14px semi-bold, color `#1F2937`
- Padding: 8px 16px
- Border-bottom: 3px solid transparent (default)
- On hover: border-bottom color changes to `#EA580C`, smooth 200ms transition
- On active/current page: border-bottom `#0369A1`
- Focus ring: 2px solid `#0369A1`, 4px offset (keyboard nav)

**PRIMARY CTA BUTTON ("Book Now", "Start Your Journey")**
- Background: `#EA580C`
- Text: white, 16px bold
- Padding: 12px 24px (44px height, 120px+ width)
- Border-radius: 6px
- Border: none
- On hover: background `#D84315` (darker orange), shadow lift (+4px blur)
- On active/press: background `#C73C0E`, inset shadow
- Focus ring: 3px solid `#EA580C`, 2px offset, visible on keyboard nav
- Disabled state: opacity 0.5, cursor not-allowed
- Transition: all 200ms ease

**SECONDARY CTA BUTTON ("Learn More")**
- Background: transparent
- Text: `#0369A1`, 14px semi-bold
- Border: 2px solid `#0369A1`
- Padding: 8px 16px
- Border-radius: 4px
- On hover: background `#E0F2FE` (pale blue)
- On active: background `#BAE6FD`
- Focus ring: 2px solid `#0369A1`, 2px offset
- Arrow icon: 16Ã16px, inline right (+4px margin)

**EXPERIENCE CARD**
- Container: 320Ã380px (flex, column)
- Background: white (#FFFFFF)
- Border: 1px solid `#E5E7EB`
- Border-radius: 8px
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- On hover: box-shadow 0 8px 24px rgba(0, 0, 0, 0.12), transform translateY(-4px), transition 200ms
- Image: 320Ã180px, object-fit cover, border-radius top 8px
- Badge (top-right): absolute positioning, 8px inset
  - Background: `#EA580C`, white text, 12px bold, 6px 12px padding, border-radius 4px
- Content area: padding 16px, flex-grow
- Footer: flex row space-between, border-top 1px `#E5E7EB`, padding-top 12px

**TESTIMONIAL CARD**
- Container: 300Ã200px, background white
- Border: 1px solid `#E5E7EB`
- Border-radius: 8px
- Padding: 16px
- Star rating: 5 â­ï¸ icons (16Ã16px each, yellow `#FBBF24`), gap 4px
- Quote: 14px italic `#1F2937`, margin 12px 0
- Author section: 
  - Name: 12px bold `#1F2937`
  - Location: 12px regular `#6B7280`
- On carousel swipe: fade transition 300ms, snap-scroll enabled on mobile

**STAT CARD**
- Container: 250Ã100px, center-aligned
- Background: transparent
- Number: 40px bold, color `#0369A1`
- Label: 14px regular, color `#6B7280`

**ACCORDION ITEM**
- Header: 
  - Full width, 48px min-height, clickable
  - Padding: 16px
  - Background: `#F8F8F8` (collapsed) or `#E0F2FE` (expanded)
  - Text: 16px bold `#1F2937`
  - Icon: 24Ã24px SVG (+/â), positioned right, color `#0369A1`
  - Cursor: pointer
  - Focus ring: 2px solid `#0369A1`, 2px inset
  - On hover (collapsed): background lightens to `#F3F4F6`
- Body:
  - Max-height: 0 (collapsed) â auto (expanded)
  - Padding: 16px (when expanded)
  - Border-bottom: 1px solid `#E5E7EB`
  - Text: 14px line-height 1.6 `#1F2937`
  - Transition: max-height 200ms ease, opacity 200ms ease

**FORM INPUT FIELD (text, email, number, date)**
- Container: 100% width (mobile), fixed 300px (desktop)
- Height: 44px
- Padding: 12px 16px
- Border: 1px solid `#D1D5DB`
- Border-radius: 4px
- Font: 16px, `#1F2937`
- Background: white
- Placeholder text: `#9CA3AF` (light gray)
- On focus: 
  - Border color: `#0369A1`
  - Box-shadow: 0 0 0 3px rgba(3, 105, 161, 0.1) (blue tint)
  - Outline: none
- On valid: border-left 4px solid `#10B981` (green)
- On invalid: border-left 4px solid `#EF4444` (red)
- On disabled: background `#F3F4F6`, opacity 0.6, cursor not-allowed
- Transition: border-color 150ms, box-shadow 150ms

**FORM TEXTAREA**
- Same as input, but:
- Height: 120px (min)
- Resize: vertical only
- Font-family: inherit (sans-serif)

**FORM DROPDOWN / SELECT**
- Same height/padding as text input (44px)
- Arrow icon: 16Ã16px, right 12px from edge, color `#6B7280`
- On open: border-color `#0369A1`, shadow activated
- Focus ring: 3px solid `#0369A1`, 2px offset

**FORM LABEL**
- Display: block (desktop) / inline-block (mobile)
- Font-size: 14px, font-weight: 600
- Color: `#1F2937`
- Margin-bottom: 8px
- On invalid form: color `#EF4444`

**EMAIL INPUT (Newsletter)**
- Inline layout: input + button side-by-side (desktop) / stacked (mobile)
- Input: 300px width (desktop), 100% (mobile), 48px height
- Same styling as standard input
- Button: "Subscribe" 120px width, 48px height, `#EA580C` background

**SKIP-TO-CONTENT LINK**
- Positioned: absolute top 0, left 0
- Font-size: 14px, font-weight: 600
- Padding: 12px 24px
- Background: `#0369A1`, color white
- Z-index: 1000
- On focus: visible, appears below header
- On blur or click: visually hidden (clip: rect(0,0,0,0))

**HAMBURGER MENU (mobile < 768px)**
- Icon: 24Ã24px, 3 horizontal lines
- Color: `#1F2937`
- On click: toggles nav menu (slide in from left/top)
- Menu background: white or off-white overlay
- Menu items: 48px height each, 16px padding, full-width, left-aligned
- Close button: X icon top-right

**FOCUS RING (universal for keyboard nav)**
- Width: 2â3px solid
- Color: `#0369A1`
- Offset: 2â4px outside element
- Visible on all interactive elements: buttons, links, inputs, accordion headers
- Applies on `:focus-visible` (not on mouse click)

---

## INTERACTIONS

**NAVIGATION LINK HOVER**
- Mouse: underline slides in from left (200ms), color â `#EA580C`
- Keyboard: focus ring appears (2px `#0369A1` offset 4px)
- Active state: permanent border-bottom `#0369A1` (3px)

**CTA BUTTON CLICK**
- Mouse press: slight inset shadow, background darkens, ripple effect optional
- Release: button returns to hover state
- Disabled: no interaction, cursor shows "not-allowed"
- Keyboard (Enter/Space): same visual feedback as mouse click

**EXPERIENCE CARD HOVER (desktop)**
- Box-shadow expands: 0 8px 24px rgba(0,0,0,0.12)
- Card lifts: transform translateY(â4px)
- Transition duration: 200ms cubic-bezier(0.4, 0, 0.2, 1) (smooth easing)
- Image overlay: subtle brightness +5% (optional)
- "Learn More" button text color brightens â darker `#0369A1`

**EXPERIENCE CARD FOCUS**
- Keyboard Tab: focus ring 2px `#0369A1` around entire card (8px offset)
- Card remains at normal position (no lift on focus, only hover)

**ACCORDION EXPAND / COLLAPSE**
- Click header: icon rotates 180Â° (+/â toggle), 200ms animation
- Body expands: max-height: 0 â auto (height calculated per item), opacity 0 â 1, 200ms cubic-bezier(0.4, 0, 0.2, 1)
- Header background: `#F8F8F8` â `#E0F2FE`
- On keyboard (Enter/Space on focused header): same behavior as click
- Only one item open at a time (collapse others)

**FORM INPUT FOCUS**
- Border color: `#D1D5DB` â `#0369A1`
- Box-shadow appears: 0 0 0 3px rgba(3, 105, 161, 0.1)
- Placeholder text fades slightly: opacity 0.7 â 1
- Cursor: text cursor appears
- Duration: 150ms transition

**FORM VALIDATION FEEDBACK**
- On blur (field loses focus):
  - Valid (e.g., email format correct): left border 4px `#10B981`, no error message
  - Invalid: left border 4px `#EF4444`, error message appears below input (14px, color `#EF4444`)
  - Required empty: same invalid styling
- Error message: fadeIn 200ms, positioned 8px below input
- Icon (optional): â or â 16Ã16px to right of input

**NEWSLETTER CTA BANNER HOVER**
- Desktop: input and button scale +2% on entire section hover, 200ms
- Mobile: no transform (touch-friendly)
- Input focus: focus ring as standard
- Button hover: background `#D84315`, shadow lift

**TESTIMONIAL CAROUSEL**
- Swipe/drag: next/prev card, smooth scroll-snap, 200ms deceleration
- Pagination dots: 8px diameter, current dot highlighted `#0369A1`, others `#D1D5DB`
- On dot click: smooth scroll to that card, 300ms
- Auto-advance (optional): every 5 seconds if no user interaction, fade transition

**GOOGLE MAPS EMBED**
- Click/tap to interact (full zoom/pan enabled)
- Pin click: shows business info popup
- Keyboard: zoom via +/â buttons (accessible alternatives)

**SCROLL BEHAVIOR**
- Chevron icon (hero bottom): smooth pulse animation (opacity 0.6 â 1, 1.5s loop)
- On scroll near element: fade-in animation (opacity 0 â 1, 400ms) for cards, stats, accordion
- Smooth scroll to section on anchor link click (200ms, CSS `scroll-behavior: smooth`)

**MOBILE HAMBURGER MENU ANIMATION**
- Icon â 3 lines transform into X when clicked
  - Top line: rotate +45Â° around center
  - Middle line: fade out (opacity 0)
  - Bottom line: rotate â45Â° around center
- Menu slides in from left (250ms, easeOut)
- Overlay (semi-transparent `rgba(0,0,0,0.3)`) covers page behind
- Close on link click or overlay click
- Escape key also closes menu

**LINK UNDERLINE ANIMATION (hover)**
- Default: no underline
- Hover: underline slides in from left, 200ms, width 0 â 100%
- Focus (keyboard): underline always visible + focus ring

**TOUCH INTERACTIONS (mobile)**
- All buttons: min 44Ã44px tap target
- Form inputs: min 48Ã48px tap target
- No hover effects on touch devices (`:hover` disabled via @media (hover: none))
- Active states replace hover (darker background, no transform)

---

## STYLE NOTES

**Typography**

- **Font Family**: Inter or Poppins (sans-serif), system fallback
  - Primary heading: Poppins 700 weight
  - Body text: Inter 400 weight
  - Buttons/labels: Inter 600 weight
  - Quotes: Inter 400 italic

- **Type Scale** (based on 16px base):
  - H1 (hero headline): 56px / 1.2 line-height, bold
  - H2 (section titles): 48px / 1.3 line-height, bold
  - H3 (card titles): 22px / 1.3 line-height, bold
  - Body: 16px / 1.6 line-height, regular
  - Small text (labels, captions): 14px / 1.5 line-height, regular
  - Micro text (footer, attribution): 12px / 1.4 line-height, regular

- **Letter Spacing**: 
  - Headings: â0.5px (tight, modern)
  - Body: 0px (default)
  - Small text: +0.25px (clarity)

**Spacing Grid (8px baseline)**
- Padding/margins in multiples of 8px: 8, 16, 24, 32, 40, 48, 56, 64, 80
- Component internal padding: 12px (1.5Ã), 16px (2Ã), 24px (3Ã)
- Section gaps: 48px (desktop), 32px (tablet), 24px (mobile)
- Card gaps: 8px (2Ã) or 16px (4Ã)

**Border Radius**
- Large containers (cards, modals): 8px
- Buttons, inputs, badges: 4â6px
- Micro elements (focus rings, small badges): 4px
- Circles (icons, avatars): 50%

**Shadows & Depth**
- Subtle (cards at rest): `0 2px 8px rgba(0,0,0,0.08)`
- Elevated (on hover): `0 8px 24px rgba(0,0,0,0.12)`
- Very subtle (dividers): `0 1px 3px rgba(0,0,0,0.05)`
- No deep shadows (keep design clean and modern)

**Animation & Motion**
- Default transition: 200ms cubic-bezier(0.4, 0, 0.2, 1)
- Bounce interactions: 200â250ms
- Page scroll reveals: 400ms ease-out
- Carousel/slider: 300ms snap-scroll
- Avoid: overly long animations, parallax (accessibility concern)
- Respect `prefers-reduced-motion`: disable animations if user preference detected

**Responsive Breakpoints**
- **Mobile**: 0â640px (1 column, stacked layout)
- **Tablet**: 641â1024px (2 columns, medium spacing)
- **Desktop**: 1025px+ (3 columns, max-width 1280px content)
- **Large desktop**: 1281px+ (same layout, centered with side margins)

**Feel & Tone**
- **Modern & clean**: Minimal decoration, generous whitespace
- **Adventure-forward**: Bold orange accents, ocean blue primary conveys trust + excitement
- **Accessible & inclusive**: High contrast, clear hierarchy, no flashing/jarring effects
- **Friendly & approachable**: Rounded corners, soft shadows, warm color palette
- **Professional**: Clean typography, consistent spacing, polished interactions

---

## ACCESSIBILITY SUMMARY

**WCAG AA Compliance Checklist**
- â Color contrast: 4.5:1 minimum on all text (ocean blue `#0369A1` on white, dark gray on light backgrounds)
- â Semantic HTML: nav, main, section, article, form, button elements used correctly
- â ARIA labels: All form inputs labeled (`<label for="...">`), icon buttons have `aria-label`
- â Keyboard navigation: All interactive elements (buttons, links, form, accordion, carousel) operable via Tab, Enter, Space, arrow keys
- â Focus management: Visible focus ring (2â3px solid `#0369A1`, 2â4px offset) on all focusable elements
- â Focus order: Logical top-to-bottom, left-to-right, skip-to-content link at start
- â Form validation: Clear error messages, invalid state styling, helper text for required fields
- â Alternative text: All images have concise alt text (e.g., "Kayakers paddling in sunset light")
- â Reduced motion: Animations disabled if `prefers-reduced-motion: reduce` detected
- â Mobile accessibility: Min 44Ã48px tap targets, no hover-only content
- â Maps: Keyboard zoom controls (+/â), text instructions for navigation
- â Carousel: Keyboard arrow keys (left/right) to navigate, focus trap disabled

---

**IMPLEMENTATION CHECKLIST FOR DEVELOPER**

The developer will:
1. Use semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, `<button>`)
2. Implement all focus rings as CSS `:focus-visible` (not `:focus` on mouse)
3. Apply all hex color values exactly as specified (no approximations)
4. Ensure 8px grid consistency for all spacing (padding, margins, gaps)
5. Set font sizes and line heights to type scale
6. Add `aria-label` to icon-only buttons, `aria-expanded` to accordion, `aria-live` to form errors
7. Embed Google Maps with keyboard controls and skip option
8. Test keyboard navigation (Tab, Shift+Tab, Enter, Space, arrow keys on carousel/menu)
9. Test color contrast with WCAG AA validator
10. Test touch targets on mobile (min 44Ã44px on smaller devices)
11. Implement smooth scroll behavior (`scroll-behavior: smooth` CSS)
12. Set up responsive media queries for mobile (640px), tablet (1024px), desktop (1280px)

---

END SPECIFICATION