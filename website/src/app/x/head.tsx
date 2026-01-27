const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--sns-h84mk60k.com";

export default function Head() {
  const title = "X(트위터) 팔로워/리트윗/좋아요 | SNS핫딜";
  const description =
    "X(트위터) 계정 성장과 영향력 확대를 위한 팔로워·리트윗·좋아요 서비스 안내. 더 많은 노출과 반응을 만드는 방법을 확인하세요.";
  const url = `${siteUrl}/x`;
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

