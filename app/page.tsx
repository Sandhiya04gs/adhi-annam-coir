
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Globe2,
  ShieldCheck,
  Recycle,
  Sprout,
  Package,
  Layers,
  Droplets,
  Waves,
  CheckCircle2,
} from "lucide-react";
import { articles } from "@/data/blog";

const products = [
  {
    name: "Coir Packaging",
    description: "For shipping, logistics, and warehousing.",
    icon: Package,
    image: "/products/coir-packaging.jpg",
    href: "/products/coir-packaging",
  },
  {
    name: "Coir Filtration",
    description:
      "For air and water treatment, aquaculture, and industrial filtration.",
    icon: Droplets,
    image: "/products/coir-filtration.jpg",
    href: "/products/coir-filtration",
  },
  {
    name: "Coconut Coir Interior Panels",
    description: "For architects, builders, and interior designers.",
    icon: Layers,
    image: "/products/coir-interior-panel.jpg",
    href: "/products/coir-interior-panel",
  },
  {
    name: "Coconut Coir Scrubbers",
    description: "For cleaning purposes in households and hospitality.",
    icon: Recycle,
    image: "/products/coir-scrubber.jpg",
    href: "/products/coconut-coir-scrubber",
  },
  {
    name: "Coir Horticulture",
    description: "For nurseries, greenhouses, and commercial growers.",
    icon: Sprout,
    image: "/products/coir-horticulture.jpg",
    href: "/products/coir-horticulture",
  },
  {
    name: "Other Coir Products",
    description: "Coir rolls, coir sheets, geotextiles, corporate gifts, and more.",
    icon: Waves,
    image: "/products/coir-roll-sheet.jpg",
    href: "/products/coir-roll-and-sheet",
  },
];

const blogPosts = articles.slice(0, 3);

const benefits = [
  {
    title: "Sustainability",
    description:
      "Crafted from natural, biodegradable coconut fibres that support an eco-conscious lifestyle and help reduce waste.",
    icon: Leaf,
  },
  {
    title: "Versatility",
    description:
      "Adaptable for multiple uses, from mattresses and cushions to erosion control and garden applications.",
    icon: Sprout,
  },
  {
    title: "Eco-Friendly",
    description:
      "Helps reduce reliance on non-renewable materials and promotes a greener planet.",
    icon: Recycle,
  },
  {
    title: "Durability",
    description:
      "Coir fibre products retain strength, shape, and functionality even under demanding conditions.",
    icon: ShieldCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[620px] bg-[#183c2b] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102d20] via-[#173d2b] to-[#285b3c]" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#c6d9a9]">
              <span className="h-px w-10 bg-[#c6d9a9]" />
              Adhi Annam Coir Comforts Pvt. Ltd.
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Premium Coconut Coir Products –
              <span className="mt-2 block text-[#c6d9a9]">
                Manufacturers & Global Exporters
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We are an ISO 9001:2015 and ISO 14001:2015 certified company,
              trusted since 2007 as a manufacturer and exporter of
              eco-friendly horticulture applications, sustainable packaging
              solutions, and other premium coconut coir products. Using
              advanced Austrian machinery, we ensure top-quality,
              sustainable production across all our offerings.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/90 md:text-base">
              <p className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0 text-[#c6d9a9]" />
                ISO 9001 and ISO 14001 certified
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0 text-[#c6d9a9]" />
                Trusted since 2007
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0 text-[#c6d9a9]" />
                Coir solutions for horticulture, packaging and industrial use
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0 text-[#c6d9a9]" />
                Engineered with advanced European technology
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-md bg-[#c6d9a9] px-7 py-4 font-semibold text-[#173d2b] transition hover:bg-white"
              >
                Explore Our Products
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-md border border-white/70 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#173d2b]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
              <Image
                src="/hero/homepage-banner.jpg"
                alt="Coir scrubbers, packaging, filters, interior panels and horticulture products"
                width={1351}
                height={628}
                priority
                sizes="(max-width: 1280px) 45vw, 560px"
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="bg-[#f8f9f5] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Discover Our Range
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#173d2b] md:text-5xl">
              Our Products
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
              Explore our range of natural coconut coir products designed
              for packaging, filtration, interiors, horticulture, and
              industrial applications.
            </p>
          </motion.div>

          <div className="grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    href={product.href}
                    className="flex h-full flex-col"
                  >
                    <div className="relative h-64 overflow-hidden bg-[#f1f3ed]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-4 transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute right-4 top-4 rounded-full bg-white p-3 text-[#285b3c] shadow-sm">
                        <Icon size={21} />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-[#173d2b]">
                        {product.name}
                      </h3>

                      <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">
                        {product.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 border-t border-stone-100 pt-4 text-sm font-semibold text-green-800 transition group-hover:gap-3">
                        View products
                        <ArrowRight size={17} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-md bg-[#173d2b] px-8 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              Explore All Products
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG HIGHLIGHTS */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
                News & Insights
              </p>

              <h2 className="mt-3 text-4xl font-bold text-[#173d2b] md:text-5xl">
                Blog Highlights
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-stone-600">
                Explore ideas, industry insights, and applications of
                sustainable coconut coir products.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-green-800 transition hover:gap-3"
            >
              View All Blogs
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-56 overflow-hidden bg-[#f1f3ed]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-800">
                      {post.category}
                    </p>

                    <h3 className="mt-3 text-lg font-bold leading-7 text-[#173d2b]">
                      {post.title}
                    </h3>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-800 transition group-hover:gap-3">
                      Read More
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f1f4ed] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Our Strengths
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#173d2b] md:text-5xl">
              Why Choose Our Coir Fiber Innovations
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              We tackle environmental challenges by providing versatile,
              eco-friendly products crafted from natural, biodegradable
              coconut fibre.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-lg border border-[#e0e7da] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f0e2] text-green-800">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#173d2b]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf3e8] text-green-800">
            <Globe2 size={32} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-green-800">
            Building Relationships
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#173d2b] md:text-5xl">
            Our Clients
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-600">
            Our clients are our priority, and we deeply appreciate their
            trust and support in our growth. We are committed to building
            lasting relationships through quality products and dependable
            service.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <span className="rounded-full border border-[#dce6d5] px-6 py-3 text-sm font-semibold text-[#315b3d]">
              Quality
            </span>
            <span className="rounded-full border border-[#dce6d5] px-6 py-3 text-sm font-semibold text-[#315b3d]">
              Reliability
            </span>
            <span className="rounded-full border border-[#dce6d5] px-6 py-3 text-sm font-semibold text-[#315b3d]">
              Sustainability
            </span>
            <span className="rounded-full border border-[#dce6d5] px-6 py-3 text-sm font-semibold text-[#315b3d]">
              Innovation
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#173d2b] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c6d9a9]">
              Let&apos;s Connect
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Looking for Sustainable Coir Solutions?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/75">
              Get in touch with our team to discuss your product
              requirements and explore our coir solutions.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-[#c6d9a9] px-8 py-4 font-semibold text-[#173d2b] transition hover:bg-white"
          >
            Contact Us
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
