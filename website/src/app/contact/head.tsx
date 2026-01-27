const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--sns-h84mk60k.com";

export default function Head() {
  const title = "무료 상담 및 문의 | SNS핫딜";
  const description =
    "SNS 마케팅 서비스에 대해 궁금한 점이 있으신가요? 언제든지 문의주세요. 빠르고 친절한 상담을 제공합니다.";
  const url = `${siteUrl}/contact`;
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

