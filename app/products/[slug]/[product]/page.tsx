
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Mail,
  MessageCircle,
} from "lucide-react";

import { getProductBySlug, products } from "@/data/products";
import { productDetails } from "@/data/product-details";
import {
  getOfficialCategoryPage,
  getLocalProductHrefForSourcePath,
  getOfficialCategoryProductImage,
  getOfficialProductPage,
} from "@/data/original-site";

type PageProps = {
  params: Promise<{
    slug: string;
    product: string;
  }>;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateStaticParams() {
  return products.flatMap((category) =>
    category.productNames.map((name) => ({
      slug: category.slug,
      product: slugify(name),
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, product } = await params;
  const category = getProductBySlug(slug);

  const productName = category?.productNames.find(
    (name) => slugify(name) === product,
  );

  if (!category || !productName) {
    return { title: "Product Not Found" };
  }

  const detailSlug =
    category.slug === "coir-corporate-gifts" && product === "coir-pots"
      ? "coir-gift-pots"
      : product;

  const details = productDetails[detailSlug];

  if (!details) {
    return { title: "Product Not Found" };
  }

  const originalPage = getOfficialProductPage(category, productName);

  return {
    title: originalPage?.title ?? productName,
    description: originalPage?.description ?? details.description,
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps) {
  const { slug, product } = await params;

  const category = getProductBySlug(slug);

  if (!category) notFound();

  const productName = category.productNames.find(
    (name) => slugify(name) === product,
  );

  if (!productName) notFound();

  const detailSlug =
    category.slug === "coir-corporate-gifts" && product === "coir-pots"
      ? "coir-gift-pots"
      : product;

  const details = productDetails[detailSlug];

  if (!details) notFound();

  const originalPage = getOfficialProductPage(category, productName);
  const categoryImage = getOfficialCategoryProductImage(category, productName);

  const productImage =
    categoryImage?.src ||
    originalPage?.images[0]?.src ||
    category.productImages.find((item) => item.name === productName)?.image ||
    category.image ||
    "/hero/homepage-banner.jpg";

  const originalIntro = originalPage?.blocks.find(
    (block) => block.type === "paragraph",
  )?.text;

  const sourceOrigin = "https://www.adhiannamcoir.com";

  const sourcePath = originalPage
    ? new URL(originalPage.url).pathname
    : undefined;

  const sourceLinks = originalPage?.links ?? [];
  const categoryLinks = getOfficialCategoryPage(category)?.links ?? [];

  const currentProductHref = `/products/${category.slug}/${slugify(productName)}`;

  const sharedProductPage =
    sourcePath !== undefined &&
    categoryLinks.filter(
      (link) => new URL(link.href, sourceOrigin).pathname === sourcePath,
    ).length > 1;

  const quoteLink = sourceLinks.find((link) => /quote/i.test(link.text));
  const sampleLink = sourceLinks.find((link) => /sample/i.test(link.text));

  const whatsappLink = sourceLinks.find((link) =>
    link.href.startsWith("https://wa.me/"),
  );

  const emailLink = sourceLinks.find((link) =>
    link.href.startsWith("mailto:"),
  );

  const whatsappHref =
    whatsappLink?.href ??
    `https://wa.me/919566294433?text=${encodeURIComponent(
      `Hello, I am interested in ${productName}.`,
    )}`;

  const emailHref =
    emailLink?.href ??
    `mailto:hello@adhiannamcoir.com?subject=${encodeURIComponent(
      `Product enquiry - ${productName}`,
    )}`;

  const quoteHref = quoteLink
    ? new URL(quoteLink.href, sourceOrigin).pathname
    : "/contact";

  const sampleHref = sampleLink
    ? new URL(sampleLink.href, sourceOrigin).pathname
    : "/contact";

  const relatedProducts = sourceLinks.flatMap((link) => {
    const path = new URL(link.href, sourceOrigin).pathname;

    const linkedProduct = category.productNames.find(
      (name) => slugify(name) === slugify(link.text),
    );

    const href =
      path === sourcePath && linkedProduct
        ? `/products/${category.slug}/${slugify(linkedProduct)}`
        : getLocalProductHrefForSourcePath(path);

    return href && href !== currentProductHref
      ? [{ ...link, href }]
      : [];
  });

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Product Hero Section */}
      <section className="bg-[#173d2b] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-[#c2d9a8]">
            <Leaf size={18} />
            Natural Coir Solutions
          </div>

          {/* Breadcrumb Navigation */}
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-white/70 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-white/50">/</span>

            <Link
              href="/products"
              className="text-white/70 transition hover:text-white"
            >
              Products
            </Link>

            <span className="text-white/50">/</span>

            <Link
              href={`/products/${category.slug}`}
              className="font-semibold text-white"
            >
              {category.name}
            </Link>
          </div>

          {/* Main Product Name */}
          <h1
            className="product-title mt-7"
            style={{
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.2,
              opacity: 1,
              visibility: "visible",
            }}
          >
            {productName}
          </h1>

          {/* Product Description */}
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            {originalIntro ?? details.tagline}
          </p>

          {/* Enquiry Button */}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173d2b] hover:bg-[#eaf0e5]"
          >
            Enquire Now
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Product Overview */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center lg:px-8">
        <div className="relative h-80 overflow-hidden rounded-2xl bg-[#f0f4ec] md:h-[430px]">
          <Image
            src={productImage}
            alt={productName}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
            About the Product
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#173d2b] md:text-4xl">
            Product Overview
          </h2>

          <p className="mt-5 leading-8 text-stone-600">
            {originalIntro ?? details.description}
          </p>

          <div className="mt-8 border-t border-stone-200 pt-6">
            <p className="text-sm font-semibold text-stone-500">
              PRODUCT CATEGORY
            </p>

            <Link
              href={`/products/${category.slug}`}
              className="mt-2 inline-block font-semibold text-[#173d2b] hover:text-green-700"
            >
              {category.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Original Product Information */}
      {originalPage && (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Product Information
            </p>

            <div className="mt-7 space-y-5">
              {originalPage.blocks.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="pt-4 text-2xl font-semibold text-[#173d2b]"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list-item") {
                  return (
                    <ul key={index} className="pl-5">
                      <li className="list-disc leading-7 text-stone-600">
                        {block.text}
                      </li>
                    </ul>
                  );
                }

                return (
                  <p key={index} className="leading-8 text-stone-600">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Additional Product Images */}
          {originalPage.images.length > 1 && !sharedProductPage && (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {(product === "coir-bath-scrubber"
                ? originalPage.images.slice(2)
                : originalPage.images.slice(1)
              ).map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f0f4ec]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt || productName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 border-t border-stone-200 pt-8">
              <h2 className="text-2xl font-semibold text-[#173d2b]">
                Related Products
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {relatedProducts.map((item, index) => (
                  <Link
                    key={`${item.href}-${index}`}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-[#173d2b] transition hover:border-green-700 hover:bg-[#f0f4ec]"
                  >
                    {item.text}
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Fallback Product Information */}
      {!originalPage && (
        <>
          <section className="bg-[#eaf0e5] px-6 py-16">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
                Applications
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#173d2b]">
                Where It Can Be Used
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {details.applications.map((application) => (
                  <div
                    key={application}
                    className="flex items-start gap-3 rounded-xl bg-white p-5"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-green-800"
                    />

                    <p className="leading-7 text-stone-700">
                      {application}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Product Features
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#173d2b]">
              Advantages of Coir
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {details.advantages.map((advantage) => (
                <div
                  key={advantage}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-green-800"
                  />

                  <p className="leading-7 text-stone-600">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>

            {details.note && (
              <div className="mt-8 rounded-xl border border-[#dce6d5] bg-[#f0f4ec] p-5">
                <p className="font-semibold text-[#173d2b]">
                  Additional Information
                </p>

                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {details.note}
                </p>
              </div>
            )}
          </section>
        </>
      )}

      {/* Contact CTA */}
      <section className="bg-[#173d2b] px-6 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold">
            Interested in {productName}?
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Contact our team to discuss your product requirements,
            custom dimensions and packaging needs.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={quoteHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#173d2b] hover:bg-[#eaf0e5]"
            >
              Request a Quote
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href={sampleHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Request a Sample
            </Link>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

            <a
              href={emailHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail size={17} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Back to Category */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Link
          href={`/products/${category.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#173d2b] hover:text-green-700"
        >
          <ArrowLeft size={17} />
          Back to {category.name}
        </Link>
      </div>
    </div>
  );
}
