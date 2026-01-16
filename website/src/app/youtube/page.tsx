'use client';

import Link from 'next/link';
import { FaYoutube, FaCheck, FaUser, FaStar, FaChartLine, FaShieldAlt, FaClock, FaRocket, FaVideo, FaRegLightbulb, FaUserPlus, FaEye, FaThumbsUp, FaBolt, FaTrophy, FaPlay } from 'react-icons/fa';

export default function YouTubePage() {
  const stats = [
    { number: '8만+', label: '누적 채널' },
    { number: '99.5%', label: '고객 만족도' },
    { number: '2-4시간', label: '빠른 시작' },
    { number: '100%', label: '실제 구독자' },
  ];

  const reviews = [
    {
      name: 'trvl93****',
      product: '▶️ 구독자',
      rating: 5,
      date: '2024.01.14',
      content: '구독자 1000명 달성하고 드디어 수익화 시작했어요! 실제 시청하는 구독자들이라 영상 조회수도 함께 늘어났습니다. 광고 수익이 생기니까 정말 뿌듯해요.',
      result: '수익화 달성',
    },
    {
      name: 'cook_j****',
      product: '▶️ 조회수',
      rating: 5,
      date: '2024.01.11',
      content: '조회수가 평균 200에서 5000으로 올랐습니다! 추천 알고리즘에 탑승한 느낌이에요. 구독자도 자연스럽게 늘고 있고, 투자 대비 효과가 정말 좋습니다.',
      result: '조회수 25배 증가',
    },
    {
      name: 'game48****',
      product: '▶️ 구독자',
      rating: 5,
      date: '2024.01.09',
      content: '조회수가 확실히 늘면서 광고 수익도 3배 증가했습니다. 알고리즘이 제 영상을 추천해주기 시작했어요. 다른 유튜버들에게도 추천하고 있습니다!',
      result: '광고 수익 3배',
    },
    {
      name: 'tech_k****',
      product: '▶️ 좋아요',
      rating: 5,
      date: '2024.01.07',
      content: '처음에는 반신반의했는데 결과가 정말 좋네요. 구독자 질이 높아서 댓글도 많이 달리고 영상 평가도 좋아졌습니다. 채널 성장이 체감됩니다.',
      result: '참여도 400% 증가',
    },
    {
      name: 'beau72****',
      product: '▶️ 구독자',
      rating: 5,
      date: '2024.01.05',
      content: '고객 지원이 정말 친절해요. 궁금한 점 물어보면 즉시 답변해주시고, 진행 상황도 투명하게 공유해주셔서 믿고 맡길 수 있었습니다.',
      result: '신뢰도 만족',
    },
    {
      name: 'edu_l1****',
      product: '▶️ 구독자',
      rating: 5,
      date: '2024.01.03',
      content: '수익화 조건을 빠르게 달성할 수 있어서 좋았습니다. 실제 활동하는 구독자들이라 영상 시청 시간도 함께 늘었어요. 채널 운영이 즐거워졌습니다.',
      result: '시청 시간 500% 증가',
    },
  ];

  const faqs = [
    {
      q: 'YouTube 구독자는 얼마나 빨리 증가하나요?',
      a: '주문 후 2-4시간 내에 시작되며, 자연스러운 증가를 위해 하루 50-200명씩 점진적으로 늘립니다. 급격한 증가는 알고리즘에 부정적이므로 채널 크기에 맞춰 속도를 조절합니다.',
    },
    {
      q: '수익화 조건 달성에 도움이 되나요?',
      a: '네, 실제 활동하는 구독자를 제공하므로 구독자 1000명 + 시청시간 4000시간 조건을 충족하는 데 큰 도움이 됩니다. 많은 고객이 수익화에 성공했습니다.',
    },
    {
      q: '조회수도 함께 증가하나요?',
      a: '실제 구독자들이 알림을 받고 영상을 시청하므로 조회수도 자연스럽게 증가합니다. 특히 초기 조회수가 높으면 YouTube 알고리즘이 영상을 더 많이 추천합니다.',
    },
    {
      q: '채널이 정지될 위험은 없나요?',
      a: 'YouTube 정책을 100% 준수하며, 실제 사용자만 제공하기 때문에 안전합니다. 5년 이상 운영하면서 채널 정지 사례는 0건입니다.',
    },
    {
      q: '구독자가 구독 취소할 수 있나요?',
      a: '실제 사용자이므로 소수의 구독 취소가 발생할 수 있습니다(1-5%). 30일 내 10% 이상 감소 시 무료로 재충전해드리는 보장 서비스가 있습니다.',
    },
    {
      q: '한국어 채널도 가능한가요?',
      a: '네, 한국어 채널에 최적화된 한국인 구독자 서비스를 제공합니다. 언어, 지역, 관심사별 타겟팅도 가능하니 문의해주세요.',
    },
  ];

  const algorithmTips = [
    {
      title: '첫 24시간이 중요',
      desc: '초기 조회수와 참여도 확보',
      impact: '추천 확률 +70%',
    },
    {
      title: '시청 유지율',
      desc: '영상을 끝까지 시청하게 만들기',
      impact: '알고리즘 선호도 +60%',
    },
    {
      title: '일관된 업로드',
      desc: '정기적인 콘텐츠 발행',
      impact: '채널 성장 +50%',
    },
    {
      title: '클릭율(CTR)',
      desc: '매력적인 썸네일과 제목',
      impact: '노출 +80%',
    },
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative px-4 py-16 md:py-20 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #FF0000, #CC0000, #990000)',
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <FaYoutube className="text-xl" />
              <span>YouTube 마케팅 전문</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              유튜브 채널 성장<br />
              알고리즘 최적화
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              구독자, 조회수, 좋아요로 채널 성장을 가속화하세요.<br />
              YouTube 알고리즘에 최적화된 서비스를 제공합니다.
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
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-red-600 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
                style={{ paddingTop: '16px', paddingBottom: '16px' }}
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
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                어떤 서비스를 제공하나요?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SNS핫딜은 365일 24시간 안전하고 빠른 유튜브 마케팅 서비스를 제공합니다.<br />
                실제 활동 중인 구독자를 기반으로 채널 성장을 돕고,<br />
                최신 알고리즘을 기반으로 한 최적화 작업으로 유튜브에서 콘텐츠를 효과적으로 홍보할 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <FaCheck className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% 실제 구독자</h3>
                <p className="text-gray-600">
                  실 사용자 계정으로만 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <FaBolt className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">빠른 처리 속도</h3>
                <p className="text-gray-600">
                  24시간 내내 주문 즉시 작업이 시작됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">간편한 주문</h3>
                <p className="text-gray-600">
                  필요한 서비스와 수량만 선택하면 주문이 가능하여 초보자도 손쉽게 이용할 수 있습니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">안정성과 투명성</h3>
                <p className="text-gray-600">
                  채널 보안을 최우선으로 하는 안전한 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <FaTrophy className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">전문 노하우</h3>
                <p className="text-gray-600">
                  유튜브 알고리즘을 분석해 최신 트렌드에 맞는 맞춤형 작업이 진행됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <FaClock className="text-2xl text-red-600" />
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
              YouTube 서비스
            </h2>
            <p className="text-lg text-gray-600">
              채널 성장을 위한 완벽한 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #FF0000, #CC0000)' }}>
                <FaUserPlus className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">구독자 증가</h3>
              <p className="text-gray-600 mb-6">
                수익화 조건을 빠르게 달성하세요. 실제 시청하는 구독자로 채널 신뢰도를 높입니다.
              </p>
              <div className="mb-6 p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">₩39,000~</div>
                <div className="text-sm text-gray-600">1,000명 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">실제 구독자</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">수익화 적합</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">30일 보장</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #CC0000, #990000)' }}>
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">조회수 증가</h3>
              <p className="text-gray-600 mb-6">
                영상 조회수를 빠르게 늘려 추천 알고리즘에 진입하세요. 시청 시간도 함께 증가합니다.
              </p>
              <div className="mb-6 p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">₩19,900~</div>
                <div className="text-sm text-gray-600">1,000회 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">높은 시청 시간</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">추천 알고리즘 진입</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">빠른 전달</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #990000, #660000)' }}>
                <FaThumbsUp className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">좋아요 증가</h3>
              <p className="text-gray-600 mb-6">
                영상 평가를 높여 알고리즘 우대를 받으세요. 좋아요가 많을수록 추천 확률이 높아집니다.
              </p>
              <div className="mb-6 p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">₩14,900~</div>
                <div className="text-sm text-gray-600">1,000개 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">영상 인기도 상승</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">알고리즘 우대</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">즉시 시작</span>
                </li>
              </ul>
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
              간단한 5단계로 시작하는 유튜브 채널 성장
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">서비스 선택</h3>
                </div>
                <p className="text-sm text-gray-600">
                  원하는 유튜브 서비스를 선택해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">채널/영상 입력</h3>
                </div>
                <p className="text-sm text-gray-600">
                  작업하실 링크와 희망하시는 수량을 입력해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                className="inline-block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
              >
                지금 시작하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SNS핫딜에서 유튜브 구독자 구매 시<br className="hidden md:block" />
              어떤 장점이 있을까요?
            </h2>
            <p className="text-lg text-gray-600">
              체계적이고 안전한 방식으로 유튜브 채널을 성장시킵니다
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">수익화 조건 달성</h3>
                  <p className="text-gray-600 leading-relaxed">
                    유튜브 수익화를 위해서는 구독자 1000명과 시청시간 4000시간이 필요해요. 실제 구독자를 확보하면 이 조건을 빠르게 달성할 수 있으며, 영상을 꾸준히 시청하는 구독자들로 인해 시청시간도 자연스럽게 증가합니다. 많은 크리에이터들이 SNS핫딜을 통해 수익화에 성공했어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">알고리즘 추천 증가</h3>
                  <p className="text-gray-600 leading-relaxed">
                    유튜브 알고리즘은 구독자가 많고 참여도가 높은 채널을 우선적으로 추천해요. 구독자가 늘어나면 영상 업로드 시 더 많은 사람들에게 알림이 가고, 초기 조회수가 높아져 알고리즘이 영상을 더 많이 추천하게 됩니다. 이는 자연스러운 성장으로 이어지는 선순환 구조를 만들어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center flex-shrink-0">
                  <FaTrophy className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">채널 신뢰도 향상</h3>
                  <p className="text-gray-600 leading-relaxed">
                    구독자 수가 많은 채널은 신뢰받는 채널로 인식되어요. 새로운 시청자가 채널에 방문했을 때 구독자 수를 보고 콘텐츠의 품질을 판단하게 되며, 협찬이나 광고 제의도 더 많이 받을 수 있어요. 브랜드들은 구독자 수를 중요한 협업 기준으로 삼기 때문이에요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">광고 수익 증대</h3>
                  <p className="text-gray-600 leading-relaxed">
                    구독자가 많아지고 조회수가 늘어나면 광고 수익도 자연스럽게 증가해요. 유튜브 알고리즘이 인기 있는 채널에 더 많은 광고를 배치하기 때문에, 같은 조회수라도 더 높은 CPM(1000회 노출당 수익)을 받을 수 있어요. 많은 크리에이터들이 구독자 증가 후 광고 수익이 2-3배 증가했다고 말해요.
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
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                유튜브 구독자 구매, 진짜 괜찮을까요?
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                유튜브에서 채널을 성장시키는 방법 중 하나로 구독자 구매를 고려하는 분들이 많아요.
              </p>
              <p className="text-white/90 mb-6 leading-relaxed">
                구독자 수가 많아지면 채널의 신뢰도가 올라가고, 수익화 조건을 빠르게 달성할 수 있기 때문이에요.
              </p>
              <p className="text-white/90 mb-8 leading-relaxed">
                특히 새로 시작하는 크리에이터나 수익화를 목표로 하는 분들에게 초기 구독자 수는 채널 성장의 발판이 됩니다.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-3">⚠️ 하지만 주의할 점도 있어요!</h3>
                <p className="text-white/90 leading-relaxed">
                  구독자 구매가 무조건 나쁜 것은 아니지만, 신뢰할 수 없는 서비스에서 구매할 경우 '비정상적인 계정'이 유입되어 채널 품질이 떨어지거나 유튜브 정책 위반으로 채널이 정지될 수도 있어요.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✅ SNS핫딜은 다릅니다</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  SNS핫딜은 실제 활동중인 계정만으로 작업을 진행하며, 채널의 안전성과 자연스러움을 모두 고려한 시스템을 제공하고 있어요. 
                </p>
                <p className="text-white/90 leading-relaxed">
                  안심할 수 있는 환경에서 유튜브를 성장시키고 싶다면, SNS핫딜을 활용해보세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Algorithm Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-red-700 text-sm font-semibold mb-4">
              <FaBolt className="text-lg" />
              <span>2024 최신 알고리즘</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              YouTube 알고리즘 분석
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              YouTube의 추천 시스템을 이해하고 활용하면<br />
              채널 성장이 빨라집니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {algorithmTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
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
              <span>수익화 빠르게 달성하는 방법</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  필수 전략
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>8분 이상 영상으로 광고 수익 극대화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>시청 유지율 높이는 편집 기술</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>클릭을 유도하는 썸네일 제작</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>검색 최적화된 제목과 설명</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>정기적인 업로드 스케줄 유지</span>
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
                    <span>저작권 위반 콘텐츠 사용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>클릭베이트 제목 (내용 불일치)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>불규칙한 업로드 패턴</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>구독자와 소통 부족</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>낮은 화질의 영상 업로드</span>
                  </li>
                </ul>
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
              YouTube 채널 성장을 위한 최고의 선택
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% 안전 보장</h3>
              <p className="text-gray-600">
                YouTube 정책을 완벽히 준수. 채널 정지 걱정 없이 안전하게 성장하세요.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaRocket className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">빠른 수익화</h3>
              <p className="text-gray-600">
                구독자 1000명, 시청시간 4000시간 조건을 빠르게 충족하여 수익화 시작.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaPlay className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">실제 시청자</h3>
              <p className="text-gray-600">
                봇이 아닌 실제 영상을 시청하는 구독자. 시청 시간과 참여도가 함께 증가합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaClock className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24시간 지원</h3>
              <p className="text-gray-600">
                언제든 문의 가능한 고객 지원. 채널 성장에 필요한 모든 것을 도와드립니다.
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
              수익화에 성공한 유튜버들의 실제 후기
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                {/* Header with Avatar and Product */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                      <FaUser className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-red-50 rounded-lg border border-red-100 flex-shrink-0">
                    <FaYoutube className="text-red-600 text-xs" />
                    <span className="text-xs font-semibold text-red-700">
                      {review.product.replace('▶️ ', '')}
                    </span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                
                {/* Review Content */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{review.content}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-lg text-gray-600">
                YouTube 서비스에 대해 궁금한 점을 확인하세요
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white rounded-xl p-6 shadow-md group">
                  <summary className="font-semibold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
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
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
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
        style={{ background: 'linear-gradient(to right, #FF0000, #CC0000)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              YouTube 수익화,<br />
              지금 바로 시작하세요
            </h2>
            <p className="text-xl mb-8 text-white/90">
              8만+ 채널이 선택한 검증된 서비스<br />
              <span className="text-sm mt-2 block">
                실제 구독자 100% • 빠른 수익화 • 안전 보장
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-red-600 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ paddingTop: '16px', paddingBottom: '16px' }}
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
