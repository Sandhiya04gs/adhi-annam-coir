import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/BlogIndex";
import { getOfficialPageByPath } from "@/data/original-site";

type PageProps = {
  params: Promise<{ page: string }>;
};

const originalBlogPage = getOfficialPageByPath("/blog");

export const metadata: Metadata = {
  title:
    originalBlogPage?.title.replace(/\s*\|\s*Adhi Annam(?: Coir)?\s*$/, "") ??
    "Coir Products Blog",
  description:
    originalBlogPage?.description ??
    "Insights on coir products, sustainability, horticulture, filtration and green building.",
};

export function generateStaticParams() {
  return ["2", "3", "4", "5"].map((page) => ({ page }));
}

export default async function BlogPaginationAlias({ params }: PageProps) {
  const { page } = await params;

  if (!/^[2-5]$/.test(page)) {
    notFound();
  }

  return <BlogIndex pageNumber={Number(page)} />;
}
