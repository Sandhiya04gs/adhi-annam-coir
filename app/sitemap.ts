
import type { MetadataRoute } from "next";
import { articles } from "@/data/blog";
import { products } from "@/data/products";

const SITE_URL = "https://www.adhiannamcoir.com";

function getSlug(href: string) {
  return href.split("/").filter(Boolean).pop();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    "",
    "/about",
    "/products",
    "/trade-shows",
    "/blog",
    "/contact",
    "/inquiry-services-page",
    "/profile/vikas-mvp84050/profile",
  ];

  const pages: MetadataRoute.Sitemap = mainPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${getSlug(article.href)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productPages: MetadataRoute.Sitemap = products.flatMap((category) => [
    {
      url: `${SITE_URL}/products/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...category.productNames.map((name) => ({
      url: `${SITE_URL}/products/${category.slug}/${slugify(name)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);

  return [...pages, ...productPages, ...blogPages];
}
