import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/data/blog";
import { getOfficialPageByPath } from "@/data/original-site";

const originalBlogPage = getOfficialPageByPath("/blog");

export const metadata: Metadata = {
  title:
    originalBlogPage?.title.replace(/\s*\|\s*Adhi Annam(?: Coir)?\s*$/, "") ??
    "Coir Products Blog",
  description:
    originalBlogPage?.description ??
    "Insights on coir products, sustainability, horticulture, filtration and green building.",
};

function getArticlePath(href: string) {
  const slug = href.split("/").filter(Boolean).pop();
  return `/blog/${slug}`;
}

export default function BlogPage() {
  const blogBanner = originalBlogPage?.images[0];
  const articleLinks =
    originalBlogPage?.links.filter((link) =>
      new URL(link.href).pathname.startsWith("/post/"),
    ) ?? [];
  const highlights = articleLinks.flatMap((link) => {
    const article = articles.find(
      (item) => getArticlePath(item.href) === getArticlePath(link.href),
    );
    return article ? [{ ...article, title: link.text }] : [];
  });
  const pages =
    originalBlogPage?.links.filter((link) => /^\d+$/.test(link.text)) ?? [];

  return (
    <div className="blog-index-page min-h-[70vh] bg-white pb-12 text-[#343434]">
      <section className="blog-index-banner relative h-[131px] w-full overflow-hidden">
        {blogBanner && (
          <Image
            src={blogBanner.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <h1 className="blog-index-title absolute inset-x-0 top-1 text-center text-3xl font-medium text-[#263746] md:text-[38px]">
          Blog
        </h1>
      </section>

      <div className="blog-index-content mx-auto max-w-[1056px] px-5">
        <nav aria-label="Blog categories" className="mt-7">
          <Link
            href="/blog"
            aria-current="page"
            className="inline-block px-0 py-2 text-sm text-[#343434]"
          >
            All Posts
          </Link>
        </nav>

        <section
          aria-label="Adhi Annam Coir blog articles"
          className="blog-index-list mt-8 grid grid-cols-1 gap-y-8"
        >
          {highlights.map((article) => (
            <Link
              href={getArticlePath(article.href)}
              className="blog-index-card group grid min-w-0 gap-5 md:grid-cols-2 md:gap-7"
              key={article.href}
            >
              <div className="blog-index-image relative aspect-[4/3] overflow-hidden bg-[#f5f5f1]">
                <Image
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 514px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                />
              </div>
              <div className="blog-index-copy flex flex-col justify-center">
                <h2 className="text-lg font-semibold leading-6 text-[#333] transition-colors group-hover:text-[#5b7735]">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#555]">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {pages.length > 0 && (
          <nav
            aria-label="Blog pages"
            className="mt-12 flex items-center justify-center gap-2"
          >
            <span className="border border-[#8da044] bg-[#8da044] px-3 py-2 text-sm text-white">
              1
            </span>
            {pages.map((page) => (
              <Link
                key={page.href}
                href={`/blog/page/${page.text}`}
                className="border border-[#e2e2dc] px-3 py-2 text-sm text-[#444] transition-colors hover:border-[#8da044] hover:text-[#56712d]"
              >
                {page.text}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
