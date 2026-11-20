export type ProductDetail = {
  tagline: string;
  description: string;
  specifications: { label: string; value: string }[];
  applications: { title: string; text: string }[];
  advantages: { title: string; text: string }[];
  related: string[]; // product names (must exist in data/products.ts)
};

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const productDetails: Record<string, ProductDetail> = {
  "Coir Bubble Wrap": {
    tagline: "Drop-in replacement for plastic bubble wrap",
    description:
      "Drop-in replacement for plastic bubble wrap. Made from coconut fibre, no microplastic shedding, exempt from plastic packaging taxes. Custom sizes available.",
    specifications: [
      { label: "Material", value: "Coconut fibre bonded with vulcanised rubber" },
      { label: "Format", value: "Sheets and rolls" },
      { label: "Size", value: "Custom sheet sizes available" },
      { label: "Density & thickness", value: "Adjustable to your requirement" },
    ],
    applications: [
      {
        title: "Electronics",
        text: "Cushioning for devices, sensors, and components in retail and e-commerce boxes.",
      },
      {
        title: "Glassware & ceramics",
        text: "Wrap protection for bottles, drinkware, and decorative items.",
      },
      {
        title: "Cosmetics & premium goods",
        text: "Inner cushioning for subscription boxes and luxury packaging.",
      },
      {
        title: "Furniture",
        text: "Surface and corner wrapping for mirrors, frames, and home decor.",
      },
      {
        title: "Industrial",
        text: "Interleaving sheets for machined parts; available in roll format for packing lines.",
      },
    ],
    advantages: [
      {
        title: "Same protection, zero plastic",
        text: "Interlocking coir fibres absorb shock and vibration during transit, matching PE bubble wrap performance.",
      },
      {
        title: "No microplastic shedding",
        text: "Unlike PE bubble wrap that sheds synthetic particles with every tear and crumple, coir fibre stays intact. Natural fibre bonded with vulcanised rubber.",
      },
      {
        title: "No EPR / plastic tax exposure",
        text: "Non-plastic material. Exempt from EU PPWR packaging levies and US state EPR fees now rolling out across 7+ states.",
      },
      {
        title: "Custom-mouldable",
        text: "We engineer to your product dimensions. Density, thickness, and sheet size all adjustable.",
      },
    ],
    related: [
      "Coir Corner Cap",
      "Coir Foam Block",
      "Coir Void Fillers",
      "Coir Wood Pallet",
    ],
  },
};
