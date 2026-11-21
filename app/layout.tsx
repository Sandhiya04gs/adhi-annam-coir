
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adhiannamcoir.com"),

  title: {
    default:
      "Eco-Friendly Coir Products Manufacturer & Exporter Since 2007 | Adhi Annam Coir",
    template: "%s | Adhi Annam Coir",
  },

  description:
    "Coconut coir products manufacturer and exporter since 2007. Packaging, interior panels, horticulture, filtration, erosion control and scrubbers. ISO 9001 & 14001 certified. Pollachi, India.",

  keywords: [
    "Adhi Annam Coir",
    "Coir Products",
    "Coir Packaging",
    "Coir Horticulture",
    "Coir Exporter India",
    "Sustainable Coir Solutions",
  ],

  openGraph: {
    type: "website",
    siteName: "Adhi Annam Coir",
    title: "Adhi Annam Coir Comforts | Sustainable Coir Products",
    description:
      "ISO 9001 & 14001 certified manufacturer and exporter of premium coconut coir products from Pollachi, Tamil Nadu.",
    images: ["/images/original/home/home-01-45a24b263e.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Adhi Annam Coir Comforts Pvt. Ltd.",
  description:
    "Manufacturer and exporter of natural coconut coir products and sustainable coir solutions since 2007.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pollachi",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white text-stone-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
