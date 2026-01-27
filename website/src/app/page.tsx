"use client";

import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaUser,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineCheckCircle, HiOutlineStar } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  // JSON-LD 스키마를 동적으로 추가
  useEffect(() => {
    const siteUrl = window.location.origin;
    
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: siteUrl,
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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

        {/* Fire-like Motion Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Fire Particles */}
          <div className="absolute top-10 left-[10%] w-32 h-32 md:w-48 md:h-48 bg-gradient-to-t from-orange-500/30 via-red-500/20 to-transparent rounded-full blur-2xl animate-fire-rise"></div>
          <div
            className="absolute top-20 right-[15%] w-40 h-40 md:w-56 md:h-56 bg-gradient-to-t from-red-500/30 via-orange-500/20 to-transparent rounded-full blur-2xl animate-fire-rise"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-[20%] w-36 h-36 md:w-52 md:h-52 bg-gradient-to-t from-orange-600/30 via-red-400/20 to-transparent rounded-full blur-2xl animate-fire-rise"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Medium Fire Particles */}
          <div
            className="absolute top-[30%] left-[5%] w-24 h-24 md:w-36 md:h-36 bg-gradient-to-t from-red-400/25 via-orange-400/15 to-transparent rounded-full blur-xl animate-fire-rise"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-[40%] right-[8%] w-28 h-28 md:w-40 md:h-40 bg-gradient-to-t from-orange-500/25 via-red-500/15 to-transparent rounded-full blur-xl animate-fire-rise"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-[30%] right-[20%] w-26 h-26 md:w-38 md:h-38 bg-gradient-to-t from-red-500/25 via-orange-500/15 to-transparent rounded-full blur-xl animate-fire-rise"
            style={{ animationDelay: "2.5s" }}
          ></div>

          {/* Small Fire Particles */}
          <div className="absolute top-[50%] left-[15%] w-20 h-20 md:w-28 md:h-28 bg-gradient-to-t from-orange-400/20 via-red-400/10 to-transparent rounded-full blur-lg animate-fire-rise-fast"></div>
          <div
            className="absolute top-[60%] right-[12%] w-18 h-18 md:w-24 md:h-24 bg-gradient-to-t from-red-400/20 via-orange-400/10 to-transparent rounded-full blur-lg animate-fire-rise-fast"
            style={{ animationDelay: "0.8s" }}
          ></div>
          <div
            className="absolute bottom-[40%] left-[25%] w-16 h-16 md:w-22 md:h-22 bg-gradient-to-t from-orange-500/20 via-red-500/10 to-transparent rounded-full blur-lg animate-fire-rise-fast"
            style={{ animationDelay: "1.8s" }}
          ></div>

          {/* Extra Glow Effects */}
          <div className="absolute top-[25%] left-[30%] w-32 h-32 md:w-44 md:h-44 bg-yellow-400/15 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-[35%] right-[25%] w-36 h-36 md:w-48 md:h-48 bg-orange-400/15 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1.2s" }}
          ></div>
        </div>

        {/* Sparkle Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Sparkles */}
          <div className="absolute top-[15%] left-[12%] w-3 h-3 bg-white rounded-full animate-sparkle"></div>
          <div
            className="absolute top-[20%] right-[18%] w-2.5 h-2.5 bg-yellow-200 rounded-full animate-sparkle"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-[35%] right-[25%] w-3 h-3 bg-white rounded-full animate-sparkle"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-[28%] left-[15%] w-2.5 h-2.5 bg-yellow-100 rounded-full animate-sparkle"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Medium Sparkles */}
          <div className="absolute top-[25%] left-[20%] w-2 h-2 bg-white rounded-full animate-sparkle-fast"></div>
          <div
            className="absolute top-[45%] right-[15%] w-2 h-2 bg-yellow-200 rounded-full animate-sparkle-fast"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-white rounded-full animate-sparkle-fast"
            style={{ animationDelay: "0.8s" }}
          ></div>

          {/* Small Sparkles */}
          <div className="absolute top-[18%] left-[25%] w-1.5 h-1.5 bg-yellow-100 rounded-full animate-twinkle"></div>
          <div
            className="absolute top-[30%] left-[8%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="absolute top-[50%] right-[20%] w-1.5 h-1.5 bg-yellow-200 rounded-full animate-twinkle"
            style={{ animationDelay: "0.7s" }}
          ></div>
          <div
            className="absolute bottom-[35%] left-[28%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="absolute bottom-[45%] right-[12%] w-1.5 h-1.5 bg-yellow-100 rounded-full animate-twinkle"
            style={{ animationDelay: "1.6s" }}
          ></div>

          {/* Extra Tiny Sparkles */}
          <div className="absolute top-[40%] left-[18%] w-1 h-1 bg-white rounded-full animate-twinkle-fast"></div>
          <div
            className="absolute top-[55%] right-[28%] w-1 h-1 bg-yellow-200 rounded-full animate-twinkle-fast"
            style={{ animationDelay: "0.6s" }}
          ></div>
          <div
            className="absolute bottom-[50%] left-[35%] w-1 h-1 bg-white rounded-full animate-twinkle-fast"
            style={{ animationDelay: "1.1s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-block mb-6 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-base md:text-lg font-bold shadow-lg border border-white/30 animate-bounce-slow">
            ⚡ 24시간 만에 계정이 달라집니다
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-5 font-extrabold drop-shadow-lg leading-tight">
            SNS 마케팅을 쉽고 빠르게
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
            인스타그램, 유튜브, 틱톡, X 계정 성장을 위한
            <br />
            <span className="text-yellow-200 font-bold">
              믿을 수 있는 SNS 마케팅 서비스
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://xn--sns-h84mk60k.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gray-50 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              style={{ color: "#EB5644" }}
            >
              <span className="flex items-center justify-center gap-2">
                지금 시작하기
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
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full hover:scale-105 transition-transform">
              <HiOutlineCheckCircle className="w-7 h-7 text-green-400 flex-shrink-0" />
              <div className="text-white font-bold text-sm whitespace-nowrap">
                실제 유저 100%
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full hover:scale-105 transition-transform">
              <HiOutlineStar className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div className="text-white font-bold text-sm whitespace-nowrap">
                고객 만족도 99%
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full hover:scale-105 transition-transform">
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

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          주요 서비스
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
            <a
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
            </a>
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
            <a
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
            </a>
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
            <a
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
            </a>
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
            <a
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
            </a>
          </div>
        </div>
      </section>

      {/* Differentiation Section - 원페이저 섹션 5 반영 */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            왜 SNS핫딜을 선택해야 할까요?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            주문 즉시 시작되는 빠른 서비스, 안전한 계정 관리, 합리적인 가격으로
            <br />
            SNS 계정 성장을 지원합니다
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                빠른 효과
              </h3>
              <p className="text-gray-600 leading-relaxed">
                주문 후 즉시 시작되는
                <br />
                빠른 서비스 제공으로
                <br />
                시간 낭비 없이 성장
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                안전한 서비스
              </h3>
              <p className="text-gray-600 leading-relaxed">
                계정 보안을 최우선으로
                <br />
                안전하게 진행하여
                <br />
                걱정 없는 성장
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                합리적 가격
              </h3>
              <p className="text-gray-600 leading-relaxed">
                필요한 만큼만 선택해서
                <br />
                합리적으로 구매하는
                <br />
                유연한 옵션
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SNS 마케팅 인사이트
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SNS 계정 성장을 위한 실전 노하우와 최신 트렌드를 공유합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {/* Blog Post 1 */}
          <a
            href="/blog/instagram-follower-growth"
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <FaInstagram className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full">
                  Instagram
                </span>
                <span className="text-gray-400 text-xs">2024.01.15</span>
              </div>
              <h3
                className="text-xl font-bold mb-2 transition-colors"
                style={{ color: "#111827" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EB5644")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#111827")}
              >
                인스타그램 팔로워 늘리는 5가지 방법
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                실제로 효과 본 인스타그램 계정 성장 전략을 공유합니다. 초보자도
                쉽게 따라할 수 있어요.
              </p>
              <div
                className="flex items-center font-semibold text-sm group-hover:underline"
                style={{ color: "#EB5644" }}
              >
                읽기
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
              </div>
            </div>
          </a>

          {/* Blog Post 2 */}
          <a
            href="/blog/youtube-algorithm-guide"
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="aspect-video bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <FaYoutube className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                  YouTube
                </span>
                <span className="text-gray-400 text-xs">2024.01.12</span>
              </div>
              <h3
                className="text-xl font-bold mb-2 transition-colors"
                style={{ color: "#111827" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EB5644")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#111827")}
              >
                유튜브 알고리즘 완전 정복 가이드
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                2024년 유튜브 알고리즘의 변화와 구독자를 늘리는 최신 전략을
                알려드립니다.
              </p>
              <div
                className="flex items-center font-semibold text-sm group-hover:underline"
                style={{ color: "#EB5644" }}
              >
                읽기
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
              </div>
            </div>
          </a>

          {/* Blog Post 3 */}
          <a
            href="/blog/tiktok-viral-strategy"
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
              <FaTiktok className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  TikTok
                </span>
                <span className="text-gray-400 text-xs">2024.01.10</span>
              </div>
              <h3
                className="text-xl font-bold mb-2 transition-colors"
                style={{ color: "#111827" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EB5644")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#111827")}
              >
                틱톡에서 바이럴 일으키는 법
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                조회수 100만을 달성한 크리에이터들의 비법을 공개합니다.
              </p>
              <div
                className="flex items-center font-semibold text-sm group-hover:underline"
                style={{ color: "#EB5644" }}
              >
                읽기
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
              </div>
            </div>
          </a>
        </div>

        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 transition-all"
            style={{ borderColor: "#E5E7EB" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#EB5644";
              e.currentTarget.style.color = "#EB5644";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.color = "#111827";
            }}
          >
            블로그 전체보기
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
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          고객 후기
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          SNS핫딜을 이용한 고객들의 생생한 후기입니다
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Review 1 - Instagram */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <FaUser className="text-lg text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">qlwk92****</div>
                  <div className="text-sm text-gray-500">패션 인플루언서</div>
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
              "인스타 팔로워가 2주 만에 1천 명 넘었어요! 협찬 제의도 들어오기
              시작했습니다. 정말 감사해요!"
            </p>
          </div>

          {/* Review 2 - YouTube */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center">
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

        <div className="text-center mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#EB5644] to-[#D84A3A] hover:from-[#D84A3A] hover:to-[#B63D2F] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            더 많은 후기 보기
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
