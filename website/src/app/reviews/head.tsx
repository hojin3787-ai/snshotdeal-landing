const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Head() {
  const title = "고객 후기 | SNS핫딜";
  const description =
    "SNS핫딜을 이용한 고객들의 실제 후기를 확인하세요. 플랫폼별 후기와 만족도 정보를 한 번에 볼 수 있습니다.";
  const url = `${siteUrl}/reviews`;
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

