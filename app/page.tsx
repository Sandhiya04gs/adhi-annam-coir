
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { articles } from "@/data/blog";
import { products } from "@/data/products";
import {
  getOfficialCategoryPage,
  getOfficialPageByPath,
  getOfficialProductOverview,
} from "@/data/original-site";

const benefits = [
  {
    title: "Sustainability",
    description:
      "Crafted from natural, biodegradable coconut fibers that support an eco-conscious lifestyle and help reduce waste.",
  },
  {
    title: "Versatility",
    description:
      "Adaptable for multiple uses — from mattresses and cushions to erosion control and garden applications.",
  },
  {
    title: "Eco-Friendly",
    description:
      "Minimizes environmental impact by reducing reliance on non-renewable materials and promoting a greener planet.",
  },
  {
    title: "Durability",
    description:
      "Built to last, our coir fiber products retain strength, shape, and functionality even under demanding conditions.",
  },
];

const featuredCategories = products;

function getSlug(href: string) {
  return href.split("/").filter(Boolean).pop() ?? "";
}

export default function Home() {
  const homepage = getOfficialPageByPath("/");
  const homepageImages = homepage?.images ?? [];

  const homepageIntro = homepage?.blocks.find(
    (block) =>
      block.type === "paragraph" &&
      block.text.startsWith("We are an ISO 9001:2015"),
  )?.text;

  const blogLinks = homepage?.links.filter((link) =>
    link.href.includes("/post/"),
  );

  const highlights =
    blogLinks?.flatMap((link) => {
      const article = articles.find(
        (item) => getSlug(item.href) === getSlug(link.href),
      );
      return article ? [{ ...article, title: link.text }] : [];
    }) ?? articles.slice(0, 5);

  const clientLogos = homepageImages.slice(19);

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="home-intro">
        <div className="home-copy">
          <h1>
            Premium Coconut Coir Products – Manufacturers &amp; Global
            Exporters
          </h1>
          <p>
            {homepageIntro ??
              "We are an ISO 9001:2015 & 14001:2015 certified company, trusted since 2007 as a leading manufacturer and exporter of eco-friendly horticulture applications, sustainable packaging solutions, and other premium coconut coir products. Using advanced Austrian machinery, we ensure top-quality, sustainable production across all our offerings."}
          </p>
        </div>
      </section>

      {/* Home Banner */}
      <section className="home-banner" aria-label="Adhi Annam Coir product range">
        <Image
          src={
            homepageImages[0]?.src ??
            "/images/original/home/home-01-45a24b263e.webp"
          }
          alt="Adhi Annam Coir products made from natural coconut fibre"
          fill
          priority
          sizes="100vw"
          className="home-banner-image"
        />
      </section>

      {/* Our Products */}
      <section className="home-products">
        <div className="home-section-heading">
          <h2>Our Products</h2>
          <div className="section-heading-underline" />
          <p>
            Explore our premium range of natural and sustainable coconut coir products.
          </p>
        </div>

        <div className="home-product-grid">
          {featuredCategories.map((featured) => {
            const category = featured;
            const image = getOfficialCategoryPage(category)?.images[0];

            const description = category
              ? getOfficialProductOverview(category)?.description ??
                category.description
              : "";

            if (!category || !image) return null;

            return (
              <Link
                href={`/products/${category.slug}`}
                key={category.slug}
                className="home-product-card"
              >
                <div className="home-product-image">
                  <Image
                    src={image.src}
                    alt={
                      image.alt && !/\.(png|jpe?g|webp)$/i.test(image.alt)
                        ? image.alt
                        : category.name
                    }
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>

                <div className="home-product-copy">
                  <h3>{featured.name}</h3>
                  <p>{description}</p>
                  <span>
                    Click to view all products <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="home-blog">
        <div className="home-section-heading">
          <h2>Blog Highlights</h2>
          <div className="section-heading-underline" />
          <p>
            Discover the latest insights, innovations and updates from the coir industry.
          </p>

          <Link href="/blog" className="blog-view-all">
            View all posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="home-blog-grid">
          {highlights.map((article) => (
            <Link
              href={`/blog/${getSlug(article.href)}`}
              className="home-blog-card"
              key={article.href}
            >
              <div className="home-blog-image">
                <Image
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <h3>{article.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-why">
        <div className="home-why-heading">
          <Leaf size={24} aria-hidden="true" />
          <h2>Why Choose Our Coir Fiber Innovations</h2>
          <p>
            We tackle environmental challenges by providing versatile,
            eco-friendly products crafted from natural, biodegradable coconut
            fiber.
          </p>
        </div>

        <div className="home-benefits">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Clients */}
      <section className="home-clients">
        <div className="home-section-heading">
          <h2>Our Clients</h2>
          <div className="section-heading-underline" />
          <p>
            Our clients are our priority, and we deeply appreciate your trust
            and support in our growth.
          </p>
        </div>

        {clientLogos.length > 0 && (
          <div className="client-slider" aria-label="Adhi Annam Coir clients">
            <div className="client-track">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="client-group"
                  aria-hidden={group === 1}
                >
                  {clientLogos.map((logo, index) => (
                    <div className="client-card" key={`${logo.src}-${index}`}>
                      <Image
                        src={logo.src}
                        alt={group === 0 ? logo.alt || `Client ${index + 1}` : ""}
                        width={180}
                        height={100}
                        className="client-logo"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
