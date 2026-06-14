# 🐢 Baro — 프로토타입 PWA 기술 스택

> **목표** · 디자인 시안을 동작하는 PWA 프로토타입으로 구현
> **범위** · 프로토타입 기능만. **외부 API·백엔드 연동 없음** (모든 데이터는 목업/로컬)
> **배포** · Vercel

---

## 1. 추천 스택 한눈에

| 레이어 | 선택 | 이유 |
| --- | --- | --- |
| 프레임워크 | **Next.js (App Router) + TypeScript** | 파일 기반 라우팅이 IA 화면 구조와 1:1 매핑, Vercel 즉시 배포 |
| 스타일링 | **Tailwind CSS** | 시안의 커스텀 UI(초록 테마·카드)를 빠르게 구현, 바이브코딩 친화적 |
| 아이콘 | **lucide-react** + 이모지/SVG | 하단 탭·버튼 아이콘. 거북이 캐릭터는 이미지/SVG |
| 상태 관리 | **React useState / useContext** | 화면 간 공유 상태(연속 일수, 알림 설정 등) |
| 데이터 | **TypeScript 목 데이터 파일** (`data/*.ts`) | API 대신 정적 데이터로 모든 화면 채움 |
| 영속성 | **localStorage** (`lib/storage.ts`) | 새로고침/재방문 시 연속 일수·기록 유지 |
| 캘린더/차트 | **Tailwind 그리드** (기본) | 시안 그대로 커스텀 구현. 복잡해지면 `recharts` 선택 |
| PWA | **Next.js 내장 manifest** (`app/manifest.ts`) + 아이콘 | 별도 패키지 없이 '설치 가능' 달성 |
| 배포 | **Vercel** | GitHub 연결 후 자동 배포 |

> 핵심 의존성은 사실상 `lucide-react` 하나면 충분합니다. 나머지는 Next.js + Tailwind 기본 제공 범위로 커버됩니다.

---

## 2. PWA 설정 (프로토타입 기준)

프로토타입에서 PWA의 핵심은 **① 모바일 반응형 + ② 홈 화면 설치 가능** 두 가지입니다. 오프라인(서비스 워커)은 선택 사항입니다.

**필수 — 설치 가능하게 만들기 (외부 패키지 0개)**
- `app/manifest.ts` 생성 (Next.js 내장 기능)
- `public/`에 아이콘 2종 추가 (`icon-192.png`, `icon-512.png`)

```ts
// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baro 자세교정",
    short_name: "Baro",
    description: "흐름을 끊지 않는 자세교정 앱",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#22c55e", // 앱 메인 그린
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
```

**선택 — 오프라인 지원이 필요할 때만**
- `@serwist/next` 추가 (현재 Next.js 공식 권장 방식, 구 `next-pwa`의 후속)
- 프로토타입 단계에선 보통 불필요 → 발표/설치 데모만 목표라면 생략 권장

---

## 3. 설치 & 시작

```bash
# 1) 프로젝트 생성
npx create-next-app@latest baro --typescript --tailwind --app --eslint

# 2) 아이콘 라이브러리
cd baro
npm install lucide-react

# 3) (선택) 차트 / 부드러운 인터랙션이 필요할 때
npm install recharts        # 주간 기록 등 차트
npm install framer-motion   # 마이크로넛지 느낌의 전환 애니메이션

# 4) 개발 서버
npm run dev
```

---

## 4. 폴더 구조 제안 (라우팅 = IA 매핑)

```
baro/
├─ app/
│  ├─ layout.tsx              # 공통 레이아웃 (하단 탭바·상단바 포함)
│  ├─ manifest.ts             # PWA 매니페스트 (설치용)
│  ├─ page.tsx                # A 홈화면          →  /
│  ├─ records/page.tsx        # B 나의 기록        →  /records
│  ├─ friends/page.tsx        # C 친구와 함께      →  /friends
│  ├─ alarm/page.tsx          # D 알림 설정        →  /alarm        (하단 탭)
│  ├─ mypage/page.tsx         # E 마이페이지       →  /mypage       (상단 우측)
│  ├─ notifications/page.tsx  # F 어플 알림 확인   →  /notifications (상단 벨)
│  └─ login/page.tsx          # 로그인 (목업)      →  /login
│
├─ components/
│  ├─ BottomNav.tsx           # 하단 탭바 (홈·기록·친구·알림)
│  ├─ TopBar.tsx              # 상단바 (마이페이지·알림 벨)
│  ├─ TurtleCharacter.tsx     # 거북이 캐릭터 (인간화 단계별)
│  ├─ StretchCard.tsx         # 오늘의 스트레칭 카드
│  ├─ ChallengeItem.tsx       # 챌린지 항목 (진행바)
│  ├─ CountdownTimer.tsx      # 스트레칭까지 남은 시간
│  └─ Calendar.tsx            # 월간 캘린더 (실행일 마킹)
│
├─ data/
│  ├─ user.ts                 # 유저·연속 일수·기록 목 데이터
│  ├─ stretches.ts            # 오늘의 스트레칭 목 데이터
│  ├─ challenges.ts           # 챌린지 목 데이터
│  └─ friends.ts              # 친구 목 데이터
│
├─ lib/
│  └─ storage.ts              # localStorage 읽기/쓰기 헬퍼
│
└─ public/
   ├─ icon-192.png            # PWA 아이콘
   ├─ icon-512.png
   └─ images/                 # 스트레칭 이미지 등 정적 에셋
```

> 라우트 이름 주의: `D 알림 설정`(`/alarm`)과 `F 어플 알림 확인`(`/notifications`)을 분리해 충돌을 피했습니다.

---

## 5. 프로토타입 범위 (실제 vs 목업)

API 연동이 없으므로, 데이터·외부 연동은 모두 목업으로 처리합니다.

| 기능 | 프로토타입 처리 방식 |
| --- | --- |
| 로그인 | 목업 — 입력 검증 없이 '시작' 버튼 → 홈 이동 |
| 연속 일수 · 캘린더 기록 | 목 데이터 + localStorage |
| 오늘의 스트레칭 추천 | 정적 배열 (제목·소요 시간·이미지) |
| 스트레칭 타이머 | 클라이언트 카운트다운 (`setInterval` + `useState`) |
| 챌린지 진행률 | 정적 목 데이터 + 진행바 UI |
| 캐릭터 인간화 단계 | 연속 일수 기준 단순 로직으로 단계 표시 |
| 주간 기록 · 유형 분석 | 정적 목 데이터 (슬라이더는 시각 표시용, 비인터랙티브) |
| 카메라 자세 분석 (B-3) | **목업** — 미리 정해둔 결과만 표시. 실제 카메라/AI 없음 |
| 자세 알림(푸시) | **목업** — 앱 내 카운트다운 + 가짜 알림 카드. 실제 푸시 없음 |
| 친구 추가·공유 (카톡/DM/SMS/X) | **목업** — 버튼 클릭 시 토스트/모달. 실제 연동 없음 |

---

## 6. 구현 팁

- **모바일 우선**: 시안이 세로형 모바일 화면이므로 `max-w-[420px] mx-auto`로 폭을 고정하면 PC/모바일 모두 일관되게 보입니다.
- **데이터 한 곳에**: 모든 목 데이터를 `data/`에 모아두면 화면별로 import만 하면 됩니다. 나중에 실제 API로 교체할 때도 이 파일만 바꾸면 됩니다.
- **한 화면씩**: 홈(A) → 라우팅(하단 탭) → 나의 기록(B) 순으로, 화면 하나를 끝내고 다음으로 넘어가면 진행이 매끄럽습니다.
- **이미지**: 스트레칭 사진은 `public/images/`에 직접 넣거나 임시 placeholder를 사용하세요.
- **(선택) shadcn/ui**: 토글·슬라이더·입력 폼이 많아지면 폼 컴포넌트만 빠르게 가져다 쓸 수 있습니다. 필수는 아닙니다.

> 더 가벼운 대안이 필요하면 `Vite + React + React Router`(+ `vite-plugin-pwa`)도 가능하지만, Vercel 배포·라우팅 구조·기존 워크플로우 일관성을 고려하면 **Next.js**를 권장합니다.
