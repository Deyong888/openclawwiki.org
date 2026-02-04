---
name: "ui-ux-pro-max"
description: "Provides design intelligence for building professional UI/UX. Invoke when user wants to design UI, generate design systems, or needs UI/UX advice/audit."
---

# UI UX Pro Max

An AI skill that provides design intelligence for building professional UI/UX across multiple platforms and frameworks.

## When to Use
- Designing new pages or components
- Generating design systems (colors, typography, spacing)
- Auditing existing UI/UX
- Looking for design inspiration or best practices
- Converting requirements into visual designs

## Design System Generator

When asked to generate a design system, follow this structure:

1.  **Analyze Request**: Identify product type, target audience, and mood.
2.  **Generate System**:
    *   **Pattern**: Layout strategy (e.g., Hero-Centric, Dashboard, Landing)
    *   **Style**: Visual style (e.g., Soft UI, Glassmorphism, Brutalism, Minimal)
    *   **Colors**: Primary, Secondary, CTA, Background, Text (with hex codes)
    *   **Typography**: Headings & Body fonts (Google Fonts pairings)
    *   **Key Effects**: Shadows, transitions, border radius
    *   **Anti-patterns**: What to avoid
3.  **Pre-delivery Checklist**:
    *   [ ] No emojis as icons (use SVG: Heroicons/Lucide)
    *   [ ] cursor-pointer on all clickable elements
    *   [ ] Hover states with smooth transitions (150-300ms)
    *   [ ] Light mode: text contrast 4.5:1 minimum
    *   [ ] Focus states visible for keyboard nav
    *   [ ] prefers-reduced-motion respected
    *   [ ] Responsive: 375px, 768px, 1024px, 1440px

## Example Design System Output

```text
+----------------------------------------------------------------------------------------+
|  TARGET: Serenity Spa - RECOMMENDED DESIGN SYSTEM                                      |
+----------------------------------------------------------------------------------------+
|  STYLE: Soft UI Evolution                                                              |
|  COLORS: Primary: #E8B4B8, Secondary: #A8D5BA, CTA: #D4AF37, Bg: #FFF5F5               |
|  TYPOGRAPHY: Cormorant Garamond / Montserrat                                           |
+----------------------------------------------------------------------------------------+
```

## Supported Stacks
- HTML + Tailwind (Default)
- React / Next.js
- Vue / Nuxt
- Svelte
- Astro
- Flutter / React Native

## UI Audit Checklist
- **Contrast**: Is text legible?
- **Spacing**: Is whitespace consistent?
- **Consistency**: Are buttons and inputs uniform?
- **Feedback**: Do interactive elements react to hover/click?
- **Mobile**: Does it stack correctly on small screens?
