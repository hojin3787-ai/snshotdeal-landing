import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from 'react-icons/fa';
import { FaXTwitter, FaThreads } from 'react-icons/fa6';
import { SiKakaotalk } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="text-gray-400" style={{ backgroundColor: '#2D2D2D' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <img 
              src="/logo.png" 
              alt="SNS핫딜 로고" 
              style={{ height: '40px', width: 'auto' }}
              className="mb-4"
            />
            <p className="text-sm mb-4">
              SNS 마케팅을 쉽고 빠르게<br />
              믿을 수 있는 성장 파트너
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                <FaTiktok className="w-6 h-6" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Threads">
                <FaThreads className="w-6 h-6" />
              </a>
              <a href="https://www.kakaocorp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="KakaoTalk">
                <SiKakaotalk className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/instagram" className="hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="/youtube" className="hover:text-white transition-colors">YouTube</Link></li>
              <li><Link href="/tiktok" className="hover:text-white transition-colors">TikTok</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">가격 안내</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
              <li><Link href="/notice" className="hover:text-white transition-colors">공지사항</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
              <li><Link href="/guide" className="hover:text-white transition-colors">이용 가이드</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">법적 고지</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">이용약관</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">환불 정책</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: '#3D3D3D' }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start text-sm gap-4">
            <div>
              <h4 className="text-white font-semibold mb-4">SNS핫딜 사업자정보</h4>
              <div className="space-y-2">
                <div className="flex gap-8">
                  <span className="text-gray-500 w-32">주식회사</span>
                  <span className="text-gray-300">(주)핫셀러</span>
                </div>
                <div className="flex gap-8">
                  <span className="text-gray-500 w-32">대표이사</span>
                  <span className="text-gray-300">윤찬연</span>
                </div>
                <div className="flex gap-8">
                  <span className="text-gray-500 w-32">주소</span>
                  <span className="text-gray-300">서울 동대문구 장한로6, 605호(장안동, 장안빌딩)</span>
                </div>
                <div className="flex gap-8">
                  <span className="text-gray-500 w-32">사업자등록번호</span>
                  <span className="text-gray-300">122-88-01442</span>
                </div>
                <div className="flex gap-8">
                  <span className="text-gray-500 w-32">통신판매번호</span>
                  <span className="text-gray-300">2022-서울동대문-0159</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500">
              © 2026 SNS핫딜. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

