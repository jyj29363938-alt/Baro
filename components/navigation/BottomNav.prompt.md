Bottom tab bar with the four Baro destinations (home / record / stretch / alarm).

```jsx
const [tab, setTab] = React.useState("home");
<BottomNav active={tab} onChange={setTab} />
```

Active tab tints brand-green with a top indicator bar. Icons render inline (Icon component). Pass a custom `tabs` array to relabel or reorder.
