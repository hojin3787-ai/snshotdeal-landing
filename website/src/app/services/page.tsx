"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaUser,
  FaStar,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineCheckCircle, HiOutlineStar } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative px-4 py-16 md:py-20 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, #EB5644, #D84A3A, #B63D2F)",
        }}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-block mb-6 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-base md:text-lg font-bold shadow-lg border border-white/30 animate-bounce-slow">
            ⚡ 24시간 만에 계정이 달라집니다
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl">
            모든 SNS계정을
            <br />
            성공시킬 수 있어요
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-bold drop-shadow-lg max-w-4xl mx-auto">
            Instagram, YouTube, TikTok, X까지
            <br />
            <span className="text-yellow-200 font-semibold">
              전문적이고 안전한 계정 성장 솔루션
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/pricing"
              className="group bg-white hover:bg-gray-50 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              style={{ color: "#EB5644" }}
            >
              <span className="flex items-center justify-center gap-2">
                가격 보기
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </span>
            </Link>
            <Link
              href="/reviews"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 transform backdrop-blur-sm"
            >
              고객 후기 보기
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/30 shadow-lg hover:scale-105 transition-transform">
              <HiOutlineCheckCircle className="w-7 h-7 text-green-400 flex-shrink-0" />
              <div className="text-white font-bold text-sm whitespace-nowrap">
                실제 유저 100%
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/30 shadow-lg hover:scale-105 transition-transform">
              <HiOutlineStar className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div className="text-white font-bold text-sm whitespace-nowrap">
                고객 만족도 99%
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/30 shadow-lg hover:scale-105 transition-transform">
              <BiSupport className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div className="text-white font-bold text-sm whitespace-nowrap">
                24시간 지원
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Persona Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            이런 분들을 위한 서비스입니다
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            SNS 계정 성장이 필요한 모든 분들께 최적화된 솔루션을 제공합니다
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Persona 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                인플루언서 지망생
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                "팔로워 1천 명도 안 되니까 협찬도 안 들어오고... 빠르게 계정을
                키울 방법이 없을까?"
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>빠른 계정 성장</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>신뢰할 수 있는 서비스</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>합리적 가격</span>
                </div>
              </div>
            </div>

            {/* Persona 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">소상공인</h3>
              <p className="text-gray-600 text-sm mb-4">
                "카페 인스타 계정 관리할 시간도 없는데 손님은 늘려야 하고... SNS
                마케팅 효과를 빠르게 보고 싶어요"
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>시간 절약</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>즉각적 효과</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>간편한 구매</span>
                </div>
              </div>
            </div>

            {/* Persona 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                마케팅 대행사
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                "클라이언트 계정 20개를 관리하는데, 초기 성장 단계에서 빠르게
                수치를 만들어야 해요"
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>대량 구매</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>안정적 공급</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  <span>다양한 플랫폼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              우리의 미션
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SNS핫딜은 개인 크리에이터부터 소상공인, 마케팅 대행사까지 모든
              분들이 SNS에서 성공할 수 있도록 돕습니다. 우리는 단순히 숫자를
              늘리는 것이 아니라, 진정한 성장을 위한 발판을 제공합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">목표 달성</h3>
                <p className="text-sm text-gray-600">
                  빠르고 효과적인
                  <br />
                  계정 성장 지원
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">안전 보장</h3>
                <p className="text-sm text-gray-600">
                  계정 보안을
                  <br />
                  최우선으로
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="font-bold text-gray-900 mb-2">품질 우선</h3>
                <p className="text-sm text-gray-600">
                  고품질 서비스로
                  <br />
                  만족도 극대화
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Services Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          지원 플랫폼
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Instagram, YouTube, TikTok, X(Twitter) 등 주요 SNS 플랫폼의 성장을
          지원합니다
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Instagram Card */}
          <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaInstagram className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instagram</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              팔로워, 좋아요, 조회수
              <br />
              인스타그램 계정 성장
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                팔로워 늘리기
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                좋아요 & 댓글
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                스토리 조회수
              </li>
            </ul>
            <Link
              href="/instagram"
              className="inline-flex items-center font-semibold group-hover:underline"
              style={{ color: "#EB5644" }}
            >
              자세히 보기
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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

          {/* YouTube Card */}
          <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaYoutube className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">YouTube</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              구독자, 조회수, 좋아요
              <br />
              유튜브 채널 성장
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                구독자 증가
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                조회수 늘리기
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                좋아요 & 댓글
              </li>
            </ul>
            <Link
              href="/youtube"
              className="inline-flex items-center font-semibold group-hover:underline"
              style={{ color: "#EB5644" }}
            >
              자세히 보기
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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

          {/* TikTok Card */}
          <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-800 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaTiktok className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">TikTok</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              팔로워, 좋아요, 조회수
              <br />
              틱톡 계정 성장
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                팔로워 늘리기
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                좋아요 & 댓글
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                영상 조회수
              </li>
            </ul>
            <Link
              href="/tiktok"
              className="inline-flex items-center font-semibold group-hover:underline"
              style={{ color: "#EB5644" }}
            >
              자세히 보기
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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

          {/* X (Twitter) Card */}
          <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaXTwitter className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              X (Twitter)
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              팔로워, 리트윗, 좋아요
              <br />X 계정 성장
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                팔로워 늘리기
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                리트윗 & 좋아요
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                트윗 노출 증가
              </li>
            </ul>
            <Link
              href="/x"
              className="inline-flex items-center font-semibold group-hover:underline"
              style={{ color: "#EB5644" }}
            >
              자세히 보기
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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

      {/* Detailed Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          상세 서비스 특징
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: "#FDE5E2", color: "#EB5644" }}
            >
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                검증된 실적
              </h3>
              <p className="text-gray-600">
                1,000개 이상의 계정 성장을 지원한 경험과 노하우를 보유하고
                있습니다.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: "#FDE5E2", color: "#EB5644" }}
            >
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                투명한 프로세스
              </h3>
              <p className="text-gray-600">
                명확한 가격 정책과 진행 상황을 실시간으로 확인할 수 있는
                시스템을 제공합니다.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: "#FDE5E2", color: "#EB5644" }}
            >
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                안전한 서비스
              </h3>
              <p className="text-gray-600">
                플랫폼 정책을 준수하는 안전한 방식으로 서비스를 제공하여 계정
                보안을 지킵니다.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: "#FDE5E2", color: "#EB5644" }}
            >
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                합리적인 가격
              </h3>
              <p className="text-gray-600">
                업계 최고 수준의 가성비를 자랑하며, 필요한 만큼만 선택하여
                구매할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          고객 후기
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          SNS핫딜을 이용한 고객들의 생생한 후기입니다
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Review 1 - Instagram */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaUser className="text-lg text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">minj00****</div>
                  <div className="text-sm text-gray-500">쇼핑몰 운영자</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-50 rounded-lg border border-purple-100 flex-shrink-0">
                <FaInstagram className="text-purple-600 text-xs" />
                <span className="text-xs font-semibold text-purple-700">
                  팔로워
                </span>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              "처음엔 반신반의했는데 실제 팔로워 늘면서 매출도 오르더라구요.
              이제는 단골 고객입니다!"
            </p>
          </div>

          {/* Review 2 - YouTube */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <FaUser className="text-lg text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">dkagh2003****</div>
                  <div className="text-sm text-gray-500">게임 유튜버</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-red-50 rounded-lg border border-red-100 flex-shrink-0">
                <FaYoutube className="text-red-600 text-xs" />
                <span className="text-xs font-semibold text-red-700">
                  구독자
                </span>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              "구독자 1000명 달성해서 드디어 수익화 시작했어요! 실제 시청하는
              구독자라 조회수도 늘었습니다."
            </p>
          </div>

          {/* Review 3 - TikTok */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-pink-500 flex items-center justify-center">
                  <FaUser className="text-lg text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">tjdus88****</div>
                  <div className="text-sm text-gray-500">댄스 틱톡커</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-200 flex-shrink-0">
                <FaTiktok className="text-gray-900 text-xs" />
                <span className="text-xs font-semibold text-gray-700">
                  조회수
                </span>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              "조회수 100만 넘었어요! For You 페이지에 계속 올라가고 팔로워도
              폭발적으로 늘었습니다."
            </p>
          </div>

          {/* Review 4 - Student */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                  <FaUser className="text-lg text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">qwer1234****</div>
                  <div className="text-sm text-gray-500">고등학생</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-50 rounded-lg border border-purple-100 flex-shrink-0">
                <FaInstagram className="text-purple-600 text-xs" />
                <span className="text-xs font-semibold text-purple-700">
                  좋아요
                </span>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              "용돈으로 시작했는데 인스타 팔로워 늘면서 친구들 사이에서 인기
              많아졌어요. 가격도 저렴해요!"
            </p>
          </div>

          {/* Review 5 - X(Twitter) */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                  <FaUser className="text-lg text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">rkdwl77****</div>
                  <div className="text-sm text-gray-500">IT 인플루언서</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-200 flex-shrink-0">
                <FaXTwitter className="text-gray-900 text-xs" />
                <span className="text-xs font-semibold text-gray-700">
                  팔로워
                </span>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              "X 팔로워 늘면서 트윗 반응이 확 달라졌어요. 이제 업계에서 인정받는
              인플루언서가 됐습니다!"
            </p>
          </div>

          {/* Review 6 - Business */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                  <FaUser className="text-lg text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">ghkd5520****</div>
                  <div className="text-sm text-gray-500">
                    스마트스토어 운영자
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-50 rounded-lg border border-purple-100 flex-shrink-0">
                <FaInstagram className="text-purple-600 text-xs" />
                <span className="text-xs font-semibold text-purple-700">
                  팔로워
                </span>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              "인스타 팔로워 늘면서 매출이 3배 증가했어요. SNS 마케팅 효과가
              이렇게 좋을 줄 몰랐습니다!"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-white py-20"
        style={{ background: "linear-gradient(to right, #EB5644, #B63D2F)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-100">
              SNS 계정 성장을 위한 첫 걸음을 내딛어보세요
              <br />
              빠르고 안전하게, 그리고 합리적으로
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).ht) {
                    (window as any).ht.open();
                  }
                }}
                className="bg-white hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ color: "#EB5644", cursor: "pointer" }}
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
