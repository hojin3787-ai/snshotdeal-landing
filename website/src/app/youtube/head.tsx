const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--sns-h84mk60k.com";

export default function Head() {
  const title = "유튜브 구독자/조회수/좋아요 | SNS핫딜";
  const description =
    "유튜브 채널 성장을 위한 구독자·조회수·좋아요 서비스 안내. 채널 신뢰도와 초기 반응을 개선하는 방법을 확인하세요.";
  const url = `${siteUrl}/youtube`;
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

