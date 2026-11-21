import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/blog";
import { getOfficialPageByPath } from "@/data/original-site";

const PROFILE_PATH = "/profile/vikas-mvp84050/profile";
const AUTHOR_NAME = "Vikas Arun";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return [{ slug: ["vikas-mvp84050", "profile"] }];
}

export const metadata: Metadata = {
  title: `${AUTHOR_NAME} | Adhi Annam Coir`,
  description: `Articles by ${AUTHOR_NAME} for Adhi Annam Coir.`,
};

export default async function AuthorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const path = `/profile/${slug.join("/")}`;
  const profile = getOfficialPageByPath(path);

  if (!profile || path !== PROFILE_PATH) notFound();

  const authorArticles = articles.filter(
    (article) => article.author === AUTHOR_NAME,
  );
  const postCount =
    profile.blocks.find((block) => block.text.startsWith("Posts ("))?.text ??
    `Posts (${authorArticles.length})`;

  return (
    <div className="bg-[#fafbf7]">
      <section className="bg-[#183d2b] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c6d9b1]">
            Author profile
          </p>
          <h1 className="mt-5 text-4xl font-semibold md:text-6xl">
            {AUTHOR_NAME}
          </h1>
          <p className="mt-5 text-white/70">{postCount}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-[#183d2b]">
          Articles by {AUTHOR_NAME}
        </h2>
        <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {authorArticles.map((article) => (
            <Link
              key={article.href}
              href={`/blog/${article.href.split("/").filter(Boolean).pop()}`}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-[#e7eee0]">
                <Image
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#183d2b]">
                  {article.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-800">
                  Read article <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
