const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Head() {
  const title = "서비스 소개 | SNS핫딜";
  const description =
    "인스타그램, 유튜브, 틱톡, X 등 주요 SNS 플랫폼 성장을 위한 마케팅 서비스를 소개합니다. 빠르고 안전한 계정 성장 솔루션을 확인하세요.";
  const url = `${siteUrl}/services`;
  const ogImage = `${siteUrl}/og.png`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}

