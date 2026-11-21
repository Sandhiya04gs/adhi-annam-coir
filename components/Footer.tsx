
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

const certificates = [
  {
    src: "/images/certificates/certificate-1.jpg",
    alt: "Adhi Annam Coir certifications and quality marks",
  },
  {
    src: "/images/certificates/certificate-5.jpg",
    alt: "ISI certification mark",
  },
  {
    src: "/images/certificates/zed.jpg",
    alt: "ZED certification mark",
  },
  {
    src: "/images/certificates/tuv-sud.jpg",
    alt: "TÜV SÜD ISO 9001 certification mark",
  },
  {
    src: "/images/certificates/iso-9001.jpg",
    alt: "ISO 9001:2015 certification mark",
  },
  {
    src: "/images/certificates/iso-14001.jpg",
    alt: "TÜV SÜD ISO 14001 certification mark",
  },
];

const address =
  "2/154-1, Unjavelampatti, Udumalai Road, Pollachi, Coimbatore - 642003, Tamil Nadu, India.";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Adhi+Annam+Coir+Comforts+Pvt.+Limited&query_place_id=0x3ba839d51e3fac99:0x89ca2ec4703d1734";



export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        {/* Brand */}
        <div className="site-footer-brand">
          <Link
            href="/"
            aria-label="Adhi Annam Coir home"
            className="site-footer-logo"
          >
            <Image
              src="/annam-logo.jpg"
              alt="Adhi Annam Coir — Natural, Sustainable, Durable"
              width={247}
              height={63}
              className="site-footer-logo-image"
            />
          </Link>

          <p>
            Sustainable coir solutions crafted from nature. We create
            innovative coir products for packaging, horticulture, interiors and
            more.
          </p>

          <Link href="/about" className="site-footer-social">
            Discover Our Company
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>

          <a
            href="https://in.linkedin.com/company/adhi-annam-coir"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-social site-footer-linkedin"
          >
            LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links" className="site-footer-column">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Products */}
        <nav aria-label="Product links" className="site-footer-column">
          <h2>Our Products</h2>
          <ul>
            {productLinks.map((product) => (
              <li key={product.href}>
                <Link href={product.href}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Details */}
        <address className="site-footer-column site-footer-contact">
          <h2>Get In Touch</h2>

          <a href="mailto:hello@adhiannamcoir.com">
            <Mail size={17} aria-hidden="true" />
            <span>hello@adhiannamcoir.com</span>
          </a>

          <a href="tel:+919566294433">
            <Phone size={17} aria-hidden="true" />
            <span>+91 95662 94433</span>
          </a>

          {/* Clickable Exact Google Maps Address */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Adhi Annam Coir Comforts location on Google Maps"
          >
            <MapPin size={17} aria-hidden="true" />
            <span>{address}</span>
          </a>

          <Link href="/contact" className="site-footer-cta">
            Send an enquiry
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </address>
      </div>

      {/* Certificates */}
      <div className="site-footer-credentials">
        <h2>Certificates</h2>

        <div className="site-footer-certificate-list">
          {certificates.map((certificate) => (
            <div
              className="site-footer-certificate-card"
              key={certificate.src}
            >
              <Image
                src={certificate.src}
                alt={certificate.alt}
                width={256}
                height={289}
                className="site-footer-certificate-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="site-footer-bottom">
        <span className="site-footer-copyright">
          © {new Date().getFullYear()} Adhi Annam Coir Comforts Pvt. Ltd. All
          rights reserved.
        </span>

        <span className="site-footer-tagline">
          Sustainable Living, Naturally.
        </span>

        <Link href="/contact">Contact Adhi Annam Coir</Link>
      </div>
    </footer>
  );
}
