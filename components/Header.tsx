
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Trade Shows", href: "/trade-shows" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const certificates = [
  { src: "/images/certificates/iso-9001.jpg", alt: "ISO 9001:2015 and ISO 14001:2015 certified company", width: 114 },
  { src: "/images/certificates/tuv-sud.jpg", alt: "TUV SUD ISO 9001", width: 46 },
  { src: "/images/certificates/iso-14001.jpg", alt: "TUV SUD ISO 14001", width: 44 },
  { src: "/images/certificates/zed.jpg", alt: "ZED certification", width: 44 },
  { src: "/images/certificates/certificate-5.jpg", alt: "IS 8391 ISI mark", width: 43 },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
          aria-label="Adhi Annam home"
        >
          <Image
            src="/annam-logo.jpg"
            alt="Adhi Annam Coir Comforts"
            width={247}
            height={63}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-green-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-green-800"
                  : "text-stone-700 hover:text-green-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Certification badges */}
        <div
          className="hidden items-center gap-2 xl:flex"
          aria-label="Certifications: ISO 9001, TUV SUD, ISO 14001, ZED, ISI"
        >
          {certificates.map((badge) => (
            <Image
              key={badge.src}
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={40}
              className="h-8 w-auto"
            />
          ))}
        </div>

        {/* Desktop Quote Button */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-green-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 lg:flex"
        >
          Get a Quote
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex items-center gap-2 rounded-lg border border-stone-200 p-2 text-green-900 transition hover:bg-green-50 lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
          <span className="text-sm">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-stone-200 bg-white px-5 py-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-green-50 text-green-900"
                    : "text-stone-700 hover:bg-green-50 hover:text-green-900"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
