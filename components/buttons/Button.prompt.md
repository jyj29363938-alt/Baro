Pill-shaped primary action button — use for any tappable CTA in the Baro app.

```jsx
<Button variant="primary" size="md" onClick={start}>시작하기</Button>
<Button variant="dark">끄기</Button>
<Button variant="ghost" full>나만의 스트레칭 루틴 공유하기</Button>
```

Variants: `primary` (solid green, default CTA), `dark` (near-black fill with green label — used on bright mint hero cards), `soft` (mint fill, brand-green label), `ghost` (dashed brand border for add/share). Sizes `sm | md | lg`. Always SemiBold, always fully rounded. Has a built-in press-scale (0.96) for tactile feedback.
