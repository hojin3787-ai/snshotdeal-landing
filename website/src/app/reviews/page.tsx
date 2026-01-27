'use client';

import Link from 'next/link';
import { FaUser, FaStar, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState, useEffect, useRef } from 'react';

export default function ReviewsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [satisfaction, setSatisfaction] = useState(0);
  const [realUser, setRealUser] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // 고객 만족도 애니메이션 (0 -> 99)
          let count = 0;
          const satisfactionInterval = setInterval(() => {
            count += 1;
            setSatisfaction(count);
            if (count >= 99) {
              clearInterval(satisfactionInterval);
            }
          }, 20);

          // 실제 유저 애니메이션 (0 -> 100)
          let userCount = 0;
          const userInterval = setInterval(() => {
            userCount += 1;
            setRealUser(userCount);
            if (userCount >= 100) {
              clearInterval(userInterval);
            }
          }, 20);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // AggregateRating 스키마 추가
    const siteUrl = window.location.origin;
    const ratingSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SNS핫딜 SNS 마케팅 서비스",
      "description": "인스타그램, 유튜브, 틱톡, X 계정 성장을 위한 SNS 마케팅 서비스",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "80"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ratingSchema);
    document.head.appendChild(script);

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [hasAnimated]);

  const reviews = [
    // Instagram Reviews (20개)
    {
      id: 1,
      name: 'qkwe92****',
      role: '패션 인플루언서',
      platform: 'instagram',
      service: '팔로워',
      rating: 5,
      content: '팔로워가 정말 빠르게 늘었어요! 실제 활동하는 분들이라 계정 활성도도 높아졌습니다. 안전하게 관리되는 게 느껴져서 만족스러워요.',
    },
    {
      id: 2,
      name: 'pmj2003****',
      role: '뷰티 크리에이터',
      platform: 'instagram',
      service: '조회수',
      content: '조회수가 예전보다 3배 이상 늘었습니다. 알고리즘이 확실히 달라진 게 느껴져요. 추천 피드에 자주 노출되고 있어요!',
      rating: 5,
    },
    {
      id: 3,
      name: 'sylee88****',
      role: '맛집 블로거',
      platform: 'instagram',
      service: '좋아요',
      content: '서비스 품질이 정말 좋아요. 팔로워 수도 늘고 게시물 반응도 좋아졌습니다. 가격 대비 너무 만족스러워요!',
      rating: 5,
    },
    {
      id: 4,
      name: 'mhcho77****',
      role: '피트니스 트레이너',
      platform: 'instagram',
      service: '팔로워',
      content: '인스타 팔로워 늘면서 PT 문의가 3배 증가했어요. 협찬도 받기 시작했고, 이제는 온라인 클래스도 운영하고 있습니다!',
      rating: 5,
    },
    {
      id: 5,
      name: 'hysung96****',
      role: '반려동물 크리에이터',
      platform: 'instagram',
      service: '팔로워',
      content: '우리 강아지 계정이 이렇게 성장할 줄 몰랐어요. 펫 브랜드에서 협찬 제의가 들어오고 있습니다. 정말 감사해요!',
      rating: 5,
    },
    {
      id: 6,
      name: 'sjbaek1****',
      role: '웹툰 작가',
      platform: 'instagram',
      service: '팔로워',
      content: '인스타로 웹툰 홍보하는데 팔로워가 늘면서 작품 조회수도 함께 올라갔어요. 팬층도 탄탄해졌습니다!',
      rating: 5,
    },
    {
      id: 7,
      name: 'hejung_****',
      role: '인테리어 디자이너',
      platform: 'instagram',
      service: '팔로워',
      content: '포트폴리오 계정인데 팔로워가 늘면서 실제 의뢰도 증가했어요. 월 매출이 2배 이상 올랐습니다!',
      rating: 5,
    },
    {
      id: 8,
      name: 'mskang5****',
      role: '네일아트 샵 운영',
      platform: 'instagram',
      service: '팔로워',
      content: '샵 인스타 팔로워가 5천 명 넘으면서 예약이 꽉 찰 정도로 늘었어요. 홍보 효과가 엄청납니다!',
      rating: 5,
    },
    {
      id: 9,
      name: 'jhyoon2****',
      role: '카페 사장님',
      platform: 'instagram',
      service: '팔로워',
      content: '카페 계정 키우니까 손님이 정말 많아졌어요. 주말엔 웨이팅이 생길 정도입니다. 최고의 투자였어요!',
      rating: 5,
    },
    {
      id: 10,
      name: 'yjchoi3****',
      role: '플라워 디자이너',
      platform: 'instagram',
      service: '팔로워',
      content: '인스타 덕분에 기업 행사 문의가 들어오기 시작했어요. 이제는 직원도 2명 뽑았습니다!',
      rating: 5,
    },
    {
      id: 11,
      name: 'jhseo94****',
      role: '사진작가',
      platform: 'instagram',
      service: '팔로워',
      content: '포트폴리오 계정인데 팔로워 늘면서 촬영 문의가 폭주하고 있어요. 단가도 올릴 수 있었습니다!',
      rating: 5,
    },
    {
      id: 12,
      name: 'nykim88****',
      role: '베이커리 운영자',
      platform: 'instagram',
      service: '팔로워',
      content: '빵집 인스타 시작한 지 2개월인데 벌써 팔로워 1만 명! 온라인 주문이 엄청 늘었어요!',
      rating: 5,
    },
    {
      id: 13,
      name: 'jylee77****',
      role: '자동차 튜닝샵',
      platform: 'instagram',
      service: '팔로워',
      content: '차량 커스텀 계정인데 팔로워가 늘면서 전국에서 문의가 와요. 매출이 3배 증가했습니다!',
      rating: 5,
    },
    {
      id: 14,
      name: 'sypark1****',
      role: '요가 강사',
      platform: 'instagram',
      service: '팔로워',
      content: '요가 클래스 홍보용인데 팔로워 늘면서 수강생이 꽉 찼어요. 추가 클래스도 오픈했습니다!',
      rating: 5,
    },
    {
      id: 15,
      name: 'mjoh55****',
      role: '수제화 디자이너',
      platform: 'instagram',
      service: '팔로워',
      content: '핸드메이드 제품 판매하는데 인스타 팔로워 늘면서 매출이 5배 올랐어요. 해외 주문도 들어옵니다!',
      rating: 5,
    },
    {
      id: 16,
      name: 'sbhan22****',
      role: '헤어 디자이너',
      platform: 'instagram',
      service: '팔로워',
      content: '헤어샵 인스타 계정인데 팔로워 늘면서 신규 고객이 매일 와요. 예약이 2주 밀려있습니다!',
      rating: 5,
    },
    {
      id: 17,
      name: 'ywjung9****',
      role: '악세서리 디자이너',
      platform: 'instagram',
      service: '좋아요',
      content: '핸드메이드 악세서리 판매하는데 팔로워 증가와 함께 판매량이 10배 늘었어요!',
      rating: 5,
    },
    {
      id: 18,
      name: 'dhlim66****',
      role: '가구 공방 운영',
      platform: 'instagram',
      service: '팔로워',
      content: '원목 가구 제작하는데 인스타 덕분에 고급 고객층이 형성됐어요. 월 매출 1천만 원 돌파!',
      rating: 5,
    },
    {
      id: 19,
      name: 'jmshin4****',
      role: '향수 브랜드',
      platform: 'instagram',
      service: '팔로워',
      content: '니치 향수 브랜드인데 팔로워 늘면서 재구매율도 올라갔어요. 백화점 입점 제의도 받았습니다!',
      rating: 5,
    },
    {
      id: 20,
      name: 'jwhong7****',
      role: '핸드드립 카페',
      platform: 'instagram',
      service: '팔로워',
      content: '스페셜티 커피 카페인데 인스타 팔로워 늘면서 커피 애호가들이 많이 찾아와요. 매출이 2배 올랐습니다!',
      rating: 5,
    },
    
    // YouTube Reviews (20개)
    {
      id: 21,
      name: 'dhchoi8****',
      role: '여행 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '구독자 1000명 달성하고 수익화 시작했어요! 실제 시청하는 구독자들이라 영상 조회수도 함께 늘어났습니다.',
      rating: 5,
    },
    {
      id: 22,
      name: 'sbjung1****',
      role: '요리 크리에이터',
      platform: 'youtube',
      service: '조회수',
      content: '조회수가 확실히 늘면서 광고 수익도 증가했습니다. 투자 대비 효과가 정말 좋아요. 강력 추천합니다!',
      rating: 5,
    },
    {
      id: 23,
      name: 'tmkim99****',
      role: '게임 스트리머',
      platform: 'youtube',
      service: '구독자',
      content: '구독자 10만 돌파했습니다! 라이브 시청자도 늘어서 후원 수익도 증가했어요. 진짜 실제 유저들이에요!',
      rating: 5,
    },
    {
      id: 24,
      name: 'jwhong2****',
      role: '교육 콘텐츠 크리에이터',
      platform: 'youtube',
      service: '구독자',
      content: '교육 채널인데도 효과가 좋았어요. 구독자의 질이 높아서 강의 문의도 늘었습니다. 정말 만족스러워요!',
      rating: 5,
    },
    {
      id: 25,
      name: 'hwpark5****',
      role: '재테크 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '구독자 5만 돌파하면서 책 출판 제의도 받았어요. 광고 수익도 월 300만 원 넘어갔습니다!',
      rating: 5,
    },
    {
      id: 26,
      name: 'celee88****',
      role: '뷰티 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '구독자가 늘면서 뷰티 브랜드 협찬이 쏟아져요. 이제는 전업 유튜버로 전환했습니다!',
      rating: 5,
    },
    {
      id: 27,
      name: 'dukang3****',
      role: '자동차 리뷰어',
      platform: 'youtube',
      service: '구독자',
      content: '자동차 채널인데 구독자 늘면서 수입차 시승 기회도 생겼어요. 광고 단가도 높아졌습니다!',
      rating: 5,
    },
    {
      id: 28,
      name: 'mjsong9****',
      role: '육아 크리에이터',
      platform: 'youtube',
      service: '조회수',
      content: '육아 정보 채널인데 구독자가 빠르게 늘었어요. PPL 문의도 많이 들어오고 수익도 좋아요!',
      rating: 5,
    },
    {
      id: 29,
      name: 'sjyoon7****',
      role: '운동 트레이너',
      platform: 'youtube',
      service: '구독자',
      content: '홈트 영상 올리는데 구독자 늘면서 온라인 PT 문의가 폭주해요. 월 수익 500만 원 달성!',
      rating: 5,
    },
    {
      id: 30,
      name: 'ebcho44****',
      role: '반려동물 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '강아지 일상 채널인데 구독자가 20만 넘었어요. 펫 브랜드 협찬으로 월 1천만 원 벌어요!',
      rating: 5,
    },
    {
      id: 31,
      name: 'jshan66****',
      role: '음악 크리에이터',
      platform: 'youtube',
      service: '조회수',
      content: '커버곡 채널인데 구독자 늘면서 음원 발매 제의도 받았어요. 조회수도 계속 올라갑니다!',
      rating: 5,
    },
    {
      id: 32,
      name: 'sykim11****',
      role: '먹방 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '먹방 채널 시작한 지 6개월인데 구독자 15만! 식당 광고 문의가 매일 와요!',
      rating: 5,
    },
    {
      id: 33,
      name: 'jhpark2****',
      role: '개발자 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '코딩 강의 채널인데 구독자 늘면서 온라인 강의 플랫폼 제안도 받았어요. 부수입 최고!',
      rating: 5,
    },
    {
      id: 34,
      name: 'hrlee55****',
      role: '북튜버',
      platform: 'youtube',
      service: '조회수',
      content: '책 리뷰 채널인데 구독자 늘면서 출판사 협업도 생겼어요. 애드센스 수익도 꾸준합니다!',
      rating: 5,
    },
    {
      id: 35,
      name: 'wjjung9****',
      role: '캠핑 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '캠핑 채널인데 구독자가 빠르게 늘었어요. 캠핑 용품 협찬도 받고 광고 수익도 좋아요!',
      rating: 5,
    },
    {
      id: 36,
      name: 'jaoh777****',
      role: '낚시 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '낚시 채널 시작했는데 구독자 8만 돌파! 낚시 용품 브랜드 앰버서더 제안도 받았습니다!',
      rating: 5,
    },
    {
      id: 37,
      name: 'ynashin8****',
      role: 'ASMR 크리에이터',
      platform: 'youtube',
      service: '구독자',
      content: 'ASMR 채널인데 구독자 50만 돌파했어요! 광고 수익만으로도 생활이 가능해졌습니다!',
      rating: 5,
    },
    {
      id: 38,
      name: 'swbaek4****',
      role: '브이로그 유튜버',
      platform: 'youtube',
      service: '조회수',
      content: '일상 브이로그인데 구독자가 빠르게 늘면서 기업 협찬도 들어와요. 정말 신기해요!',
      rating: 5,
    },
    {
      id: 39,
      name: 'yjhong1****',
      role: '미술 크리에이터',
      platform: 'youtube',
      service: '구독자',
      content: '그림 그리기 채널인데 구독자 늘면서 온라인 클래스 수강생도 늘었어요. 월 500만 원 벌어요!',
      rating: 5,
    },
    {
      id: 40,
      name: 'hjkang3****',
      role: '축구 해설 유튜버',
      platform: 'youtube',
      service: '구독자',
      content: '축구 분석 채널인데 구독자 12만 돌파! 스포츠 브랜드 협찬도 받고 광고 수익도 짭짤해요!',
      rating: 5,
    },
    
    // TikTok Reviews (20개)
    {
      id: 41,
      name: 'tykang9****',
      role: '댄스 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '조회수 100만 달성했어요! 초기 반응이 좋아지니까 알고리즘이 계속 밀어주더라고요. For You 페이지에 매일 올라갑니다!',
      rating: 5,
    },
    {
      id: 42,
      name: 'jayoon8****',
      role: '라이프스타일 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '팔로워가 빠르게 늘면서 브랜드 협업 제의가 들어오기 시작했어요. 투자한 금액보다 훨씬 큰 수익을 얻었습니다!',
      rating: 5,
    },
    {
      id: 43,
      name: 'jhseo55****',
      role: '코미디 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '숏폼 영상 조회수가 폭발했어요! 팔로워도 빠르게 늘고 있고, 이제는 유튜브 쇼츠도 시작했습니다!',
      rating: 5,
    },
    {
      id: 44,
      name: 'cwlee77****',
      role: 'ASMR 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '틱톡 조회수 500만 돌파! 팔로워도 20만 넘었어요. 광고 문의가 계속 들어와서 이제는 전업으로 전환했습니다!',
      rating: 5,
    },
    {
      id: 45,
      name: 'dykim22****',
      role: '메이크업 아티스트',
      platform: 'tiktok',
      service: '조회수',
      content: '메이크업 튜토리얼 올리는데 조회수가 천만 넘었어요! 뷰티 브랜드 협찬도 쏟아집니다!',
      rating: 5,
    },
    {
      id: 46,
      name: 'shpark6****',
      role: '요리 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '레시피 영상인데 팔로워가 30만 돌파했어요! 요리책 출판 제의도 받았습니다!',
      rating: 5,
    },
    {
      id: 47,
      name: 'msjung4****',
      role: '매직 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '마술 영상 올리는데 조회수가 200만 넘어요! 행사 섭외도 들어오고 수익도 좋아요!',
      rating: 5,
    },
    {
      id: 48,
      name: 'helee99****',
      role: '패션 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '패션 코디 영상인데 팔로워 25만! 온라인 쇼핑몰 협업 제의가 매일 들어와요!',
      rating: 5,
    },
    {
      id: 49,
      name: 'jychoi3****',
      role: '운동 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '홈트 영상 올리는데 조회수 300만 돌파! 운동 용품 브랜드 앰버서더도 됐어요!',
      rating: 5,
    },
    {
      id: 50,
      name: 'jmhan88****',
      role: '반려동물 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '강아지 영상인데 팔로워 40만 돌파했어요! 펫 브랜드 광고만으로도 월 수백만 원 벌어요!',
      rating: 5,
    },
    {
      id: 51,
      name: 'yrsong1****',
      role: '챌린지 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '챌린지 영상 올리는데 조회수가 1천만 넘었어요! 바이럴되면서 팔로워가 폭발했습니다!',
      rating: 5,
    },
    {
      id: 52,
      name: 'hwcho66****',
      role: '게임 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '게임 하이라이트 올리는데 팔로워가 18만! 게임사 협업 제의도 받았어요!',
      rating: 5,
    },
    {
      id: 53,
      name: 'makang7****',
      role: '뷰티 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '스킨케어 루틴 영상인데 조회수 500만! 화장품 브랜드 협찬이 쏟아져요!',
      rating: 5,
    },
    {
      id: 54,
      name: 'sjkim55****',
      role: '음악 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '커버곡 올리는데 팔로워 35만 돌파! 음반사에서 연락도 왔어요!',
      rating: 5,
    },
    {
      id: 55,
      name: 'jhpark9****',
      role: '먹방 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '음식 리뷰 영상인데 조회수가 800만! 식당 광고 문의가 매일 들어와요!',
      rating: 5,
    },
    {
      id: 56,
      name: 'sjlee22****',
      role: '여행 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '여행지 소개 영상인데 팔로워 22만! 관광청 협업 제의도 받았습니다!',
      rating: 5,
    },
    {
      id: 57,
      name: 'hyjung3****',
      role: '리액션 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '리액션 영상인데 조회수가 600만! 알고리즘을 완전히 잡았어요!',
      rating: 5,
    },
    {
      id: 58,
      name: 'jwoh888****',
      role: '인테리어 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: '인테리어 팁 영상인데 팔로워 15만! 가구 브랜드 협찬도 받고 있어요!',
      rating: 5,
    },
    {
      id: 59,
      name: 'arshin4****',
      role: '육아 크리에이터',
      platform: 'tiktok',
      service: '조회수',
      content: '육아 꿀팁 영상인데 조회수 400만! 육아 용품 브랜드 광고가 계속 들어와요!',
      rating: 5,
    },
    {
      id: 60,
      name: 'shhong1****',
      role: 'DIY 크리에이터',
      platform: 'tiktok',
      service: '팔로워',
      content: 'DIY 영상 올리는데 팔로워 28만! 공예 재료 브랜드 앰버서더도 됐어요!',
      rating: 5,
    },
    
    // Twitter/X Reviews (20개)
    {
      id: 61,
      name: 'doyhan7****',
      role: '테크 인플루언서',
      platform: 'twitter',
      service: '팔로워',
      content: '팔로워가 빠르게 늘면서 트윗 반응도 좋아졌어요. 이제는 업계에서 인정받는 인플루언서가 되었습니다!',
      rating: 5,
    },
    {
      id: 62,
      name: 'yrlim88****',
      role: '마케팅 전문가',
      platform: 'twitter',
      service: '리트윗',
      content: '리트윗이 늘면서 트윗이 바이럴됐어요. 브랜드 협업 제의가 계속 들어오고 있습니다. 정말 만족해요!',
      rating: 5,
    },
    {
      id: 63,
      name: 'shpark2****',
      role: '스타트업 대표',
      platform: 'twitter',
      service: '팔로워',
      content: 'X 계정 키우면서 비즈니스 네트워킹이 확 늘었어요. 투자 미팅도 잡히고 파트너십 제안도 받았습니다!',
      rating: 5,
    },
    {
      id: 64,
      name: 'yeshin5****',
      role: '금융 인플루언서',
      platform: 'twitter',
      service: '팔로워',
      content: '팔로워 늘면서 블로그 유입도 증가했어요. 이제는 출판 제의도 받고 있습니다. 정말 효과적이에요!',
      rating: 5,
    },
    {
      id: 65,
      name: 'mjkim33****',
      role: 'AI 연구원',
      platform: 'twitter',
      service: '팔로워',
      content: 'AI 관련 트윗하는데 팔로워 5만 돌파! 컨퍼런스 연사 제의도 받았어요!',
      rating: 5,
    },
    {
      id: 66,
      name: 'jhlee99****',
      role: '디자이너',
      platform: 'twitter',
      service: '팔로워',
      content: '디자인 작업물 올리는데 팔로워가 빠르게 늘었어요. 프리랜서 의뢰가 쏟아집니다!',
      rating: 5,
    },
    {
      id: 67,
      name: 'wsjung6****',
      role: '개발자',
      platform: 'twitter',
      service: '팔로워',
      content: '개발 팁 공유하는데 팔로워 3만 돌파! 채용 제의도 여러 번 받았어요!',
      rating: 5,
    },
    {
      id: 68,
      name: 'sychoi4****',
      role: '작가',
      platform: 'twitter',
      service: '팔로워',
      content: '글 올리는데 팔로워가 늘면서 출판사 컨택도 왔어요. 책도 계약했습니다!',
      rating: 5,
    },
    {
      id: 69,
      name: 'jhkang8****',
      role: '증권 애널리스트',
      platform: 'twitter',
      service: '팔로워',
      content: '주식 분석 트윗하는데 팔로워 8만! 리포트 구독 서비스도 시작했어요!',
      rating: 5,
    },
    {
      id: 70,
      name: 'cwyoon1****',
      role: '법률 전문가',
      platform: 'twitter',
      service: '팔로워',
      content: '법률 정보 공유하는데 팔로워가 빠르게 늘었어요. 법률 자문 의뢰도 많이 들어와요!',
      rating: 5,
    },
    {
      id: 71,
      name: 'dhpark7****',
      role: '부동산 전문가',
      platform: 'twitter',
      service: '팔로워',
      content: '부동산 정보 트윗하는데 팔로워 4만! 컨설팅 의뢰가 매일 들어옵니다!',
      rating: 5,
    },
    {
      id: 72,
      name: 'sjlee22****',
      role: '헬스케어 전문가',
      platform: 'twitter',
      service: '팔로워',
      content: '건강 정보 공유하는데 팔로워가 늘면서 강연 제의도 받았어요!',
      rating: 5,
    },
    {
      id: 73,
      name: 'mhjung5****',
      role: '교육 전문가',
      platform: 'twitter',
      service: '팔로워',
      content: '교육 인사이트 트윗하는데 팔로워 6만! 교육청 자문 제의도 받았습니다!',
      rating: 5,
    },
    {
      id: 74,
      name: 'hrcho99****',
      role: '환경운동가',
      platform: 'twitter',
      service: '팔로워',
      content: '환경 이슈 트윗하는데 팔로워가 빠르게 늘었어요. NGO 협업도 생겼습니다!',
      rating: 5,
    },
    {
      id: 75,
      name: 'jskim44****',
      role: '스포츠 해설가',
      platform: 'twitter',
      service: '팔로워',
      content: '스포츠 분석 트윗하는데 팔로워 7만! 방송 출연 제의도 받았어요!',
      rating: 5,
    },
    {
      id: 76,
      name: 'ynlee66****',
      role: '음악 평론가',
      platform: 'twitter',
      service: '팔로워',
      content: '음악 리뷰 트윗하는데 팔로워가 늘면서 음악지 칼럼 제의도 왔어요!',
      rating: 5,
    },
    {
      id: 77,
      name: 'jwpark3****',
      role: '영화 평론가',
      platform: 'twitter',
      service: '팔로워',
      content: '영화 리뷰 트윗하는데 팔로워 5만! 영화제 심사위원 제의도 받았습니다!',
      rating: 5,
    },
    {
      id: 78,
      name: 'hnjung8****',
      role: '여행 작가',
      platform: 'twitter',
      service: '팔로워',
      content: '여행 정보 공유하는데 팔로워가 빠르게 늘었어요. 여행사 협업도 생겼습니다!',
      rating: 5,
    },
    {
      id: 79,
      name: 'smoh777****',
      role: '심리 상담사',
      platform: 'twitter',
      service: '팔로워',
      content: '심리 팁 트윗하는데 팔로워 4만! 온라인 상담 문의가 많이 들어와요!',
      rating: 5,
    },
    {
      id: 80,
      name: 'jphong1****',
      role: '비즈니스 코치',
      platform: 'twitter',
      service: '팔로워',
      content: '비즈니스 인사이트 트윗하는데 팔로워 9만! 기업 강연 제의가 쏟아져요!',
      rating: 5,
    },
  ];

  const platforms = [
    { id: 'all', name: '전체', icon: null, color: '#EB5644' },
    { id: 'instagram', name: 'Instagram', icon: FaInstagram, color: '#E4405F' },
    { id: 'youtube', name: 'YouTube', icon: FaYoutube, color: '#FF0000' },
    { id: 'tiktok', name: 'TikTok', icon: FaTiktok, color: '#000000' },
    { id: 'twitter', name: 'X(Twitter)', icon: FaXTwitter, color: '#000000' },
  ];

  const filteredReviews = selectedPlatform === 'all' 
    ? reviews 
    : reviews.filter(review => review.platform === selectedPlatform);

  // Reset to page 1 when platform changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPlatform]);

  // Calculate pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative px-4 py-16 md:py-20 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #EB5644, #D84A3A, #B63D2F)',
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              고객 후기
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              실제 이용 고객들의 솔직한 후기를 확인하세요
            </p>
            <div className="flex items-center justify-center gap-2 text-white">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-300 text-2xl" />
                ))}
              </div>
              <span className="text-2xl font-bold ml-2">4.9</span>
              <span className="text-lg text-white/80">/ 5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              const isSelected = selectedPlatform === platform.id;
              
              return (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                  style={{
                    backgroundColor: isSelected ? platform.color : '#F3F4F6',
                    color: isSelected ? 'white' : '#6B7280',
                  }}
                >
                  {IconComponent && <IconComponent className="text-base" />}
                  <span>{platform.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Platform Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedPlatform === 'all' 
                ? '전체'
                : platforms.find(p => p.id === selectedPlatform)?.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {review.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: '#FDE5E2', color: '#EB5644' }}
                    >
                      <FaUser className="text-lg" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-200 flex-shrink-0">
                    {review.platform === 'instagram' && <FaInstagram className="text-purple-600 text-xs" />}
                    {review.platform === 'youtube' && <FaYoutube className="text-red-600 text-xs" />}
                    {review.platform === 'tiktok' && <FaTiktok className="text-gray-900 text-xs" />}
                    {review.platform === 'twitter' && <FaXTwitter className="text-gray-900 text-xs" />}
                    <span className="text-xs font-semibold text-gray-700">{review.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                이전
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-[#EB5644] text-white border-[#EB5644]'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return <span key={pageNumber} className="px-2 text-gray-400">...</span>;
                }
                return null;
              })}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                다음
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                고객 만족도
              </h2>
              <p className="text-lg text-gray-600">
                수치로 증명하는 우리의 서비스 품질
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl p-8 shadow-md">
                <div className="text-5xl font-bold mb-2" style={{ color: '#EB5644' }}>
                  {satisfaction}%
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  고객 만족도
                </div>
                <div className="text-sm text-gray-600">
                  10명 중 9명이 만족
                </div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-8 shadow-md">
                <div className="text-5xl font-bold mb-2" style={{ color: '#EB5644' }}>
                  {realUser}%
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  실제 유저
                </div>
                <div className="text-sm text-gray-600">
                  봇 계정 0%, 전원 실제 유저
                </div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-8 shadow-md">
                <div className="text-5xl font-bold mb-2" style={{ color: '#EB5644' }}>
                  24시간
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  빠른 지원
                </div>
                <div className="text-sm text-gray-600">
                  언제든 문의 가능
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(to right, #EB5644, #B63D2F)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              당신도 성공 사례의 주인공이 되세요
            </h2>
            <p className="text-xl mb-8 text-white/90">
              지금 시작하면 당신의 계정도 달라집니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ color: '#EB5644' }}
              >
                가격 확인하기
              </Link>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).ht) {
                    (window as any).ht.open();
                  }
                }}
                className="text-white border-2 border-white/30 bg-white/10 hover:bg-white/20 font-semibold px-10 py-4 rounded-lg text-lg transition-all backdrop-blur-sm"
                style={{ cursor: "pointer" }}
              >
                무료 상담하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
