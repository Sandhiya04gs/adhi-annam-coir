
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/blog";
import { ArrowUpRight, Leaf } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-[#fafbf7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183d2b] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c6d9b1]">
            Knowledge & Insights
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-7xl">
            Ideas for a
            <br />
            Greener Tomorrow
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Explore insights into natural coir products, sustainable
            packaging, horticulture, construction and eco-friendly
            innovations.
          </p>

          <p className="mt-8 text-sm text-white/60">Home / Blog</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Adhi Annam Journal
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-5xl">
              Explore Our Latest Insights
            </h2>

            <p className="mt-5 leading-7 text-stone-500">
              Read about coconut fibre applications, manufacturing,
              sustainable materials and the role of natural coir
              products in modern industries.
            </p>
          </div>

          <a
            href="https://www.adhiannamcoir.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 transition hover:text-green-600"
          >
            Visit Official Blog
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <a
          href={articles[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid overflow-hidden rounded-3xl bg-[#e7eee0] md:grid-cols-2"
        >
          <div className="relative min-h-[300px] overflow-hidden md:min-h-[420px]">
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Featured Article · {articles[0].category}
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#183d2b] md:text-4xl">
              {articles[0].title}
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              {articles[0].description}
            </p>

            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-green-800">
              Read Article
              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </div>
        </a>
      </section>

      {/* Article Cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Articles & Resources
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
              Discover More
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-green-700 hover:shadow-lg"
              >
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-52 overflow-hidden"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </a>

                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
                    {article.category}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-[#183d2b]">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-500">
                    {article.description}
                  </p>

                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-green-800"
                  >
                    Read Article
                    <ArrowUpRight
                      size={17}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.adhiannamcoir.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#183d2b] px-8 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              Explore All Articles
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#183d2b] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <Leaf className="mx-auto text-[#c6d9b1]" size={38} />

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold md:text-4xl">
            Interested in sustainable coir solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
            Explore our products and connect with our team to discuss
            your requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c6d9b1] px-8 py-4 font-semibold text-[#183d2b] transition hover:bg-white"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
