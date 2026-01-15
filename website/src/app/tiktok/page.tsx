'use client';

import Link from 'next/link';
import { FaTiktok, FaCheck, FaUser, FaStar, FaChartLine, FaShieldAlt, FaClock, FaRocket, FaMusic, FaFire, FaEye, FaHeart, FaUserPlus, FaBolt, FaTrophy, FaHashtag } from 'react-icons/fa';

export default function TikTokPage() {
  const stats = [
    { number: '12만+', label: '누적 계정' },
    { number: '99.7%', label: '고객 만족도' },
    { number: '1-2시간', label: '초고속 시작' },
    { number: '100%', label: '실제 유저' },
  ];

  const reviews = [
    {
      name: 'danc_k****',
      product: '🎵 조회수',
      rating: 5,
      date: '2024.01.13',
      content: '조회수 100만 달성했어요! 초기 반응이 좋아지니까 알고리즘이 계속 밀어주더라고요. For You 페이지에 매일 올라가고 팔로워도 폭발적으로 늘었습니다.',
      result: '조회수 100만 달성',
    },
    {
      name: 'life92****',
      product: '🎵 팔로워',
      rating: 5,
      date: '2024.01.10',
      content: '팔로워가 3000명에서 15000명으로 빠르게 늘었어요! 브랜드 협업 제의가 들어오기 시작했고, 투자한 금액보다 훨씬 큰 수익을 얻었습니다.',
      result: '팔로워 5배 증가',
    },
    {
      name: 'cook48****',
      product: '🎵 좋아요',
      rating: 5,
      date: '2024.01.08',
      content: '첫 영상이 50만 조회수를 넘었습니다! 초기 부스팅 효과가 확실해요. 알고리즘이 콘텐츠를 계속 추천해주고 있어서 자연스럽게 성장 중입니다.',
      result: '바이럴 성공',
    },
    {
      name: 'beau_n****',
      product: '🎵 팔로워',
      rating: 5,
      date: '2024.01.06',
      content: '처음에는 조회수 100도 안 나왔는데, 서비스 이용 후 매 영상이 1만 조회수는 기본이에요. 계정 신뢰도가 높아진 느낌이고 추천 알고리즘에 잘 잡힙니다.',
      result: '평균 조회수 100배',
    },
    {
      name: 'vlg_h7****',
      product: '🎵 조회수',
      rating: 5,
      date: '2024.01.04',
      content: '고객 지원이 너무 빠르고 친절해요. 궁금한 점 바로바로 답변해주시고, 진행 상황도 실시간으로 확인할 수 있어서 안심하고 이용했습니다.',
      result: '만족도 최고',
    },
    {
      name: 'fun_s3****',
      product: '🎵 팔로워',
      rating: 5,
      date: '2024.01.02',
      content: '재미있는 콘텐츠만 만들면 알고리즘이 알아서 띄워주네요! 초기 부스팅으로 시작이 좋았고, 이제는 꾸준히 For You 페이지에 노출되고 있습니다.',
      result: 'For You 페이지 상위',
    },
  ];

  const faqs = [
    {
      q: 'TikTok 조회수는 얼마나 빨리 증가하나요?',
      a: '주문 후 1-2시간 내에 시작되며, TikTok 특성상 가장 빠르게 진행됩니다. 자연스러운 패턴으로 증가하며, 초기 부스팅이 알고리즘 진입에 큰 도움이 됩니다.',
    },
    {
      q: 'For You 페이지에 올라갈 수 있나요?',
      a: '초기 조회수와 참여도가 높으면 알고리즘이 콘텐츠를 추천할 확률이 높아집니다. 많은 고객이 For You 페이지 진입 후 바이럴을 경험했습니다.',
    },
    {
      q: '팔로워 증가 속도는 어떻게 되나요?',
      a: '하루 50-300명씩 자연스럽게 증가합니다. TikTok은 급격한 증가보다 꾸준한 성장이 알고리즘에 유리하므로, 계정 크기에 맞춰 최적화된 속도로 진행합니다.',
    },
    {
      q: '계정이 정지될 위험은 없나요?',
      a: 'TikTok 정책을 100% 준수하며, 실제 사용자만 제공하기 때문에 안전합니다. 5년 이상 운영하면서 계정 정지 사례는 0건입니다.',
    },
    {
      q: '어떤 콘텐츠가 잘 되나요?',
      a: '15-30초 길이의 트렌디한 음악을 활용한 숏폼 영상이 가장 효과적입니다. 첫 3초가 중요하며, 자막과 효과음을 활용하면 더 좋습니다.',
    },
    {
      q: '한국 타겟 서비스도 가능한가요?',
      a: '네, 한국 지역 타겟 팔로워 및 조회수 서비스를 제공합니다. 연령대, 관심사별 타겟팅도 가능하니 문의해주세요.',
    },
  ];

  const algorithmTips = [
    {
      title: '첫 3초가 핵심',
      desc: '시청자를 즉시 사로잡기',
      impact: '완성도 +90%',
    },
    {
      title: '완성도(시청률)',
      desc: '끝까지 시청하게 만들기',
      impact: '추천 확률 +80%',
    },
    {
      title: '트렌드 활용',
      desc: '인기 음악과 해시태그',
      impact: '노출 +150%',
    },
    {
      title: '빈번한 업로드',
      desc: '하루 1-3회 일관된 게시',
      impact: '성장 속도 +100%',
    },
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative px-4 py-16 md:py-20 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #000000, #EE1D52, #69C9D0)',
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <FaTiktok className="text-xl" />
              <span>TikTok 마케팅 전문</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              틱톡 바이럴<br />
              빠르게 만들기
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              조회수, 좋아요, 팔로워로 콘텐츠를 바이럴시키세요.<br />
              TikTok 알고리즘에 최적화된 성장 전략을 제공합니다.
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
                className="bg-white hover:bg-gray-50 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
                style={{ color: '#EE1D52' }}
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
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                어떤 서비스를 제공하나요?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SNS핫딜은 365일 24시간 안전하고 빠른 틱톡 마케팅 서비스를 제공합니다.<br />
                실제 활동 중인 계정을 기반으로 조회수와 좋아요, 팔로워를 늘려 콘텐츠를 바이럴시키고,<br />
                최신 알고리즘을 기반으로 한 최적화 작업으로 틱톡에서 영상을 효과적으로 노출할 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <FaCheck className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% 실제 활동계정</h3>
                <p className="text-gray-600">
                  실 사용자 계정으로만 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <FaBolt className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">초고속 처리</h3>
                <p className="text-gray-600">
                  24시간 내내 주문 즉시 작업이 시작됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">간편한 주문</h3>
                <p className="text-gray-600">
                  필요한 서비스와 수량만 선택하면 주문이 가능하여 초보자도 손쉽게 이용할 수 있습니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">안정성과 투명성</h3>
                <p className="text-gray-600">
                  계정 보안을 최우선으로 하는 안전한 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <FaTrophy className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">전문 노하우</h3>
                <p className="text-gray-600">
                  틱톡 알고리즘을 분석해 최신 트렌드에 맞는 맞춤형 작업이 진행됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <FaClock className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 운영</h3>
                <p className="text-gray-600">
                  언제든지 주문 가능하고 초고속으로 시작됩니다.
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
              TikTok 서비스
            </h2>
            <p className="text-lg text-gray-600">
              바이럴을 만드는 완벽한 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #EE1D52, #69C9D0)' }}>
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">조회수 증가</h3>
              <p className="text-gray-600 mb-6">
                초기 조회수를 빠르게 확보하여 For You 페이지에 진입하세요. 바이럴의 시작입니다.
              </p>
              <div className="mb-6 p-4 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600 mb-1">₩4,900~</div>
                <div className="text-sm text-gray-600">1,000회 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">즉시 시작</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">For You 진입</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">초고속 배송</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #FF0050, #00F2EA)' }}>
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">좋아요 증가</h3>
              <p className="text-gray-600 mb-6">
                좋아요가 많을수록 알고리즘이 콘텐츠를 더 많이 추천합니다. 참여도를 높이세요.
              </p>
              <div className="mb-6 p-4 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600 mb-1">₩9,900~</div>
                <div className="text-sm text-gray-600">1,000개 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">실제 유저</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">알고리즘 최적화</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">자연스러운 증가</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #000000, #EE1D52)' }}>
                <FaUserPlus className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">팔로워 증가</h3>
              <p className="text-gray-600 mb-6">
                활성 팔로워로 계정 신뢰도를 높이고, 모든 영상의 초기 반응을 개선하세요.
              </p>
              <div className="mb-6 p-4 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600 mb-1">₩24,900~</div>
                <div className="text-sm text-gray-600">1,000명 기준</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">활성 팔로워</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">30일 보장</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">계정 신뢰도 향상</span>
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
              간단한 5단계로 시작하는 틱톡 바이럴
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black via-pink-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black via-pink-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black via-pink-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">서비스 선택</h3>
                </div>
                <p className="text-sm text-gray-600">
                  원하는 틱톡 서비스를 선택해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black via-pink-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">영상/계정 입력</h3>
                </div>
                <p className="text-sm text-gray-600">
                  작업하실 링크와 희망하시는 수량을 입력해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black via-pink-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                className="inline-block bg-gradient-to-r from-pink-600 to-cyan-500 hover:from-pink-700 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
              >
                지금 시작하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SNS핫딜에서 틱톡 조회수 구매 시<br className="hidden md:block" />
              어떤 장점이 있을까요?
            </h2>
            <p className="text-lg text-gray-600">
              체계적이고 안전한 방식으로 틱톡 콘텐츠를 바이럴시킵니다
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaFire className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">For You 페이지 진입</h3>
                  <p className="text-gray-600 leading-relaxed">
                    틱톡에서 가장 중요한 것은 For You 페이지에 노출되는 것이에요. 초기 조회수와 좋아요가 많을수록 알고리즘이 콘텐츠를 더 많은 사용자에게 추천해요. 많은 크리에이터들이 초기 부스팅을 통해 For You 페이지에 진입하여 수십만~수백만 조회수를 달성했어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">바이럴 효과</h3>
                  <p className="text-gray-600 leading-relaxed">
                    틱톡의 가장 큰 매력은 바이럴 가능성이에요. 조회수가 빠르게 늘어나면 알고리즘이 계속해서 더 많은 사람들에게 영상을 추천하는 선순환 구조가 만들어져요. 팔로워가 적어도 영상 하나로 수백만 조회수를 달성할 수 있는 플랫폼이에요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaTrophy className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">브랜드 협업 기회</h3>
                  <p className="text-gray-600 leading-relaxed">
                    틱톡은 현재 가장 핫한 마케팅 플랫폼이에요. 조회수가 높고 참여도가 좋은 계정이라면 브랜드 협업, 제품 홍보, 광고 제의가 많이 들어와요. 특히 Z세대 타겟 브랜드들이 틱톡 인플루언서를 적극적으로 찾고 있어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">빠른 성장 속도</h3>
                  <p className="text-gray-600 leading-relaxed">
                    다른 플랫폼에 비해 틱톡은 성장 속도가 매우 빨라요. 짧은 영상 형식과 강력한 추천 알고리즘 덕분에 신규 계정도 빠르게 성장할 수 있어요. 초기 부스팅을 통해 알고리즘에 진입하면, 이후에는 자연스러운 성장이 이어지는 구조예요.
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
            <div className="bg-gradient-to-br from-black via-pink-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                틱톡 조회수 구매, 진짜 괜찮을까요?
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                틱톡에서 콘텐츠를 바이럴시키는 방법 중 하나로 조회수 구매를 고려하는 분들이 많아요.
              </p>
              <p className="text-white/90 mb-6 leading-relaxed">
                초기 조회수가 많을수록 For You 페이지에 노출될 확률이 높아지고, 알고리즘이 더 많은 사용자에게 영상을 추천하기 때문이에요.
              </p>
              <p className="text-white/90 mb-8 leading-relaxed">
                특히 새로 시작하는 크리에이터나 빠른 성장을 원하는 분들에게 초기 부스팅은 매우 효과적인 전략이 될 수 있어요.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-3">⚠️ 하지만 주의할 점도 있어요!</h3>
                <p className="text-white/90 leading-relaxed">
                  조회수 구매가 무조건 나쁜 것은 아니지만, 신뢰할 수 없는 서비스에서 구매할 경우 '비정상적인 트래픽'으로 감지되어 영상 노출이 제한되거나 계정이 정지될 수도 있어요.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✅ SNS핫딜은 다릅니다</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  SNS핫딜은 실제 활동중인 계정만으로 작업을 진행하며, 영상의 안전성과 자연스러움을 모두 고려한 시스템을 제공하고 있어요. 
                </p>
                <p className="text-white/90 leading-relaxed">
                  안심할 수 있는 환경에서 틱톡을 성장시키고 싶다면, SNS핫딜을 활용해보세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TikTok Algorithm Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full text-pink-700 text-sm font-semibold mb-4">
              <FaBolt className="text-lg" />
              <span>2024 최신 알고리즘</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              TikTok 알고리즘 분석
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              TikTok의 For You 알고리즘을 이해하고 활용하면<br />
              바이럴 가능성이 크게 높아집니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {algorithmTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center mb-4">
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
              <span>바이럴 영상 만드는 법</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  성공 전략
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>15-30초 최적 길이 유지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>트렌딩 음악 빠르게 활용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>자막으로 메시지 명확히</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>첫 3초에 훅(hook) 배치</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>인기 해시태그 3-5개 사용</span>
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
                    <span>저화질 영상 업로드</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>워터마크가 있는 콘텐츠</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>너무 긴 영상 (1분 이상)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>과도한 텍스트 오버레이</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>관련 없는 해시태그 스팸</span>
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
              TikTok 바이럴을 위한 최고의 파트너
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% 안전 보장</h3>
              <p className="text-gray-600">
                TikTok 정책 완벽 준수. 계정 정지 걱정 없이 안전하게 바이럴을 만드세요.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaFire className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">초고속 바이럴</h3>
              <p className="text-gray-600">
                1-2시간 내 시작으로 가장 빠른 결과. For You 페이지 진입을 도와드립니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaMusic className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">트렌드 전문가</h3>
              <p className="text-gray-600">
                최신 트렌드를 파악하여 최적의 타이밍에 바이럴을 만들어드립니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaClock className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24시간 지원</h3>
              <p className="text-gray-600">
                언제든 문의 가능. 바이럴 성공까지 전담 매니저가 함께합니다.
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
              바이럴에 성공한 크리에이터들의 실제 후기
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                {/* Header with Avatar and Product */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-pink-600 flex items-center justify-center">
                      <FaUser className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-pink-50 rounded-lg border border-pink-100 flex-shrink-0">
                    <FaTiktok className="text-pink-600 text-xs" />
                    <span className="text-xs font-semibold text-pink-700">
                      {review.product.replace('🎵 ', '')}
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
              className="inline-flex items-center gap-2 px-8 py-3 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
              style={{ backgroundColor: '#EE1D52' }}
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
                TikTok 서비스에 대해 궁금한 점을 확인하세요
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white rounded-xl p-6 shadow-md group">
                  <summary className="font-semibold text-gray-900 cursor-pointer text-lg list-none flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-bold">
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
                className="inline-flex items-center gap-2 px-8 py-3 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: '#EE1D52', cursor: "pointer" }}
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
        style={{ background: 'linear-gradient(to right, #000000, #EE1D52)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              TikTok 바이럴,<br />
              지금 바로 시작하세요
            </h2>
            <p className="text-xl mb-8 text-white/90">
              12만+ 계정이 선택한 검증된 서비스<br />
              <span className="text-sm mt-2 block">
                초고속 시작 • For You 페이지 진입 • 안전 보장
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ color: '#EE1D52' }}
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
