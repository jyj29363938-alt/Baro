---
name: baro-design
description: Use this skill to generate well-branded interfaces and assets for Baro (바로) — a posture & daily-stretching habit app with a green turtle mascot and an "인간화" (humanization) gamification loop. Contains design guidelines, color/type/spacing tokens, Pretendard fonts, icons, the turtle logo, reusable React UI components, and an interactive app UI kit.
user-invocable: true
---

Read `readme.md` in this skill first — it covers brand context, content
fundamentals (Korean-first, friendly -요 voice, persona-님 naming), visual
foundations, and iconography. Then explore the rest:

- `styles.css` — single entry point; link it to inherit every token + webfont.
- `tokens/` — colors, typography, spacing, effects, fonts (CSS custom properties).
- `components/` — React primitives: Button, IconButton, DayChip, Toggle, Card,
  Badge, Avatar, BottomNav, ProgressBar, Icon (inline Material-Symbols set).
- `ui_kits/baro_app/` — interactive recreation of the app (home, record, friends,
  alarm, my-page) you can copy from.
- `guidelines/` — foundation specimen cards.
- `assets/` — Pretendard fonts ×9, icon SVGs, the turtle logo, illustrations.

When creating visual artifacts (mocks, throwaway prototypes, decks): copy the
assets you need and produce static HTML that links `styles.css`. Use inline SVG
(or the `Icon` component) for icons so they tint with `currentColor` — do not use
`<img>` for the monochrome icons, and do not use CSS `mask` (it renders
unreliably here). Keep the brand to **green + warm spark**; don't introduce new
hues. SemiBold (600) is the default UI weight. Pills for buttons/chips, soft
20–32px radius for cards, two shadow families (neutral gray for cards, green-glow
for active/brand).

If invoked without guidance, ask what to build, ask a few design questions, then
act as an expert Baro designer who outputs HTML artifacts or production code.
