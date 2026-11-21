"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FocusEvent } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { products } from "@/data/products";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Trade Shows", href: "/trade-shows" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  useEffect(() => {
    function handlePopState() {
      setMenuOpen(false);
      setMobileProductsOpen(false);
      setDesktopProductsOpen(false);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!menuOpen && !desktopProductsOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileProductsOpen(false);
        setDesktopProductsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, desktopProductsOpen]);

  function isActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  function closeMenus() {
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setDesktopProductsOpen(false);
  }

  function handleProductsBlur(event: FocusEvent<HTMLDivElement>) {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      setDesktopProductsOpen(false);
    }
  }

  return (
    <header className="site-header">
      <a href="#main-content" className="site-skip-link">
        Skip to content
      </a>

      <div className="site-header-inner">
        <Link
          href="/"
          onClick={closeMenus}
          className="site-logo"
          aria-label="Adhi Annam Coir home"
        >
          <Image
            src="/annam-logo.jpg"
            alt="Adhi Annam Coir — Natural, Sustainable, Durable"
            width={247}
            height={63}
            priority
            className="site-logo-image"
          />
        </Link>

        <nav aria-label="Main navigation" className="site-navigation">
          {navigation
            .filter((item) => item.href !== "/contact")
            .map((item) =>
              item.href === "/products" ? (
                <div
                  className="site-products-nav"
                  key={item.name}
                  onBlur={handleProductsBlur}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`site-nav-link${isActive(item.href) ? " is-active" : ""}`}
                  >
                    {item.name}
                  </Link>
                  <button
                    type="button"
                    aria-label={
                      desktopProductsOpen
                        ? "Close product categories"
                        : "Open product categories"
                    }
                    aria-expanded={desktopProductsOpen}
                    onClick={() =>
                      setDesktopProductsOpen((open) => !open)
                    }
                    className="site-nav-dropdown-trigger"
                  >
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className={desktopProductsOpen ? "is-rotated" : ""}
                    />
                  </button>
                  <div
                    className={`site-product-menu${desktopProductsOpen ? " is-open" : ""}`}
                    aria-hidden={!desktopProductsOpen}
                    inert={!desktopProductsOpen}
                  >
                    <Link
                      href="/products"
                      onClick={closeMenus}
                      className="site-product-menu-link site-product-menu-all"
                    >
                      All Products
                    </Link>
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={closeMenus}
                        className="site-product-menu-link"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenus}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`site-nav-link${isActive(item.href) ? " is-active" : ""}`}
                >
                  {item.name}
                </Link>
              ),
            )}
        </nav>

        <Link
          href="/contact"
          onClick={closeMenus}
          aria-current={isActive("/contact") ? "page" : undefined}
          className="site-header-cta"
        >
          Contact Us <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => {
            setMenuOpen((open) => !open);
            setMobileProductsOpen(false);
          }}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="site-mobile-toggle"
        >
          {menuOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`site-mobile-panel${menuOpen ? " is-open" : ""}`}
      >
        <div className="site-mobile-panel-inner">
          {navigation.map((item) => (
            <div className="site-mobile-item" key={item.name}>
              <div className="site-mobile-item-row">
                <Link
                  href={item.href}
                  onClick={closeMenus}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`site-mobile-link${isActive(item.href) ? " is-active" : ""}`}
                >
                  {item.name}
                </Link>
                {item.href === "/products" && (
                  <button
                    type="button"
                    aria-label="Toggle product categories"
                    aria-expanded={mobileProductsOpen}
                    onClick={() =>
                      setMobileProductsOpen((open) => !open)
                    }
                    className="site-mobile-products-toggle"
                  >
                    <ChevronDown
                      size={17}
                      aria-hidden="true"
                      className={mobileProductsOpen ? "is-rotated" : ""}
                    />
                  </button>
                )}
              </div>
              {item.href === "/products" && (
                <div
                  className={`site-mobile-products${mobileProductsOpen ? " is-open" : ""}`}
                  aria-hidden={!mobileProductsOpen}
                  inert={!mobileProductsOpen}
                >
                  <Link
                    href="/products"
                    onClick={closeMenus}
                    className="site-mobile-product-link"
                  >
                    All Products
                  </Link>
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={closeMenus}
                      className="site-mobile-product-link"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
