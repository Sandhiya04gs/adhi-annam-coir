
export type ProductImage = {
  name: string;
  image: string;
};

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  sourceSlug: string;
  aliases?: string[];
  description: string;
  applications: string;
  image?: string;
  productNames: string[];
  productImages: ProductImage[];
};

// Creates product entries without images.
// Add the actual image paths later when you download the photos.
function createProductImages(productNames: string[]): ProductImage[] {
  return productNames.map((name) => ({
    name,
    image: "",
  }));
}

export const products: ProductCategory[] = [
  {
    id: 1,
    name: "Coir Packaging",
    slug: "coir-packaging",
    sourceSlug: "coir-packaging",
    aliases: ["packaging-solution"],
    description:
      "Sustainable coconut coir packaging products designed for protective shipping, cushioning and eco-friendly packaging solutions.",
    applications:
      "Shipping, logistics, warehousing and product protection",
    image: "/products/coir-packaging.jpg",
    productNames: [
      "Coir Bubble Wrap",
      "Coir Void Fillers",
      "Coir Fitted Cushion",
      "Coir Wood Box",
      "Coir Wood Pallet",
      "Coir Foam Block",
      "Coir Corner Cap",
      "Coir Tube Protectors",
      "Coir Table Protectors",
      "Coir Packaging Container",
    ],
    productImages: [
      { name: "Coir Bubble Wrap", image: "/products/coir-bubble-wrap.jpg" },
      { name: "Coir Void Fillers", image: "/products/coir-void-fillers.jpg" },
      { name: "Coir Fitted Cushion", image: "/products/coir-fitted-cushion.jpg" },
      { name: "Coir Wood Box", image: "/products/coir-wood-box.jpg" },
      { name: "Coir Wood Pallet", image: "/products/coir-wood-pallet.jpg" },
      { name: "Coir Foam Block", image: "/products/coir-foam-block.jpg" },
      { name: "Coir Corner Cap", image: "/products/coir-corner-cap.jpg" },
      { name: "Coir Tube Protectors", image: "/products/coir-tube-protectors.jpg" },
      { name: "Coir Table Protectors", image: "/products/coir-table-protectors.jpg" },
      { name: "Coir Packaging Container", image: "/products/coir-packaging-container.jpg" },
    ],
  },

  {
    id: 2,
    name: "Coir Filtration",
    slug: "coir-filtration",
    sourceSlug: "coir-filtration",
    aliases: ["filter-application"],
    description:
      "Natural coir fibre solutions for air and water treatment, aquaculture and industrial filtration.",
    applications: "Air filtration, water treatment and aquaculture",
    image: "/products/coir-filtration.jpg",
    productNames: [
      "Coir Air Filter",
      "Coir Wastewater Filter Media",
    ],
    productImages: createProductImages([
      "Coir Air Filter",
      "Coir Wastewater Filter Media",
    ]),
  },

  {
    id: 3,
    name: "Coir Interior Panel",
    slug: "coir-interior-panel",
    sourceSlug: "coir-interior-panel",
    aliases: ["interior-solution"],
    description:
      "Coconut coir-based panels for interior and functional applications.",
    applications: "Interior design and building applications",
    image: "/products/coir-interior-panel.jpg",
    productNames: [
      "Coir Roof Panel",
      "Coir Insulation Panel",
      "Coir Acoustic Panel",
      "Coir Board Engraving",
    ],
    productImages: createProductImages([
      "Coir Roof Panel",
      "Coir Insulation Panel",
      "Coir Acoustic Panel",
      "Coir Board Engraving",
    ]),
  },

  {
    id: 4,
    name: "Coir Scrubber",
    slug: "coir-scrubber",
    sourceSlug: "coconut-coir-scrubber",
    aliases: ["home-application"],
    description:
      "Natural coconut fibre scrubber products for cleaning and everyday use.",
    applications: "Household and hospitality cleaning",
    image: "/products/coir-scrubber.jpg",
    productNames: [
      "Coir Kitchen Scrubber",
      "Coir Bath Scrubber",
    ],
    productImages: createProductImages([
      "Coir Kitchen Scrubber",
      "Coir Bath Scrubber",
    ]),
  },

  {
    id: 5,
    name: "Coir Horticulture",
    slug: "coir-horticulture",
    sourceSlug: "coir-horticulture",
    aliases: ["garden-application"],
    description:
      "Natural coir-based growing media and horticultural solutions.",
    applications: "Nurseries, greenhouses and commercial growing",
    image: "/products/coir-horticulture.jpg",
    productNames: [
      "Coir Pots",
      "Coir Weed Prevention Mats",
      "Coco Basket Liner",
      "Coco Trough Liner",
      "Coir Coco Pole",
      "Coir Microgreen Grow Mat",
      "Coir Root Trainer",
      "Coir Grow Mat",
      "Coir Seedling Tray",
    ],
    productImages: createProductImages([
      "Coir Pots",
      "Coir Weed Prevention Mats",
      "Coco Basket Liner",
      "Coco Trough Liner",
      "Coir Coco Pole",
      "Coir Microgreen Grow Mat",
      "Coir Root Trainer",
      "Coir Grow Mat",
      "Coir Seedling Tray",
    ]),
  },

  {
    id: 6,
    name: "Coir Roll & Sheets",
    slug: "coir-roll-sheets",
    sourceSlug: "coir-roll-and-sheet",
    description:
      "Coir rolls and sheets for commercial and industrial applications.",
    applications: "Flooring, construction and industrial uses",
    image: "/products/coir-roll-sheet.jpg",
    productNames: [
      "Coir Needlefelt Roll",
      "Rubberized Coir Sheet",
    ],
    productImages: createProductImages([
      "Coir Needlefelt Roll",
      "Rubberized Coir Sheet",
    ]),
  },

  {
    id: 7,
    name: "Coir Erosion Control",
    slug: "coir-erosion-control",
    sourceSlug: "erosion-control",
    description:
      "Natural coir products designed to help control soil erosion.",
    applications: "Landscaping and soil conservation",
    image: "/products/coir-erosion-control.jpg",
    productNames: [
      "Coir Geotextile",
      "Coir Erosion Control Blanket",
      "Coir Erosion Control Blanket (PP Net)",
    ],
    productImages: createProductImages([
      "Coir Geotextile",
      "Coir Erosion Control Blanket",
      "Coir Erosion Control Blanket (PP Net)",
    ]),
  },

  {
    id: 8,
    name: "Coir Mattresses",
    slug: "coir-mattresses",
    sourceSlug: "mattresses",
    description:
      "Coconut coir fibre products for mattress and bedding applications.",
    applications: "Mattress manufacturing and bedding",
    image: "/products/coir-mattresses.jpg",
    productNames: [
      "Coir Memory Foam Mattress",
      "Foam Mattress",
      "Rubberized Coir Mattress",
      "Slim Coir Mattresses",
      "Back Pain Relief Mattress",
      "Foldable Travel Mattress",
      "Hospital Bed Mattress",
      "Waterproof Mattress Protector",
      "Memory Foam Pillow",
      "Coir & Cotton Pillow",
    ],
    productImages: createProductImages([
      "Coir Memory Foam Mattress",
      "Foam Mattress",
      "Rubberized Coir Mattress",
      "Slim Coir Mattresses",
      "Back Pain Relief Mattress",
      "Foldable Travel Mattress",
      "Hospital Bed Mattress",
      "Waterproof Mattress Protector",
      "Memory Foam Pillow",
      "Coir & Cotton Pillow",
    ]),
  },

  {
    id: 9,
    name: "Coir Corporate Gifts",
    slug: "coir-corporate-gifts",
    sourceSlug: "corporate-gifts",
    description:
      "Natural coir products suitable for corporate gifting.",
    applications: "Corporate gifting and promotional products",
    image: "/products/coir-corporate-gifts.jpg",
    productNames: [
      "Laptop Stand",
      "Table Organizer",
      "Coir Wood Painting",
      "Mobile Stand",
      "Coir Pots",
      "Coir Wood Plaque",
    ],
    productImages: createProductImages([
      "Laptop Stand",
      "Table Organizer",
      "Coir Wood Painting",
      "Mobile Stand",
      "Coir Pots",
      "Coir Wood Plaque",
    ]),
  },
];

export function getProductBySlug(slug: string) {
  return products.find(
    (product) =>
      product.slug === slug ||
      product.sourceSlug === slug ||
      product.aliases?.includes(slug),
  );
}
