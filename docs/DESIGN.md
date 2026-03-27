# Design System Strategy: The Curated Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Curated Sanctuary."** This is not a typical interface; it is a digital retreat. We are moving away from the "app-like" density of traditional SaaS and toward a high-end editorial experience. 

The goal is to evoke the feeling of a physical luxury portfolio—expensive paper, intentional stillness, and bespoke craftsmanship. We break the "template" look by utilizing extreme vertical whitespace, intentional asymmetry in image placement, and a typographic hierarchy that prioritizes beauty over information density. Every interaction should feel like a slow, deliberate breath.

---

## 2. Colors & Tonal Depth
Our palette is rooted in natural, tactile materials: linen, stone, sage, and gold.

### The "No-Line" Rule
To maintain an exclusive, high-end feel, **1px solid borders for sectioning are strictly prohibited.** Structural boundaries must be defined solely through background color shifts. For example, a transition from the `surface` (Linen) to a `surface_container` (Darker Cream) section provides enough visual distinction without the "cheapness" of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of layered fine papers. 
- Use `surface_container_lowest` for the main canvas.
- Use `surface_container_low` or `surface_container_high` for nested elements like content cards or sidebars.
- This creates a soft, "nested" depth that feels architectural rather than digital.

### Signature Textures & Accents
- **Sage (`primary`):** Use for hairline editorial dividers and small uppercase labels. It is a whisper, not a shout.
- **Gold (`secondary`):** Reserved for moments of high importance—testimonials, signature call-outs, or exclusive "Member Only" highlights.
- **The Gradient Rule:** For primary CTAs, avoid flat color. Use a subtle linear gradient from `primary` (#506353) to `primary_container` (#8A9E8C) at a 45-degree angle to add a "satin" finish.

---

## 3. Typography
Typography is our primary vehicle for luxury. We pair a high-contrast serif with a clean, wide-tracked sans-serif.

- **The Soul (Cormorant Garamond):** Used for all `display` and `headline` tokens. It must always be set in a Light weight. Use italics for quotes and sub-headlines to create an editorial, rhythmic flow.
- **The Utility (Jost):** Used for `body`, `title`, and `label`. body copy should be set in weight 300 with slightly increased line-height (1.6) to ensure the text "breathes."
- **Small Labels:** For `label-sm` and `label-md`, use Jost in uppercase with a wide tracking (e.g., `letter-spacing: 0.15rem`). This mimics the branding of luxury fashion houses.

---

## 4. Elevation & Depth
In "The Curated Sanctuary," we reject heavy, generic drop shadows. We use physics-based light and tonal layering.

- **The Layering Principle:** Instead of shadows, stack `surface_container` tiers. A `surface_container_highest` element sitting on a `surface` background provides a natural "lift."
- **Ambient Shadows:** If an element must float (like a bespoke booking modal), use a shadow color tinted with our charcoal (`on_surface`). 
    - *Specs:* `0px 20px 40px rgba(29, 28, 23, 0.06)`. It should be barely perceptible.
- **Glassmorphism:** For navigation bars or floating action buttons, use the `surface` color at 80% opacity with a `20px` backdrop blur. This allows the organic imagery of the retreats to bleed through the UI, softening the interface.
- **The Ghost Border:** For input fields or buttons that require containment, use the `outline_variant` token at 20% opacity. 100% opaque borders are too aggressive for this brand.

---

## 5. Components

### Buttons
- **Primary:** A refined slab button using the Sage gradient. No rounded corners (`0px`). Padding: `1.2rem 2.75rem` (Spacing `3.5` x `8`).
- **Secondary:** Transparent background with a "Ghost Border" (Sage hairline).
- **Tertiary:** Jost `label-md` uppercase with wide tracking and a 1px Sage underline offset by `0.5rem`.

### Cards & Lists
- **Layout:** Cards must never have borders or shadows. Use the `surface_container_low` background.
- **Spacing:** Use vertical white space (`spacing.16` or `spacing.20`) to separate content blocks rather than lines.
- **Dividers:** If a divider is essential for editorial flow, use a Sage hairline (`primary`) but stop it 10% short of the container edges to create an "unfinished" bespoke look.

### Input Fields
- **Style:** Minimalist. A single hairline bottom border in `outline_variant`. 
- **Active State:** The bottom border transitions to Gold (`secondary`). Floating labels use Jost Light in uppercase.

### Chips & Tags
- **Selection Chips:** Small, text-only with a Sage underline for the active state. Avoid the "pill" shape; keep corners at `0px`.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetry:** Place an image offset to the left with a headline overlapping it slightly to the right to create an editorial magazine feel.
- **Embrace the Empty:** If a section feels "empty," leave it. Whitespace is a luxury commodity.
- **Center Heavily:** Use centered typography for hero sections and testimonials to convey balance and calm.

### Don't:
- **Don't use Rounded Corners:** Every element—buttons, cards, images—must have a `0px` radius. Sharp corners convey precision and architectural rigor.
- **Don't use Pure Black:** Always use `on_surface` (#1C1A17) for text to keep the contrast soft and readable against the linen background.
- **Don't Crowd the Fold:** High-end users are willing to scroll. Give every element its own "stage" using the top end of our spacing scale (`spacing.24`).
- **Don't use Standard Icons:** Use thin-stroke (1px) custom icons or high-quality SVG illustrations in Sage. Avoid "heavy" or filled icon sets.