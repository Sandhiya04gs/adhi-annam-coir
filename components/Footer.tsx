
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { products } from "@/data/products";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Trade Shows", href: "/trade-shows" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const productLinks = products.map((product) => ({
  name: product.name,
  href: `/products/${product.slug}`,
}));

export default function Footer() {
  return (
    <footer className="bg-[#102b22] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company Information */}
          <div>
            <Link
              href="/"
              aria-label="Adhi Annam Coir Comforts home"
              className="mb-6 inline-block rounded-lg bg-white p-2"
            >
              <Image
                src="/annam-logo.jpg"
                alt="Adhi Annam Coir Comforts"
                width={247}
                height={63}
                className="h-12 w-auto"
              />
            </Link>

            <p className="max-w-xs text-sm leading-7 text-gray-300">
              Sustainable coir solutions crafted from nature.
              We create innovative coir products for packaging,
              horticulture, interiors and more.
            </p>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c5a76b] transition hover:text-white"
            >
              Discover Our Company
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="https://in.linkedin.com/company/adhi-annam-coir"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#c5a76b]"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition hover:pl-1 hover:text-[#c5a76b]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Our Products
            </h3>

            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition hover:pl-1 hover:text-[#c5a76b]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#c5a76b]"
                />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Adhi+Annam+Coir+Comforts+Pollachi+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-gray-300 transition hover:text-[#c5a76b]"
                >
                  2/154-1, Unjavelampatti,
                  Udumalai Road, Pollachi,
                  Coimbatore - 642003,
                  Tamil Nadu, India.
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={19}
                  className="shrink-0 text-[#c5a76b]"
                />

                <a
                  href="tel:+919566294433"
                  className="text-sm text-gray-300 transition hover:text-[#c5a76b]"
                >
                  +91 95662 94433
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={19}
                  className="shrink-0 text-[#c5a76b]"
                />

                <a
                  href="mailto:hello@adhiannamcoir.com"
                  className="break-all text-sm text-gray-300 transition hover:text-[#c5a76b]"
                >
                  hello@adhiannamcoir.com
                </a>
              </div>

            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c5a76b] px-5 py-3 text-sm font-semibold text-[#102b22] transition hover:bg-white"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c5a76b]">
            Certificates
          </h3>
          <Image
            src="/images/certificates/certificate-1.jpg"
            alt="ISO 9001, ISO 14001, TUV SUD, Quality Council of India, MSME, NSIC, ISI, D&B and OEM certifications"
            width={256}
            height={289}
            className="h-28 w-auto rounded-md bg-white p-1"
          />
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/15 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-400">
              © 2026 Adhi Annam Coir Comforts Pvt. Ltd. All rights reserved.
            </p>

            <p className="text-sm text-gray-400">
              Sustainable Living, Naturally.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
