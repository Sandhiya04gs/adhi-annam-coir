export type TradeShow = {
  slug: string;
  name: string;
  location: string;
  country: string;
  description?: string;
  image: string;
  imageAlt: string;
  galleryImages?: { src: string; alt: string }[];
  status: "upcoming" | "past";
  date?: string;
  venue?: string;
  stallNumber?: string;
};

export const tradeShows: TradeShow[] = [
  {
    slug: "packvision-expo-2026",
    name: "PackVision Expo – Chennai, India 2026",
    location: "Chennai, Tamil Nadu",
    country: "India",
    image: "/images/trade-shows/packvision-expo-2026.webp",
    imageAlt: "PackVision Expo",
    status: "upcoming",
    date: "15.10.2026 to 17.10.2026",
    venue: "Chennai Trade Centre, Chennai, Tamil Nadu, India",
    stallNumber: "P-89",
  },
  {
    slug: "propak-india-26",
    name: "ProPak India’26",
    location: "Mumbai",
    country: "India",
    description:
      "Our first Pack Expo, showcasing sustainable coir-based packaging solutions as eco-friendly alternatives to conventional packaging materials.",
    image: "/images/trade-shows/propak-india-2026.webp",
    imageAlt: "Adhi Annam Coir at ProPak India",
    galleryImages: [
      {
        src: "/images/trade-shows/propak-india-2026-02.webp",
        alt: "Additional Adhi Annam Coir exhibition photograph at ProPak India",
      },
      {
        src: "/images/trade-shows/propak-india-2026-03.webp",
        alt: "Adhi Annam Coir booth photograph at ProPak India",
      },
    ],
    status: "past",
  },
  {
    slug: "ipm-26-essen-germany",
    name: "IPM’26",
    location: "Essen",
    country: "Germany",
    description:
      "Returning to IPM Essen in Germany for the second consecutive year! It was an incredible opportunity to reconnect with global industry leaders, explore the latest innovations in horticulture, and strengthen our international partnerships for 2026",
    image: "/images/trade-shows/ipm-essen-2026.webp",
    imageAlt: "Adhi Annam Coir exhibiting at IPM Essen",
    status: "past",
  },
  {
    slug: "cultivate-25-ohio-usa",
    name: "Cultivate’25",
    location: "Ohio",
    country: "USA",
    description:
      "Showcasing our full range of 100% natural coconut fiber-based horticulture products.",
    image: "/images/trade-shows/cultivate-2025.webp",
    imageAlt: "Adhi Annam Coir at Cultivate",
    status: "past",
  },
  {
    slug: "architect-interior-expo-25",
    name: "Architect & Interior Expo’25",
    location: "Chennai",
    country: "India",
    description:
      "Displayed eco-friendly coir-based solutions for interior solutions",
    image: "/images/trade-shows/architect-interior-expo-2025.webp",
    imageAlt: "Adhi Annam Coir at Architect & Interior Expo",
    status: "past",
  },
  {
    slug: "india-international-horti-expo-25",
    name: "India International Horti Expo’25",
    location: "Greater Noida",
    country: "India",
    description:
      "Featured our complete range of coconut coir products for horticulture and urban gardening.",
    image: "/images/trade-shows/india-international-horti-expo-2025.webp",
    imageAlt: "Adhi Annam Coir at India International Horti Expo",
    status: "past",
  },
  {
    slug: "ipm-essen-25",
    name: "IPM Essen’25",
    location: "Essen",
    country: "Germany",
    description:
      "Marked our European debut with sustainable coir pots, liners, and growing media solutions.",
    image: "/images/trade-shows/ipm-essen-2025.webp",
    imageAlt: "Adhi Annam Coir at IPM Essen",
    status: "past",
  },
  {
    slug: "gardex-24-tokyo-japan",
    name: "Gardex’24",
    location: "Tokyo",
    country: "Japan",
    description:
      "Introduced our eco-conscious coir range to the Japanese market, focusing on horticulture and green innovation.",
    image: "/images/trade-shows/gardex-2024.webp",
    imageAlt: "Adhi Annam Coir at Gardex",
    status: "past",
  },
];

export const tradeShowIntro = {
  heading: "Global Footprint in Trade Shows",
  tagline:
    "Snapshots from our journey across top horticulture and sustainability trade shows.",
  paragraphs: [
    "At Adhi Annam Coir, we take pride in showcasing our innovative and eco-conscious coir-based solutions on the world stage. From North America to Asia and Europe, our participation in international expos reflects our commitment to sustainability, innovation, and global partnerships.",
    "Through these exhibitions, we connect with distributors, industry leaders, and environmental advocates, sharing the benefits of 100% natural coir products that support a greener planet. Our displays highlight versatile applications across horticulture, landscaping, interior design, and construction.",
  ],
};

export function getTradeShow(slug: string) {
  return tradeShows.find((event) => event.slug === slug);
}
