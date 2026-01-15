'use client';

import Link from 'next/link';
import { FaInstagram, FaCheck, FaUser, FaStar, FaChartLine, FaShieldAlt, FaClock, FaRocket, FaHeart, FaEye, FaUserPlus, FaBolt, FaTrophy, FaGlobe } from 'react-icons/fa';

export default function InstagramPage() {
  const stats = [
    { number: '10만+', label: '누적 고객' },
    { number: '99.8%', label: '고객 만족도' },
    { number: '24시간', label: '빠른 시작' },
    { number: '100%', label: '실제 유저' },
  ];

  const reviews = [
    {
      name: 'fash92****',
      product: '📷 팔로워',
      rating: 5,
      date: '2024.01.15',
      content: '팔로워 1000명에서 5000명까지 2주 만에 늘었어요! 실제 활동하는 분들이라 댓글도 많이 달리고 스토리 조회수도 3배 이상 올랐습니다. 협찬 제의도 들어오기 시작했어요.',
      result: '팔로워 400% 증가',
    },
    {
      name: 'beau_t****',
      product: '📷 좋아요',
      rating: 5,
      date: '2024.01.12',
      content: '릴스 조회수가 평균 500에서 10,000으로 올랐습니다. 알고리즘이 확실히 달라진 게 느껴지고, 탐색 탭에도 자주 노출되고 있어요. 투자한 금액 이상의 가치가 있습니다!',
      result: '릴스 조회수 20배 증가',
    },
    {
      name: 'food_l****',
      product: '📷 팔로워',
      rating: 5,
      date: '2024.01.10',
      content: '로컬 맛집 계정인데 팔로워가 늘면서 실제 방문 고객도 늘었어요. "인스타 보고 왔어요"라는 말을 자주 듣습니다. 가격 대비 효과가 정말 좋아요.',
      result: '실제 매출 30% 증가',
    },
    {
      name: 'trvl85****',
      product: '📷 조회수',
      rating: 5,
      date: '2024.01.08',
      content: '처음에는 반신반의했는데, 결과가 정말 좋네요. 자연스럽게 증가하는 게 마음에 들어요. 계정 정지 걱정 없이 안전하게 성장하고 있습니다.',
      result: '월간 도달 500% 증가',
    },
    {
      name: 'cook37****',
      product: '📷 팔로워',
      rating: 5,
      date: '2024.01.05',
      content: '고객 지원도 빠르고 친절해요. 궁금한 점 물어보면 바로바로 답변해주셔서 믿고 사용하고 있습니다. 3개월째 이용 중이에요!',
      result: '3개월 연속 이용',
    },
    {
      name: 'fit_k9****',
      product: '📷 팔로워',
      rating: 5,
      date: '2024.01.03',
      content: '다른 서비스와 비교했을 때 확실히 품질이 다릅니다. 실제 활동하는 팔로워들이라 계정 신뢰도가 높아졌어요. PT 상담 문의도 많이 늘었습니다.',
      result: '상담 문의 2배 증가',
    },
  ];

  const faqs = [
    {
      q: 'Instagram 팔로워는 얼마나 빨리 증가하나요?',
      a: '서비스 종류에 따라 다르지만, 일반적으로 주문 후 1-3시간 내에 시작됩니다. 자연스러운 증가를 위해 하루 100-500명씩 점진적으로 증가하며, 계정 크기에 맞춰 속도를 조절합니다.',
    },
    {
      q: '실제 사람인가요, 봇인가요?',
      a: '100% 실제 사용자입니다. 프로필 사진, 게시물, 팔로워/팔로잉이 있는 활성 계정만 제공하며, 봇이나 가짜 계정은 절대 사용하지 않습니다.',
    },
    {
      q: '계정이 정지될 위험은 없나요?',
      a: 'Instagram 정책을 100% 준수하며, 자연스러운 속도로 진행하기 때문에 안전합니다. 5년 이상 운영하면서 계정 정지 사례는 0건입니다.',
    },
    {
      q: '팔로워가 줄어들 수 있나요?',
      a: '실제 사용자이기 때문에 소수의 팔로워가 언팔할 수 있습니다(1-5%). 30일 내 10% 이상 감소 시 무료로 재충전해드리는 보장 서비스가 있습니다.',
    },
    {
      q: '한국인 팔로워도 가능한가요?',
      a: '네, 한국인 타겟 팔로워 서비스를 별도로 제공합니다. 지역, 연령대, 관심사별 타겟팅도 가능하니 문의해주세요.',
    },
    {
      q: '결제 후 환불이 가능한가요?',
      a: '서비스 시작 전에는 100% 환불 가능합니다. 시작 후에는 진행률에 따라 부분 환불이 가능하며, 서비스 미제공 시 전액 환불해드립니다.',
    },
  ];

  const algorithmTips = [
    {
      title: '일관된 업로드',
      desc: '주 3-5회 정기적으로 게시',
      impact: '알고리즘 선호도 +40%',
    },
    {
      title: '초기 반응 확보',
      desc: '첫 1시간 내 참여도가 중요',
      impact: '도달률 +60%',
    },
    {
      title: '릴스 우선 노출',
      desc: '릴스 콘텐츠 우선 추천',
      impact: '노출 +200%',
    },
    {
      title: '체류 시간',
      desc: '콘텐츠 시청 시간이 길수록 유리',
      impact: '추천 확률 +80%',
    },
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative px-4 py-16 md:py-20 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #E4405F, #C13584, #833AB4)',
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <FaInstagram className="text-xl" />
              <span>Instagram 마케팅 전문</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              인스타그램 팔로워<br />
              빠르고 안전하게
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              실제 활동하는 팔로워로 계정을 성장시키세요.<br />
              자연스러운 증가로 안전하게 관리합니다.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white hover:bg-gray-50 text-purple-600 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                가격 확인하기
              </Link>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).ht) {
                    (window as any).ht.open();
                  }
                }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all border-2 border-white/50"
                style={{ cursor: "pointer" }}
              >
                무료 상담하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                어떤 서비스를 제공하나요?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SNS핫딜은 365일 24시간 안전하고 빠른 인스타그램 마케팅 서비스를 제공합니다.<br />
                실제 활동 중인 한국인 계정을 기반으로 팔로워와 좋아요, 조회수를 늘려 계정을 최적화하고,<br />
                최신 알고리즘을 기반으로 한 상위노출 작업으로 인스타그램에 고객님의 게시물을 효과적으로 홍보할 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <FaCheck className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% 실제 활동계정</h3>
                <p className="text-gray-600">
                  실 사용자 계정으로만 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <FaBolt className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">빠른 처리 속도</h3>
                <p className="text-gray-600">
                  24시간 내내 주문 즉시 작업이 시작됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">간편한 주문</h3>
                <p className="text-gray-600">
                  필요한 서비스와 수량만 선택하면 주문이 가능하여 초보자도 손쉽게 이용할 수 있습니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">안정성과 투명성</h3>
                <p className="text-gray-600">
                  계정 보안을 최우선으로 하는 안전한 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <FaTrophy className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">전문 노하우</h3>
                <p className="text-gray-600">
                  인스타그램 알고리즘을 분석해 최신 트렌드에 맞는 맞춤형 작업이 진행됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <FaClock className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 운영</h3>
                <p className="text-gray-600">
                  언제든지 주문 가능하고 빠르게 시작됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instagram 서비스
            </h2>
            <p className="text-lg text-gray-600">
              다양한 Instagram 성장 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #E4405F, #C13584)' }}>
                <FaUserPlus className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">팔로워 증가</h3>
              <p className="text-gray-600 mb-6">
                실제 활동하는 유저들의 팔로우로 계정 신뢰도를 높입니다. 자연스러운 증가 패턴으로 안전하게 관리됩니다.
              </p>
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">₩29,000~</div>
                <div className="text-sm text-gray-600">1,000명 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">실제 유저 100%</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">자연스러운 증가</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">30일 보장</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #C13584, #833AB4)' }}>
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">좋아요 증가</h3>
              <p className="text-gray-600 mb-6">
                게시물 노출을 높이고 인기 게시물로 만들어드립니다. 알고리즘 최적화로 더 많은 도달을 확보하세요.
              </p>
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">₩9,900~</div>
                <div className="text-sm text-gray-600">1,000개 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">빠른 전달 (1시간 이내)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">알고리즘 최적화</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">자연스러운 패턴</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #833AB4, #5851DB)' }}>
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">조회수 증가</h3>
              <p className="text-gray-600 mb-6">
                릴스와 비디오 조회수를 빠르게 늘려 바이럴 효과를 만듭니다. 탐색 탭 노출 확률이 높아집니다.
              </p>
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">₩4,900~</div>
                <div className="text-sm text-gray-600">1,000회 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">릴스 최적화</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">즉시 시작</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">바이럴 효과</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Algorithm Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full text-purple-700 text-sm font-semibold mb-4">
              <FaBolt className="text-lg" />
              <span>2024 최신 알고리즘</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instagram 알고리즘 분석
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instagram의 최신 알고리즘을 이해하고 활용하면<br />
              더 빠른 성장이 가능합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {algorithmTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{tip.desc}</p>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  {tip.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaTrophy className="text-yellow-500" />
              <span>알고리즘에 유리한 콘텐츠 전략</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  추천되는 전략
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>릴스 비중을 50% 이상 유지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>최적 시간대에 업로드 (점심, 저녁)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>첫 30분 내 높은 참여도 확보</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>스토리로 팔로워와 활발히 소통</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>관련성 높은 해시태그 10-15개</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  피해야 할 실수
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>너무 많은 해시태그 (30개 이상)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>저화질 이미지/영상 업로드</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>불규칙한 업로드 패턴</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>봇을 이용한 자동 좋아요/팔로우</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>콘텐츠와 무관한 해시태그 남용</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              어떻게 이용하나요?
            </h2>
            <p className="text-lg text-gray-600">
              간단한 5단계로 시작하는 인스타그램 성장
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">회원가입</h3>
                </div>
                <p className="text-sm text-gray-600">
                  SNS핫딜 홈페이지에 가입해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">포인트 충전</h3>
                </div>
                <p className="text-sm text-gray-600">
                  주문에 사용하실 포인트를 충전해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">서비스 선택</h3>
                </div>
                <p className="text-sm text-gray-600">
                  원하는 인스타그램 서비스를 선택해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">계정/수량 입력</h3>
                </div>
                <p className="text-sm text-gray-600">
                  작업하실 링크와 희망하시는 수량을 입력해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  5
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">주문 및 내역 확인</h3>
                </div>
                <p className="text-sm text-gray-600">
                  주문 후 내역페이지에서 실시간 진행현황을 확인할 수 있습니다
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://xn--sns-h84mk60k.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
              >
                지금 시작하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SNS핫딜에서 인스타 팔로워 구매 시<br className="hidden md:block" />
              어떤 장점이 있을까요?
            </h2>
            <p className="text-lg text-gray-600">
              체계적이고 안전한 방식으로 인스타그램 계정을 성장시킵니다
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">신뢰도 상승</h3>
                  <p className="text-gray-600 leading-relaxed">
                    팔로워 수는 계정의 신뢰도를 결정짓는 중요한 요소예요. 많은 사람들이 처음 계정을 방문했을 때 팔로워가 많으면 '이 계정은 사람들이 신뢰하고 관심을 가지는 곳이구나' 하고 인식하게 돼요. 특히 브랜드나 사업 계정의 경우, 팔로워 수가 많을수록 잠재 고객에게 신뢰감을 주며, 제품이나 서비스의 품질에 대한 긍정적인 인상을 심어줄 수 있어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">노출도 향상</h3>
                  <p className="text-gray-600 leading-relaxed">
                    인스타그램 알고리즘은 '인기 있는 계정'과 '활발히 활동하는 계정'을 우선적으로 노출시켜요. 팔로워가 많고 게시물에 좋아요나 댓글이 많이 달리는 계정은 탐색 탭, 추천 피드, 해시태그 검색에서 상위에 노출될 가능성이 커져요. 이로 인해 더 많은 사람들이 내 계정을 발견하고 자연스럽게 새로운 팔로워가 생기는 선순환 구조가 만들어집니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <FaGlobe className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">브랜드 인지도 상승</h3>
                  <p className="text-gray-600 leading-relaxed">
                    팔로워가 많을수록 브랜드의 존재감과 영향력이 커져요. 사람들은 자연스럽게 팔로워가 많은 계정을 더 유명하고 신뢰할 수 있는 브랜드로 인식하며, 구매나 협업 결정을 내릴 때 팔로워 수를 중요한 판단 기준으로 삼아요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">비즈니스 기회 확대</h3>
                  <p className="text-gray-600 leading-relaxed">
                    인스타그램은 이제 단순한 SNS를 넘어, 누구나 수익을 만들 수 있는 공간이에요. 팔로워가 많고 반응이 좋은 계정이라면 브랜드 협찬, 제품 홍보, 제휴 마케팅 등 다양한 방식으로 수익을 창출할 수 있어요. 가장 흔한 방법은 브랜드와 협업해 광고성 콘텐츠를 제작하는 것이에요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                인스타그램 팔로워 구매, 진짜 괜찮을까요?
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                인스타그램에서 계정을 성장시키는 방법 중 하나로 팔로워 구매를 고려하는 분들이 많아요.
              </p>
              <p className="text-white/90 mb-6 leading-relaxed">
                팔로워 수가 많아지면 계정의 신뢰도가 올라가고, 새로운 사용자가 계정을 방문했을 때 "활발하게 운영되는 계정"이라는 인상을 주기 때문이에요.
              </p>
              <p className="text-white/90 mb-8 leading-relaxed">
                특히 브랜드를 운영하거나 인플루언서로 성장하고 싶은 분들에게 초기 팔로워 수는 인지도와 노출을 확보하는 데 중요한 역할을 해요.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-3">⚠️ 하지만 주의할 점도 있어요!</h3>
                <p className="text-white/90 leading-relaxed">
                  팔로워 구매가 무조건 나쁜 것은 아니지만, 신뢰할 수 없는 서비스에서 구매할 경우 '비정상적인 계정'이 유입되어 계정 품질이 떨어지거나 노출률이 감소할 수도 있어요.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✅ SNS핫딜은 다릅니다</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  SNS핫딜은 실제 활동중인 계정만으로 작업을 진행하며, 계정의 안전성과 자연스러움을 모두 고려한 시스템을 제공하고 있어요. 
                </p>
                <p className="text-white/90 leading-relaxed">
                  안심할 수 있는 환경에서 인스타그램을 성장시키고 싶다면, SNS핫딜을 활용해보세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 SNS핫딜을 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600">
              5년 이상의 노하우와 10만+ 고객의 신뢰
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% 안전 보장</h3>
              <p className="text-gray-600">
                5년간 계정 정지 사례 0건. Instagram 정책을 완벽히 준수하며 안전하게 진행합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaRocket className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">빠른 시작</h3>
              <p className="text-gray-600">
                결제 후 평균 1시간 내 시작. 대기 시간 없이 즉시 계정 성장을 경험하세요.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaChartLine className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">실제 유저 100%</h3>
              <p className="text-gray-600">
                봇이 아닌 실제 활동하는 계정만 제공. 프로필, 게시물, 팔로워가 있는 고품질 계정입니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaClock className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24시간 지원</h3>
              <p className="text-gray-600">
                언제든 문의 가능한 고객 지원. 빠른 응대와 친절한 상담으로 만족도 99.8%를 유지합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              고객 후기
            </h2>
            <p className="text-lg text-gray-600">
              실제 이용 고객들의 생생한 성공 스토리
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-[1.02]">
                {/* Header with Avatar and Product */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <FaUser className="text-lg text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block text-sm">{review.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-50 rounded-lg border border-purple-100 flex-shrink-0">
                    <FaInstagram className="text-purple-600 text-xs" />
                    <span className="text-xs font-semibold text-purple-700">
                      {review.product.replace('📷 ', '')}
                    </span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                
                {/* Review Content */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  " {review.content} "
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              <span>더 많은 후기 보기</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instagram 성장 팁
            </h2>
            <p className="text-lg text-gray-600">
              서비스와 함께 활용하면 더 효과적입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaChartLine className="text-pink-500" />
                릴스 활용하기
              </h3>
              <p className="text-gray-700 mb-4">
                Instagram 알고리즘은 릴스 콘텐츠를 우선적으로 노출시킵니다. 짧고 임팩트 있는 영상 콘텐츠를 제작하여 더 많은 도달을 확보하세요.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>15-30초 길이가 가장 효과적</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>트렌디한 음악 사용</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>자막 추가로 완성도 높이기</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>커버 이미지 최적화</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                해시태그 전략
              </h3>
              <p className="text-gray-700 mb-4">
                적절한 해시태그 사용으로 게시물 도달을 극대화하세요. 인기 태그와 틈새 태그를 적절히 조합하는 것이 핵심입니다.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>10-15개의 해시태그 사용</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>대중 태그와 틈새 태그 혼합</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>콘텐츠와 관련된 태그만 사용</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>밴 태그 피하기</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                최적 업로드 시간
              </h3>
              <p className="text-gray-700 mb-4">
                팔로워가 가장 활발할 때 게시물을 올리면 초기 반응이 좋아져 알고리즘에 유리합니다. 인사이트를 확인하여 최적 시간을 찾으세요.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>평일 오후 12시-1시, 저녁 7시-9시</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>주말 오전 11시-오후 2시</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>일관된 업로드 스케줄 유지</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>예약 게시 기능 활용</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaUser className="text-purple-500" />
                팔로워와 소통
              </h3>
              <p className="text-gray-700 mb-4">
                댓글과 DM에 빠르게 응답하고 스토리를 활용하여 팔로워와 활발히 소통하세요. 참여도가 높을수록 알고리즘이 선호합니다.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>댓글에 24시간 내 답변</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>스토리로 일상 공유</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Q&A, 투표 기능 활용</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>DM으로 진정성 있는 대화</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-lg text-gray-600">
                Instagram 서비스에 대해 궁금한 점을 확인하세요
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white rounded-xl p-6 shadow-md group">
                  <summary className="font-semibold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                        Q{idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <svg
                      className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pl-11">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">더 궁금한 점이 있으신가요?</p>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).ht) {
                    (window as any).ht.open();
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                style={{ cursor: "pointer" }}
              >
                <span>1:1 문의하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(to right, #E4405F, #C13584)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Instagram 계정 성장,<br />
              지금 바로 시작하세요
            </h2>
            <p className="text-xl mb-8 text-white/90">
              10만+ 고객이 선택한 검증된 서비스<br />
              <span className="text-sm mt-2 block">
                실제 유저 100% • 24시간 빠른 시작 • 안전 보장
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white hover:bg-gray-100 text-purple-600 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
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
