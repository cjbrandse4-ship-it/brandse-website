# UI/UX Audit: servicedarbresbrandse.com

Audit date: 2026-03-30
Based on UI/UX Pro Max checklist (99 UX guidelines)

---

## CRITICAL (Must Fix)

### 1. Accessibility
| Issue | Location | Fix |
|---|---|---|
| Hero sections use background-image with text overlay but no skip-link | All pages | Add skip-to-content link |
| No focus ring styles defined | globals.css | Add visible focus states for keyboard nav |
| Service dropdown relies on hover only | Header.tsx | Add click/tap support for mobile (partially done via hamburger) |
| No aria-labels on icon-only buttons | Header phone icon, language toggle | Add aria-label="Call us" / "Switch language" |
| Gallery lightbox missing keyboard nav | gallery.tsx | Add Esc to close, arrow keys to navigate |
| Contact form missing aria-live for error/success states | contact.tsx | Add role="alert" on status messages |

### 2. Touch & Interaction
| Issue | Location | Fix |
|---|---|---|
| Emergency bar phone text small on mobile | Header.tsx | Increase to min 14px, ensure tap target 44px |
| Service dropdown items too close together on mobile menu | Header.tsx mobile menu | Increase padding to py-3 minimum |
| No loading state on contact form submit | contact.tsx | Already has spinner, but no disabled state on inputs during send |
| Gallery images no tap feedback | gallery.tsx | Add scale or opacity transition on tap |

### 3. Performance
| Issue | Location | Fix |
|---|---|---|
| OG image 746KB (too large) | public/og-image.jpg | Compress to under 200KB, use WebP |
| Hero background images not optimized | All hero sections | Use Next.js Image or optimized WebP |
| Gallery loads all images at once | gallery.tsx | Already has lazy loading, but no placeholder/blur |
| Google Fonts loaded from external CDN | _document.tsx | Consider self-hosting for GDPR + speed |
| Two font families loaded (DM Sans + Inter) | _app.tsx | Consider using just one to reduce load |
| No image dimension declarations on external images | Various | Add width/height to prevent CLS |

---

## HIGH (Should Fix)

### 4. Style & Consistency
| Issue | Location | Fix |
|---|---|---|
| Primary color hardcoded everywhere as #2D5016 | 30+ locations | Extract to CSS variable or Tailwind config |
| Inconsistent button styles | Various pages | Standardize: primary (green), secondary (outline), ghost |
| Hero min-h-[600px] too tall on small phones | Multiple pages | Use min-h-[50vh] or responsive value |
| Footer uses different green (#7cb342) than header (#2D5016) | Footer.tsx | Unify accent colors |
| Card shadows inconsistent | Service cards vs testimonial cards | Define 2-3 shadow levels and reuse |

### 5. Layout & Responsive
| Issue | Location | Fix |
|---|---|---|
| Body text line length unrestricted on large screens | About, FAQ, Blog | Add max-w-prose (65ch) on text blocks |
| Service area dropdown scrollable list hard to use on mobile | Header.tsx | Full-screen overlay instead of dropdown |
| Blog page only 2 posts | blog.tsx | Either add content or hide section |
| City pages have thin content | [city].tsx | Add unique local content per city for SEO |

### 6. Navigation
| Issue | Location | Fix |
|---|---|---|
| No breadcrumbs on service pages | tree-removal.tsx etc. | Add Breadcrumb component (exists but unused) |
| No 404 page | Missing | Create custom 404 with navigation back |
| Language toggle small and hard to find | Header.tsx | Make more prominent or add flag icon |
| No back-to-top button on long pages | All pages | Add scroll-to-top FAB |

---

## MEDIUM (Nice to Have)

### 7. Typography & Color
| Issue | Location | Fix |
|---|---|---|
| Font pairing (DM Sans + Inter) is redundant | Both are geometric sans | Pick one: DM Sans for headings, Inter for body, or just DM Sans for everything |
| No text-display or type scale defined | globals.css | Define h1-h4 + body + caption sizes as reusable classes |
| Contact form placeholder text too light (#9ca3af) | contact.tsx | Ensure 4.5:1 contrast minimum |

### 8. Forms & Feedback
| Issue | Location | Fix |
|---|---|---|
| Contact form has no field validation until submit | contact.tsx | Add inline validation on blur |
| No CAPTCHA or spam protection | contact API | Add reCAPTCHA or honeypot field |
| Success message disappears on re-render | contact.tsx | Keep visible until user dismisses |
| Service Area dropdown has no default/placeholder selected state | contact.tsx | Muted "Select your area" placeholder |
| No autofill attributes (autocomplete) on form fields | contact.tsx | Add autocomplete="name", "email", "tel" |

### 9. Animation & Motion
| Issue | Location | Fix |
|---|---|---|
| No page transition animations | All pages | Add subtle fade-in on route change |
| Hover effects only on cards | Service cards | Consistent hover: shadow + translateY(-2px) |
| No reduced-motion support | globals.css | Add @media (prefers-reduced-motion) |
| FAQ accordion snap-opens without animation | faq.tsx | Add height transition (200ms ease-out) |

### 10. SEO & Content
| Issue | Location | Fix |
|---|---|---|
| Founding date mismatch: "since 2010" in text, "2020" in schema | about.tsx | Align to correct year |
| Missing robots.txt | public/ | Create with proper allow/disallow |
| Some meta descriptions exceed 160 chars | SEOHead.tsx | Trim to 150-160 chars |
| Blog only has 2 posts (thin content signal) | data/blogPosts.ts | Add 5-10 more articles or remove blog |
| Testimonial dates in 2026 (future dates) | data/translations.ts | Use real dates |
| No ServiceArea schema on city pages | [city].tsx | Add JSON-LD for local SEO boost |

---

## LAYOUT IMPROVEMENT PLAN

### Homepage Redesign Priorities

**Current layout:**
1. Hero with CTA
2. Services grid (3 cols)
3. Testimonials
4. Service areas
5. CTA banner
6. Footer

**Recommended layout:**
1. **Hero** - Keep, but reduce min-height on mobile, add trust signals (years, reviews, certified)
2. **Social proof bar** - NEW: "15+ Years | 5-Star Google | Certified Arborists | 12 Cities"
3. **Services grid** - Keep, add hover animations
4. **Before/After gallery** - NEW: Side-by-side slider showing work quality
5. **Testimonials** - Upgrade to carousel with Google review stars
6. **Service areas map** - NEW: Interactive map with clickable cities
7. **FAQ preview** - NEW: Top 3-4 questions to reduce bounce
8. **CTA banner** - Keep, make stickier with floating mobile CTA
9. **Footer** - Keep, fix color consistency

### Per-Page Improvements

**About page:**
- Add team photos with names/roles
- Add timeline/milestones visual
- Fix founding date discrepancy
- Add certifications/insurance badges

**Services pages:**
- Add pricing indication ("Starting from...")
- Add process steps (1. Consultation, 2. Quote, 3. Work, 4. Cleanup)
- Add FAQ specific to each service
- Add related services links

**Contact page:**
- Add map embed showing service area
- Add estimated response time
- Add "Emergency? Call now" prominent CTA
- Add inline validation on form fields

**Gallery page:**
- Fix missing images
- Add categories/filters (Tree Removal, Trimming, etc.)
- Add before/after comparisons
- Add project descriptions

**City pages:**
- Add unique content per city (not just template text)
- Add local testimonials
- Add specific services available in that area
- Add driving distance/time from office

---

## QUICK WINS (Under 1 hour each)

1. Add CSS variable for primary color (`--brand-green: #2D5016`)
2. Add aria-labels to icon buttons in Header
3. Compress og-image.jpg to WebP under 200KB
4. Add autocomplete attributes to contact form
5. Add custom 404 page
6. Fix founding date in schema JSON-LD
7. Add skip-to-content link
8. Add max-w-prose on long text blocks
9. Add @media (prefers-reduced-motion) to globals.css
10. Add robots.txt
