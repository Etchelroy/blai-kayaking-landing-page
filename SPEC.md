SUMMARY:
Design and specify a high-converting landing page for an adventure kayaking company that showcases experiences, builds trust, and drives booking inquiries.

---

APPROACH:
Static site built with Next.js (React) + Tailwind CSS deployed on Vercel. Rationale: Fast performance, SEO-friendly with metadata, minimal backend needed, easy image optimization for photography-heavy content, and built-in analytics support. Alternative: Plain HTML/CSS if no CMS needed, but React allows reusable components for testimonials and booking CTAs.

---

REQUIREMENTS:

**Navigation & Layout**
- Fixed or sticky header with logo, nav links (Home, Experiences, About, FAQ, Contact), and primary CTA button
- Mobile-first responsive design (320px, 768px, 1024px breakpoints)
- Footer with company info, social links, and secondary CTAs

**Hero Section**
- Full-width hero image (kayaking scene, sunset/water backdrop) with 60% opacity dark overlay
- Headline (e.g., "Explore Pristine Waters. Unforgettable Adventures.") positioned center-left
- Subheadline with emotional benefit (max 2 lines, 18-20px size)
- Primary CTA button ("Book Now" or "Reserve Trip") with contrasting color
- Smooth scroll anchor to experiences section

**Experiences Gallery**
- 3â4 experience cards in a grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Each card: high-quality image, experience name, brief description (50 words max), difficulty level badge, price range, "Learn More" link
- Hover effect: subtle scale/shadow lift, smooth transition (300ms)
- Links open modal or dedicated experience page

**Social Proof Section**
- 4â6 testimonial cards with: guest name, photo (60px avatar), quote (max 80 words), star rating (5-star display)
- Carousel or static grid depending on volume
- Company stats: e.g., "2,000+ Happy Paddlers | 15+ Years" in large typography

**Call-to-Action (Mid-Page)**
- Secondary CTA with supporting copy: "Ready to paddle? Limited spots available for summer trips"
- Newsletter signup form (Email input + Subscribe button)

**FAQ Accordion**
- 6â8 expandable questions (What to bring, fitness level required, safety info, refund policy, etc.)
- Smooth open/close animation (200ms)
- Keyboard accessible (arrow keys to navigate, Enter to toggle)

**Contact / Booking Section**
- Embedded contact form (Name, Email, Phone, Date Preference, Experience Type, Message)
- Form validation with inline error messages
- Or embed a booking widget (Calendly, Acuity Scheduling) if backend integration exists
- Google Maps embed showing location/meeting point

**Visual Hierarchy & Design**
- Primary color: Ocean blue (#0369A1 or similar)
- Secondary color: Warm accent (sunset orange #EA580C or teal #14B8A6)
- Neutral: Off-white (#F8F8F8), Dark gray (#1F2937) for text
- Typography: Sans-serif primary (Inter, Poppins), consistent 8px grid spacing
- All interactive elements: clear focus rings (3px outline, 2px offset)
- Button states: default, hover, active, focus, disabled

**Accessibility Requirements**
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All images: descriptive alt text (e.g., "Group of four paddlers on calm mountain lake at sunset")
- Form labels: properly associated with inputs (`<label for="email">`)
- ARIA labels on icon buttons (e.g., social links, expand/collapse controls)
- Color contrast minimum 4.5:1 for body text, 3:1 for large text
- Focus indicators visible on all interactive elements (buttons, links, form fields)
- Skip-to-content link at top
- Landmarks properly structured

**Performance & Technical**
- Image optimization: WebP format with JPG fallback, lazy loading for below-fold images
- Bundle size target: <100KB JS
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices)
- Core Web Vitals: LCP <2.5s, CLS <0.1, FID <100ms
- Mobile-friendly (responsive, touch-friendly buttons 44px minimum)

---

CONSTRAINTS:

**Platform & Dependencies**
- Deploy on Vercel, Netlify, or similar static hosting
- No backend required unless booking widget integration needed
- Images: assume external CDN or Vercel image optimization

**Performance**
- Keep total image payload under 2MB (compressed)
- No heavy animations that block rendering
- Defer non-critical CSS

**Browser Support**
- Modern browsers: Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile: iOS Safari 12+, Android Chrome 60+

**Content Dependencies**
- 5â8 high-quality hero/experience images (landscape orientation, 1920Ã1080 minimum)
- 4â6 testimonial photos (square, 600Ã600px)
- Company logo (SVG preferred, fallback PNG)

---

NOTES:

**Best Practices**
- Use hero image as background CSS with fallback solid color (don't rely on `<img>` for layout)
- Implement smooth scroll behavior, but allow users to disable via `prefers-reduced-motion`
- Price displays: always show range or "From $X" to manage expectations
- Testimonials: include verification (e.g., "Verified Booking" badge if pulling from booking platform)

**Edge Cases**
- Mobile: ensure modals/forms don't break on small screens; use viewport-sized inputs
- No images loaded: provide meaningful fallback text/colors for hero and cards
- Form submission: show success message (toast or modal), not silent success
- Seasonal content: plan way to highlight limited-time trips (e.g., "Summer only" badge)

**Things to Watch For**
- Avoid auto-playing video background (accessibility + performance hit); use static image instead
- Don't overload hero with textâkeep headline to 5â8 words max
- FAQ questions should match user search intent (e.g., "What do I need to bring?" not "Item requirements")
- Always include safety/liability messaging (link to full terms, not inline)
- Test form submission on slow networks (3G); consider loading state on CTA
- Booking widget latency: if embedding third-party calendar, set reasonable timeout fallback to contact form