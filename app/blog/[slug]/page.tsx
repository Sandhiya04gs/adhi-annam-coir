
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Leaf,
  ChevronDown,
} from "lucide-react";
import { articles } from "@/data/blog";
import { getLocalProductHrefForSourcePath } from "@/data/original-site";

type Props = {
  params: Promise<{ slug: string }>;
};

function getSlug(href: string) {
  return href.split("/").filter(Boolean).pop();
}

function getLocalArticleLink(href: string) {
  const sourceUrl = new URL(href, "https://www.adhiannamcoir.com");

  if (sourceUrl.origin !== "https://www.adhiannamcoir.com") {
    return href;
  }

  if (sourceUrl.pathname.startsWith("/post/")) {
    return `/blog/${sourceUrl.pathname.split("/").filter(Boolean).pop()}`;
  }

  return (
    getLocalProductHrefForSourcePath(sourceUrl.pathname) ??
    `${sourceUrl.pathname}${sourceUrl.search}${sourceUrl.hash}`
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: getSlug(article.href)!,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => getSlug(item.href) === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | Adhi Annam Coir",
    };
  }

  return {
    title: `${article.title} | Adhi Annam Coir`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
      type: "article",
      siteName: "Adhi Annam Coir Comforts",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find(
    (item) => getSlug(item.href) === slug
  );

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter(
    (item) => item.title !== article.title
  );

  return (
    <div className="bg-[#fafbf7]">
      {/* Article Hero */}
      <section className="relative overflow-hidden bg-[#183d2b] px-6 py-16 text-white md:py-24">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#c6d9b1] transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Blog
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#c6d9b1]">
            {article.category}
          </p>

          {/* Blog Title - Fixed White Color */}
          <h1
            className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl"
            style={{
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
              opacity: 1,
              visibility: "visible",
            }}
          >
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {article.description}
          </p>
        </div>
      </section>

      {/* Article Image and Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="mb-10 border-b border-stone-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Adhi Annam Journal
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-[#183d2b] md:text-3xl">
              Introduction
            </h2>

            <p className="mt-5 text-base leading-8 text-stone-600">
              {article.description}
            </p>

            {(article.author || article.publishedAt) && (
              <p className="mt-4 text-sm text-stone-500">
                {article.author}
                {article.author === "Vikas Arun" && (
                  <Link
                    href="/profile/vikas-mvp84050/profile"
                    className="ml-1 font-semibold text-green-800 hover:underline"
                  >
                    View author profile
                  </Link>
                )}
                {article.author && article.publishedAt ? " · " : ""}
                {article.publishedAt?.slice(0, 10)}
              </p>
            )}
          </div>

          {article.body?.length ? (
            <div className="space-y-6">
              {article.body.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="pt-6 text-2xl font-semibold leading-snug text-[#183d2b]"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list-item") {
                  return (
                    <ul key={index} className="pl-5">
                      <li className="list-disc text-base leading-8 text-stone-600">
                        {block.text}
                      </li>
                    </ul>
                  );
                }

                return (
                  <p
                    key={index}
                    className="text-base leading-8 text-stone-600"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="space-y-12">
              {article.content.map((section, index) => (
                <section key={section.heading}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7eee0] text-sm font-bold text-green-800">
                      {index + 1}
                    </span>

                    <h2 className="text-2xl font-semibold leading-snug text-[#183d2b]">
                      {section.heading}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-5 pl-0 sm:pl-[52px]">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-8 text-stone-600"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.points && (
                      <ul className="space-y-4">
                        {section.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 text-base leading-7 text-stone-600"
                          >
                            <Leaf
                              size={17}
                              className="mt-1 shrink-0 text-green-700"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          )}

          {!!article.images?.length && (
            <section className="mt-16 border-t border-stone-200 pt-12">
              <h2 className="text-2xl font-semibold text-[#183d2b]">
                Article images
              </h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {article.images.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e7eee0]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {!!article.links?.length && (
            <section className="mt-16 border-t border-stone-200 pt-12">
              <h2 className="text-2xl font-semibold text-[#183d2b]">
                Links and references
              </h2>

              <ul className="mt-6 space-y-3">
                {article.links.map((link, index) => {
                  const href = getLocalArticleLink(link.href);
                  const external = /^https?:\/\//.test(href);

                  return (
                    <li key={`${link.href}-${index}`}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-start gap-2 text-sm leading-6 text-green-800 underline-offset-4 hover:underline"
                      >
                        <ArrowUpRight
                          size={15}
                          className="mt-1 shrink-0"
                          aria-hidden="true"
                        />
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* FAQ */}
          {article.faqs.length > 0 && (
            <section className="mt-16 border-t border-stone-200 pt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Common Questions
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#183d2b]">
                Frequently Asked Questions
              </h2>

              <div className="mt-8 space-y-4">
                {article.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-xl border border-stone-200 bg-white p-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#183d2b]">
                      {faq.question}

                      <ChevronDown
                        size={20}
                        className="shrink-0 transition group-open:rotate-180"
                      />
                    </summary>

                    <p className="mt-4 text-sm leading-7 text-stone-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Contact CTA */}
          <section className="mt-16 rounded-3xl bg-[#e7eee0] p-8 md:p-10">
            <Leaf size={34} className="text-green-800" />

            <h2 className="mt-5 text-2xl font-semibold text-[#183d2b]">
              Looking for Natural Coir Solutions?
            </h2>

            <p className="mt-4 leading-7 text-stone-600">
              Connect with Adhi Annam Coir Comforts to discuss your
              product requirements, customisation and bulk orders.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#183d2b] px-7 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Contact Our Team
              <ArrowUpRight size={18} />
            </Link>
          </section>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Keep Exploring
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
            Related Articles
          </h2>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.slice(0, 3).map((related) => (
              <Link
                key={related.title}
                href={`/blog/${getSlug(related.href)}`}
                className="group overflow-hidden rounded-2xl border border-stone-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                    {related.category}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold leading-snug text-[#183d2b]">
                    {related.title}
                  </h3>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-800">
                    Read Article
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[#183d2b] px-8 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              View All Articles
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
