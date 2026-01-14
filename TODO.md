# 개발 진행 상황 및 TODO

SNS핫딜 SEO 랜딩페이지 개발 체크리스트

---

## 📋 전체 진행 상황

```
[===>                    ] 15% 완료
```

---

## ✅ 완료된 작업

### Phase 0: 기획 및 문서화
- [x] 원페이저 작성 (`outputs/docs/01-원페이저.md`)
- [x] 프로젝트 컨텍스트 문서 작성 (`PROJECT_CONTEXT.md`)
- [x] README 작성 (`README.md`)
- [x] 기술 스택 문서 작성 (`TECH_STACK.md`)
- [x] TODO 체크리스트 작성 (이 문서)

---

## 🔄 진행 중인 작업

- (없음)

---

## 📋 예정된 작업

### Phase 1: 프로젝트 초기화 (1일 소요)

#### 1.1 Next.js 프로젝트 생성
- [ ] `npx create-next-app@latest` 실행
  - [ ] TypeScript 선택
  - [ ] Tailwind CSS 선택
  - [ ] App Router 선택
  - [ ] `src/` 디렉토리 사용
- [ ] 프로젝트 구조 정리
- [ ] 불필요한 기본 파일 정리

#### 1.2 필수 패키지 설치
- [ ] SEO 패키지
  - [ ] `next-seo` 설치
  - [ ] `next-sitemap` 설치
- [ ] UI 라이브러리
  - [ ] `@headlessui/react` 설치
  - [ ] `react-icons` 설치
- [ ] 개발 도구
  - [ ] ESLint 설정
  - [ ] Prettier 설정
  - [ ] Husky + lint-staged 설정

#### 1.3 기본 설정
- [ ] `next.config.js` 설정
  - [ ] 이미지 최적화 설정
  - [ ] Strict Mode 활성화
- [ ] `tailwind.config.ts` 커스터마이징
  - [ ] 브랜드 컬러 추가
  - [ ] 폰트 설정 (Pretendard)
- [ ] `tsconfig.json` 최적화
  - [ ] 경로 별칭 설정 (`@/*`)
- [ ] `.env.local` 생성
  - [ ] Google Analytics ID
  - [ ] 사이트 URL

---

### Phase 2: 공통 컴포넌트 개발 (2일 소요)

#### 2.1 레이아웃
- [ ] `src/app/layout.tsx` 설정
  - [ ] 메타데이터 기본값
  - [ ] Google Analytics 스크립트
  - [ ] 폰트 로딩
- [ ] `src/components/Header.tsx` 개발
  - [ ] 로고
  - [ ] 네비게이션 메뉴
  - [ ] 모바일 햄버거 메뉴
  - [ ] CTA 버튼
- [ ] `src/components/Footer.tsx` 개발
  - [ ] 회사 정보
  - [ ] 링크 (개인정보처리방침, 이용약관)
  - [ ] SNS 링크

#### 2.2 재사용 컴포넌트
- [ ] `src/components/CTAButton.tsx`
  - [ ] Primary, Secondary 버튼
  - [ ] 로딩 상태
- [ ] `src/components/ServiceCard.tsx`
  - [ ] 아이콘, 제목, 설명
  - [ ] 호버 효과
- [ ] `src/components/TestimonialCard.tsx`
  - [ ] 고객 후기 카드
- [ ] `src/components/FAQItem.tsx`
  - [ ] 아코디언 UI

#### 2.3 SEO 유틸리티
- [ ] `src/lib/seo.ts` 생성
  - [ ] 페이지별 메타데이터 헬퍼 함수
  - [ ] 구조화 데이터 생성 함수
  - [ ] Open Graph 이미지 설정

---

### Phase 3: 메인 페이지 개발 (3일 소요)

#### 3.1 Hero 섹션
- [ ] `src/components/sections/Hero.tsx`
  - [ ] 핵심 가치 제안 문구
  - [ ] CTA 버튼 (지금 시작하기)
  - [ ] 배경 이미지/그라디언트
  - [ ] 애니메이션 (선택)

#### 3.2 주요 서비스 섹션
- [ ] `src/components/sections/Services.tsx`
  - [ ] 인스타그램, 유튜브, 틱톡 카드
  - [ ] 각 플랫폼 아이콘 및 설명
  - [ ] "자세히 보기" 링크

#### 3.3 차별점 섹션
- [ ] `src/components/sections/Features.tsx`
  - [ ] 3가지 차별점 강조
  - [ ] vs 경쟁사 비교
  - [ ] 아이콘 + 설명

#### 3.4 고객 후기 섹션
- [ ] `src/components/sections/Testimonials.tsx`
  - [ ] 3-5개 후기 카드
  - [ ] 캐러셀 또는 그리드

#### 3.5 FAQ 미리보기 섹션
- [ ] `src/components/sections/FAQPreview.tsx`
  - [ ] 주요 FAQ 3-5개
  - [ ] "더 보기" 링크 → `/faq`

#### 3.6 최종 CTA 섹션
- [ ] `src/components/sections/FinalCTA.tsx`
  - [ ] 강력한 CTA 문구
  - [ ] "지금 시작하기" 버튼
  - [ ] 배경 강조

#### 3.7 메인 페이지 조립
- [ ] `src/app/page.tsx`
  - [ ] 모든 섹션 조립
  - [ ] SEO 메타태그 최적화
  - [ ] 구조화 데이터 추가

---

### Phase 4: 플랫폼별 상세 페이지 (3일 소요)

#### 4.1 인스타그램 페이지
- [ ] `src/app/instagram/page.tsx`
  - [ ] 서비스 상세 설명
  - [ ] 이용 방법
  - [ ] 가격 안내
  - [ ] FAQ
  - [ ] CTA
  - [ ] SEO 최적화 (키워드: "인스타 팔로워 구매")

#### 4.2 유튜브 페이지
- [ ] `src/app/youtube/page.tsx`
  - [ ] 서비스 상세 설명
  - [ ] 이용 방법
  - [ ] 가격 안내
  - [ ] FAQ
  - [ ] CTA
  - [ ] SEO 최적화 (키워드: "유튜브 조회수 늘리기")

#### 4.3 틱톡 페이지
- [ ] `src/app/tiktok/page.tsx`
  - [ ] 서비스 상세 설명
  - [ ] 이용 방법
  - [ ] 가격 안내
  - [ ] FAQ
  - [ ] CTA
  - [ ] SEO 최적화 (키워드: "틱톡 팔로워 늘리기")

---

### Phase 5: 기타 페이지 개발 (2일 소요)

#### 5.1 가격 안내 페이지
- [ ] `src/app/pricing/page.tsx`
  - [ ] 요금표 (플랫폼별, 수량별)
  - [ ] 패키지 비교
  - [ ] CTA
  - [ ] SEO 최적화

#### 5.2 FAQ 페이지
- [ ] `src/app/faq/page.tsx`
  - [ ] 카테고리별 FAQ
  - [ ] 아코디언 UI
  - [ ] 검색 기능 (선택)
  - [ ] SEO 최적화

#### 5.3 공지사항 페이지
- [ ] `src/app/notice/page.tsx`
  - [ ] 공지사항 목록
  - [ ] 페이지네이션
  - [ ] SEO 최적화

#### 5.4 블로그 (기본 구조)
- [ ] `src/app/blog/page.tsx` (목록)
- [ ] `src/app/blog/[slug]/page.tsx` (상세)
- [ ] 마크다운 렌더링 설정
- [ ] SEO 최적화

---

### Phase 6: SEO 최적화 (2일 소요)

#### 6.1 기술적 SEO
- [ ] 모든 페이지 메타태그 검증
- [ ] 구조화 데이터 추가
  - [ ] Organization
  - [ ] WebSite
  - [ ] Service (각 플랫폼별)
  - [ ] FAQ
- [ ] `robots.txt` 생성
- [ ] 사이트맵 자동 생성 설정
- [ ] Open Graph 이미지 생성
- [ ] Twitter Card 설정

#### 6.2 성능 최적화
- [ ] 이미지 최적화
  - [ ] WebP 변환
  - [ ] Lazy loading
  - [ ] 적절한 크기 설정
- [ ] 폰트 최적화
  - [ ] `next/font` 사용
  - [ ] Subset 로딩
- [ ] 코드 스플리팅 확인
- [ ] Lighthouse 스코어 90+ 달성
  - [ ] Performance
  - [ ] Accessibility
  - [ ] Best Practices
  - [ ] SEO

#### 6.3 콘텐츠 SEO
- [ ] 키워드 리서치 (10개 핵심 키워드 선정)
- [ ] 페이지별 키워드 매핑
- [ ] H1/H2/H3 계층 구조 검증
- [ ] 내부 링크 구조 최적화
- [ ] 이미지 Alt 태그 추가

---

### Phase 7: 배포 및 사후 작업 (1일 소요)

#### 7.1 배포 준비
- [ ] 환경 변수 설정 (Vercel)
- [ ] 빌드 테스트
- [ ] 프로덕션 최적화 확인

#### 7.2 Vercel 배포
- [ ] Vercel 계정 생성
- [ ] GitHub 저장소 연결
- [ ] 첫 배포 실행
- [ ] 도메인 연결 (보유 시)
- [ ] HTTPS 확인

#### 7.3 Google 도구 연동
- [ ] Google Search Console 등록
  - [ ] 사이트 소유권 인증
  - [ ] 사이트맵 제출
- [ ] Google Analytics 4 설치
  - [ ] 추적 코드 설치
  - [ ] 목표 설정 (전환 이벤트)
- [ ] Vercel Analytics 활성화

#### 7.4 최종 점검
- [ ] 모든 페이지 접근 테스트
- [ ] 모바일 반응형 테스트
- [ ] 크로스 브라우저 테스트
- [ ] 404 페이지 확인
- [ ] 로딩 속도 테스트

---

## 🚀 추후 개선 사항 (Phase 2)

### 고급 기능
- [ ] 실시간 채팅 상담 (채널톡/카카오톡)
- [ ] 문의하기 폼 백엔드 연동
- [ ] 회원 가입/로그인 (실제 서비스 연동)
- [ ] 결제 시스템 연동
- [ ] 대시보드 (주문 관리)

### 콘텐츠 마케팅
- [ ] 블로그 콘텐츠 작성 (10개 이상)
- [ ] 가이드 페이지 추가
- [ ] 케이스 스터디 페이지
- [ ] 이벤트 페이지

### SEO 고도화
- [ ] 백링크 구축 전략
- [ ] 소셜 미디어 연동
- [ ] 리치 스니펫 최적화
- [ ] 다국어 지원 (일본어, 영어)

---

## 📝 개발 노트

### 알려진 이슈
- (없음)

### 의사결정 기록
- 2026-01-12: Next.js 14 App Router 선택 (Pages Router 대신)
- 2026-01-12: Vercel 무료 플랜으로 배포 결정

### 참고 사항
- 블로그 콘텐츠는 MVP에 포함하지만, 초기 게시물은 3-5개로 제한
- 실제 서비스 연동은 랜딩페이지 배포 후 별도 작업

---

## 📅 타임라인

| Phase | 작업 | 예상 기간 | 상태 |
|-------|------|-----------|------|
| Phase 0 | 기획 및 문서화 | 0.5일 | ✅ 완료 |
| Phase 1 | 프로젝트 초기화 | 1일 | 📋 예정 |
| Phase 2 | 공통 컴포넌트 | 2일 | 📋 예정 |
| Phase 3 | 메인 페이지 | 3일 | 📋 예정 |
| Phase 4 | 플랫폼 페이지 | 3일 | 📋 예정 |
| Phase 5 | 기타 페이지 | 2일 | 📋 예정 |
| Phase 6 | SEO 최적화 | 2일 | 📋 예정 |
| Phase 7 | 배포 | 1일 | 📋 예정 |
| **합계** | **전체** | **14.5일** | **15% 완료** |

---

**최종 업데이트**: 2026-01-12  
**다음 작업**: Phase 1 - Next.js 프로젝트 초기화

---

## 💡 사용 방법

1. **작업 시작 전**: 해당 Phase의 체크리스트 확인
2. **작업 완료 후**: 체크박스 체크 (`- [ ]` → `- [x]`)
3. **진행률 업데이트**: 상단 진행률 바 업데이트
4. **커밋 시**: 이 문서도 함께 커밋하여 진행 상황 추적

