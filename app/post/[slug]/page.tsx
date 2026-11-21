import { notFound, redirect } from "next/navigation";
import { articles } from "@/data/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getArticleSlug(href: string) {
  return href.split("/").filter(Boolean).pop();
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: getArticleSlug(article.href)!,
  }));
}

export default async function OfficialBlogAlias({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find(
    (item) => getArticleSlug(item.href) === slug,
  );

  if (!article) notFound();

  redirect(`/blog/${slug}`);
}
