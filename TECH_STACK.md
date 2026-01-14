# 기술 스택 상세 문서

SNS핫딜 SEO 랜딩페이지 프로젝트에서 사용되는 기술 스택 및 선택 이유

---

## 🎯 기술 선정 기준

1. **SEO 최적화**: 검색 엔진 친화적 구조
2. **성능**: 빠른 로딩 속도, Core Web Vitals 충족
3. **개발 생산성**: 빠른 개발 및 유지보수
4. **비용 효율성**: 무료 또는 저비용 솔루션
5. **확장성**: 향후 기능 확장 가능

---

## 🏗️ 코어 기술

### 1. Next.js 14 (App Router)

**버전**: 14.x (최신 안정 버전)

**선택 이유**:
- ✅ **서버 사이드 렌더링 (SSR)**: SEO 최적화의 핵심
- ✅ **정적 사이트 생성 (SSG)**: 빠른 로딩 속도
- ✅ **자동 코드 스플리팅**: 성능 최적화
- ✅ **파일 기반 라우팅**: 직관적인 페이지 구조
- ✅ **이미지 최적화**: `next/image`로 자동 최적화
- ✅ **메타데이터 API**: SEO 메타태그 간편 관리
- ✅ **App Router**: 최신 React 기능 활용 (서버 컴포넌트)

**주요 설정**:
```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // 정적 내보내기 (필요 시)
  output: 'export',
}
```

**대안 검토**:
- ❌ **Create React App**: 클라이언트 렌더링만 지원, SEO 불리
- ❌ **Gatsby**: 학습 곡선 높음, GraphQL 필수
- ✅ **Next.js**: SEO + 성능 + 생산성 모두 충족

---

### 2. TypeScript

**버전**: 5.x

**선택 이유**:
- ✅ **타입 안정성**: 런타임 에러 사전 방지
- ✅ **자동 완성**: 개발 생산성 향상
- ✅ **리팩토링 용이**: 대규모 코드 변경 시 안전
- ✅ **협업**: 코드 의도 명확화

**주요 설정**:
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

### 3. Tailwind CSS

**버전**: 3.x

**선택 이유**:
- ✅ **빠른 개발**: 유틸리티 클래스로 신속한 스타일링
- ✅ **일관성**: 디자인 시스템 구축 용이
- ✅ **반응형**: 모바일 최적화 간편
- ✅ **성능**: 사용하지 않는 CSS 자동 제거 (PurgeCSS)
- ✅ **커스터마이징**: 브랜드 컬러, 폰트 등 자유롭게 설정

**주요 설정**:
```javascript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**대안 검토**:
- ❌ **CSS Modules**: 보일러플레이트 많음
- ❌ **Styled Components**: 런타임 오버헤드
- ✅ **Tailwind CSS**: 생산성 + 성능 최고

---

## 🔍 SEO 라이브러리

### 1. next-seo

**역할**: 메타태그, Open Graph, Twitter Card 관리

**사용 예시**:
```typescript
import { NextSeo } from 'next-seo';

<NextSeo
  title="인스타 팔로워 구매 | SNS핫딜"
  description="합리적인 가격으로 인스타 팔로워를 늘리세요"
  canonical="https://your-domain.com"
  openGraph={{
    title: '인스타 팔로워 구매 | SNS핫딜',
    description: '합리적인 가격으로 인스타 팔로워를 늘리세요',
    images: [{ url: '/og-image.png' }],
  }}
/>
```

### 2. next-sitemap

**역할**: XML 사이트맵 자동 생성

**설정**:
```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://your-domain.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
}
```

### 3. Schema.org 구조화 데이터

**역할**: 검색 엔진에 콘텐츠 의미 전달

**구현**:
```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SNS핫딜',
  url: 'https://your-domain.com',
  logo: 'https://your-domain.com/logo.png',
}
```

---

## 🚀 배포 및 인프라

### Vercel

**선택 이유**:
- ✅ **무료 플랜**: 월 100GB 대역폭, 무제한 요청
- ✅ **자동 HTTPS**: SSL 인증서 자동 관리
- ✅ **글로벌 CDN**: 전 세계 빠른 로딩
- ✅ **Next.js 최적화**: 공식 호스팅 플랫폼
- ✅ **자동 배포**: GitHub 푸시 시 자동 배포
- ✅ **미리보기 배포**: PR마다 미리보기 URL 생성

**비용 구조**:
| 항목 | 무료 플랜 | Pro 플랜 |
|------|-----------|----------|
| 대역폭 | 100GB/월 | 1TB/월 |
| 빌드 시간 | 6,000분/월 | 24,000분/월 |
| 가격 | ₩0 | ~₩25,000/월 |

**대안 검토**:
- ❌ **AWS S3 + CloudFront**: 설정 복잡, 비용 불확실
- ❌ **Netlify**: Vercel과 유사하지만 Next.js 최적화 부족
- ✅ **Vercel**: Next.js에 최적화, 무료 플랜 충분

---

## 📊 분석 및 모니터링

### 1. Google Analytics 4 (GA4)

**역할**: 트래픽, 사용자 행동 분석

**주요 지표**:
- 페이지뷰
- 세션 수
- 사용자 수
- 전환율
- 이탈률

**설치**:
```typescript
// Google Tag Manager 또는 직접 스크립트 삽입
```

### 2. Google Search Console

**역할**: 검색 성과 추적

**주요 기능**:
- 검색 키워드 순위
- 클릭수, 노출수
- 색인 상태
- 사이트맵 제출

### 3. Vercel Analytics

**역할**: 성능 모니터링

**주요 지표**:
- Core Web Vitals (LCP, FID, CLS)
- 페이지 로딩 속도
- 에러 추적

---

## 🎨 UI/UX 라이브러리

### 1. Headless UI (권장)

**역할**: 접근성 높은 UI 컴포넌트

**사용 컴포넌트**:
- Accordion (FAQ)
- Modal (팝업)
- Tabs (서비스 탭)

### 2. React Icons

**역할**: 아이콘

**사용 예시**:
```typescript
import { FaInstagram, FaYoutube } from 'react-icons/fa';
```

### 3. Framer Motion (선택)

**역할**: 부드러운 애니메이션

**주의**: 성능 영향 최소화하며 사용

---

## 🛠️ 개발 도구

### 1. ESLint

**역할**: 코드 품질 검사

**설정**:
```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "no-unused-vars": "error"
  }
}
```

### 2. Prettier

**역할**: 코드 포맷팅

**설정**:
```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

### 3. Husky + lint-staged

**역할**: 커밋 전 자동 검사

**설정**:
```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

---

## 📦 주요 패키지 목록

### 필수 패키지
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "next-seo": "^6.4.0",
    "next-sitemap": "^4.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.1.0"
  }
}
```

---

## 🔐 환경 변수

```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 📈 성능 목표

| 지표 | 목표 | 측정 도구 |
|------|------|-----------|
| Lighthouse Performance | 90+ | Chrome DevTools |
| LCP (Largest Contentful Paint) | < 2.5s | Vercel Analytics |
| FID (First Input Delay) | < 100ms | Vercel Analytics |
| CLS (Cumulative Layout Shift) | < 0.1 | Vercel Analytics |
| SEO Score | 100 | Lighthouse |

---

## 🔄 업데이트 정책

- **Next.js**: 메이저 버전 안정화 후 업데이트
- **패키지**: 월 1회 보안 패치 확인
- **Node.js**: LTS 버전 사용

---

**최종 업데이트**: 2026-01-12  
**버전**: v1.0

