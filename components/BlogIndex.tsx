import Image from "next/image";
import Link from "next/link";
import { getBlogListingPage } from "@/data/blog";
import { getOfficialPageByPath } from "@/data/original-site";

type BlogIndexProps = {
  pageNumber: number;
};

const originalBlogPage = getOfficialPageByPath("/blog");
const pageNumbers = [1, 2, 3, 4, 5];

function getArticlePath(href: string) {
  const slug = href.split("/").filter(Boolean).pop();
  return `/blog/${slug}`;
}

function getPagePath(page: number) {
  return page === 1 ? "/blog" : `/blog/page/${page}`;
}

export default function BlogIndex({ pageNumber }: BlogIndexProps) {
  const articles = getBlogListingPage(pageNumber);

  if (!articles) {
    throw new Error(`No blog listing is configured for page ${pageNumber}`);
  }

  const blogBanner = originalBlogPage?.images[0];

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
          {articles.map((article) => {
            const publishedDate = new Date(article.publishedAt);
            const dateLabel = new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            }).format(publishedDate);

            return (
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
                  <div className="blog-index-meta mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#666]">
                    <time dateTime={article.publishedAt}>{dateLabel}</time>
                    <span>{article.readingTimeMinutes} min read</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        <nav
          aria-label="Blog pages"
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {pageNumber > 1 ? (
            <Link
              href={getPagePath(pageNumber - 1)}
              className="border border-[#e2e2dc] px-3 py-2 text-sm text-[#444] transition-colors hover:border-[#8da044] hover:text-[#56712d]"
            >
              Previous
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="border border-[#e2e2dc] px-3 py-2 text-sm text-[#999]"
            >
              Previous
            </span>
          )}

          {pageNumbers.map((page) =>
            page === pageNumber ? (
              <span
                key={page}
                aria-current="page"
                className="border border-[#8da044] bg-[#8da044] px-3 py-2 text-sm text-white"
              >
                {page}
              </span>
            ) : (
              <Link
                key={page}
                href={getPagePath(page)}
                className="border border-[#e2e2dc] px-3 py-2 text-sm text-[#444] transition-colors hover:border-[#8da044] hover:text-[#56712d]"
              >
                {page}
              </Link>
            ),
          )}

          {pageNumber < pageNumbers.length ? (
            <Link
              href={getPagePath(pageNumber + 1)}
              className="border border-[#e2e2dc] px-3 py-2 text-sm text-[#444] transition-colors hover:border-[#8da044] hover:text-[#56712d]"
            >
              Next
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="border border-[#e2e2dc] px-3 py-2 text-sm text-[#999]"
            >
              Next
            </span>
          )}
        </nav>
      </div>
    </div>
  );
}
