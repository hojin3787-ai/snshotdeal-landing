# 프로젝트 컨텍스트 — SNS핫딜 SEO 랜딩페이지

> **이 문서는 AI가 새로운 대화 세션에서 프로젝트를 이어서 개발하기 위한 핵심 컨텍스트 문서입니다.**

---

## 📋 프로젝트 개요

### 프로젝트 목적

SNS핫딜 서비스의 구글 검색 노출을 극대화하고 오가닉 유입을 증가시키기 위한 SEO 최적화 랜딩페이지 제작 및 배포

### 비즈니스 배경

- **현재 문제**: 구글 검색 노출 부재, 광고 집행 불가, 경쟁사 대비 검색 순위 열위
- **목표**: 주요 키워드(인스타 팔로워 구매, SNS 마케팅 등)에서 구글 1페이지 노출
- **타겟**: 20-30대 SNS 활동층, 소상공인, 마케팅 대행사 실무자

### 핵심 지표 (NSM)

구글 주요 키워드 검색 시 1페이지 노출 달성 및 유지

### 타임라인

- 1개월: 기본 SEO 설정 완료
- 3개월: 핵심 키워드 5개 이상 1페이지 진입
- 6개월: 핵심 키워드 10개 이상 1페이지 안정화

---

## 🎯 타겟 페르소나 (요약)

1. **SNS 인플루언서 지망생 (25세)**: 빠른 계정 성장, 신뢰 서비스
2. **카페 운영 소상공인 (33세)**: 시간 절약, 즉각적 효과
3. **마케팅 대행사 실무자 (29세)**: 대량 구매, 안정적 공급

---

## 🏗️ 기술 스택

### 프론트엔드

- **Next.js 14** (App Router)
  - 이유: 서버 렌더링, 자동 SEO 최적화, 빠른 성능
- **TypeScript**
  - 이유: 타입 안정성, 유지보수성
- **Tailwind CSS**
  - 이유: 빠른 스타일링, 반응형 디자인, 일관된 디자인 시스템

### 배포 및 인프라

- **Vercel**
  - 이유: 무료 호스팅, 자동 HTTPS, 글로벌 CDN, Next.js 최적화
  - 비용: 무료 (월 100GB 대역폭까지)

### SEO 도구

- **next-sitemap**: 자동 사이트맵 생성
- **next-seo**: 메타태그 관리
- **구조화 데이터**: Schema.org (Organization, WebSite, Service)

### 분석 및 모니터링

- **Google Analytics 4**: 트래픽 분석
- **Google Search Console**: 검색 성과 추적
- **Vercel Analytics**: 성능 모니터링

---

## 📂 프로젝트 구조

```
hotdeal_landing_onepager/
├── outputs/
│   └── docs/
│       └── 01-원페이저.md          # 비즈니스 기획 문서
│
├── src/                             # (예정) Next.js 소스코드
│   ├── app/                         # App Router
│   │   ├── page.tsx                 # 메인 홈페이지
│   │   ├── instagram/page.tsx       # 인스타그램 상세
│   │   ├── youtube/page.tsx         # 유튜브 상세
│   │   ├── tiktok/page.tsx          # 틱톡 상세
│   │   ├── pricing/page.tsx         # 가격 안내
│   │   ├── faq/page.tsx             # FAQ
│   │   ├── blog/                    # 블로그 (SEO 콘텐츠)
│   │   └── layout.tsx               # 공통 레이아웃
│   │
│   ├── components/                  # 재사용 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CTAButton.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ...
│   │
│   └── lib/                         # 유틸리티
│       └── seo.ts                   # SEO 설정
│
├── public/                          # 정적 파일
│   ├── images/
│   └── robots.txt
│
├── PROJECT_CONTEXT.md               # 이 문서
├── README.md                        # 개발 가이드
├── TECH_STACK.md                    # 기술 스택 상세
├── TODO.md                          # 개발 진행 상황
├── package.json
├── next.config.js
└── tailwind.config.ts
```

---

## 🎨 MVP 필수 페이지 및 기능

### 1. 메인 랜딩 페이지 (`/`)

- **섹션 구성**:
  - Hero: 핵심 가치 제안 + CTA
  - 주요 서비스 소개 (인스타/유튜브/틱톡)
  - 차별점 (vs 경쟁사)
  - 고객 후기/통계
  - FAQ 미리보기
  - CTA (지금 시작하기)
- **SEO 키워드**: "인스타 팔로워 구매", "SNS 마케팅", "팔로워 늘리기"

### 2. 플랫폼별 상세 페이지

- **인스타그램** (`/instagram`)
- **유튜브** (`/youtube`)
- **틱톡** (`/tiktok`)
- 각 페이지: 서비스 상세, 가격, 이용 방법, FAQ

### 3. 가격 안내 (`/pricing`)

- 명확한 요금표
- 패키지 비교
- 유연한 구매 옵션 강조

### 4. FAQ (`/faq`)

- 자주 묻는 질문 (검색 키워드 포함)
- 아코디언 UI

### 5. 공지사항 (`/notice`)

- 업데이트 소식
- 이벤트 안내

### 6. 블로그 (`/blog`)

- SEO 콘텐츠 마케팅
- 가이드, 팁, 케이스 스터디

---

## 🔍 SEO 최적화 체크리스트

### 기술적 SEO

- [ ] 페이지별 메타태그 (Title, Description, OG)
- [ ] 구조화 데이터 (Schema.org)
- [ ] XML 사이트맵 자동 생성
- [ ] robots.txt 설정
- [ ] 모바일 반응형 디자인
- [ ] 이미지 최적화 (WebP, lazy loading)
- [ ] Core Web Vitals 최적화
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

### 콘텐츠 SEO

- [ ] 키워드 리서치 (핵심 10개 선정)
- [ ] 페이지별 키워드 매핑
- [ ] H1/H2/H3 계층 구조
- [ ] 내부 링크 구조
- [ ] Alt 태그 (이미지)

### 온페이지 SEO

- [ ] URL 구조 최적화 (명확, 간결)
- [ ] 정규 URL 설정 (canonical)
- [ ] Open Graph 태그
- [ ] Twitter Card

---

## 🚀 배포 프로세스

### 1단계: 로컬 개발

```bash
npm install
npm run dev
```

### 2단계: 빌드 테스트

```bash
npm run build
npm run start
```

### 3단계: Vercel 배포

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 4단계: 사후 작업

- Google Search Console 등록
- Google Analytics 설치
- 사이트맵 제출

---

## 📊 측정 및 추적

### 핵심 지표

1. **키워드 순위**: 핵심 10개 키워드 구글 순위
2. **오가닉 트래픽**: 월간 검색 유입 방문자
3. **전환율**: 검색 유입 → 회원가입/구매

### 도구

- Google Search Console: 검색 성과
- Google Analytics 4: 트래픽, 사용자 행동
- Vercel Analytics: 성능, 속도

---

## 🎯 차별화 전략

1. **한국 시장 특화**: 한국어 롱테일 키워드 선점
2. **사용자 맞춤형 구매**: 패키지가 아닌 개별 선택
3. **신뢰 요소 강화**: 리뷰, 후기, 보안 인증

---

## ⚠️ 주요 리스크 및 대응

1. **경쟁 리스크**: 차별화 콘텐츠, 지속 업데이트
2. **알고리즘 변경**: 화이트햇 SEO 원칙 준수
3. **전환율 저조**: A/B 테스트, CTA 최적화

---

## 📝 현재 개발 상태

### ✅ 완료

- 원페이저 작성 (비즈니스 기획)
- 프로젝트 컨텍스트 문서 작성

### 🔄 진행 중

- (없음)

### 📋 예정

- Next.js 프로젝트 초기화
- 페이지 구조 및 라우팅 설정
- 메인 랜딩페이지 개발
- SEO 설정 구현
- Vercel 배포

**상세 진행 상황은 `TODO.md` 참조**

---

## 📚 관련 문서

- `outputs/docs/01-원페이저.md`: 비즈니스 기획 상세
- `README.md`: 개발 환경 설정 및 실행 방법
- `TECH_STACK.md`: 기술 스택 상세 설명
- `TODO.md`: 개발 진행 상황 및 체크리스트

---

## 💡 개발 시 주의사항

1. **SEO 최우선**: 모든 페이지는 SEO를 최우선으로 설계
2. **성능**: Core Web Vitals 항상 체크
3. **모바일 우선**: 모바일 경험 최적화
4. **콘텐츠**: 사용자 의도에 맞는 고품질 콘텐츠
5. **측정**: Google Analytics, Search Console 연동 필수

---

**문서 작성일**: 2026-01-12  
**최종 업데이트**: 2026-01-12  
**버전**: v1.0
