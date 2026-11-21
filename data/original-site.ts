import pageData from "./original-site-content.json";
import { products, type ProductCategory } from "./products";

export type OfficialContentBlock = {
  type: string;
  text: string;
};

export type OfficialPageImage = {
  src: string;
  alt: string;
};

export type OfficialPageLink = {
  text: string;
  href: string;
};

export type OfficialPage = {
  slug: string;
  url: string;
  title: string;
  description: string;
  ogImage: string;
  blocks: OfficialContentBlock[];
  images: OfficialPageImage[];
  links: OfficialPageLink[];
};

const officialPages: OfficialPage[] = pageData;
const officialOrigin = "https://www.adhiannamcoir.com";

export function getOfficialPageByPath(path: string) {
  return officialPages.find(
    (page) => new URL(page.url).pathname === path,
  );
}

export function getOfficialCategoryPage(category: ProductCategory) {
  return getOfficialPageByPath(`/products/${category.sourceSlug}`);
}

export function getOfficialProductOverview(category: ProductCategory) {
  const productsPage = getOfficialPageByPath("/products");
  if (!productsPage) return undefined;

  const sourceName =
    category.sourceSlug === "coconut-coir-scrubber"
      ? "Coconut Coir Scrubbers"
      : category.sourceSlug === "coir-roll-and-sheet"
        ? "Coir Roll & Sheet"
        : category.name;
  const sourceNameIndex = productsPage.blocks.findIndex(
    (block) =>
      block.type === "paragraph" &&
      slugify(block.text) === slugify(sourceName),
  );
  const description =
    sourceNameIndex >= 0
      ? productsPage.blocks[sourceNameIndex + 1]
      : undefined;

  return description?.type === "paragraph"
    ? { name: sourceName, description: description.text }
    : undefined;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getOfficialProductPage(
  category: ProductCategory,
  productName: string,
) {
  const categoryPage = getOfficialCategoryPage(category);
  if (!categoryPage) return undefined;

  const categoryLink = categoryPage.links.find(
    (link) => slugify(link.text) === slugify(productName),
  );

  const path = categoryLink
    ? new URL(categoryLink.href, officialOrigin).pathname
    : `/${slugify(productName)}`;

  return getOfficialPageByPath(path);
}

export function getOfficialCategoryProductImage(
  category: ProductCategory,
  productName: string,
) {
  const categoryPage = getOfficialCategoryPage(category);
  const categoryLink = categoryPage?.links.find(
    (link) => slugify(link.text) === slugify(productName),
  );

  const productPage = getOfficialProductPage(category, productName);
  const productPath = productPage
    ? new URL(productPage.url).pathname
    : undefined;
  const categoryPath = categoryPage
    ? new URL(categoryPage.url).pathname
    : undefined;
  const sharedProductPage =
    productPath !== undefined &&
    (categoryPage?.links.filter(
      (link) => new URL(link.href, officialOrigin).pathname === productPath,
    ).length ?? 0) > 1;

  if (
    productPage &&
    productPath !== categoryPath &&
    !sharedProductPage &&
    productPage.images[0]
  ) {
    return productPage.images[0];
  }

  const imageIndex = categoryLink
    ? categoryPage?.links.indexOf(categoryLink)
    : undefined;

  return imageIndex !== undefined && imageIndex >= 0
    ? categoryPage?.images[imageIndex]
    : undefined;
}

export function getLocalProductHrefForSourcePath(sourcePath: string) {
  const normalizedPath = new URL(sourcePath, officialOrigin).pathname;

  for (const category of products) {
    if (
      normalizedPath === `/products/${category.sourceSlug}` ||
      category.aliases?.some(
        (alias) => normalizedPath === `/products/${alias}`,
      )
    ) {
      return `/products/${category.slug}`;
    }

    const categoryPage = getOfficialCategoryPage(category);
    const itemIndex = categoryPage?.links.findIndex(
      (link) => new URL(link.href, officialOrigin).pathname === normalizedPath,
    );

    if (categoryPage && itemIndex !== undefined && itemIndex >= 0) {
      const sourceName = categoryPage.links[itemIndex].text;
      const productName =
        category.productNames.find(
          (name) => slugify(name) === slugify(sourceName),
        ) ?? category.productNames[itemIndex];

      if (productName) {
        return `/products/${category.slug}/${slugify(productName)}`;
      }
    }
  }

  return undefined;
}

export function getOfficialPages() {
  return officialPages;
}
