
export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  applications: string;
  productNames: string[];
  productImages?: {
    name: string;
    image: string;
  }[];
};

export const products: ProductCategory[] = [
  {
    id: 1,
    name: "Coir Packaging",
    slug: "coir-packaging",
    image: "/products/coir-packaging.jpg",
    description:
      "Sustainable coconut coir packaging products designed for protective shipping, cushioning and eco-friendly packaging solutions.",
    applications: "Shipping, logistics, warehousing and product protection",
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
    image: "/products/coir-filtration.jpg",
    description:
      "Natural coconut coir fibre filtration media for air filtration, wastewater treatment and industrial filtration systems.",
    applications: "Air filtration, wastewater treatment, aquaculture and industrial systems",
    productNames: ["Coir Air Filter", "Coir Wastewater Filter Media"],
  },
  {
    id: 3,
    name: "Coir Interior Panel",
    slug: "coir-interior-panel",
    image: "/products/coir-interior-panel.jpg",
    description:
      "Coconut coir fibre panels developed for acoustic treatment, insulation and interior applications.",
    applications: "Architecture, construction, commercial interiors and interior design",
    productNames: [
      "Coir Roof Panel",
      "Coir Insulation Panel",
      "Coir Acoustic Panel",
      "Coir Board Engraving",
    ],
  },
  {
    id: 4,
    name: "Coir Scrubber",
    slug: "coconut-coir-scrubber",
    image: "/products/coir-scrubber.jpg",
    description:
      "Natural coconut coir fibre scrubbers designed for household cleaning and hospitality applications.",
    applications: "Kitchen cleaning, bathrooms, households and hospitality",
    productNames: ["Coir Kitchen Scrubber", "Coir Bath Scrubber"],
  },
  {
    id: 5,
    name: "Coir Horticulture",
    slug: "coir-horticulture",
    image: "/products/coir-horticulture.jpg",
    description:
      "Coconut coir horticulture products for plant growing, nurseries, gardening and commercial cultivation.",
    applications: "Nurseries, greenhouses, gardening and commercial growing",
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
  },
  {
    id: 6,
    name: "Coir Roll & Sheet",
    slug: "coir-roll-and-sheet",
    image: "/products/coir-roll-sheet.jpg",
    description:
      "Needlefelt coir rolls and rubberized coir sheets for various industrial and commercial applications.",
    applications: "Industrial applications, cushioning, insulation and coir-based manufacturing",
    productNames: ["Coir Needlefelt Roll", "Rubberized Coir Sheet"],
  },
  {
    id: 7,
    name: "Coir Erosion Control",
    slug: "erosion-control",
    image: "/products/coir-erosion-control.jpg",
    description:
      "Coconut coir fibre products designed to support soil stabilization, slope protection and erosion management.",
    applications: "Road construction, slope stabilization, landscaping and land development",
    productNames: [
      "Coir Geotextile",
      "Coir Erosion Control Blanket (PP Net)",
    ],
  },
  {
    id: 8,
    name: "Coir Mattresses",
    slug: "mattresses",
    image: "/products/coir-mattresses.jpg",
    description:
      "A range of coir mattresses and bedding products for residential, hospitality and healthcare applications.",
    applications: "Homes, hotels, hospitals and bedding",
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
  },
  {
    id: 9,
    name: "Coir Corporate Gifts",
    slug: "corporate-gifts",
    image: "/products/coir-corporate-gifts.jpg",
    description:
      "Eco-friendly coir-based corporate gifts and accessories suitable for business gifting and promotional purposes.",
    applications: "Corporate gifting, office accessories and promotional gifts",
    productNames: [
      "Laptop Stand",
      "Table Organizer",
      "Coir Wood Painting",
      "Mobile Stand",
      "Coir Pots",
      "Coir Wood Plaque",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
