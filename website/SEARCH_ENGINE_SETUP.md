# 검색엔진 등록 가이드

구글 서치콘솔과 네이버 서치어드바이저 등록을 위한 가이드입니다.

## 📌 중요: 인증 코드 확인 후 수정 필요

아래 파일들에 실제 인증 코드를 입력해야 합니다:
- `website/src/app/layout.tsx` (메타 태그)
- `website/public/google[xxxxx].html` (파일명 및 내용)
- `website/public/naver[xxxxx].html` (파일명 및 내용)

---

## 1️⃣ 구글 서치콘솔 (Google Search Console) 등록

### 단계 1: 서치콘솔 접속
1. https://search.google.com/search-console 접속
2. Google 계정으로 로그인
3. "속성 추가" 클릭

### 단계 2: 도메인 선택
**URL 접두어** 방식 선택:
```
https://xn--sns-h84mk60k.com
```

### 단계 3: 소유권 확인 방법 선택

#### 방법 A: HTML 태그 (추천)
1. 서치콘솔에서 "HTML 태그" 선택
2. 제공된 메타 태그 복사
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
3. `website/src/app/layout.tsx` 파일 열기
4. 아래 부분 찾아서 `YOUR_GOOGLE_CODE` 를 실제 코드로 교체:
   ```typescript
   <meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />
   ```
5. 저장 후 배포
6. 서치콘솔에서 "확인" 클릭

#### 방법 B: HTML 파일 업로드
1. 서치콘솔에서 "HTML 파일" 선택
2. 제공된 파일 다운로드 (예: `googlexxxxxx.html`)
3. 해당 파일을 `website/public/` 폴더에 복사
4. 배포 후 `https://xn--sns-h84mk60k.com/googlexxxxxx.html` 접속 확인
5. 서치콘솔에서 "확인" 클릭

### 단계 4: Sitemap 제출
1. 소유권 확인 완료 후
2. 좌측 메뉴 > Sitemaps
3. 새 사이트맵 추가:
   ```
   https://xn--sns-h84mk60k.com/sitemap.xml
   ```
4. "제출" 클릭

---

## 2️⃣ 네이버 서치어드바이저 등록

### 단계 1: 서치어드바이저 접속
1. https://searchadvisor.naver.com 접속
2. 네이버 계정으로 로그인
3. "웹마스터 도구" 클릭

### 단계 2: 사이트 등록
1. "사이트 등록" 버튼 클릭
2. URL 입력:
   ```
   https://xn--sns-h84mk60k.com
   ```
3. "등록" 클릭

### 단계 3: 소유권 확인 방법 선택

#### 방법 A: HTML 태그 (추천)
1. "HTML 태그" 선택
2. 제공된 메타 태그 복사
   ```html
   <meta name="naver-site-verification" content="YOUR_CODE_HERE" />
   ```
3. `website/src/app/layout.tsx` 파일 열기
4. 아래 부분 찾아서 `YOUR_NAVER_CODE` 를 실제 코드로 교체:
   ```typescript
   <meta name="naver-site-verification" content="YOUR_NAVER_CODE" />
   ```
5. 저장 후 배포
6. 서치어드바이저에서 "확인" 클릭

#### 방법 B: HTML 파일 업로드
1. "HTML 파일" 선택
2. 제공된 파일 다운로드 (예: `naverxxxxxx.html`)
3. 해당 파일을 `website/public/` 폴더에 복사
4. 배포 후 `https://xn--sns-h84mk60k.com/naverxxxxxx.html` 접속 확인
5. 서치어드바이저에서 "확인" 클릭

### 단계 4: 사이트맵 제출
1. 소유권 확인 완료 후
2. "요청" > "사이트맵 제출"
3. URL 입력:
   ```
   https://xn--sns-h84mk60k.com/sitemap.xml
   ```
4. "확인" 클릭

### 단계 5: RSS 제출 (선택사항)
블로그가 있다면 RSS도 제출 가능:
```
https://xn--sns-h84mk60k.com/feed.xml
```

---

## 3️⃣ 배포 후 작업

### Vercel 배포 시
1. 코드 변경 사항 commit & push
2. Vercel 자동 배포 대기 (또는 수동 배포)
3. 배포 완료 후 소유권 확인 진행

### 환경변수 확인
`.env.production` 파일이 제대로 설정되어 있는지 확인:
```
NEXT_PUBLIC_SITE_URL=https://xn--sns-h84mk60k.com
```

---

## 4️⃣ 등록 완료 후 확인 사항

### 구글 서치콘솔
- 색인 생성 요청: 주요 페이지 URL 직접 제출
- 성능 리포트: 검색 노출 데이터 확인 (24-48시간 소요)
- URL 검사: 개별 페이지 색인 상태 확인

### 네이버 서치어드바이저
- 수집 요청: "요청" > "웹 페이지 수집" 에서 주요 URL 제출
- 검증: "최적화" > "페이지 최적화" 에서 페이지 품질 확인
- 통계: "검색 유입" 데이터 확인 (수일 소요)

---

## 5️⃣ 주요 페이지 URL (수동 제출용)

```
https://xn--sns-h84mk60k.com/
https://xn--sns-h84mk60k.com/services
https://xn--sns-h84mk60k.com/pricing
https://xn--sns-h84mk60k.com/instagram
https://xn--sns-h84mk60k.com/youtube
https://xn--sns-h84mk60k.com/tiktok
https://xn--sns-h84mk60k.com/x
https://xn--sns-h84mk60k.com/blog
https://xn--sns-h84mk60k.com/blog/instagram-follower-growth
https://xn--sns-h84mk60k.com/blog/youtube-algorithm-guide
https://xn--sns-h84mk60k.com/blog/tiktok-viral-strategy
```

---

## 6️⃣ 문제 해결

### 소유권 확인 실패 시
1. 메타 태그가 `<head>` 안에 있는지 확인
2. 배포가 완료되었는지 확인
3. 브라우저 캐시 지우고 재시도
4. 페이지 소스 보기로 메타 태그 실제 존재 확인

### Sitemap 제출 오류 시
1. https://xn--sns-h84mk60k.com/sitemap.xml 직접 접속 확인
2. XML 형식 오류 없는지 확인
3. robots.txt에서 sitemap 위치 확인

---

## 7️⃣ 예상 소요 시간

- **소유권 확인**: 즉시 ~ 1시간
- **Sitemap 처리**: 1-7일
- **첫 색인 생성**: 1-14일
- **검색 노출 시작**: 2-4주
- **완전한 색인**: 1-3개월

---

## ⚠️ 주의사항

1. **메타 태그는 삭제하지 마세요**: 소유권 확인 후에도 계속 유지해야 합니다
2. **Sitemap 자동 갱신**: 콘텐츠 추가 시 자동으로 sitemap에 반영됩니다
3. **robots.txt 확인**: 차단된 페이지가 없는지 확인하세요
4. **HTTPS 필수**: http는 등록되지 않습니다

---

## 📞 도움이 필요하면

등록 중 문제가 발생하면:
- 구글: https://support.google.com/webmasters
- 네이버: https://help.naver.com/service/30000/category/30000
