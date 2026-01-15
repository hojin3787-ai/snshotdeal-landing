"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaCheck,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { SiKakaotalk } from "react-icons/si";
import { useState } from "react";

export default function PricingPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("instagram");

  const platforms = [
    { id: "instagram", name: "Instagram", icon: FaInstagram, color: "#E4405F" },
    { id: "youtube", name: "YouTube", icon: FaYoutube, color: "#FF0000" },
    { id: "tiktok", name: "TikTok", icon: FaTiktok, color: "#000000" },
    { id: "twitter", name: "X(트위터)", icon: FaXTwitter, color: "#000000" },
    { id: "facebook", name: "Facebook", icon: FaFacebook, color: "#1877F2" },
    { id: "threads", name: "Threads", icon: FaThreads, color: "#000000" },
    { id: "kakao", name: "카카오톡", icon: SiKakaotalk, color: "#FEE500" },
  ];

  // 실제 사이트 데이터 기반 가격표 (1000개당 금액을 1로 나눈 금액)
  const pricingData: any = {
    instagram: {
      followers: [
        {
          name: "🇰🇷 실제 한국인 팔로워",
          price: 110,
          minOrder: 5,
          maxOrder: 40000,
          description:
            "실제 한국인 일반 사용자, 비공개 계정, 일상피드 계정 등 혼합",
          startTime: "1분 이내",
          speed: "분당 100~300개",
        },
        {
          name: "🌏 글로벌 팔로워 [고품질]",
          price: 19,
          minOrder: 10,
          maxOrder: 100000,
          description: "고품질 해외 팔로워, 프로필 사진 및 게시물 보유",
          startTime: "1~2시간",
          speed: "분당 50~150개",
        },
        {
          name: "🎯 타겟팅 팔로워",
          price: 85,
          minOrder: 10,
          maxOrder: 50000,
          description: "관심사 기반 타겟팅 팔로워",
          startTime: "1~3시간",
          speed: "일 300~500개",
        },
      ],
      likes: [
        {
          name: "🇰🇷 한국인 좋아요 [최고급]",
          price: 15,
          minOrder: 10,
          maxOrder: 100000,
          description: "실제 한국인 좋아요",
          startTime: "1~5분",
          speed: "분당 200~500개",
        },
        {
          name: "⚡ 실시간 좋아요 [초고속]",
          price: 8,
          minOrder: 10,
          maxOrder: 200000,
          description: "빠른 좋아요 증가",
          startTime: "즉시",
          speed: "분당 500~1000개",
        },
        {
          name: "🌟 프리미엄 좋아요",
          price: 12,
          minOrder: 10,
          maxOrder: 150000,
          description: "고품질 계정 좋아요",
          startTime: "5~10분",
          speed: "분당 300~600개",
        },
      ],
      reels: [
        {
          name: "🎬 릴스 조회수 [한국]",
          price: 7,
          minOrder: 100,
          maxOrder: 1000000,
          description: "한국 IP 릴스 조회수",
          startTime: "1~5분",
          speed: "시간당 1만~3만개",
        },
        {
          name: "🔥 릴스 조회수 [고품질]",
          price: 5,
          minOrder: 100,
          maxOrder: 2000000,
          description: "고품질 릴스 조회수",
          startTime: "5~15분",
          speed: "시간당 2만~5만개",
        },
        {
          name: "❤️ 릴스 좋아요 [한국]",
          price: 12,
          minOrder: 10,
          maxOrder: 50000,
          description: "한국 사용자 릴스 좋아요",
          startTime: "1~10분",
          speed: "분당 100~300개",
        },
      ],
      comments: [
        {
          name: "💬 한국어 댓글 [맞춤형]",
          price: 300,
          minOrder: 5,
          maxOrder: 1000,
          description: "원하는 내용의 한국어 댓글 작성",
          startTime: "1~24시간",
          speed: "일 10~50개",
        },
        {
          name: "📝 영문 댓글 [자동]",
          price: 80,
          minOrder: 10,
          maxOrder: 5000,
          description: "자동 영문 댓글",
          startTime: "1~3시간",
          speed: "일 50~200개",
        },
      ],
    },
    youtube: {
      views: [
        {
          name: "🇰🇷 한국 조회수 [최고급]",
          price: 90,
          minOrder: 100,
          maxOrder: 100000,
          description: "한국 IP 실제 시청, 시청시간 포함",
          startTime: "1~3시간",
          speed: "일 5천~1만개",
        },
        {
          name: "🌍 글로벌 조회수 [고품질]",
          price: 15,
          minOrder: 100,
          maxOrder: 10000000,
          description: "전세계 실제 조회수",
          startTime: "1~6시간",
          speed: "일 1만~5만개",
        },
        {
          name: "⚡ 빠른 조회수",
          price: 8,
          minOrder: 1000,
          maxOrder: 50000000,
          description: "빠른 조회수 증가",
          startTime: "즉시~1시간",
          speed: "일 10만~50만개",
        },
      ],
      subscribers: [
        {
          name: "🇰🇷 한국인 구독자 [최고급]",
          price: 400,
          minOrder: 10,
          maxOrder: 10000,
          description: "실제 한국인 구독자",
          startTime: "6~24시간",
          speed: "일 50~200개",
        },
        {
          name: "🌏 글로벌 구독자 [고품질]",
          price: 45,
          minOrder: 50,
          maxOrder: 100000,
          description: "전세계 실제 구독자",
          startTime: "1~6시간",
          speed: "일 200~1000개",
        },
        {
          name: "⚡ 빠른 구독자",
          price: 25,
          minOrder: 100,
          maxOrder: 500000,
          description: "빠른 구독자 증가",
          startTime: "즉시~2시간",
          speed: "일 500~2000개",
        },
      ],
      likes: [
        {
          name: "👍 좋아요 [고품질]",
          price: 35,
          minOrder: 50,
          maxOrder: 100000,
          description: "실제 사용자 좋아요",
          startTime: "1~6시간",
          speed: "일 500~2000개",
        },
        {
          name: "⚡ 빠른 좋아요",
          price: 20,
          minOrder: 100,
          maxOrder: 200000,
          description: "빠른 좋아요 증가",
          startTime: "즉시~2시간",
          speed: "일 1000~5000개",
        },
      ],
      watchTime: [
        {
          name: "⏱️ 시청시간 [4000시간]",
          price: 2500000,
          minOrder: 1,
          maxOrder: 100,
          description: "수익창출 조건 충족용 4000시간",
          startTime: "1~7일",
          speed: "일 500~1000시간",
        },
      ],
    },
    tiktok: {
      views: [
        {
          name: "🎵 틱톡 조회수 [한국]",
          price: 12,
          minOrder: 100,
          maxOrder: 10000000,
          description: "한국 IP 조회수",
          startTime: "1~3시간",
          speed: "일 1만~5만개",
        },
        {
          name: "🌍 틱톡 조회수 [글로벌]",
          price: 6,
          minOrder: 100,
          maxOrder: 50000000,
          description: "전세계 조회수",
          startTime: "즉시~1시간",
          speed: "일 5만~20만개",
        },
        {
          name: "⚡ 빠른 조회수",
          price: 4,
          minOrder: 1000,
          maxOrder: 100000000,
          description: "초고속 조회수",
          startTime: "즉시",
          speed: "일 10만~50만개",
        },
      ],
      likes: [
        {
          name: "❤️ 틱톡 좋아요 [한국]",
          price: 22,
          minOrder: 10,
          maxOrder: 500000,
          description: "한국 사용자 좋아요",
          startTime: "1~5시간",
          speed: "일 500~2000개",
        },
        {
          name: "💜 틱톡 좋아요 [글로벌]",
          price: 9,
          minOrder: 10,
          maxOrder: 2000000,
          description: "전세계 좋아요",
          startTime: "즉시~2시간",
          speed: "일 1000~5000개",
        },
      ],
      followers: [
        {
          name: "👥 틱톡 팔로워 [한국]",
          price: 100,
          minOrder: 10,
          maxOrder: 50000,
          description: "한국 사용자 팔로워",
          startTime: "1~6시간",
          speed: "일 200~1000개",
        },
        {
          name: "🌏 틱톡 팔로워 [글로벌]",
          price: 35,
          minOrder: 50,
          maxOrder: 500000,
          description: "전세계 팔로워",
          startTime: "즉시~3시간",
          speed: "일 500~3000개",
        },
      ],
      shares: [
        {
          name: "🔄 공유하기",
          price: 50,
          minOrder: 10,
          maxOrder: 100000,
          description: "틱톡 영상 공유",
          startTime: "1~6시간",
          speed: "일 100~500개",
        },
        {
          name: "💾 저장하기",
          price: 45,
          minOrder: 10,
          maxOrder: 100000,
          description: "틱톡 영상 저장",
          startTime: "1~6시간",
          speed: "일 100~500개",
        },
      ],
    },
    twitter: {
      followers: [
        {
          name: "🇰🇷 한국인 팔로워",
          price: 280,
          minOrder: 10,
          maxOrder: 10000,
          description: "한국 사용자 팔로워",
          startTime: "1~12시간",
          speed: "일 50~200개",
        },
        {
          name: "🌍 글로벌 팔로워 [고품질]",
          price: 80,
          minOrder: 10,
          maxOrder: 100000,
          description: "전세계 팔로워",
          startTime: "즉시~6시간",
          speed: "일 200~1000개",
        },
        {
          name: "⚡ 빠른 팔로워",
          price: 45,
          minOrder: 50,
          maxOrder: 500000,
          description: "빠른 팔로워 증가",
          startTime: "즉시~2시간",
          speed: "일 500~2000개",
        },
      ],
      retweets: [
        {
          name: "🔄 리트윗 [고품질]",
          price: 120,
          minOrder: 10,
          maxOrder: 50000,
          description: "실제 사용자 리트윗",
          startTime: "1~6시간",
          speed: "일 100~500개",
        },
        {
          name: "⚡ 빠른 리트윗",
          price: 70,
          minOrder: 20,
          maxOrder: 100000,
          description: "빠른 리트윗",
          startTime: "즉시~3시간",
          speed: "일 200~1000개",
        },
      ],
      likes: [
        {
          name: "❤️ 좋아요 [고품질]",
          price: 90,
          minOrder: 10,
          maxOrder: 100000,
          description: "실제 사용자 좋아요",
          startTime: "즉시~3시간",
          speed: "일 200~1000개",
        },
        {
          name: "⚡ 빠른 좋아요",
          price: 50,
          minOrder: 20,
          maxOrder: 200000,
          description: "빠른 좋아요",
          startTime: "즉시~1시간",
          speed: "일 500~2000개",
        },
      ],
    },
    facebook: {
      likes: [
        {
          name: "👍 페이지 좋아요",
          price: 60,
          minOrder: 20,
          maxOrder: 100000,
          description: "페이지 좋아요",
          startTime: "1~6시간",
          speed: "일 200~1000개",
        },
        {
          name: "❤️ 게시물 좋아요",
          price: 45,
          minOrder: 20,
          maxOrder: 200000,
          description: "게시물 좋아요",
          startTime: "즉시~3시간",
          speed: "일 300~1500개",
        },
      ],
      followers: [
        {
          name: "👥 프로필 팔로워",
          price: 55,
          minOrder: 20,
          maxOrder: 100000,
          description: "프로필 팔로워",
          startTime: "1~6시간",
          speed: "일 200~1000개",
        },
        {
          name: "📄 페이지 팔로워",
          price: 50,
          minOrder: 20,
          maxOrder: 100000,
          description: "페이지 팔로워",
          startTime: "1~6시간",
          speed: "일 200~1000개",
        },
      ],
      comments: [
        {
          name: "💬 댓글 [맞춤형]",
          price: 250,
          minOrder: 5,
          maxOrder: 1000,
          description: "원하는 내용의 댓글 작성",
          startTime: "1~24시간",
          speed: "일 10~50개",
        },
      ],
    },
    threads: {
      followers: [
        {
          name: "👥 팔로워 [고품질]",
          price: 70,
          minOrder: 10,
          maxOrder: 50000,
          description: "스레드 팔로워",
          startTime: "1~6시간",
          speed: "일 200~1000개",
        },
      ],
      likes: [
        {
          name: "❤️ 좋아요",
          price: 55,
          minOrder: 10,
          maxOrder: 100000,
          description: "스레드 좋아요",
          startTime: "즉시~3시간",
          speed: "일 300~1500개",
        },
      ],
      reposts: [
        {
          name: "🔄 리포스트",
          price: 90,
          minOrder: 10,
          maxOrder: 50000,
          description: "스레드 리포스트",
          startTime: "1~6시간",
          speed: "일 100~500개",
        },
      ],
    },
    kakao: {
      channelFriends: [
        {
          name: "🇰🇷 실제 한국인 채널 플러스친구 추가",
          price: 210,
          minOrder: 10,
          maxOrder: 1000,
          description: "실제 한국인 일반 사용자가 플러스친구로 추가",
          startTime: "24시간 이내",
          speed: "5~7일",
        },
      ],
    },
  };

  const serviceNames: any = {
    instagram: {
      followers: "팔로워",
      likes: "좋아요",
      reels: "릴스",
      comments: "댓글",
    },
    youtube: {
      views: "조회수",
      subscribers: "구독자",
      likes: "좋아요",
      watchTime: "시청시간",
    },
    tiktok: {
      views: "조회수",
      likes: "좋아요",
      followers: "팔로워",
      shares: "공유/저장",
    },
    twitter: {
      followers: "팔로워",
      retweets: "리트윗",
      likes: "좋아요",
    },
    facebook: {
      likes: "좋아요",
      followers: "팔로워",
      comments: "댓글",
    },
    threads: {
      followers: "팔로워",
      likes: "좋아요",
      reposts: "리포스트",
    },
    kakao: {
      channelFriends: "채널 플러스친구",
    },
  };

  const currentPlatform = platforms.find((p) => p.id === selectedPlatform);
  const IconComponent = currentPlatform?.icon;

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
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              가격 안내
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              합리적인 가격으로 시작하는 SNS 성장
              <br />
              <span className="text-sm mt-2 block">
                모든 서비스는 실제 유저 100%, 안전한 계정 관리로 진행됩니다
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Platform Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              const isSelected = selectedPlatform === platform.id;

              return (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                  style={{
                    backgroundColor: isSelected ? platform.color : "#F3F4F6",
                    color: isSelected
                      ? platform.id === "kakao"
                        ? "#000"
                        : "white"
                      : "#6B7280",
                  }}
                >
                  <Icon className="text-base" />
                  <span>{platform.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Platform Title */}
            <div className="flex items-center justify-center gap-3 mb-12">
              {IconComponent && (
                <IconComponent
                  className="text-5xl"
                  style={{ color: currentPlatform?.color }}
                />
              )}
              <h2 className="text-4xl font-bold text-gray-900">
                {currentPlatform?.name} 가격표
              </h2>
            </div>

            {/* Service Tables */}
            <div className="space-y-12">
              {Object.entries(pricingData[selectedPlatform]).map(
                ([serviceKey, options]: [string, any]) => (
                  <div
                    key={serviceKey}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div
                      className="bg-gradient-to-r px-8 py-6"
                      style={{
                        background: `linear-gradient(to right, ${currentPlatform?.color}, ${currentPlatform?.color}dd)`,
                      }}
                    >
                      <h3
                        className="text-2xl font-bold"
                        style={{
                          color:
                            currentPlatform?.id === "kakao" ? "#000" : "#fff",
                        }}
                      >
                        {serviceNames[selectedPlatform][serviceKey]}
                      </h3>
                      <p
                        className="mt-1 text-sm"
                        style={{
                          color:
                            currentPlatform?.id === "kakao"
                              ? "#333"
                              : "rgba(255,255,255,0.8)",
                        }}
                      >
                        다양한 옵션으로 최적의 서비스를 제공합니다
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">
                              서비스명
                            </th>
                            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">
                              1개당 가격
                            </th>
                            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">
                              최소/최대 주문
                            </th>
                            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">
                              시작시간 / 속도
                            </th>
                            <th className="px-4 py-4 text-center text-sm font-semibold text-gray-900">
                              주문
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {options.map((option: any, idx: number) => (
                            <tr
                              key={idx}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-4 py-5">
                                <div className="space-y-1">
                                  <div className="font-bold text-gray-900">
                                    {option.name}
                                  </div>
                                  <div className="text-xs text-gray-500 max-w-xs">
                                    {option.description}
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-5">
                                <span className="text-xl md:text-2xl font-bold text-gray-900">
                                  {option.price.toLocaleString()}₩
                                </span>
                              </td>
                              <td className="px-4 py-5">
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div>
                                    최소: {option.minOrder.toLocaleString()}개
                                  </div>
                                  <div>
                                    최대: {option.maxOrder.toLocaleString()}개
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-5">
                                <div className="text-xs text-gray-600 space-y-1">
                                  <div>⏱️ {option.startTime}</div>
                                  <div>⚡ {option.speed}</div>
                                </div>
                              </td>
                              <td className="px-4 py-5 text-center">
                                <a
                                  href="https://xn--sns-h84mk60k.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block px-6 py-2 rounded-lg font-semibold text-white text-sm transition-all hover:shadow-lg"
                                  style={{ backgroundColor: "#EB5644" }}
                                >
                                  주문하기
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-gray-50 px-8 py-4 text-sm text-gray-600">
                      💡 다른 수량이나 맞춤형 서비스가 필요하신가요?{" "}
                      <Link
                        href="/contact"
                        className="text-red-600 font-semibold hover:underline"
                      >
                        문의하기
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Features */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  빠른 처리
                </h4>
                <p className="text-sm text-gray-700">
                  주문 후 즉시 시작되는 빠른 서비스로 시간 낭비 없이 성장
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  안전 보장
                </h4>
                <p className="text-sm text-gray-700">
                  계정 보안을 최우선으로 안전하게 진행하여 걱정 없는 성장
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="text-3xl mb-3">✅</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  100% 실제 유저
                </h4>
                <p className="text-sm text-gray-700">
                  봇이 아닌 실제 활동하는 유저만 제공하여 계정 신뢰도 향상
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              자주 묻는 질문
            </h2>

            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-gray-900 cursor-pointer text-lg">
                  결제 후 얼마나 빨리 시작되나요?
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  서비스에 따라 즉시~24시간 이내에 시작됩니다. 대부분의 서비스는
                  1~3시간 이내 시작되며, 구체적인 시작 시간은 각 서비스 설명을
                  참고해주세요.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-gray-900 cursor-pointer text-lg">
                  계정이 정지될 위험은 없나요?
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  저희는 실제 유저만 사용하여 100% 안전한 방식으로 서비스를
                  제공합니다. 플랫폼 정책을 준수하며, 자연스러운 속도로 진행하여
                  계정 안전을 최우선으로 합니다.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-gray-900 cursor-pointer text-lg">
                  팔로워가 줄어들 수 있나요?
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  실제 유저를 제공하지만, 일부 자연스러운 감소가 발생할 수
                  있습니다. 한국인 팔로워의 경우 24시간, 7일, 30일, 60일, 90일에
                  걸쳐 자동 검증 후 이탈 시 재작업이 진행됩니다.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-gray-900 cursor-pointer text-lg">
                  환불이 가능한가요?
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  서비스 시작 전에는 전액 환불이 가능합니다. 단순 변심/주문실수,
                  계정 비공개/삭제, 아이디 변경, 타사 상품 중복 사용의 경우
                  환불이 불가합니다.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-md">
                <summary className="font-semibold text-gray-900 cursor-pointer text-lg">
                  더 큰 수량도 주문 가능한가요?
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  네, 표에 없는 더 큰 수량도 주문 가능합니다. 대량 주문 시 할인
                  혜택도 제공되니 문의하기를 통해 상담받아보세요.
                </p>
              </details>
            </div>
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
            <p className="text-xl mb-8 text-white/90">
              합리적인 가격으로 SNS 계정을 성장시키세요
              <br />
              <span className="text-sm mt-2 block">
                궁금한 점이 있으신가요? 언제든 문의해주세요
              </span>
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
                href="/faq"
                className="text-white border-2 border-white/30 bg-white/10 hover:bg-white/20 font-semibold px-10 py-4 rounded-lg text-lg transition-all backdrop-blur-sm"
              >
                FAQ 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
