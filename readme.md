# Baro Design System

**Baro (바로)** is a mobile app that helps people fix their posture and build a
daily stretching habit. The hook is a playful gamification loop: you start as a
hunched **turtle** ("거북이") and, by stretching every day, slowly *evolve into a
human* — the **인간화 (humanization)** meter. Streaks (🔥 N일차), friends, alarms
and short guided routines keep you coming back.

The tone is warm, encouraging and a little cheeky ("이번엔 진짜 한다!" — *this time
I really mean it!*). The palette is a fresh, optimistic green; the mascot is the
green turtle "Baro".

> **Source:** reconstructed from the attached Figma file **"Baro app.fig"**
> (Page-1: 5 app screens A–E + a component sheet) and the supplied Pretendard
> font family. This project is the canonical, runnable extraction of that file.

---

## Content fundamentals

- **Language:** Korean-first. All product copy is Korean; English appears only
  in the wordmark ("Baro") and developer-facing names.
- **Voice:** friendly peer, not a coach barking orders. Uses the polite **-요**
  ending and gentle imperatives: *"오늘도 자세를 바르게 유지해봐요!"*,
  *"함께 스트레칭을 해보아요!"*.
- **Honorifics & personas:** users are addressed by a fun persona nickname +
  **-님** ("지구인님", "우주인님", "고북이님"). Friends and routine authors carry
  the same playful naming.
- **Numbers & units:** streaks as **"23일차"**, durations as **"50초"** / **"3분"**,
  evolution as **"인간화 2단계"**. Times in 24-hour (**14:00**).
- **Casing:** the wordmark is **Baro** (capital B). Korean has no casing; labels
  stay short (1–4 words) and verb-led on buttons (시작하기, 함께하기, 미루기, 끄기).
- **Emoji:** used sparingly as *illustration / affect*, never as UI icons —
  🔥 for streaks, ☀️ in the greeting. UI controls always use the icon set.

---

## Visual foundations

- **Color:** one brand hue — a vivid spring green (`--green-500 #00C776`) — on a
  cool near-white page (`--neutral-50`). A 9-step green ramp covers mint surfaces
  (50–200) through deep accents (700–800). Warm amber (`#FFA509` / `#FFDB63`) is
  reserved for the streak flame and the greeting sun. Text is a near-black
  `#292929` with a cool-gray ramp beneath it. **Avoid introducing new hues** —
  the brand reads as "green + warm spark".
- **Gradients are signature.** Hero/record surfaces use a soft **mint-sky →
  white** vertical blend; the mascot sits on a **green hill** gradient; the
  next-alarm card uses a light-to-mid green wash. Buttons and chips use flat
  fills, not gradients (except the toggle thumb track).
- **Type:** **Pretendard** only, all 9 weights available. **SemiBold (600) is the
  default UI weight** — headings, labels, values. Bold (700) for big numbers
  (14:00, streak counts); Regular/Medium for supporting sentences. Tight tracking
  (-0.01 to -0.02em). Sizes run 40 / 24 / 20 / 16 / 14 / 12.
- **Shape:** soft and rounded everywhere. Buttons, chips, toggles and badges are
  **fully pill** (`999px`); cards are **20–32px** radius; media thumbnails 16px.
  Day chips and avatars are perfect circles.
- **Elevation:** two shadow families. **Neutral gray** `0 4px 16px rgba(80,80,80,.16)`
  for white cards; **green-glow** `0 4px 16px rgba(0,218,138,.24)` for active /
  brand surfaces and the streak pill. Cards never use borders *and* shadow at once.
- **Borders:** hairline `--neutral-200` for dividers; **dashed brand-green**
  borders signal "add / share / upcoming" affordances (share-routine button,
  upcoming day chips, the goal panel).
- **Backgrounds:** screens are `--neutral-50`; grouped content sits on white or
  mint cards. Photography (stretching imagery) is full-width inside rounded
  thumbnails, often with a dark persona label pill overlaid.
- **Motion:** gentle. 200ms standard ease; a playful `--ease-bounce` for pops.
  Tap feedback is a subtle scale-down (`0.96`). No long decorative loops.
- **Hover/press:** press = scale-down + slight darken; the active nav/brand state
  is a color shift to `--brand-primary` plus a green indicator bar.

---

## Iconography

- **System:** filled **Material Symbols** (rounded family), monochrome, drawn at
  an optical ~2px stroke. Each glyph is a single path with `fill="currentColor"`,
  so icons inherit color from their context (active = green, inactive = gray).
- **Use the `Icon` component** (`components/icons/Icon.jsx`) for any tintable
  icon — it inlines the SVG so it recolors reliably. The raw SVG files live in
  `assets/icons/` for handoff (home, event_note, cheer, alarm, person,
  notifications, favorite, chat, search_activity, notifications_off).
- **Logo / mascot:** the turtle "Baro" mark (`assets/logo/baro-mark.svg`) uses a
  bright→deep green gradient with a single dark eye. The wordmark is Pretendard
  Bold, green on light / white on dark.
- **Emoji** are illustration only (🔥 ☀️), never controls.

---

## Index / manifest

**Foundations**
- `styles.css` — entry point (links every token + font file).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — specimen cards rendered in the Design System tab
  (colors, type, spacing, radius, elevation, brand logo, iconography).

**Components** (`components/`, React, token-driven)
- `buttons/` — `Button` (4 variants), `IconButton`
- `forms/` — `DayChip`, `Toggle`
- `surfaces/` — `Card`, `Badge`, `Avatar`
- `navigation/` — `BottomNav`, `ProgressBar`
- `icons/` — `Icon` (inline Material-Symbols set)

**UI kit** (`ui_kits/baro_app/`) — interactive recreation of the Baro app
(home, my-record, alarm screens) composing the components above.

**Assets** (`assets/`) — `fonts/` (Pretendard ×9), `icons/`, `logo/`, `illustrations/`.

**SKILL.md** — Agent-Skill manifest for using this system in Claude Code.

---

### Note for the team
Set this file's type to **Design System** in the Share menu so others in your
org can browse the components and tokens.
