const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Head() {
  const title = "가격 안내 | SNS핫딜";
  const description =
    "인스타그램, 유튜브, 틱톡, X 등 서비스별 가격과 옵션을 한눈에 확인하세요. 자주 묻는 질문(FAQ)도 함께 안내합니다.";
  const url = `${siteUrl}/pricing`;
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

