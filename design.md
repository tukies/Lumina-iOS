# Lumina Website Design Reference

This document describes the current Lumina marketing website as implemented in `src/App.jsx`, `src/App.css`, and `src/index.css`. Treat it as a practical reference for extending the site without drifting away from its existing product feel.

## Product Position

Lumina is presented as a version 1.1 spatial, audio-reactive lighting studio for iPhone and iPad, with macOS noted as coming soon. The hero stays spatial-first, while the release story introduces Flow, Wave Studio, Performance Pad, room memory, Govee LAN-compatible devices, and opt-in iCloud sync.

The main promise is:

- Shape a room visually through spatial mapping.
- Use Flow to turn music into spatial motion, rhythm, and atmosphere.
- Shape motion and energy through Wave Studio.
- Trigger live cues through Performance Pad.
- Tune audio-reactive motion with real-time diagnostics.
- Control WLED, Philips Hue Entertainment Areas, Nanoleaf, LIFX, and Govee LAN-compatible devices from one local-network workflow.
- Keep saved rooms and scenes local by default, with iCloud sync only when the user enables it.

Copy should stay confident, concrete, and product-led. Avoid vague claims like "next-generation" unless the page immediately grounds them in room mapping, effects, audio analysis, scenes, or supported systems.

## Page Structure

The site is a single-page React/Vite marketing site with a privacy page under `public/privacy/`.

Primary navigation:

- Overview
- Flow
- Live Demo
- Workflow
- Systems
- Community
- Privacy

Main homepage sections:

1. Hero: product lockup, App Store CTA, core positioning, staged app preview, supported-system console.
2. Overview: metric cards and four feature highlights.
3. Version 1.1: Flow, Wave Studio, and Performance Pad panels.
4. Flow: story bands for Spatial stage, Effect library, Scenes, Audio tuning, and Rooms.
5. Live Demo: three video demos using real room footage.
6. Workflow: three columns for map, start Flow, and tune response.
7. Systems: supported ecosystems and setup flow.
8. Lumina Pro: compact feature grid for the full creative toolkit.
9. Community: Discord invite CTA and official Discord widget frame.
10. Closing: local-by-default and opt-in sync positioning with repeated App Store CTA.

## Visual Direction

The visual language is dark, cinematic, and light-reactive. The page should read as a lighting product from the first viewport.

Core traits:

- Black/dark foundation with soft grid texture.
- White typography with muted gray support text.
- Glassy panels with thin white borders and blurred backgrounds.
- Vivid rainbow lighting used as product energy, not decoration-only noise.
- Real app screenshots and demo videos as primary evidence.
- Large brand lockup in the hero with the Lumina app icon as a first-viewport signal.

Avoid flattening the page into simple SaaS cards. The existing design relies on depth, staged screenshots, glowing light fields, and real media.

## Color System

Global tokens live in `src/index.css`.

Base colors:

- Background: `#050505` and `#010101`
- Surface: `rgba(12, 12, 12, 0.76)`
- Strong text: `#f5f7fb`
- Soft text: `#e6e6e6`
- Muted text: `#b8b8b8`
- Line: `rgba(255, 255, 255, 0.08)`

Lighting accents appear through gradients and RGB variables:

- Magenta: `255, 63, 180`
- Cyan: `59, 220, 255`
- Amber: `255, 176, 74`
- Green: `110, 255, 165`
- Violet: `154, 114, 255`
- Rose: `255, 95, 127`

Use color where it reinforces the product: app icon glow, ambient light field, hero stage glow, App Store CTA treatment, and media-adjacent atmospherics.

## Typography

The site uses Manrope from Google Fonts, with fallbacks to Avenir Next, Segoe UI, and sans-serif.

Typography behavior:

- Hero brand is oversized, heavy, and tight.
- Hero headline and section headlines are bold, compact, and balanced.
- Eyebrows are uppercase, small, bold, and widely spaced.
- Body copy is muted, line-height generous, and designed for calm reading.

Do not introduce decorative typefaces. The current character comes from scale, spacing, and contrast rather than novelty fonts.

## Layout Rules

The layout uses constrained content shells and full-width visual rhythm.

Common widths:

- Standard shell: `min(1160px, calc(100% - 40px))`
- Wide shell: `min(1220px, calc(100% - 40px))`
- Hero shell: `min(1280px, calc(100% - 56px))`

Section spacing is large on desktop and reduced on mobile. Sections should breathe, but content should stay purposeful and scannable.

Layout patterns:

- Hero uses a two-column grid on desktop.
- Overview uses intro plus metric grid, followed by highlight grid.
- Story bands use media and copy side-by-side with alternating order.
- Demo and workflow sections use three-column grids on desktop.
- Systems and community sections use two-column grids.
- Below `1180px`, major multi-column layouts collapse to one column.
- Below `780px`, card grids become single-column.

## Components

### Navigation

The nav is a fixed glass pill centered at the top of the viewport. It uses a dark translucent background, white border, blur, and soft shadow.

Keep nav labels short. The nav should stay functional and compact on mobile, where it becomes a stacked rounded glass panel.

### Buttons

Primary button:

- White/silver gradient.
- Dark text.
- Pill shape.
- Used for internal exploration and privacy links.

App Store CTA:

- Rainbow conic gradient with animated rotation.
- Dark text on a bright glassy overlay.
- Used for the live App Store link in both the hero and closing section.

Buttons should remain high-contrast and full-width on narrow mobile screens.

### Hero Stage

The hero stage combines:

- A dark glass frame.
- Subtle stage grid.
- App screenshot in a tilted device frame.
- Rainbow glow behind the device.
- Small stage copy overlay.
- A separate hero console showing supported systems and creative-control signals.

Any future hero changes should preserve this "room control surface" feeling. Do not replace the stage with abstract shapes only.

### Metrics And Highlights

Metric cards use glass surfaces and strong numeric/type values. Highlights are lighter: top border, eyebrow, headline, and short body copy.

Keep metric values factual and easy to verify. If a count changes in the app, update the site copy to match.

### Story Bands

Story bands are the main product explanation surface. They pair actual screenshots with focused copy and bullet points.

Media should stay sticky on desktop and static on smaller screens. Each story should explain a concrete workflow, not just repeat the hero promise.

### Version 1.1 Panels

The 1.1 section uses three screenshot-led panels for Flow, Wave Studio, and Performance Pad. These panels should feel like release highlights, not a separate app or pricing surface.

### Demo Videos

Demo videos are direct evidence that Lumina affects real rooms. They use standard controls, metadata preload, posters, and contained object fit.

Keep video cards simple. The footage should carry the section.

### Integration Rows

Supported systems are presented as rows with white logo badges and short descriptions. Logos sit on bright shells so vendor marks remain legible against the dark page.

Govee is presented as `Govee LAN` or `Govee LAN-compatible devices` because device support depends on model, firmware, and local LAN availability. Do not imply universal Govee support.

Do not imply official endorsement. The existing trademark note should remain visible near the bottom of the page.

### Lumina Pro

The Pro section is a compact feature grid, not a pricing page. It should mention full Spatial effects, all 49 Flow patterns, Performance Pad effects, Wave Studio Early Access, background audio sync, automatic calibration, export/share, opt-in iCloud sync, and gradient persistence.

### Community Embed

The Community section links to the Lumina Discord server and uses Discord's official widget iframe. Keep the CTA direct, community-oriented, and framed as a place for scene sharing, Flow setup discussion, release notes, and feedback.

## Motion

Motion is central to the site because Lumina is about reactive lighting.

Current motion patterns:

- Hero content fades and lifts into place.
- App icon glow rotates and pulses.
- Hero device frame floats subtly.
- Hero rainbow glow breathes.
- Ambient lights pulse, drift, and spark in the background.
- Ambient beams sweep, glide, and breathe.
- App Store CTA rainbow rotates.
- Screenshot hover states lift slightly.

Motion should feel rhythmic and light-driven. Avoid unrelated decorative animation.

Reduced-motion behavior is implemented with `prefers-reduced-motion: reduce`, collapsing animation and transition duration. Preserve that behavior for any new motion.

## Assets

Primary media lives in `public/media/`.

Current key assets:

- `lumina-icon.png`
- `v1-1/spatial-lighting.jpg`
- `v1-1/effect-library.jpg`
- `v1-1/flow-mode.jpg`
- `v1-1/integrations.jpg`
- `v1-1/wave-studio.jpg`
- `v1-1/audio-calibration.jpg`
- `v1-1/scene-library.jpg`
- `v1-1/performance-pad.jpg`
- `v1-1/rooms.jpg`
- `spatial-rainbow.jpg`
- `spatial-ripple.jpg`
- `effects-library.jpg`
- `audio-calibration.jpg`
- `chill_live.mp4`
- `pov_live.mp4`
- `vertical_live.mp4`
- Matching video poster images
- WLED, Philips Hue, Nanoleaf, LIFX, and Govee logos

Use real app screenshots and room footage whenever possible. Abstract illustrations are a weaker fit for this site.

## Accessibility And Performance

Existing practices to preserve:

- Meaningful `alt` text for app screenshots.
- Decorative logos/images hidden with empty `alt` and `aria-hidden` where appropriate.
- Named iframe title for the Discord community widget.
- Visible focus outlines for nav and buttons.
- `content-visibility: auto` on heavier repeated sections.
- Lazy loading for below-the-fold images.
- `fetchPriority="high"` for the hero screenshot.
- `prefers-reduced-motion` support.

When adding media, define dimensions where possible and avoid layout shift.

## Content Rules

Use this language direction:

- "Spatial stage" for room mapping.
- "Flow" for continuous music-reactive motion.
- "Wave Studio" for shaping motion, color, timing, and energy.
- "Performance Pad" for live cues.
- "Effect library" for choosing looks.
- "Audio tuning" for reactive diagnostics.
- "Local-network control" for privacy and responsiveness.
- "Opt-in iCloud sync" or "iCloud sync only when enabled" for sync language.
- "Supported systems" or "systems" for WLED, Philips Hue Entertainment Areas, Nanoleaf, LIFX, and Govee LAN-compatible devices.

Avoid:

- Overstating affiliation with lighting brands.
- Implying iCloud sync is automatic, required, or used without explicit user opt-in.
- Hiding the app availability state. Lumina is currently presented as available on the App Store for iPhone and iPad, with macOS coming soon.
- Generic smart-home phrasing that undersells the creative/music-reactive angle.

## Implementation Notes

The primary implementation files are:

- `src/App.jsx` for content, section data, media references, and embed behavior.
- `src/App.css` for layout, components, motion, responsive behavior, and page-specific styling.
- `src/index.css` for global tokens, font import, reset, base background, and selection styling.
- `src/analytics.js` and `src/main.jsx` for analytics bootstrap.

Before publishing design changes, run:

```bash
npm run build
```

For linting, check the current repo state first. Earlier work noted a pre-existing lint issue around the analytics global, so separate new regressions from existing warnings.
