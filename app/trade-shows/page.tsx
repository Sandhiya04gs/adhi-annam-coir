
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Leaf,
  MapPin,
  CalendarDays,
  Building2,
} from "lucide-react";

const exhibitions = [
  {
    name: "PackVision Expo 2026",
    location: "Chennai Trade Centre, Chennai, India",
    category: "Packaging",
    year: "2026",
    date: "15–17 October 2026",
    stall: "P-89",
    description:
      "Showcasing sustainable coir-based packaging solutions at PackVision Expo in Chennai.",
  },
  {
    name: "ProPak India '26",
    location: "Mumbai, India",
    category: "Packaging",
    year: "2026",
    description:
      "Our first Pack Expo, showcasing sustainable coir-based packaging solutions as eco-friendly alternatives to conventional packaging materials.",
  },
  {
    name: "IPM '26",
    location: "Essen, Germany",
    category: "Horticulture",
    year: "2026",
    description:
      "Returning to IPM Essen for the second consecutive year, reconnecting with global industry leaders and exploring horticulture innovations.",
  },
  {
    name: "Cultivate '25",
    location: "Ohio, USA",
    category: "Horticulture",
    year: "2025",
    description:
      "Showcasing our range of natural coconut fibre-based horticulture products.",
  },
  {
    name: "Architect & Interior Expo '25",
    location: "Chennai, India",
    category: "Interior Solutions",
    year: "2025",
    description:
      "Displaying eco-friendly coir-based solutions for interior applications.",
  },
  {
    name: "India International Horti Expo '25",
    location: "Greater Noida, India",
    category: "Horticulture",
    year: "2025",
    description:
      "Featuring coconut coir products for horticulture and urban gardening applications.",
  },
  {
    name: "IPM Essen '25",
    location: "Essen, Germany",
    category: "Horticulture",
    year: "2025",
    description:
      "Our European debut, showcasing sustainable coir pots, liners and growing media solutions.",
  },
  {
    name: "Gardex '24",
    location: "Tokyo, Japan",
    category: "Green Innovation",
    year: "2024",
    description:
      "Introducing our eco-conscious coir range to the Japanese market, focusing on horticulture and green innovation.",
  },
];

const focusAreas = [
  "Horticulture",
  "Sustainable Packaging",
  "Interior Solutions",
  "Green Innovation",
];

export default function TradeShowsPage() {
  return (
    <div className="bg-[#fafbf7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183d2b] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c6d9b1]">
            Global Connections
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-7xl">
            Connecting Through
            <br />
            Global Exhibitions
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Discover our journey across international trade shows,
            where we showcase natural coir solutions and connect
            with industry partners around the world.
          </p>

          <div className="mt-8 text-sm text-white/60">
            Home / Trade Shows
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Our Global Footprint
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#183d2b] md:text-5xl">
            Taking natural coir solutions to the world
          </h2>

          <p className="mt-7 leading-8 text-stone-600">
            At Adhi Annam Coir Comforts, international exhibitions
            provide opportunities to showcase our coir-based products,
            meet distributors and connect with industry professionals.
          </p>

          <p className="mt-5 leading-8 text-stone-600">
            Our participation spans horticulture, packaging, landscaping,
            interior design and construction applications of natural
            coconut fibre.
          </p>
        </div>

        <div className="flex min-h-[350px] items-center justify-center rounded-3xl bg-gradient-to-br from-[#e4eddc] to-[#b7cba6] p-10">
          <div className="text-center">
            <Globe2
              size={100}
              strokeWidth={1}
              className="mx-auto text-[#315c3b]"
            />

            <h3 className="mt-8 text-2xl font-semibold text-[#183d2b]">
              Global Partnerships
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-7 text-green-950/70">
              Building connections through sustainable products and
              international industry events.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibition Focus */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Our Exhibition Focus
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 p-7 text-center"
              >
                <Leaf className="mx-auto text-green-700" size={28} />

                <h3 className="mt-4 font-semibold text-[#183d2b]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition History */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Exhibition Highlights
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-5xl">
            Our Trade Show Journey
          </h2>

          <p className="mt-5 leading-7 text-stone-500">
            Explore exhibitions where we have presented our natural
            coir products and connected with industry professionals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exhibitions.map((event) => (
            <article
              key={event.name}
              className="group rounded-2xl border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-700 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#eaf0e3] px-3 py-1.5 text-xs font-semibold text-green-900">
                  {event.category}
                </span>

                <span className="text-sm font-medium text-stone-400">
                  {event.year}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-[#183d2b]">
                {event.name}
              </h3>

              <div className="mt-4 flex items-start gap-2 text-sm text-stone-500">
                <MapPin size={16} className="mt-0.5 shrink-0 text-green-700" />
                <span>{event.location}</span>
              </div>

              {event.date && (
                <div className="mt-3 flex items-center gap-2 text-sm text-stone-500">
                  <CalendarDays size={16} className="text-green-700" />
                  {event.date}
                </div>
              )}

              {event.stall && (
                <div className="mt-3 flex items-center gap-2 text-sm text-stone-500">
                  <Building2 size={16} className="text-green-700" />
                  Stall Number: {event.stall}
                </div>
              )}

              <p className="mt-5 text-sm leading-7 text-stone-600">
                {event.description}
              </p>

              <div className="mt-7 border-t border-stone-100 pt-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-green-800">
                  Exhibition Highlight
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#183d2b] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c6d9b1]">
              Let&apos;s Connect
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold md:text-4xl">
              Meet us and explore sustainable coir solutions.
            </h2>

            <p className="mt-5 text-white/70">
              Interested in working with us? Get in touch with our team.
            </p>
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
