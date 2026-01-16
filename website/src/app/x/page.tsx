'use client';

import Link from 'next/link';
import { FaXTwitter, FaCheck, FaUser, FaStar, FaChartLine, FaClock, FaRocket, FaHashtag, FaRetweet } from 'react-icons/fa6';
import { FaShieldAlt, FaUserPlus, FaHeart } from 'react-icons/fa';

export default function XPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative px-4 py-16 md:py-20 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #000000, #14171A, #1DA1F2)',
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <FaXTwitter className="text-xl" />
              <span>X(Twitter) 마케팅 전문</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              X 계정 성장<br />
              영향력 확대
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              팔로워, 리트윗, 좋아요로 계정 영향력을 키우세요.<br />
              실시간 트렌드에 최적화된 서비스를 제공합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-black font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                어떤 서비스를 제공하나요?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SNS핫딜은 365일 24시간 안전하고 빠른 X(Twitter) 마케팅 서비스를 제공합니다.<br />
                실제 활동 중인 계정을 기반으로 팔로워와 리트윗, 좋아요를 늘려 계정 영향력을 확대하고,<br />
                실시간 트렌드 진입을 통해 더 많은 사람들에게 메시지를 전달할 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  <FaCheck className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% 실제 활동계정</h3>
                <p className="text-gray-600">
                  실 사용자 계정으로만 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  <FaClock className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">빠른 처리 속도</h3>
                <p className="text-gray-600">
                  24시간 내내 주문 즉시 작업이 시작됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">간편한 주문</h3>
                <p className="text-gray-600">
                  필요한 서비스와 수량만 선택하면 주문이 가능하여 초보자도 손쉽게 이용할 수 있습니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">안정성과 투명성</h3>
                <p className="text-gray-600">
                  계정 보안을 최우선으로 하는 안전한 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  <FaStar className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">전문 노하우</h3>
                <p className="text-gray-600">
                  X 알고리즘을 분석해 최신 트렌드에 맞는 맞춤형 작업이 진행됩니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  <FaClock className="text-2xl text-white" />
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
              X(Twitter) 서비스
            </h2>
            <p className="text-lg text-gray-600">
              영향력 확대를 위한 완벽한 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
                <FaUserPlus className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">팔로워 증가</h3>
              <p className="text-gray-600 mb-6">
                실제 활동하는 팔로워로 계정 신뢰도를 높입니다. 자연스러운 증가로 안전하게 관리됩니다.
              </p>
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
                  <span className="text-gray-700">영구 보장</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
                <FaRetweet className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">리트윗 증가</h3>
              <p className="text-gray-600 mb-6">
                게시물 노출을 극대화하고 바이럴 효과를 만들어드립니다. 실시간 트렌드 진입을 지원합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">빠른 전달</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">바이럴 효과</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">트렌드 진입</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">좋아요 증가</h3>
              <p className="text-gray-600 mb-6">
                게시물 인기도를 높여 더 많은 도달을 확보하세요. 알고리즘에 긍정적인 영향을 줍니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">즉시 시작</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">노출 증가</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">계정 신뢰도</span>
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
              간단한 5단계로 시작하는 X 계정 성장
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">서비스 선택</h3>
                </div>
                <p className="text-sm text-gray-600">
                  원하는 X 서비스를 선택해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="h-16 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">트윗/계정 입력</h3>
                </div>
                <p className="text-sm text-gray-600">
                  작업하실 링크와 희망하시는 수량을 입력해주세요
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
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
                className="inline-block bg-gradient-to-r from-black to-blue-500 hover:from-gray-900 hover:to-blue-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
              >
                지금 시작하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 SNS핫딜을 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600">
              X(Twitter) 영향력 확대의 최고 파트너
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FDE5E2' }}>
                <FaShieldAlt className="text-3xl" style={{ color: '#EB5644' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">완벽한 안전</h3>
              <p className="text-gray-600 text-sm">
                X 정책 준수, 계정 정지 위험 제로
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FDE5E2' }}>
                <FaClock className="text-3xl" style={{ color: '#EB5644' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">빠른 시작</h3>
              <p className="text-gray-600 text-sm">
                주문 즉시 시작, 실시간 효과 확인
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FDE5E2' }}>
                <FaRetweet className="text-3xl" style={{ color: '#EB5644' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">바이럴 효과</h3>
              <p className="text-gray-600 text-sm">
                리트윗으로 기하급수적 노출 증가
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FDE5E2' }}>
                <FaRocket className="text-3xl" style={{ color: '#EB5644' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">트렌드 진입</h3>
              <p className="text-gray-600 text-sm">
                실시간 트렌드 진입으로 대량 노출
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SNS핫딜에서 X 팔로워 구매 시<br className="hidden md:block" />
              어떤 장점이 있을까요?
            </h2>
            <p className="text-lg text-gray-600">
              체계적이고 안전한 방식으로 X 계정을 성장시킵니다
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-black to-blue-500 flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">영향력 확대</h3>
                  <p className="text-gray-600 leading-relaxed">
                    X는 영향력 있는 인물들이 모이는 플랫폼이에요. 팔로워가 많을수록 트윗이 더 많은 사람들에게 노출되고, 리트윗과 댓글도 자연스럽게 증가해요. 정치, 경제, 문화 등 다양한 분야에서 의견을 나누고 네트워킹을 형성할 수 있어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-black flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">트렌드 진입</h3>
                  <p className="text-gray-600 leading-relaxed">
                    팔로워가 많고 참여도가 높은 계정의 트윗은 트렌딩 토픽에 진입할 확률이 높아요. 실시간 트렌드에 오르면 수백만 명에게 노출되어 폭발적인 바이럴 효과를 경험할 수 있어요. 많은 계정이 트렌드 진입으로 대량 팔로워를 확보했어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-black to-blue-500 flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">비즈니스 기회</h3>
                  <p className="text-gray-600 leading-relaxed">
                    X는 전문가들이 모이는 플랫폼이기 때문에 B2B 비즈니스에 매우 효과적이에요. 팔로워가 많은 계정은 브랜드 협업, 컨설팅 의뢰, 강연 제의 등 다양한 비즈니스 기회를 얻을 수 있어요. 특히 IT, 마케팅, 경제 분야에서 높은 가치를 인정받아요.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-black flex items-center justify-center flex-shrink-0">
                  <FaHashtag className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">브랜드 인지도</h3>
                  <p className="text-gray-600 leading-relaxed">
                    X는 언론과 인플루언서들이 주목하는 플랫폼이에요. 팔로워가 많은 계정의 트윗은 뉴스 매체에 인용되거나 다른 플랫폼으로 확산되는 경우가 많아요. 개인 브랜드나 기업 브랜드의 인지도를 빠르게 높일 수 있는 효과적인 채널이에요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-black to-blue-500 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                X 팔로워 구매, 진짜 괜찮을까요?
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                X에서 계정을 성장시키는 방법 중 하나로 팔로워 구매를 고려하는 분들이 많아요.
              </p>
              <p className="text-white/90 mb-6 leading-relaxed">
                팔로워 수가 많아지면 계정의 영향력이 커지고, 트윗의 노출 범위가 넓어져 더 많은 사람들과 소통할 수 있기 때문이에요.
              </p>
              <p className="text-white/90 mb-8 leading-relaxed">
                특히 개인 브랜딩이나 비즈니스 목적으로 X를 운영하는 분들에게 초기 팔로워 수는 신뢰도와 영향력의 지표가 됩니다.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-3">⚠️ 하지만 주의할 점도 있어요!</h3>
                <p className="text-white/90 leading-relaxed">
                  팔로워 구매가 무조건 나쁜 것은 아니지만, 신뢰할 수 없는 서비스에서 구매할 경우 '비정상적인 계정'이 유입되어 계정 품질이 떨어지거나 X 정책 위반으로 계정이 제한될 수도 있어요.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✅ SNS핫딜은 다릅니다</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  SNS핫딜은 실제 활동중인 계정만으로 작업을 진행하며, 계정의 안전성과 자연스러움을 모두 고려한 시스템을 제공하고 있어요. 
                </p>
                <p className="text-white/90 leading-relaxed">
                  안심할 수 있는 환경에서 X를 성장시키고 싶다면, SNS핫딜을 활용해보세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* X Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              X(Twitter) 성장 전략
            </h2>
            <p className="text-lg text-gray-600">
              영향력을 키우는 실전 노하우
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaHashtag className="text-blue-500" />
                트렌드 적극 활용
              </h3>
              <p className="text-gray-700 mb-4">
                X는 실시간 트렌드가 핵심입니다. 트렌딩 해시태그를 활용하면 많은 사람들에게 노출될 수 있습니다. 빠르게 반응하는 것이 중요합니다.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>트렌드 탭 정기적으로 확인</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>트렌드에 빠르게 반응</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>관련 해시태그 1-2개 사용</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaRetweet className="text-green-500" />
                스레드 활용하기
              </h3>
              <p className="text-gray-700 mb-4">
                긴 내용은 스레드로 작성하세요. 첫 트윗에서 관심을 끌고, 이어지는 트윗으로 상세 정보를 제공하면 참여도가 높아집니다.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>첫 트윗에 핵심 요약</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>3-5개 트윗으로 구성</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>마지막에 CTA 추가</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaClock className="text-purple-500" />
                최적 업로드 시간
              </h3>
              <p className="text-gray-700 mb-4">
                X는 실시간 플랫폼입니다. 타겟 오디언스가 활발한 시간대에 포스팅하면 더 많은 반응을 얻을 수 있습니다.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>평일 오전 8-9시, 점심 12-1시</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>퇴근 시간 6-7시 활발</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>하루 3-5회 꾸준히 포스팅</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaChartLine className="text-orange-500" />
                적극적인 소통
              </h3>
              <p className="text-gray-700 mb-4">
                X는 대화 중심 플랫폼입니다. 다른 사용자와 적극적으로 소통하고, 리트윗과 댓글을 활용하여 네트워크를 확장하세요.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>댓글에 빠르게 답변</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>영향력 있는 계정과 소통</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>가치 있는 트윗 리트윗</span>
                </li>
              </ul>
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
              영향력 확대 성공 사례
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">tech_p****</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 rounded-lg border border-blue-100 flex-shrink-0">
                  <FaXTwitter className="text-blue-600 text-xs" />
                  <span className="text-xs font-semibold text-blue-700">
                    팔로워
                  </span>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "팔로워가 빠르게 늘면서 트윗 반응도 좋아졌어요. 이제는 업계에서 인정받는 인플루언서가 되었습니다!"
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">mkt_j8****</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 rounded-lg border border-blue-100 flex-shrink-0">
                  <FaXTwitter className="text-blue-600 text-xs" />
                  <span className="text-xs font-semibold text-blue-700">
                    리트윗
                  </span>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "리트윗이 늘면서 트윗이 바이럴됐어요. 브랜드 협업 제의가 계속 들어오고 있습니다. 정말 만족해요!"
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-blue-500 flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">biz_s2****</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 rounded-lg border border-blue-100 flex-shrink-0">
                  <FaXTwitter className="text-blue-600 text-xs" />
                  <span className="text-xs font-semibold text-blue-700">
                    팔로워
                  </span>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "안전하고 빠른 서비스에 감동했어요. 계정 정지 같은 걱정 없이 편하게 사용할 수 있어서 좋습니다."
              </p>
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
              지금 바로 시작하세요
            </h2>
            <p className="text-xl mb-8 text-white/90">
              X 계정 성장을 위한 첫 걸음을 내딛어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ color: '#EB5644', paddingTop: '16px', paddingBottom: '16px' }}
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
