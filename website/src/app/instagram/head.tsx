const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Head() {
  const title = "인스타그램 팔로워/좋아요/조회수 | SNS핫딜";
  const description =
    "인스타그램 계정 성장을 위한 팔로워·좋아요·조회수 서비스 안내. 빠르고 안전하게 계정 신뢰도와 노출을 높이는 방법을 확인하세요.";
  const url = `${siteUrl}/instagram`;
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

