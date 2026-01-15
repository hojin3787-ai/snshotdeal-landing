import { blogPostsMeta } from "../postsMeta";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${siteUrl}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export default function Head({ params }: { params: { slug: string } }) {
  const meta = blogPostsMeta[params.slug];

  const title = meta
    ? `${meta.title} | SNS핫딜 블로그`
    : "블로그 | SNS핫딜";
  const description =
    meta?.description ??
    "SNS 계정 성장을 위한 실전 노하우와 최신 트렌드를 정리한 블로그입니다.";
  const url = `${siteUrl}/blog/${params.slug}`;
  const ogImage = toAbsoluteUrl(meta?.image ?? "/og.png");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="article" />
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

