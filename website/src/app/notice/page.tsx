'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBullhorn, FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaChevronDown } from 'react-icons/fa';

export default function NoticePage() {
  const [openNoticeId, setOpenNoticeId] = useState<number | null>(null);
  const notices = [
    {
      id: 1,
      type: 'important',
      icon: FaExclamationTriangle,
      iconColor: '#EF4444',
      title: '[중요] 설 연휴 고객센터 운영 안내',
      date: '2024.01.20',
      content: `설 연휴 기간(1월 25일~28일) 동안 고객센터 운영이 일부 제한됩니다.
      
• 운영 시간: 오전 10시 ~ 오후 4시
• 긴급 문의: 카카오톡 채널 이용
• 주문 처리: 정상 진행 (배송 시간 1-2일 지연 가능)

연휴 이후 순차적으로 처리해드리겠습니다. 양해 부탁드립니다.`,
    },
    {
      id: 2,
      type: 'new',
      icon: FaCheckCircle,
      iconColor: '#10B981',
      title: '[신규] X(Twitter) 서비스 정식 오픈',
      date: '2024.01.15',
      content: `많은 고객님들의 요청으로 X(Twitter) 서비스를 정식 오픈했습니다!

• 제공 서비스: 팔로워, 리트윗, 좋아요
• 오픈 기념 할인: 모든 서비스 20% 할인 (1월 말까지)
• 기존 고객 추가 혜택: 5% 추가 할인 쿠폰 발송

지금 바로 X(Twitter) 계정을 성장시켜보세요!`,
    },
    {
      id: 3,
      type: 'update',
      icon: FaInfoCircle,
      iconColor: '#3B82F6',
      title: '[업데이트] 서비스 품질 개선 안내',
      date: '2024.01.10',
      content: `더 나은 서비스 제공을 위해 시스템을 개선했습니다.

• 배송 속도 20% 향상
• 실시간 진행 상황 확인 기능 추가
• 고객센터 응답 시간 단축 (평균 1시간 이내)
• 모바일 웹 사이트 성능 개선

앞으로도 최고의 서비스를 제공하겠습니다.`,
    },
    {
      id: 4,
      type: 'event',
      icon: FaBullhorn,
      iconColor: '#F59E0B',
      title: '[이벤트] 신규 고객 웰컴 이벤트',
      date: '2024.01.05',
      content: `신규 고객님들을 위한 특별 이벤트를 진행합니다!

• 첫 주문 10% 할인
• 리뷰 작성 시 5,000원 적립금 지급
• 친구 추천 시 양쪽 모두 10% 할인 쿠폰 제공

이벤트 기간: 2024년 1월 31일까지`,
    },
    {
      id: 5,
      type: 'info',
      icon: FaInfoCircle,
      iconColor: '#3B82F6',
      title: '[안내] 안전한 서비스 이용을 위한 가이드',
      date: '2024.01.03',
      content: `고객님의 계정 안전을 위해 다음 사항을 확인해주세요.

• 비밀번호는 절대 공유하지 마세요
• 의심스러운 링크는 클릭하지 마세요
• 공식 채널을 통해서만 문의하세요
• 주문 시 정확한 계정 정보를 입력해주세요

문의사항은 언제든지 고객센터로 연락주세요.`,
    },
    {
      id: 6,
      type: 'update',
      icon: FaInfoCircle,
      iconColor: '#3B82F6',
      title: '[업데이트] 결제 시스템 개선',
      date: '2023.12.28',
      content: `더 편리한 결제를 위해 시스템을 업데이트했습니다.

• 카카오페이, 네이버페이 추가
• 간편결제 도입으로 결제 시간 단축
• 자동 환불 시스템 구축 (1-3일 → 당일 처리)
• 결제 보안 강화

안전하고 편리한 결제를 경험해보세요.`,
    },
    {
      id: 7,
      type: 'important',
      icon: FaExclamationTriangle,
      iconColor: '#EF4444',
      title: '[중요] 개인정보처리방침 변경 안내',
      date: '2023.12.20',
      content: `개인정보처리방침이 일부 변경되었습니다.

• 변경 시행일: 2024년 1월 1일
• 주요 변경 사항: 데이터 보관 기간 명시화
• 고객 권리 강화: 정보 삭제 요청 간소화

자세한 내용은 개인정보처리방침 페이지에서 확인하실 수 있습니다.`,
    },
    {
      id: 8,
      type: 'info',
      icon: FaInfoCircle,
      iconColor: '#3B82F6',
      title: '[안내] 연말연시 주문 폭주 안내',
      date: '2023.12.15',
      content: `연말연시 시즌으로 주문이 폭주하고 있습니다.

• 배송 시간: 평소보다 1-2일 지연 가능
• 고객센터: 응답 시간 증가 가능
• 주문 추천: 여유있게 미리 주문해주세요

빠른 처리를 위해 최선을 다하겠습니다.`,
    },
  ];

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'important':
        return { text: '중요', bg: '#F9FAFB', color: '#9CA3AF' };
      case 'new':
        return { text: '신규', bg: '#F9FAFB', color: '#9CA3AF' };
      case 'update':
        return { text: '업데이트', bg: '#F9FAFB', color: '#9CA3AF' };
      case 'event':
        return { text: '이벤트', bg: '#F9FAFB', color: '#9CA3AF' };
      default:
        return { text: '안내', bg: '#F9FAFB', color: '#9CA3AF' };
    }
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
            <FaBullhorn className="text-6xl text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              공지사항
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              SNS핫딜의 최신 소식을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Notice List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-3">
            {notices.map((notice) => {
              const IconComponent = notice.icon;
              const badge = getTypeBadge(notice.type);
              const isOpen = openNoticeId === notice.id;

              return (
                <div
                  key={notice.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-200"
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => setOpenNoticeId(isOpen ? null : notice.id)}
                    className="w-full flex items-center gap-4 p-6 border-l-2 text-left hover:bg-gray-50 transition-colors"
                    style={{ borderLeftColor: '#E5E7EB' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-100"
                    >
                      <IconComponent className="text-xl text-gray-500" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                          className="px-3 py-1 text-xs font-bold rounded-lg"
                          style={{ backgroundColor: badge.bg, color: badge.color }}
                        >
                          {badge.text}
                        </span>
                        <span className="text-sm font-medium text-gray-500">{notice.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {notice.title}
                      </h3>
                    </div>

                    <FaChevronDown 
                      className={`text-gray-400 text-xl flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Content - Collapsible */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-16">
                        <div className="text-gray-600 whitespace-pre-line leading-relaxed text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
                          {notice.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button
              className="w-10 h-10 rounded-lg font-bold text-white transition-all shadow-md hover:shadow-lg"
              style={{ backgroundColor: '#EB5644' }}
            >
              1
            </button>
            <button className="w-10 h-10 rounded-lg font-semibold text-gray-600 bg-white hover:bg-gray-100 transition-all shadow-sm hover:shadow-md border border-gray-200">
              2
            </button>
            <button className="w-10 h-10 rounded-lg font-semibold text-gray-600 bg-white hover:bg-gray-100 transition-all shadow-sm hover:shadow-md border border-gray-200">
              3
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              새로운 소식을 받아보세요
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              이메일로 최신 공지사항과 프로모션 정보를 받아보실 수 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                className="px-8 py-3 rounded-lg font-semibold text-white transition-colors whitespace-nowrap"
                style={{ backgroundColor: '#EB5644' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D84A3A')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EB5644')}
              >
                구독하기
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
              SNS 계정 성장의 첫 걸음을 내딛어보세요
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
