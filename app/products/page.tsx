
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getOfficialPageByPath,
  getOfficialProductOverview,
} from "@/data/original-site";
import { products } from "@/data/products";

const originalProductsPage = getOfficialPageByPath("/products");

export const metadata: Metadata = {
  title:
    originalProductsPage?.title.replace(/\s*\|\s*Adhi Annam Coir\s*$/, "") ??
    "Coir Products",
  description:
    originalProductsPage?.description ??
    "Explore Adhi Annam Coir's coconut coir product range.",
};

export default function ProductsPage() {
  return (
    <div className="products-page">
      <header className="products-heading">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-[#8a9b63]">
          Natural • Sustainable • Durable
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#183d2b] sm:text-5xl md:text-6xl">
          Eco-friendly Coconut
          <span className="mt-2 block text-[#6b8e45]">
            Coir Products
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
          Discover sustainable coconut coir solutions designed for a greener
          future — from eco-friendly packaging to innovative industrial and
          lifestyle applications.
        </p>

        <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#8a9b63]" />
      </header>

      <section
        className="products-grid"
        aria-label="Adhi Annam Coir product categories"
      >
        {products.map((category) => {
          const image = originalProductsPage?.images[category.id - 1];
          const description =
            getOfficialProductOverview(category)?.description ??
            category.description;

          return (
            <Link
              href={`/products/${category.slug}`}
              className="products-category"
              key={category.id}
            >
              <div className="products-category-image">
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt || category.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  />
                ) : null}
              </div>

              <div className="products-category-copy">
                <h2>{category.name}</h2>
                <p>{description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
