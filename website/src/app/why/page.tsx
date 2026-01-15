'use client';

import Link from 'next/link';
import { FaTrophy, FaShieldAlt, FaCoins, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

export default function WhyPage() {
  const reasons = [
    {
      number: '하나',
      icon: FaTrophy,
      title: 'SNS핫딜이 진짜 1등이에요',
      color: '#EB5644',
      description: 'SNS핫딜을 운영하는 (주)핫셀러는 업계 최고 매출을 내는 회사로, SNS 빅데이터 솔루션 부문에서 여러 차례 인증받은 기술력을 가지고 있어요',
      content: [
        {
          subtitle: '마케팅은 "감"이 아니라 "데이터"입니다.',
          text: '단순히 기계적으로 팔로워나 좋아요 숫자만 늘리는 것은 누구나 할 수 있습니다. 하지만 계정 지수를 지키면서 안전하게 성장시키는 것은 고도화된 데이터 분석 능력이 필수적입니다. 저희는 빅데이터 분석과 최신 알고리즘을 활용해 맞춤형 전략을 설계합니다.\n\n이를 통해 SNS를 꾸준히 운영해도 기대만큼 성과가 나오지 않는 분들에게 가장 빠르고 안전하며 지속 가능한 성장을 제공하는 것이 저희의 목표입니다.',
        },
      ],
      badges: [
        { year: '2022-2024', title: '올해의 브랜드파워 1위', subtitle: 'SNS 빅데이터 솔루션 부문' },
        { year: '2024', title: '벤처확인기업' },
        { year: '2024', title: '기업부설연구소 인정' },
      ],
    },
    {
      number: '둘',
      icon: FaShieldAlt,
      title: 'SNS핫딜은 안전해요',
      color: '#10B981',
      description: '셀프마케팅사이트 이용을 꺼려하는 가장 큰 이유는 "계정에 문제가 생기지 않을까?"라는 생각 때문이며, 실제로 저품질 서비스를 이용하면 문제가 생길 수 있어요',
      content: [
        {
          text: '하지만 SNS핫딜의 서비스는 직접 제작하거나, 이 분야 전문 MD가 엄선한 최고의 서비스만 취급하고 있어서 마케팅 대행사들도 믿고 사용해요',
        },
      ],
    },
    {
      number: '셋',
      icon: FaCoins,
      title: 'SNS핫딜은 금액이 합리적이에요',
      color: '#F59E0B',
      description: '여러 사이트들을 들어갔는데 똑같은 화면, 똑같은 상품 이상하지 않나요?',
      content: [
        {
          text: '팔로워 4원, 좋아요 1원 이런 저렴한 금액에 혹해서 주문했더니 웬 아랍 가계정들이 들어와서 당황스럽지 않으셨어요?\n\nSNS핫딜은 박리다매 전략으로 초저가 서비스부터, 고품질 서비스까지 합리적인 금액으로 제공해 드려요',
        },
      ],
    },
    {
      number: '넷',
      icon: FaLightbulb,
      title: '노하우가 많아요',
      color: '#8B5CF6',
      description: '단순히 팔로워, 좋아요만 늘린다고 매출이 올라가지 않아요',
      content: [
        {
          text: 'SNS핫딜은 서비스만 판매하는 것이 아니라, 마케팅 전문가가 실제 매출이 올라갈 수 있는 컨설팅도 제공해 드리고 있어요(일부 고객 한정)\n\n또한 마케팅에 도움이 되는 다양한 정보를 블로그에 꾸준히 공유하고 있어요',
        },
        {
          subtitle: '블로그에서 새로운 정보와 SNS핫딜의 노하우를 만나보세요',
        },
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative px-4 py-20 md:py-28 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #EB5644, #D84A3A, #B63D2F)',
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              마케팅 대행사들이<br />
              왜 SNS핫딜을 쓸까요?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              팔로워, 좋아요, 조회수, 댓글, 상위노출까지!<br />
              SNS핫딜에서 SNS 계정을 관리하고 빠르게 성장시켜 보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Number Badge */}
                  <div className="text-center mb-8">
                    <span className="inline-block px-6 py-2 rounded-full text-white font-bold text-lg" style={{ backgroundColor: reason.color }}>
                      {reason.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                    {/* Icon Side */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-xl"
                        style={{ backgroundColor: `${reason.color}20` }}
                      >
                        <IconComponent className="text-6xl" style={{ color: reason.color }} />
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {reason.title}
                      </h2>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {reason.description}
                      </p>

                      {reason.content.map((item, idx) => (
                        <div key={idx} className="mb-6">
                          {item.subtitle && (
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {item.subtitle}
                            </h3>
                          )}
                          {item.text && (
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {item.text}
                            </p>
                          )}
                        </div>
                      ))}

                      {/* Badges */}
                      {reason.badges && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                          {reason.badges.map((badge, badgeIdx) => (
                            <div key={badgeIdx} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border-2 shadow-md" style={{ borderColor: reason.color }}>
                              <div className="text-2xl font-bold mb-1" style={{ color: reason.color }}>
                                {badge.year}
                              </div>
                              <div className="text-sm font-bold text-gray-900 mb-1">
                                {badge.title}
                              </div>
                              {badge.subtitle && (
                                <div className="text-xs text-gray-600">
                                  {badge.subtitle}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              블로그에서 새로운 정보와<br />
              SNS핫딜의 노하우를 만나보세요
            </h2>
            <p className="text-lg text-gray-600">
              SNS 마케팅에 도움이 되는 최신 정보와 실전 팁을 공유합니다
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#EB5644] to-[#D84A3A] hover:from-[#D84A3A] hover:to-[#B63D2F] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            블로그 바로가기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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
              SNS 마케팅의 모든 것,<br />
              SNS핫딜과 함께하세요
            </h2>
            <p className="text-xl mb-8 text-white/90">
              지금 바로 시작하고 빠른 성장을 경험하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).ht) {
                    (window as any).ht.open();
                  }
                }}
                className="bg-white hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ color: '#EB5644', cursor: "pointer" }}
              >
                무료 상담하기
              </button>
              <Link
                href="/pricing"
                className="text-white border-2 border-white/30 bg-white/10 hover:bg-white/20 font-semibold px-10 py-4 rounded-lg text-lg transition-all backdrop-blur-sm"
              >
                가격 안내 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
