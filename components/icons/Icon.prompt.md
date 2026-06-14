Inline icon component — the Baro app's Material-Symbols glyph set. Tints with `currentColor`, so set color on the parent.

```jsx
<Icon name="home" size={26} color="var(--brand-primary)" />
<span style={{ color: "var(--text-tertiary)" }}><Icon name="alarm" /></span>
```

Names: home, event_note, cheer (stretching), alarm, person, notifications, favorite, chat, search_activity, notifications_off. Prefer this over `<img src="…svg">` whenever the icon must take on a brand or state color.
