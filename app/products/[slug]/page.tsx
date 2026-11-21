
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Leaf } from "lucide-react";

import { getProductBySlug, products } from "@/data/products";
import {
  getOfficialCategoryPage,
  getOfficialCategoryProductImage,
} from "@/data/original-site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Array.from(
    new Set(
      products.flatMap((category) => [
        category.slug,
        category.sourceSlug,
        ...(category.aliases ?? []),
      ]),
    ),
  ).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getProductBySlug(slug);

  if (!category) {
    return { title: "Product Category Not Found" };
  }

  const originalCategory = getOfficialCategoryPage(category);

  return {
    title: category.name,
    description: originalCategory?.description ?? category.description,
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getProductBySlug(slug);

  if (!category) {
    notFound();
  }

  const originalCategory = getOfficialCategoryPage(category);

  const originalCategoryHeadings =
    originalCategory?.blocks.filter(
      (block) =>
        block.type === "heading" &&
        !originalCategory.links.some(
          (link) => slugify(link.text) === slugify(block.text),
        ),
    ) ?? [];

  const categoryDescription =
    originalCategory?.description ?? category.description;

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Category Hero Banner with Subtle Background Image */}
      <section
        className="relative overflow-hidden px-6 py-16 text-white md:py-20"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(23, 61, 43, 0.94),
              rgba(23, 61, 43, 0.94)
            ),
            url('/images/coir-background.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-[#c2d9a8]">
            <Leaf size={18} />
            Natural Coir Solutions
          </div>

          {/* Breadcrumb */}
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-white/70 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-white/40">/</span>

            <Link
              href="/products"
              className="text-white/70 transition hover:text-white"
            >
              Products
            </Link>
          </div>

          {/* Category Title */}
          <h1
            className="category-hero-title mt-7"
            style={{
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 900,
            }}
          >
            {category.name}
          </h1>

          {/* Category Highlights */}
          {originalCategoryHeadings.map((block, index) => (
            <p
              key={`${block.text}-${index}`}
              className="mt-3 max-w-2xl text-sm font-semibold text-[#d7e5cd]"
            >
              {block.text}
            </p>
          ))}

          {/* Category Description */}
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {categoryDescription}
          </p>

          {/* Enquiry Button */}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#173d2b] transition hover:bg-[#dce9d3]"
          >
            Get a Quote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Category Products */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-[#173d2b] md:text-4xl">
          Explore {category.name}
        </h2>

        <div className="mt-3 h-1 w-16 rounded-full bg-[#789b5b]" />

        {category.productNames.length > 0 ? (
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {category.productNames.map((name) => {
              const productSlug = slugify(name);

              const originalImage = getOfficialCategoryProductImage(
                category,
                name,
              );

              const image =
                originalImage?.src ||
                category.productImages.find((item) => item.name === name)
                  ?.image ||
                category.image ||
                "";

              return (
                <Link
                  key={name}
                  href={`/products/${category.slug}/${productSlug}`}
                  className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#789b5b] hover:shadow-xl"
                >
                  <div className="relative flex h-64 items-center justify-center bg-[#f0f4ec]">
                    {image ? (
                      <Image
                        src={image}
                        alt={originalImage?.alt || name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-6 transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <Leaf size={48} className="text-[#78917c]" />
                    )}
                  </div>

                  <div className="flex items-center justify-between p-5">
                    <h3 className="text-lg font-semibold text-[#173d2b] transition group-hover:text-[#71966a]">
                      {name}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      className="text-green-800 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-xl bg-[#f0f4ec] p-8 text-stone-600">
            Product details for this category will be added soon.
          </div>
        )}
      </section>

      {/* Back to Products */}
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#173d2b] transition hover:text-[#71966a]"
        >
          <ArrowLeft size={17} />
          Back to All Products
        </Link>
      </div>
    </div>
  );
}
