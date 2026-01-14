# SNS핫딜 SEO 랜딩페이지

구글 검색 1페이지 노출을 목표로 하는 SNS 마케팅 서비스 랜딩페이지

---

## 📖 프로젝트 소개

이 프로젝트는 SNS핫딜 서비스의 검색 노출을 극대화하기 위한 SEO 최적화 랜딩페이지입니다.

### 주요 목표
- 구글 주요 키워드(인스타 팔로워 구매, SNS 마케팅 등) 1페이지 노출
- 오가닉 검색을 통한 지속 가능한 트래픽 확보
- 검색 유입 사용자의 높은 전환율 달성

### 기술 스택
- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **배포**: Vercel
- **분석**: Google Analytics 4, Google Search Console

자세한 내용은 [`TECH_STACK.md`](./TECH_STACK.md) 참조

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.17 이상
- npm 또는 yarn
- Git

### 설치 및 실행

#### 1. 저장소 클론
```bash
git clone <repository-url>
cd hotdeal_landing_onepager
```

#### 2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

#### 3. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

#### 4. 빌드
```bash
npm run build
npm run start
```

---

## 📁 프로젝트 구조

```
hotdeal_landing_onepager/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # 메인 홈페이지
│   │   ├── instagram/          # 인스타그램 페이지
│   │   ├── youtube/            # 유튜브 페이지
│   │   ├── tiktok/             # 틱톡 페이지
│   │   ├── pricing/            # 가격 안내
│   │   ├── faq/                # FAQ
│   │   ├── blog/               # 블로그
│   │   └── layout.tsx          # 공통 레이아웃
│   │
│   ├── components/             # 재사용 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CTAButton.tsx
│   │   └── ...
│   │
│   └── lib/                    # 유틸리티
│       └── seo.ts
│
├── public/                     # 정적 파일
│   ├── images/
│   └── robots.txt
│
├── outputs/docs/               # 기획 문서
│   └── 01-원페이저.md
│
├── PROJECT_CONTEXT.md          # 프로젝트 컨텍스트 (AI용)
├── TECH_STACK.md               # 기술 스택 상세
├── TODO.md                     # 개발 진행 상황
└── package.json
```

---

## 🛠️ 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (localhost:3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |
| `npm run format` | Prettier 포맷팅 |

---

## 🌐 배포

### Vercel 배포 (권장)

#### 방법 1: Vercel CLI
```bash
# Vercel CLI 설치
npm install -g vercel

# 로그인
vercel login

# 배포
vercel --prod
```

#### 방법 2: GitHub 연동
1. Vercel 계정 생성 (https://vercel.com)
2. GitHub 저장소 연결
3. 자동 배포 설정

### 배포 후 작업
1. **Google Search Console 등록**
   - 사이트 소유권 인증
   - 사이트맵 제출 (`/sitemap.xml`)

2. **Google Analytics 설정**
   - GA4 계정 생성
   - 추적 코드 설치

3. **성능 모니터링**
   - Vercel Analytics 활성화
   - Core Web Vitals 확인

---

## 🔍 SEO 체크리스트

### 기술적 SEO
- [ ] 메타태그 설정 (모든 페이지)
- [ ] 구조화 데이터 추가
- [ ] 사이트맵 생성 및 제출
- [ ] robots.txt 설정
- [ ] 모바일 반응형
- [ ] 이미지 최적화

### 성능
- [ ] Lighthouse 스코어 90+ (모든 항목)
- [ ] Core Web Vitals 기준 충족
- [ ] 이미지 lazy loading
- [ ] 폰트 최적화

### 콘텐츠
- [ ] 키워드 최적화 (페이지별)
- [ ] H1/H2/H3 계층 구조
- [ ] 내부 링크 구조
- [ ] 고품질 콘텐츠 작성

---

## 📊 성과 측정

### 핵심 지표
- **키워드 순위**: Google Search Console
- **트래픽**: Google Analytics 4
- **전환율**: GA4 목표 설정
- **성능**: Vercel Analytics, Lighthouse

### 목표
- 1개월: 기본 SEO 설정 완료
- 3개월: 핵심 키워드 5개 1페이지 진입
- 6개월: 핵심 키워드 10개 1페이지 안정화

---

## 🤝 기여 가이드

### 브랜치 전략
- `main`: 프로덕션 배포용
- `develop`: 개발 통합 브랜치
- `feature/*`: 기능 개발
- `fix/*`: 버그 수정

### 커밋 메시지 규칙
```
[Feature: 기능 추가]
[Fix: 버그 수정]
[Docs: 문서 업데이트]
[Style: 코드 스타일 변경]
[Refactor: 코드 리팩토링]
[Test: 테스트 추가/수정]
[Chore: 기타 작업]
```

---

## 📚 문서

- [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md): 프로젝트 전체 컨텍스트 (AI용)
- [`TECH_STACK.md`](./TECH_STACK.md): 기술 스택 상세 설명
- [`TODO.md`](./TODO.md): 개발 진행 상황 및 체크리스트
- [`outputs/docs/01-원페이저.md`](./outputs/docs/01-원페이저.md): 비즈니스 기획 문서

---

## 📞 문의

프로젝트 관련 문의는 이슈를 등록해 주세요.

---

**최종 업데이트**: 2026-01-12

