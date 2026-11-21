import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Leaf } from "lucide-react";
import { getOfficialPageByPath } from "@/data/original-site";

export const metadata: Metadata = {
  title: "Services | Adhi Annam Coir",
  description:
    "Explore Adhi Annam Coir's project creation, solution design and strategy services.",
};

const serviceTitles = [
  "Custom Project Creation",
  "Personalized Solution Design",
  "Expert Strategy Package",
];

export default function InquiryServicesPage() {
  const page = getOfficialPageByPath("/inquiry-services-page");
  const services =
    page?.blocks.filter((block) => block.type === "list-item") ?? [];

  return (
    <div className="bg-[#fafbf7]">
      <section className="bg-[#183d2b] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#c6d9b1]">
            <Leaf size={17} /> Adhi Annam Coir
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            {page?.blocks[0]?.text ?? "Explore our services and get in touch"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Discuss a project with our team and explore a solution suited to
            your requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-[#183d2b]">
          {page?.blocks[1]?.text ?? "Our Services"}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const title = serviceTitles[index] ?? "Project Service";
            const description = service.text
              .replace(/^\d+\./, "")
              .replace(title, "")
              .replace(/Show more\s*$/i, "")
              .trim();
            const image = page?.images[index];

            return (
              <article
                key={title}
                className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm"
              >
                {image && (
                  <div className="relative mb-5 h-12 w-12 overflow-hidden rounded-full bg-[#e7eee0]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#183d2b]">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-stone-600">{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#eaf0e3] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-[#183d2b]">
              Have a project in mind?
            </h2>
            <p className="mt-3 leading-7 text-stone-600">
              Get in touch with Adhi Annam Coir to discuss your requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#183d2b] px-7 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            Contact our team <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
