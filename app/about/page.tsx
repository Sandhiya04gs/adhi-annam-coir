
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Leaf,
  MapPin,
  Award,
  Users,
  Factory,
  ShieldCheck,
  Globe,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Sustainability",
    description:
      "Promoting responsible use of natural coconut fibre through environmentally conscious products.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "Developing practical coir-based solutions for changing customer and industry requirements.",
  },
  {
    number: "03",
    title: "Quality",
    description:
      "Focusing on reliable manufacturing processes and consistent product quality.",
  },
  {
    number: "04",
    title: "Customer Satisfaction",
    description:
      "Building lasting relationships through dependable products and customer-focused service.",
  },
  {
    number: "05",
    title: "Integrity",
    description:
      "Maintaining responsible business practices and building trust with customers and partners.",
  },
];

const management = [
  {
    name: "A. Karunamurthi",
    role: "Chairman",
  },
  {
    name: "SV. Elango",
    role: "Managing Director",
  },
  {
    name: "A. Sriram",
    role: "Director – Operations & R&D",
  },
  {
    name: "K. Kamesh Arun",
    role: "Director",
  },
  {
    name: "Vikas Arun K",
    role: "Director – Business Development",
  },
];

const reach = [
  { value: "10+", label: "Countries Served" },
  { value: "180+", label: "Enterprise Partners" },
  { value: "3", label: "Shipping Ports" },
  { value: "4 Weeks", label: "Lead Time" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fafbf7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183d2b] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c6d9b1]">
            About Adhi Annam
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-7xl">
            Nature&apos;s Fibre.
            <br />
            Innovative Solutions.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Creating sustainable solutions from coconut fibre and bringing
            the potential of natural coir products to customers across the world.
          </p>

          <Link
            href="/products"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#c6d9b1] px-7 py-4 text-sm font-semibold text-[#183d2b] transition hover:bg-white"
          >
            Explore Our Products
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Company Story */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Our Story
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#183d2b] md:text-5xl">
            Transforming coconut fibre into meaningful solutions
          </h2>

          <p className="mt-7 leading-8 text-stone-600">
            Adhi Annam Coir Comforts Pvt. Ltd. was established in 2007 in
            Pollachi, Tamil Nadu, India. We specialise in developing
            sustainable and biodegradable products made from natural
            coconut fibre.
          </p>

          <p className="mt-5 leading-8 text-stone-600">
            Our product range includes coir-based growing mediums,
            biodegradable packaging materials, erosion control mats,
            filtration products, interior panels and other natural
            fibre solutions.
          </p>

          <p className="mt-5 leading-8 text-stone-600">
            With advanced manufacturing technology and quality control
            processes, we serve customers across Indian and international
            markets while focusing on sustainability and customer satisfaction.
          </p>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#dce8d1] to-[#a9c394] p-10">
          <div className="absolute h-72 w-72 rounded-full border border-white/50" />
          <div className="absolute h-52 w-52 rounded-full border border-white/50" />

          <div className="relative text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/70">
              <Leaf size={58} strokeWidth={1.2} className="text-green-800" />
            </div>

            <p className="mt-8 text-5xl font-semibold text-[#183d2b]">
              2007
            </p>

            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-900">
              Established in Pollachi
            </p>
          </div>
        </div>
      </section>

      {/* Company Reach */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Our Global Reach
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
              Connecting natural coir solutions to global markets
            </h2>

            <p className="mt-5 leading-7 text-stone-600">
              Serving customers across international markets with a
              focus on sustainable products and dependable delivery.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {reach.map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-[#a9c394] pl-5"
              >
                <p className="text-3xl font-semibold text-[#183d2b] md:text-4xl">
                  {item.value}
                </p>

                <p className="mt-3 text-sm text-stone-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#f3f6ef] p-7">
            <div className="flex items-center gap-3 text-[#183d2b]">
              <Globe size={22} />
              <h3 className="text-lg font-semibold">
                Shipping Connectivity
              </h3>
            </div>

            <p className="mt-3 leading-7 text-stone-600">
              We ship from the ports of Tuticorin, Chennai and Cochin,
              with a typical lead time of 4 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2">
        <div className="rounded-3xl bg-[#183d2b] p-9 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c6d9b1]">
            Our Vision
          </p>

          <h2 className="mt-6 text-3xl font-semibold">
            A more sustainable future
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            To be a global leader in developing sustainable, high-quality
            coir solutions that improve everyday living, support responsible
            environmental practices and empower communities through
            eco-friendly products designed to enhance comfort, durability
            and long-term well-being.
          </p>
        </div>

        <div className="rounded-3xl bg-[#eaf0e3] p-9 text-[#183d2b] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-800">
            Our Mission
          </p>

          <h2 className="mt-6 text-3xl font-semibold">
            Innovation with purpose
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            To innovate and deliver advanced coir-based products that
            ensure sustainability, promote customer satisfaction and
            strengthen communities by supporting responsible production
            methods, environmental stewardship and reliable,
            high-performance solutions for diverse global applications.
          </p>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Our Infrastructure
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
              Our Manufacturing Facility
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              Based in Pollachi, Tamil Nadu, our manufacturing facility
              supports the production of a diverse range of natural
              coconut coir products.
            </p>

            <p className="mt-5 leading-8 text-stone-600">
              Each product is crafted using advanced technology and
              rigorous quality control processes to meet customer and
              industry requirements.
            </p>
          </div>

          <div className="rounded-3xl bg-[#edf3e8] p-10 md:p-14">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-green-800">
              <Factory size={34} />
            </div>

            <h3 className="mt-7 text-2xl font-semibold text-[#183d2b]">
              Manufacturing Excellence
            </h3>

            <p className="mt-4 leading-8 text-stone-600">
              Natural fibre processing, product development and
              quality-focused manufacturing for a wide range of
              coir applications.
            </p>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="bg-[#fafbf7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-5xl">
              Meet Our Management Team
            </h2>

            <p className="mt-5 leading-7 text-stone-600">
              Our experienced team, including engineers, quality control
              experts and sales professionals, collaborates to deliver
              high-quality products. We emphasise continuous skill
              development to maintain industry-leading standards.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((person, index) => (
              <div
                key={person.name}
                className="rounded-2xl border border-stone-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf0e3] text-green-800">
                  <Users size={26} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                  Leadership {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[#183d2b]">
                  {person.name}
                </h3>

                <p className="mt-2 text-sm text-stone-500">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Quality & Standards
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
              Our Certifications
            </h2>

            <p className="mt-5 leading-7 text-stone-600">
              Our quality management and environmental management
              certifications reflect our commitment to responsible
              manufacturing and consistent product quality.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-5 rounded-2xl border border-stone-200 p-7">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#edf3e8] text-green-800">
                <Award size={30} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#183d2b]">
                  ISO 9001:2015
                </h3>

                <p className="mt-3 leading-7 text-stone-600">
                  Quality Management System.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border border-stone-200 p-7">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#edf3e8] text-green-800">
                <ShieldCheck size={30} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#183d2b]">
                  ISO 14001:2015
                </h3>

                <p className="mt-3 leading-7 text-stone-600">
                  Environmental Management System.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl border border-stone-200 bg-[#fafbf7] p-6">
            {[
              ["/images/certificates/iso-9001.jpg", "ISO 9001:2015 and ISO 14001:2015 certified company", 114],
              ["/images/certificates/tuv-sud.jpg", "TUV SUD ISO 9001", 46],
              ["/images/certificates/iso-14001.jpg", "TUV SUD ISO 14001", 44],
              ["/images/certificates/zed.jpg", "ZED certification", 44],
              ["/images/certificates/certificate-5.jpg", "IS 8391 ISI mark", 43],
            ].map(([src, alt, width]) => (
              <Image
                key={src as string}
                src={src as string}
                alt={alt as string}
                width={width as number}
                height={40}
                className="h-14 w-auto"
              />
            ))}
          </div>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <Image
              src="/images/certificates/certificate-1.jpg"
              alt="ISO, TUV SUD, Quality Council of India, MSME, NSIC, ISI, D&B and OEM certifications"
              width={256}
              height={289}
              className="h-auto w-64 rounded-xl border border-stone-200 bg-white p-2"
            />
            <p className="leading-8 text-stone-600">
              Adhi Annam Coir Comforts is an ISO 9001:2015 and ISO 14001:2015
              certified company, with TUV SUD and ZED certifications that
              support our commitment to quality and sustainable production.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#fafbf7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              What Guides Us
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-7 text-stone-500">
              The principles behind our products, processes and relationships.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-2xl border border-stone-200 bg-white p-7 transition hover:-translate-y-1 hover:border-green-700"
              >
                <p className="text-sm font-semibold text-green-700">
                  {value.number}
                </p>

                <h3 className="mt-6 text-xl font-semibold text-[#183d2b]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and CTA */}
      <section className="bg-[#183d2b] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 text-[#c6d9b1]">
              <MapPin size={19} />

              <span className="text-sm font-semibold uppercase tracking-widest">
                Pollachi, Tamil Nadu, India
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold md:text-4xl">
              Let&apos;s build a more sustainable tomorrow together.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#c6d9b1] px-7 py-4 font-semibold text-[#183d2b] transition hover:bg-white md:self-center"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
