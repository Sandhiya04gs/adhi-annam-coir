
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getOfficialPageByPath } from "@/data/original-site";

const originalAboutPage = getOfficialPageByPath("/about");

export const metadata: Metadata = {
  title: originalAboutPage?.title ?? "About Adhi Annam Coir",
  description:
    originalAboutPage?.description ??
    "Learn about Adhi Annam Coir Comforts, established in Pollachi in 2007.",
};

const management = [
  {
    name: "A. Karunamurthi",
    role: "Chairman",
    image: "/images/akm_edited.jpg",
  },
  {
    name: "SV. Elango",
    role: "Managing Director",
    image: "/images/Elango_edited_edited.jpg",
  },
  {
    name: "A. Sriram",
    role: "Director- Operations & R&D",
    image: "/images/Sriram_edited.jpg",
  },
  {
    name: "K. Kamesh Arun",
    role: "Director",
    image: "/images/Kames_edited_edited.jpg",
  },
  {
    name: "Vikas Arun K",
    role: "Director - Business Development",
    image: "/images/vikas-arun.jpg",
  },
];

const values = [
  "Sustainability",
  "Innovation",
  "Quality",
  "Customer Satisfaction",
  "Integrity",
];

const certifications = [
  "ISO 9001:2015 – Quality Management System",
  "ISO 14001:2015 – Environmental Management System",
  "TUV SUD ISO 9001",
  "TUV SUD ISO 14001",
  "ZED Certification",
  "IS 8391 ISI Mark",
  "Quality Council of India",
  "MSME",
  "NSIC",
  "D&B",
  "OEM Certifications",
];

function paragraphAfterHeading(heading: string) {
  const blocks = originalAboutPage?.blocks ?? [];
  const index = blocks.findIndex(
    (block) => block.type === "heading" && block.text === heading,
  );
  const paragraph = blocks
    .slice(index + 1)
    .find((block) => block.type === "paragraph");
  return paragraph?.text ?? "";
}

export default function AboutPage() {
  const blocks = originalAboutPage?.blocks ?? [];

  const introHeading = blocks.find(
    (block) => block.type === "heading",
  )?.text;

  const introParagraphs = blocks
    .filter((block) => block.type === "paragraph")
    .slice(0, 3);

  const globalReachIndex = blocks.findIndex(
    (block) => block.type === "heading" && block.text === "Our Global Reach",
  );

  const globalStats = blocks
    .slice(globalReachIndex + 1)
    .filter((block) => block.type === "heading")
    .slice(0, 7);

  const companyImages = originalAboutPage?.images ?? [];

  return (
    <div className="bg-white text-[#343434]">

      {/* About Introduction */}
      <section className="mx-auto grid max-w-[1230px] items-center gap-8 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <div>
          <h1 className="text-3xl font-medium leading-tight text-[#3e4930] md:text-[38px]">
            {introHeading}
          </h1>

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#555]">
            {introParagraphs.map((block, index) => (
              <p key={`${index}-${block.text.slice(0, 18)}`}>
                {block.text}
              </p>
            ))}
          </div>

          <p className="mt-5 text-[15px] font-medium text-[#5a7838]">
            Established in 2007 in Pollachi, Tamil Nadu
          </p>
        </div>

        <div className="relative aspect-[1.55] overflow-hidden bg-[#f7f7f3]">
          {companyImages[1] && (
            <Image
              src={companyImages[1].src}
              alt="Adhi Annam Coir manufacturing units in Pollachi"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
          )}
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-[#f5f6ef] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-[1230px]">
          <h2 className="text-center text-2xl font-medium text-[#3e4930] md:text-3xl">
            Our Global Reach
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "10+", label: "Countries Served" },
              { value: "3", label: "Shipping Ports" },
              { value: "4 weeks", label: "Lead Time" },
              { value: "180+", label: "Enterprise Partners" },
            ].map((item) => (
              <div className="text-center" key={item.label}>
                <p className="text-3xl font-semibold text-[#657f38] md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-[#555]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {globalStats.some((block) =>
            /Tuticorn|Chennai|Cochin/i.test(block.text)
          ) && (
            <p className="mt-7 text-center text-sm text-[#555]">
              Shipping from Tuticorin, Chennai &amp; Cochin
            </p>
          )}
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="mx-auto grid max-w-[1230px] items-center gap-8 px-5 py-12 md:grid-cols-2 md:px-8">
        <div className="relative order-2 aspect-[1.55] overflow-hidden bg-[#f7f7f3] md:order-1">
          {companyImages[2] && (
            <Image
              src={companyImages[2].src}
              alt="Aerial view of Adhi Annam Coir manufacturing facility in Pollachi, India"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
          )}
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-medium text-[#3e4930] md:text-3xl">
            Our Manufacturing Facility
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#555]">
            Based in Pollachi, Tamil Nadu, our manufacturing facility supports
            the production of a diverse range of natural coconut coir products.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-[#555]">
            Each product is crafted using advanced technology and rigorous
            quality control processes to meet customer and industry
            requirements.
          </p>
        </div>
      </section>

      {/* Vision, Mission and Values */}
      <section className="bg-[#f5f6ef] px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-[1230px] gap-8 md:grid-cols-2">
          {[
            {
              title: "Our Vision",
              text: paragraphAfterHeading("Our Vision"),
            },
            {
              title: "Our Mission",
              text: paragraphAfterHeading("Our Mission"),
            },
          ].map((item) => (
            <article key={item.title}>
              <h2 className="text-2xl font-medium text-[#3e4930]">
                {item.title}
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#555]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-[1230px]">
          <h2 className="text-2xl font-medium text-[#3e4930]">
            Our Values
          </h2>

          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {values.map((value) => (
              <li
                key={value}
                className="list-inside list-disc text-[15px] text-[#555]"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Management Team */}
      <section className="mx-auto max-w-[1230px] px-5 py-12 md:px-8">
        <div className="mb-7">
          <h2 className="text-2xl font-medium text-[#3e4930] md:text-3xl">
            Meet Our Management Team
          </h2>

          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#555]">
            Our experienced team, including engineers, quality control experts,
            and sales professionals, collaborates to deliver high-quality
            products. We emphasize continuous skill development to maintain
            industry-leading standards.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {management.map((person) => (
            <article className="min-w-0" key={person.name}>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f6ef]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="mt-3 text-base font-semibold text-[#3e4930]">
                {person.name}
              </h3>

              <p className="mt-1 text-sm text-[#666]">
                {person.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-[#f5f6ef] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-[1230px]">
          <h2 className="text-2xl font-medium text-[#3e4930] md:text-3xl">
            Certificates
          </h2>

          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate) => (
              <li
                className="text-[15px] leading-6 text-[#555]"
                key={certificate}
              >
                {certificate}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid max-w-[500px] grid-cols-2 gap-4">
            {[
              "/images/certificates/certificate-1.jpg",
              "/images/certificates/certificate-5.jpg",
            ].map((src) => (
              <div
                key={src}
                className="relative flex aspect-[1.25] items-center justify-center bg-white p-3"
              >
                <Image
                  src={src}
                  alt="Adhi Annam Coir certification"
                  fill
                  sizes="(max-width: 640px) 45vw, 250px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="px-5 pb-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#718b3b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#526a2c]"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}
