# 검색엔진 인증 파일 사용법

## 구글 서치콘솔 HTML 파일 인증

1. https://search.google.com/search-console 접속
2. "HTML 파일" 인증 방식 선택
3. 제공된 파일 다운로드 (예: `google1234567890abcdef.html`)
4. 다운로드한 파일을 `public/` 폴더에 복사
5. `google-verification-template.html` 파일은 삭제해도 됨
6. 배포 후 확인 클릭

## 네이버 서치어드바이저 HTML 파일 인증

1. https://searchadvisor.naver.com 접속
2. "HTML 파일" 인증 방식 선택
3. 제공된 파일 다운로드 (예: `naver1234567890abcdef.html`)
4. 다운로드한 파일을 `public/` 폴더에 복사
5. `naver-verification-template.html` 파일은 삭제해도 됨
6. 배포 후 확인 클릭

## 참고

- 템플릿 파일(`*-template.html`)은 실제로 사용되지 않습니다
- 실제 인증 파일을 받은 후 해당 파일명으로 저장하세요
- HTML 태그 방식을 사용하면 이 파일들은 필요 없습니다
