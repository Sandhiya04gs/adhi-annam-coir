
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Leaf,
  Package,
  CheckCircle2,
} from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { slugify } from "@/data/product-details";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return {
    title: product
      ? `${product.name} | Adhi Annam Coir Comforts`
      : "Product | Adhi Annam Coir Comforts",
    description: product?.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productImages = product.productImages ?? [];
  const heroImage = productImages[0] ?? { name: product.name, image: product.image };

  return (
    <div className="min-h-screen bg-[#fafbf7]">
      {/* Breadcrumb */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-stone-500">
          <Link href="/" className="hover:text-green-800">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-green-800">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-green-900">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-900">
            <Leaf size={16} />
            Natural Coir Solutions
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Our Products
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#183d2b] md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            {product.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#183d2b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Enquire Now
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-stone-300 px-7 py-4 text-sm font-semibold text-stone-700 transition hover:border-green-800 hover:text-green-800"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Hero Product Image */}
        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-3xl bg-[#e5eddb] p-6 lg:min-h-[480px]">
          <Image
            src={heroImage.image}
            alt={heroImage.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>
      </section>

      {/* Product Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              About the Product
            </p>

            <h2 className="text-3xl font-semibold text-[#183d2b]">
              Product Overview
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              {product.description}
            </p>
          </div>

          <div className="rounded-3xl bg-[#f3f6ef] p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Applications
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#183d2b]">
              Where it can be used
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              {product.applications}
            </p>
          </div>
        </div>
      </section>

      {/* Available Products */}
      <section className="bg-[#fafbf7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Product Collection
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
              Products Available
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              Explore the different products available in our{" "}
              {product.name} collection.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.productNames.map((productName) => {
              const image = productImages.find(
                (item) => item.name === productName
              );

              return (
                <div
                  key={productName}
                  className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#f3f6ef]">
                    {image ? (
                      <Image
                        src={image.image}
                        alt={image.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-5 transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e5eddb] text-green-800">
                        <Package size={30} />
                      </div>
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-green-700"
                      />

                      <h3 className="text-lg font-semibold text-[#183d2b]">
                        {productName}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-stone-500">
                      Part of our {product.name} product collection.
                    </p>

                    <Link
                      href={`/products/${product.slug}/${slugify(productName)}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-800 transition after:absolute after:inset-0 hover:text-green-600"
                    >
                      View details
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="bg-[#183d2b] px-6 py-20 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c6d9b1]">
          Get in Touch
        </p>

        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold md:text-4xl">
          Interested in {product.name}?
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
          Contact our team to discuss your product requirements and enquiries.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c6d9b1] px-8 py-4 font-semibold text-[#183d2b] transition hover:bg-white"
        >
          Contact Us
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
