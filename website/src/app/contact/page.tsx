'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaClock, FaQuestionCircle } from 'react-icons/fa';

export default function ContactPage() {
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
              무료 상담
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              궁금한 점이 있으신가요? 언제든지 문의주세요
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-white rounded-xl p-8 shadow-md">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#FDE5E2' }}
                >
                  <FaEnvelope className="text-2xl" style={{ color: '#EB5644' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">이메일</h3>
                <p className="text-gray-600">contact@snshotdeal.com</p>
              </div>

              <div className="text-center bg-white rounded-xl p-8 shadow-md">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#FDE5E2' }}
                >
                  <FaPhone className="text-2xl" style={{ color: '#EB5644' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">카카오톡</h3>
                <p className="text-gray-600">@snshotdeal</p>
              </div>

              <div className="text-center bg-white rounded-xl p-8 shadow-md">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#FDE5E2' }}
                >
                  <FaClock className="text-2xl" style={{ color: '#EB5644' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">운영 시간</h3>
                <p className="text-gray-600">
                  평일 09:00 - 18:00<br />
                  주말/공휴일 휴무
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                문의하기
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    플랫폼 선택 <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">선택해주세요</option>
                    <option value="instagram">Instagram</option>
                    <option value="youtube">YouTube</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitter">X(Twitter)</option>
                    <option value="multiple">여러 플랫폼</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    서비스 종류 <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">선택해주세요</option>
                    <option value="follower">팔로워/구독자</option>
                    <option value="like">좋아요</option>
                    <option value="view">조회수</option>
                    <option value="retweet">리트윗/공유</option>
                    <option value="consult">상담</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows={6}
                    placeholder="문의하실 내용을 자세히 작성해주세요"
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-bold text-lg text-white transition-colors shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#EB5644' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D84A3A')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EB5644')}
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FaQuestionCircle className="text-5xl mx-auto mb-4" style={{ color: '#EB5644' }} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-lg text-gray-600">
                빠른 답변이 필요하신가요? FAQ를 확인해보세요
              </p>
            </div>

            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  서비스는 안전한가요?
                </summary>
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  네, 모든 서비스는 플랫폼 가이드라인을 준수하며 안전하게 진행됩니다. 실제 유저를 통한 자연스러운 증가로 계정 안전을 최우선으로 합니다.
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  얼마나 빨리 시작되나요?
                </summary>
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  주문 즉시 시작되며, 서비스 종류에 따라 1시간 내지 24시간 이내에 효과를 확인하실 수 있습니다.
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  환불이 가능한가요?
                </summary>
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  서비스 시작 전에는 100% 환불이 가능합니다. 시작 후에는 진행 상황에 따라 부분 환불이 가능합니다.
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  여러 플랫폼을 한 번에 신청할 수 있나요?
                </summary>
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  네, 가능합니다. 여러 플랫폼을 동시에 신청하시면 할인 혜택도 제공됩니다.
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  계정 정보를 제공해야 하나요?
                </summary>
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  아니요, 계정 아이디(URL)만 있으면 됩니다. 비밀번호나 개인정보는 절대 요구하지 않습니다.
                </div>
              </details>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#EB5644' }}
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
