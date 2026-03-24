# Design System: High-End Editorial E-Commerce

## 1. Overview & Creative North Star: "The Digital Atelier"
This design system is built to transform a standard e-commerce interface into a curated, high-end editorial experience. Our Creative North Star is **"The Digital Atelier"**—a space that feels bespoke, intentional, and quiet. We move away from the aggressive, grid-locked "retail" look by embracing intentional asymmetry, generous white space, and a focus on the tactile quality of imagery. 

To break the "template" feel:
- **Intentional Asymmetry:** Use staggered image placements and varying container widths to mimic the layout of a luxury fashion magazine.
- **Micro-Interactions:** Elements should never simply "appear." Use subtle 400ms eases and 2px vertical drifts to give the UI a weightless, premium feel.
- **Negative Space as Luxury:** Whitespace is not empty; it is a structural element. Use it to isolate products and demand focus.

## 2. Colors & Surface Philosophy
The palette is rooted in sophisticated neutrals (`#faf9f7`) with a bold, earthy accent (`#7c5730`).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined solely through background color shifts.
- To separate a hero section from a product grid, transition from `surface` (#faf9f7) to `surface-container-low` (#f4f3f1).
- Visual hierarchy is achieved through tonal depth, not structural lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine vellum. 
- **Base Layer:** `surface` (#faf9f7)
- **Nested Content (Cards/Modules):** Use `surface-container-lowest` (#ffffff) for the highest visual "lift."
- **Background Sections:** Use `surface-container` (#efeeec) or `surface-dim` (#dadad8) to create environmental depth for footers or utility bars.

### The "Glass & Signature Texture" Rule
- **Floating Elements:** Navigation bars or quick-add modals must use `surface-container-lowest` at 80% opacity with a `24px` backdrop-blur to create a "frosted glass" effect.
- **CTAs:** Move beyond flat color. Use a subtle linear gradient on primary buttons (transitioning from `primary` #000000 to `primary-container` #1c1b1b) to give the button a "silk" sheen.

## 3. Typography: The Editorial Voice
We utilize a pairing of **Epilogue** (Display/Headline) and **Manrope** (Body/Label) to balance character with readability.

- **Display-LG/MD (Epilogue):** Reserved for high-impact editorial statements. The tight kerning and clean geometric forms should feel like a masthead.
- **Headline (Epilogue):** Used for product names and category titles. It provides an authoritative, "designed" voice.
- **Body & Labels (Manrope):** The workhorse. Manrope’s modern proportions ensure high legibility in product descriptions and utility text. 
- **Hierarchy Tip:** Use `label-sm` in all-caps with `0.05rem` letter-spacing for category tags to create a "branded label" aesthetic.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often too "heavy" for a premium brand. We achieve depth through atmospheric light.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle contrast (hex difference) creates a natural edge without a line.
- **Ambient Shadows:** For floating elements (e.g., a cart drawer), use a shadow color tinted with `on-surface` (#1a1c1b).
    - *Spec:* `box-shadow: 0 12px 40px rgba(26, 28, 27, 0.06);` (extra-diffused, extremely low opacity).
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#c4c7c7) at **15% opacity**. Never use 100% opaque borders.

## 5. Components

### Buttons
- **Primary:** High-contrast (`primary` background / `on-primary` text). Roundedness: `sm` (0.125rem) for a sharp, tailored look.
- **Secondary:** Use `secondary` (#7c5730) for "Add to Cart" to draw the eye to the conversion point.
- **Tertiary:** Text-only with a 1px `on-surface` underline that expands on hover.

### Inputs & Fields
- **Text Inputs:** Use `surface-container-low` background with a `none` border. On focus, transition to `surface-container-high`.
- **Labels:** Use `label-md` positioned above the field, never inside as a placeholder.

### Cards & Product Grids
- **Constraint:** Forbid divider lines. Use `spacing-8` (2.75rem) to separate items.
- **Image Treatment:** All product images must have a subtle `0.25rem` (DEFAULT) roundedness to soften the composition.
- **Hover State:** On hover, the image should subtly scale (1.03x) while the card background shifts from `surface` to `surface-container-lowest`.

### Chips & Tags
- **Selection Chips:** Use `primary-fixed` (#e5e2e1) with `on-primary-fixed` (#1c1b1b) text. Shape: `full` (pill-shaped).

### Modern Navigation
- Use a **Floating Nav**: A glassmorphic bar (`surface-container-lowest` @ 80% + blur) that sits `spacing-4` from the top, utilizing `xl` (0.75rem) roundedness.

## 6. Do's and Don'ts

### Do
- **Do** use the Spacing Scale strictly. Gaps between sections should be at least `spacing-20` (7rem) to allow the design to breathe.
- **Do** use `secondary` (#7c5730) sparingly as a "heartbeat" color for notifications or key callouts.
- **Do** prioritize high-quality, art-directed photography over UI elements. The UI is the frame; the product is the art.

### Don't
- **Don't** use 1px dividers or "boxes." If you feel the need to draw a line, try adding `spacing-12` of whitespace instead.
- **Don't** use standard "Drop Shadows." Stick to Tonal Layering or the Ambient Shadow spec.
- **Don't** use pure white (`#ffffff`) for backgrounds. Always use `surface` (#faf9f7) to reduce eye strain and feel more "premium paper" than "digital screen."
- **Don't** overcrowd the viewport. If three elements are competing for attention, remove two.