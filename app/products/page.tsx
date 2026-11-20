
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Package,
  Droplets,
  Layers,
  Brush,
  Sprout,
  Waves,
  TreePine,
  BedDouble,
  Gift,
  Leaf,
} from "lucide-react";
import { products } from "@/data/products";

const icons = [
  Package,
  Droplets,
  Layers,
  Brush,
  Sprout,
  Waves,
  TreePine,
  BedDouble,
  Gift,
];

export default function ProductsPage() {
  return (
    <div className="bg-[#fafaf7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173d2b] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-14 h-60 w-60 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-[#c2d9a8]">
            <Leaf size={17} />
            Natural Fibre Solutions
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            Our Products
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Discover our range of sustainable coconut coir products,
            developed for horticulture, packaging, construction,
            filtration and everyday applications.
          </p>

          <div className="mt-8 text-sm text-white/60">
            Home / Products
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-800">
            Explore Our Range
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#173d2b] md:text-4xl">
            Sustainable Solutions for Every Industry
          </h2>

          <p className="mt-4 leading-7 text-stone-600">
            From natural packaging to horticulture and industrial
            applications, explore our coir product categories.
          </p>
        </div>

        <div className="grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = icons[index] || Package;
            const image = product.image;

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Category Image */}
                <div className="relative flex h-52 shrink-0 items-center justify-center overflow-hidden bg-[#f0f4ec]">
                  {image ? (
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e8efe1] via-[#d9e5d0] to-[#b9cda9]">
                      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/50" />
                      <div className="absolute -bottom-14 -left-10 h-48 w-48 rounded-full border border-white/50" />

                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 text-green-900 shadow-sm transition duration-300 group-hover:scale-110">
                        <Icon size={38} strokeWidth={1.4} />
                      </div>
                    </div>
                  )}

                  <span className="absolute right-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-green-900">
                    {String(product.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Category Information */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-[#173d2b]">
                    {product.name}
                  </h3>

                  <p className="mt-3 min-h-14 text-sm leading-7 text-stone-600">
                    {product.description}
                  </p>

                  {/* Product Count */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-800">
                    <Package size={17} />
                    {product.productNames.length} Products Available
                  </div>

                  {/* Product Preview */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.productNames.slice(0, 3).map((name) => (
                      <span
                        key={name}
                        className="rounded-full bg-[#f0f4ec] px-3 py-2 text-xs text-stone-700"
                      >
                        {name}
                      </span>
                    ))}
                  </div>

                  {product.productNames.length > 3 && (
                    <p className="mt-3 text-xs font-medium text-stone-500">
                      + {product.productNames.length - 3} more products
                    </p>
                  )}

                  {/* Explore Products - Aligned Bottom */}
                  <div className="mt-auto pt-6 border-t border-stone-100 pt-5">
                    <div className="flex items-center justify-between text-sm font-semibold text-green-900">
                      Explore Products
                      <ArrowUpRight
                        size={20}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-[#eaf0e5] px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#173d2b]">
              Have a specific product requirement?
            </h2>

            <p className="mt-3 text-stone-600">
              Contact our team to discuss your requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#173d2b] px-7 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            Request an Enquiry
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}
