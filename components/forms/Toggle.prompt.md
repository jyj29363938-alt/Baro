Controlled on/off switch for app settings & permission rows.

```jsx
const [on, setOn] = React.useState(true);
<Toggle checked={on} onChange={setOn} />
```

Green gradient track + white thumb when on; neutral-300 track when off. Fully controlled — drive it with state.
