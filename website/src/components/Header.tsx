'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="SNS핫딜 로고" 
              style={{ height: '40px', width: 'auto' }}
              className="hover:opacity-90 transition-opacity md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
              서비스 소개
            </Link>
            <div className="relative group">
              <button className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                플랫폼
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/instagram" className="block px-4 py-3 text-gray-900 rounded-t-lg transition-colors" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FEF2F1'; e.currentTarget.style.color = '#EB5644'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#111827'; }}>
                  Instagram
                </Link>
                <Link href="/youtube" className="block px-4 py-3 text-gray-900 transition-colors" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FEF2F1'; e.currentTarget.style.color = '#EB5644'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#111827'; }}>
                  YouTube
                </Link>
                <Link href="/tiktok" className="block px-4 py-3 text-gray-900 transition-colors" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FEF2F1'; e.currentTarget.style.color = '#EB5644'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#111827'; }}>
                  TikTok
                </Link>
                <Link href="/x" className="block px-4 py-3 text-gray-900 rounded-b-lg transition-colors" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FEF2F1'; e.currentTarget.style.color = '#EB5644'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#111827'; }}>
                  X(Twitter)
                </Link>
              </div>
            </div>
            <Link href="/pricing" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
              가격 안내
            </Link>
            <Link href="/reviews" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
              리뷰
            </Link>
            <Link href="/blog" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
              블로그
            </Link>
            <Link href="/why" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
              WHY SNS핫딜
            </Link>
            <Link href="/faq" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://xn--sns-h84mk60k.com/?signinPage" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors hover:bg-gray-100">
              로그인
            </a>
            <a href="https://xn--sns-h84mk60k.com/?signupPage" target="_blank" rel="noopener noreferrer" className="text-white font-semibold px-5 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg" style={{ backgroundColor: '#EB5644' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D84A3A'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB5644'}>
              회원가입
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/services" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                서비스 소개
              </Link>
              <div>
                <div className="font-medium text-gray-900 mb-2">플랫폼</div>
                <Link href="/instagram" className="block pl-4 py-2 text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                  Instagram
                </Link>
                <Link href="/youtube" className="block pl-4 py-2 text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                  YouTube
                </Link>
                <Link href="/tiktok" className="block pl-4 py-2 text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                  TikTok
                </Link>
                <Link href="/x" className="block pl-4 py-2 text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                  X(Twitter)
                </Link>
              </div>
              <Link href="/pricing" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                가격 안내
              </Link>
              <Link href="/reviews" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                리뷰
              </Link>
              <Link href="/blog" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                블로그
              </Link>
              <Link href="/why" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                WHY SNS핫딜
              </Link>
              <Link href="/faq" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                FAQ
              </Link>
              
              <div className="border-t border-gray-200 my-3"></div>
              
              <a href="https://xn--sns-h84mk60k.com/?signinPage" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#EB5644'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                로그인
              </a>
              <a href="https://xn--sns-h84mk60k.com/?signupPage" target="_blank" rel="noopener noreferrer" className="text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors mt-2" style={{ backgroundColor: '#EB5644' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D84A3A'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB5644'}>
                회원가입
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

