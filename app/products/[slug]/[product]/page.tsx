import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { productDetails, slugify } from "@/data/product-details";

type Props = {
  params: Promise<{ slug: string; product: string }>;
};

const WHATSAPP = "919566294433";
const EMAIL = "hello@adhiannamcoir.com";

function findProduct(slug: string, productSlug: string) {
  const category = getProductBySlug(slug);
  if (!category) return null;
  const name = category.productNames.find((n) => slugify(n) === productSlug);
  if (!name) return null;
  return { category, name };
}

export function generateStaticParams() {
  return products.flatMap((category) =>
    category.productNames.map((name) => ({
      slug: category.slug,
      product: slugify(name),
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug, product } = await params;
  const found = findProduct(slug, product);
  if (!found) return { title: "Product" };
  const detail = productDetails[found.name];
  return {
    title: `${found.name} | ${found.category.name}`,
    description: detail?.description ?? found.category.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug, product } = await params;
  const found = findProduct(slug, product);
  if (!found) notFound();

  const { category, name } = found;
  const detail = productDetails[name];
  const image =
    category.productImages?.find((p) => p.name === name)?.image ??
    category.image;

  const related = (detail?.related ?? [])
    .map((relName) => {
      for (const c of products) {
        if (c.productNames.includes(relName)) {
          return { name: relName, href: `/products/${c.slug}/${slugify(relName)}` };
        }
      }
      return null;
    })
    .filter((r): r is { name: string; href: string } => r !== null);

  return (
    <div className="min-h-screen bg-[#fafbf7]">
      {/* Breadcrumb */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-stone-500">
          <Link href="/" className="hover:text-green-800">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-green-800">Products</Link>
          <span className="mx-2">/</span>
          <Link href={`/products/${category.slug}`} className="hover:text-green-800">
            {category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-green-900">{name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            {category.name}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#183d2b] md:text-6xl">
            {name}
          </h1>

          {detail && (
            <p className="mt-5 text-xl font-medium text-green-800">
              {detail.tagline}
            </p>
          )}

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            {detail?.description ?? category.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#183d2b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Request a Quote
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-stone-300 px-7 py-4 text-sm font-semibold text-stone-700 transition hover:border-green-800 hover:text-green-800"
            >
              Request a Sample
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#e5eddb] lg:min-h-[460px]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>
      </section>

      {detail && (
        <>
          {/* Specifications */}
          <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Specifications
              </p>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 sm:grid-cols-2">
                {detail.specifications.map((spec) => (
                  <div key={spec.label} className="bg-white p-6">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-green-700">
                      {spec.label}
                    </dt>
                    <dd className="mt-2 text-stone-700">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Applications */}
          <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Applications
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
                Where it is used
              </h2>

              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {detail.applications.map((app) => (
                  <li
                    key={app.title}
                    className="rounded-2xl border border-stone-200 bg-white p-7"
                  >
                    <h3 className="font-semibold text-[#183d2b]">{app.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">
                      {app.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Advantages */}
          <section className="bg-[#f1f4ed] px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Advantages of Coir
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
                Why choose coir
              </h2>

              <ul className="mt-10 grid gap-6 md:grid-cols-2">
                {detail.advantages.map((adv) => (
                  <li
                    key={adv.title}
                    className="flex gap-4 rounded-2xl bg-white p-7 shadow-sm"
                  >
                    <CheckCircle2 className="mt-1 shrink-0 text-green-700" size={22} />
                    <div>
                      <h3 className="font-semibold text-[#183d2b]">{adv.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        {adv.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}

      {/* Sample CTA */}
      <section className="bg-[#183d2b] px-6 py-20 text-center text-white">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-4xl">
          Ready to test it?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
          We ship samples and respond to all enquiries within 24 hours.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/90">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#c6d9b1]"
          >
            <MessageCircle size={18} /> WhatsApp: +91 95662 94433
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 hover:text-[#c6d9b1]"
          >
            <Mail size={18} /> Email: {EMAIL}
          </a>
        </div>

        {related.length > 0 && (
          <p className="mx-auto mt-8 max-w-2xl text-sm text-white/70">
            Related Products:{" "}
            {related.map((r, i) => (
              <span key={r.href}>
                <Link href={r.href} className="font-semibold text-[#c6d9b1] underline-offset-2 hover:underline">
                  {r.name}
                </Link>
                {i < related.length - 1 && " | "}
              </span>
            ))}
          </p>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#c6d9b1] px-8 py-4 font-semibold text-[#183d2b] transition hover:bg-white"
          >
            Request a Quote
            <ArrowUpRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/60 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#183d2b]"
          >
            Request a Sample
          </Link>
        </div>
      </section>
    </div>
  );
}
