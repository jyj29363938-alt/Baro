Circular icon button for header actions and inline edit affordances.

```jsx
<IconButton variant="mint" ariaLabel="알림" icon={<img src="assets/icons/notifications.svg" />} />
<IconButton variant="neutral" ariaLabel="편집" icon={<PencilIcon />} />
```

`mint` (default) renders the soft-mint circle with green glyph from the app header. `neutral` is the gray pencil chip. Pass any SVG as `icon`; it inherits `currentColor`.
