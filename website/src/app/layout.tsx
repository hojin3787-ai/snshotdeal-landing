import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--sns-h84mk60k.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SNS핫딜 - SNS 마케팅을 쉽고 빠르게",
  description:
    "인스타그램, 유튜브, 틱톡 계정 성장을 위한 믿을 수 있는 SNS 마케팅 서비스. 팔로워, 좋아요, 조회수 증가 서비스를 제공합니다.",
  keywords: [
    "인스타 팔로워 구매",
    "SNS 마케팅",
    "유튜브 조회수",
    "틱톡 팔로워",
    "팔로워 늘리기",
  ],
  verification: {
    // 구글 서치콘솔: https://search.google.com/search-console 에서 확인 코드 받아서 교체
    google: "ZphvXU-ZspQEwbBzJrN5QFrCNe8mIs8ua8Eh_iGUe6c",
    // 네이버 서치어드바이저: https://searchadvisor.naver.com 에서 확인 코드 받아서 교체
    other: {
      "naver-site-verification": "YOUR_NAVER_VERIFICATION_CODE",
    },
  },
  openGraph: {
    title: "SNS핫딜 - SNS 마케팅을 쉽고 빠르게",
    description:
      "인스타그램, 유튜브, 틱톡 계정 성장을 위한 믿을 수 있는 SNS 마케팅 서비스",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SNS핫딜",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNS핫딜 - SNS 마케팅을 쉽고 빠르게",
    description:
      "인스타그램, 유튜브, 틱톡 계정 성장을 위한 믿을 수 있는 SNS 마케팅 서비스",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--sns-h84mk60k.com";
  
  // JSON-LD 구조화 데이터
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SNS핫딜",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "인스타그램, 유튜브, 틱톡 계정 성장을 위한 믿을 수 있는 SNS 마케팅 서비스",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "고객 지원",
      availableLanguage: ["ko"],
    },
    sameAs: [
      "https://www.instagram.com/snshotdeal",
      "https://www.youtube.com/@snshotdeal",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SNS핫딜",
    url: siteUrl,
    description: "SNS 마케팅을 쉽고 빠르게",
    inLanguage: "ko-KR",
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <Script id="happytalk-init" strategy="beforeInteractive">
          {`
            var ht = null;
            (function(id, scriptSrc, callback) {
                var prevHt = document.getElementById(id);
                if (prevHt) return;

                var d = document,
                    tagName = 'script',
                    $script = d.createElement(tagName),
                    $element = d.getElementsByTagName(tagName)[0];

                $script.id = id;
                $script.async = true;
                $script.src = scriptSrc;

                if (callback) { $script.addEventListener('load', function (e) { callback(null, e); }, false); }
                $element.parentNode.insertBefore($script, $element);
            })('happytalkSDK', 'https://chat-static.happytalkio.com/sdk/happytalk.chat.v2.min.js', function() {
                ht = new Happytalk({
                  siteId: '5000101173',
                  siteName: 'SNS핫딜',
                  categoryId: '194681',
                  divisionId: '194682'
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
