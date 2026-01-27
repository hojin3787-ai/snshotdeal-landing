'use client';

import Link from 'next/link';
import { FaQuestionCircle, FaCheckCircle, FaCoins } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // FAQ 스키마 데이터 추가
  useEffect(() => {
    const siteUrl = window.location.origin;
    
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "충전 신청을 했는데 충전이 되지 않아요.",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "충전은 입금자명과 금액을 확인 후 자동으로 처리되기 때문에 꼭 입금하는 입금자의 이름을 작성해 주셔야합니다. 입금을 했으나 10분 동안 충전이 되지 않은 경우 카카오톡을 통해 문의해주세요."
          }
        },
        {
          "@type": "Question",
          "name": "환불 규정이 어떻게 되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "시스템이 더이상 주문 이행이 불가능 하다고 판단되는 경우, 주문취소와 함께 서비스 지불금액을 회원의 포인트로 환불 처리 합니다."
          }
        },
        {
          "@type": "Question",
          "name": "작업을 진행해도 계정에 문제가 없나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SNS핫딜은 자사 자체 리워드 플랫폼을 운영하고 있으며 자사 플랫폼 회원들의 리워드 형식으로 작업을하여 인스타그램의 계정 지수 반응을 일으킵니다. 자동로봇이나 매크로를 사용하지 않은 회원들의 순수한 작업이기 때문에 전혀 문제 되지 않습니다."
          }
        },
        {
          "@type": "Question",
          "name": "보안상 위험하지 않나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "모든 소셜 미디어 작업에 있어서 비밀번호는 요구하지 않습니다. SNS핫딜의 서비스는 실제 한국인들을 대상으로 진행되며 리워드 형식의 안전한 작업방식으로 진행이 되기에 안심하고 이용할수 있습니다."
          }
        },
        {
          "@type": "Question",
          "name": "주문 가능시간이 어떻게 되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SNS핫딜의 모든 서비스는 24시간 언제든 주문 처리가 가능한 자동 시스템을 갖추고 있습니다. 따라서 포인트만 있으시다면 언제든 이용이 가능합니다."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const categories = [
    {
      id: 'payment',
      icon: FaCoins,
      title: '결제/취소/환불',
      color: '#F59E0B',
      faqs: [
        {
          question: '충전 신청을 했는데 충전이 되지 않아요.',
          answer: '충전은 입금자명과 금액을 확인 후 자동으로 처리되기 때문에 꼭 입금하는 입금자의 이름을 작성해 주셔야합니다. 입금을 했으나 10분 동안 충전이 되지 않은 경우 카카오톡을 통해 문의해주세요.',
        },
        {
          question: '환불 규정이 어떻게 되나요?',
          answer: '시스템이 더이상 주문 이행이 불가능 하다고 판단되는 경우, 주문취소와 함께 서비스 지불금액을 회원의 포인트로 환불 처리 합니다.',
        },
        {
          question: '주문 취소가 가능한가요?',
          answer: '모든 주문은 주문과 동시에 시스템으로 전달되어 작업이 진행되기 때문에, 주문 취소는 시스템이 주문을 이행하지 못한다고 판단되는 경우만 가능합니다.',
        },
        {
          question: '링크를 잘못 입력하고 주문했어요.',
          answer: '주문 링크를 오입력하셨더라도 이미 시스템으로 전달되어 작업이 진행되기에 환불은 불가능 합니다. 주문 전 내용을 항상 꼼꼼히 확인 하신 후 진행하여 주시기 바랍니다.',
        },
      ],
    },
    {
      id: 'product',
      icon: FaCheckCircle,
      title: '상품',
      color: '#8B5CF6',
      faqs: [
        {
          question: '작업을 진행해도 계정에 문제가 없나요?',
          answer: 'SNS핫딜은 자사 자체 리워드 플랫폼을 운영하고 있으며 자사 플랫폼 회원들의 리워드 형식으로 작업을하여 인스타그램의 계정 지수 반응을 일으킵니다. 자동로봇이나 매크로를 사용하지 않은 회원들의 순수한 작업이기 때문에 전혀 문제 되지 않습니다.',
        },
        {
          question: '보안상 위험하지 않나요?',
          answer: '모든 소셜 미디어 작업에 있어서 비밀번호는 요구하지 않습니다. SNS핫딜의 서비스는 실제 한국인들을 대상으로 진행되며 리워드 형식의 안전한 작업방식으로 진행이 되기에 안심하고 이용할수 있습니다. 5년간 검증 된 플랫폼이며 처음 접하는 고객님들께서도 누구나 손 쉽게 접근 가능합니다.',
        },
        {
          question: '좋아요 반영 시간이 어떻게 되나요?',
          answer: '좋아요가 들어오는 속도는 인스타그램 서버의 사정에 따라 변동이 있을 수 있습니다. 평균적으로 5분~10분 이내 모두 유입되지만 서버 사정에 따라(인스타그램 로직변경) 최대 90분까지 소요될 수 있습니다. 또한 모든 판매 상품은 24시간 자동주문/처리 됩니다. 시스템이 정상적으로 작업이 불가능하다고 판단될 경우 (시스템 오류/인스타그램 업데이트/로직변경/불가항력적인 부분 등)에는 최소 24시간~최대 72시간 내에 사용자의 잔액으로 자동 취소/환불 처리 됩니다.',
        },
      ],
    },
    {
      id: 'service',
      icon: FaQuestionCircle,
      title: '서비스 이용',
      color: '#EB5644',
      faqs: [
        {
          question: '인스타그램 팔로워 서비스',
          answer: '[인스타그램 팔로워 구매]\n"인스타 팔로워 늘리기"를 한다고 해서 계정에 악영향을 미칠까요? 직접 휴대폰을 보며 수기로 팔로워를 신청하는 경우 인스타그램에서 알아 낼 방법이 없습니다. 팔로워 수는 고객들에게 가장 먼저 보여지는 업체의 브랜드 이미지이자 인기의 척도입니다.\n\nSNS핫딜은 자사 자체 리워드 플랫폼을 운영하고 있으며 자사 플랫폼 회원들의 리워드 형식으로 작업 하여 인스타그램의 계정 지수 반응을 일으킵니다. 팔로워 구매에 있어 부정적인 시선은 항상 존재하지만 현재도 많은 마케터/인플루언서들이 필수적인 트리거를 위하여 필수적으로 구매하고 있는 현실입니다.\n\n[인스타그램 팔로워 A/S정책]\n정당한 값을 지불하고 구매 한 팔로워에서 이탈이 발생한다는것은 있을수도 없는 일이며 구매하는 의미가 사라지게 됩니다. SNS핫딜은 자사 리워드 회원에게 별도의 패널티를 부여하고 있으며 인스타그램 정책에 준수하여 팔로워 작업을 진행하고 있습니다. 이탈 통계 지수 분석 결과 한달 0%~5%를 수치를 나타내고 있으며 이 적은 확률도 체계적인 무상 A/S를 통 하여 고객님의 인스타그램 계정 안전을 위해 최선의 대응을 하고 있습니다.\n\n[인스타그램 팔로워 계정품질]\n구매 한 팔로워 계정이 [유령] 계정만 있다면 브랜드이미지 감소와 더불어 빈껍데기에 불과할것입니다. 현재 SNS핫딜은 고객님의 니즈에 맞게 단순 팔로워 증진을 위한 생성계정 팔로워 서비스도 저렴하게 판매중이지만 이도 수차례 엄격한 검수 과정을 거쳐 실제 사람과 같은 안전한 작업을 진행하고 있으며, 회원님의 계정에 대한 단 1%의 리스크가 있는 팔로워 상품은 기획/판매를 절대 하지 않습니다.',
        },
        {
          question: '주문 가능시간이 어떻게 되나요?',
          answer: 'SNS핫딜의 모든 서비스는 24시간 언제든 주문 처리가 가능한 자동 시스템을 갖추고 있습니다. 따라서 포인트만 있으시다면 언제든 이용이 가능합니다.',
        },
        {
          question: '인스타그램 좋아요 서비스',
          answer: '[인스타 좋아요 늘리기]\nSNS핫딜은 불법 프로그램/봇을 통한 인스타그램에서 제한하는 마케팅을 절대 진행하지 않습니다. 모든 인스타그램 좋아요 작업은 개인의 휴대폰으로 수기로 직접 일정시간 둘러 본 후 작업하는 방식으로 진행중에 있으며 이는 게시물 인사이트(도달+노출)반응을 불러 일으키게 됩니다. 인스타그램에서 지향하고 권장하는 알맞고 정직한 작업방식으로의 지수반응을 유도하여 "인기게시물"에 도달할수 있게하고 이러한 결과는 잠재고객을 향한 노출도 향상으로 인한 매출로 전환될것입니다.\n\n[인스타그램 인기게시물]\n인스타그램 인기게시물은 매년 그에 대한 로직을 업데이트하며 더 똑똑해지고 기준이 변화 하고 있습니다. 처음 인스타그램을 접하는 소상공인/마케터들도 쉽고 편하게 이용 할 수 있도록 [인기게시물 관리] 구매 카테고리를 별도로 두어 서비스제공에 있으며 단계별 가이드라인에 맞게 쉽게 인기게시물을 등록하실 수 있습니다.\n\n[인스타그램 그로스해킹]\n인스타그램 서비스의 구상단계부터 프로그래밍, 빅데이터 분석 등을 적극적으로 활용하여 제품과 서비스를 제작하게 되며, 빠르게 변화하는 시장에 발맞춰 SNS핫딜은 고객님들에게 좀 더 빠른 소식/서비스로 보답하기 위해 최선을 다하고 있습니다.',
        },
      ],
    },
  ];

  const categoryFilters = [
    { id: 'all', name: '전체', icon: null },
    { id: 'payment', name: '결제/취소/환불', icon: FaCoins },
    { id: 'product', name: '상품', icon: FaCheckCircle },
    { id: 'service', name: '서비스 이용', icon: FaQuestionCircle },
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

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
            <FaQuestionCircle className="text-6xl text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              자주 묻는 질문
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              궁금하신 내용을 빠르게 찾아보세요
            </p>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categoryFilters.map((filter) => {
              const IconComponent = filter.icon;
              const isSelected = selectedCategory === filter.id;
              
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                  style={{
                    backgroundColor: isSelected ? '#EB5644' : '#F3F4F6',
                    color: isSelected ? 'white' : '#6B7280',
                  }}
                >
                  {IconComponent && <IconComponent className="text-base" />}
                  <span>{filter.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {filteredCategories.map((category, catIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={catIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <IconComponent className="text-2xl" style={{ color: category.color }} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = catIndex * 100 + faqIndex;
                      const isOpen = openIndex === globalIndex;

                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-lg shadow-md overflow-hidden transition-all"
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex items-center justify-between transition-colors"
                          >
                            <span className="pr-4">{faq.question}</span>
                            <svg
                              className={`w-6 h-6 flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
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
                          </button>
                          {isOpen && (
                            <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              더 궁금하신 점이 있으신가요?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              고객센터를 통해 1:1 맞춤 상담을 받아보세요
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).ht) {
                    (window as any).ht.open();
                  }
                }}
                className="inline-block px-10 py-4 rounded-lg font-semibold text-white transition-colors shadow-md hover:shadow-lg text-lg"
                style={{ backgroundColor: '#EB5644', cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D84A3A')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EB5644')}
              >
                문의하기
              </button>
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
              안전하고 빠른 SNS 성장을 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ color: '#EB5644' }}
              >
                가격 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
