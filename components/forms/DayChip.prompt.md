Circular day-of-week chip for Baro's weekly stretching tracker.

```jsx
<div style={{ display: "flex", gap: 8 }}>
  <DayChip label="월" state="filled" />
  <DayChip label="화" state="selected" />
  <DayChip label="수" state="outline" />
</div>
```

States: `filled` (green, completed day), `selected` (mint, today), `outline` (dashed, upcoming), `inactive` (gray, e.g. weekend in alarm rows).
