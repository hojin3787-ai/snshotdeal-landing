'use client';

import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: 'instagram-follower-growth',
      title: '인스타그램 팔로워 늘리는 5가지 방법',
      excerpt: '실제로 효과 본 인스타그램 계정 성장 전략을 공유합니다. 초보자도 쉽게 따라할 수 있어요.',
      category: 'Instagram',
      icon: FaInstagram,
      iconColor: '#E4405F',
      date: '2026.01.14',
      thumbnail: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80',
    },
    {
      id: 2,
      slug: 'youtube-algorithm-guide',
      title: '유튜브 알고리즘 완전 정복 가이드',
      excerpt: '조회수를 폭발적으로 늘리는 YouTube 알고리즘의 비밀을 알려드립니다.',
      category: 'YouTube',
      icon: FaYoutube,
      iconColor: '#FF0000',
      date: '2026.01.12',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      id: 3,
      slug: 'tiktok-viral-strategy',
      title: '틱톡에서 바이럴 일으키는 법',
      excerpt: '조회수 100만을 달성한 크리에이터들의 비법을 공개합니다.',
      category: 'TikTok',
      icon: FaTiktok,
      iconColor: '#000000',
      date: '2026.01.10',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    },
    {
      id: 4,
      slug: 'sns-content-strategy',
      title: '인스타그램 콘텐츠 전략 완벽 가이드',
      excerpt: '인스타그램 최적 콘텐츠 전략과 실전 노하우를 소개합니다.',
      category: 'Instagram',
      icon: FaInstagram,
      iconColor: '#E4405F',
      date: '2026.01.08',
      thumbnail: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80',
    },
    {
      id: 5,
      slug: 'youtube-shorts-tips',
      title: 'YouTube Shorts로 구독자 늘리기',
      excerpt: 'Shorts를 활용한 빠른 채널 성장 전략을 알려드립니다.',
      category: 'YouTube',
      icon: FaYoutube,
      iconColor: '#FF0000',
      date: '2026.01.05',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    },
    {
      id: 6,
      slug: 'tiktok-trends-2024',
      title: '2024 TikTok 트렌드 전망',
      excerpt: '올해 틱톡에서 주목해야 할 트렌드와 활용 방법을 소개합니다.',
      category: 'TikTok',
      icon: FaTiktok,
      iconColor: '#000000',
      date: '2026.01.03',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
      id: 7,
      slug: 'instagram-reels-mastery',
      title: '인스타그램 릴스 마스터하기',
      excerpt: '릴스로 도달률을 10배 높이는 실전 테크닉을 공개합니다.',
      category: 'Instagram',
      icon: FaInstagram,
      iconColor: '#E4405F',
      date: '2026.01.13',
      thumbnail: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
    },
    {
      id: 8,
      slug: 'youtube-seo-complete-guide',
      title: 'YouTube SEO 완벽 가이드',
      excerpt: '검색 노출을 극대화하는 유튜브 최적화 방법을 알려드립니다.',
      category: 'YouTube',
      icon: FaYoutube,
      iconColor: '#FF0000',
      date: '2026.01.11',
      thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80',
    },
    {
      id: 9,
      slug: 'tiktok-hashtag-strategy',
      title: '틱톡 해시태그 전략의 모든 것',
      excerpt: '해시태그만 잘 써도 조회수가 달라집니다. 실전 활용법을 공유해요.',
      category: 'TikTok',
      icon: FaTiktok,
      iconColor: '#000000',
      date: '2026.01.09',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    },
    {
      id: 10,
      slug: 'instagram-story-engagement',
      title: '인스타그램 스토리로 참여율 높이기',
      excerpt: '스토리 기능을 200% 활용하는 인터랙티브 전략을 소개합니다.',
      category: 'Instagram',
      icon: FaInstagram,
      iconColor: '#E4405F',
      date: '2026.01.07',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    },
    {
      id: 11,
      slug: 'youtube-thumbnail-design',
      title: '클릭을 부르는 유튜브 썸네일 디자인',
      excerpt: '클릭률(CTR)을 3배 높이는 썸네일 제작 노하우를 알려드립니다.',
      category: 'YouTube',
      icon: FaYoutube,
      iconColor: '#FF0000',
      date: '2026.01.06',
      thumbnail: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&q=80',
    },
    {
      id: 12,
      slug: 'tiktok-live-streaming-tips',
      title: '틱톡 라이브로 팔로워 폭발 성장시키기',
      excerpt: '라이브 방송을 활용한 빠른 팔로워 증가 전략을 공개합니다.',
      category: 'TikTok',
      icon: FaTiktok,
      iconColor: '#000000',
      date: '2026.01.04',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    },
  ];

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
              SNS 마케팅 블로그
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              SNS 성장을 위한 실전 전략과 최신 트렌드를 공유합니다
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: post.category === 'Instagram'
                            ? 'rgba(228, 64, 95, 0.9)'
                            : post.category === 'YouTube'
                            ? 'rgba(255, 0, 0, 0.9)'
                            : 'rgba(0, 0, 0, 0.9)',
                          color: '#ffffff',
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-xs">{post.date}</span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-2 transition-colors"
                      style={{ color: '#111827' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#EB5644')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#111827')}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div
                      className="flex items-center font-semibold text-sm group-hover:underline"
                      style={{ color: '#EB5644' }}
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
                </Link>
              );
            })}
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
              더 많은 정보가 필요하신가요?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              1:1 맞춤 상담으로 최적의 성장 전략을 제안해드립니다
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
                가격 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
