import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Clock3,
  Leaf,
  MapPin,
  TicketCheck,
} from "lucide-react";
import TradeShowGallery from "@/components/TradeShowGallery";
import {
  getTradeShow,
  tradeShowIntro,
  tradeShows,
} from "@/data/trade-shows";

type TradeShowPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tradeShows.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: TradeShowPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getTradeShow(slug);

  if (!event) return {};

  return {
    title: event.name,
    description:
      event.description ??
      `${event.name} at ${event.location}, ${event.country}. Event information from Adhi Annam Coir.`,
  };
}

export default async function TradeShowDetailPage({
  params,
}: TradeShowPageProps) {
  const { slug } = await params;
  const event = getTradeShow(slug);

  if (!event) notFound();

  const isUpcoming = event.status === "upcoming";
  const eventIndex = tradeShows.indexOf(event);
  const relatedEvents = tradeShows
    .filter((relatedEvent) => relatedEvent.slug !== event.slug)
    .sort(
      (left, right) =>
        Math.abs(tradeShows.indexOf(left) - eventIndex) -
        Math.abs(tradeShows.indexOf(right) - eventIndex),
    )
    .slice(0, 3);

  const informationCards = [
    { label: "Event", value: event.name, Icon: CalendarDays },
    {
      label: "Location",
      value: `${event.location}, ${event.country}`,
      Icon: MapPin,
    },
    { label: "Year", value: String(event.year), Icon: Clock3 },
    {
      label: "Exhibition Status",
      value: isUpcoming ? "Upcoming Exhibition" : "Past Exhibition",
      Icon: BadgeCheck,
    },
    ...(event.date
      ? [{ label: "Date", value: event.date, Icon: CalendarDays }]
      : []),
    ...(event.venue
      ? [{ label: "Venue", value: event.venue, Icon: Building2 }]
      : []),
    ...(event.stallNumber
      ? [{ label: "Stall Number", value: event.stallNumber, Icon: TicketCheck }]
      : []),
  ];

  return (
    <article className="bg-[#f8f9f5] text-[#343434]">
      <header
        className="relative overflow-hidden bg-gradient-to-br from-[#1f3324] via-[#273b2b] to-[#354630]"
      >
        <div
          className="mx-auto grid max-w-[1240px] items-center gap-8 px-5 py-9 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-8 md:py-14"
        >
          <Link
            href="/trade-shows"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 md:col-span-2"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Trade Shows
          </Link>

          <div className="max-w-[620px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              <span className="size-1.5 rounded-full bg-[#c4d69a]" />
              {isUpcoming ? "Upcoming Exhibition" : "Past Exhibition"}
            </p>
            <h1
              className="mt-5 font-serif text-4xl leading-[1.08] font-medium text-white sm:text-5xl lg:text-[60px]"
              style={{ color: "#fff", WebkitTextFillColor: "#fff" }}
            >
              {event.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} aria-hidden="true" />
                {event.location}, {event.country}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={17} aria-hidden="true" />
                {event.year}
              </span>
            </div>
          </div>

          <div className="w-full max-w-[620px] justify-self-center">
            <TradeShowGallery
              images={[
                {
                  src: event.image,
                  alt: event.imageAlt,
                  fit: isUpcoming ? "contain" : "cover",
                },
              ]}
              eventName={event.name}
            />
          </div>
        </div>
      </header>

      <section
        aria-label="Event information"
        className="relative z-10 mx-auto -mt-2 max-w-[1240px] px-5 py-7 md:-mt-8 md:px-8"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {informationCards.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="min-h-28 rounded-xl border border-[#e7e9e1] bg-white p-4 shadow-[0_8px_24px_rgba(36,76,53,0.06)]"
            >
              <div className="flex items-center gap-2 text-[#64814c]">
                <Icon size={17} aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.12em]">
                  {label}
                </p>
              </div>
              <p className="mt-3 text-sm leading-5 font-medium text-[#343e32]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-6 px-5 pb-12 pt-5 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-16">
        <div className="rounded-2xl border border-[#e8eae3] bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b854f]">
            Adhi Annam Coir
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-[#354630]">
            {event.description
              ? "About the Exhibition"
              : "Our Exhibition Participation"}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#5b6258]">
            {event.description ?? tradeShowIntro.paragraphs[0]}
          </p>
        </div>

        <div className="rounded-2xl border border-[#e4e9dc] bg-[#f0f3e9] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b854f]">
            Event details
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-[#354630]">
            Exhibition Highlights
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {event.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/75 p-4 text-sm leading-6 text-[#4c5946]"
              >
                <Leaf
                  size={17}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#6b854f]"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {event.galleryImages && event.galleryImages.length > 0 && (
        <section className="mx-auto max-w-[1240px] px-5 pb-14 md:px-8 md:pb-18">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b854f]">
              Exhibition photographs
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-[#354630]">
              Event Gallery
            </h2>
          </div>
          <TradeShowGallery
            images={event.galleryImages}
            eventName={event.name}
            imageNumberOffset={1}
          />
        </section>
      )}

      <section className="border-t border-[#e7e9e1] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b854f]">
                Continue exploring
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[#354630]">
                Related Exhibitions
              </h2>
            </div>
            <Link
              href="/trade-shows"
              className="hidden items-center gap-2 text-sm font-semibold text-[#4f713b] transition-colors hover:text-[#34482e] sm:inline-flex"
            >
              All trade shows
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedEvents.map((relatedEvent) => (
              <Link
                key={relatedEvent.slug}
                href={`/trade-shows/${relatedEvent.slug}`}
                className="group overflow-hidden rounded-xl border border-[#e8eae3] bg-white transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(36,76,53,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e4930]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f1eb]">
                  <Image
                    src={relatedEvent.image}
                    alt={relatedEvent.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 390px"
                    className={`transition-transform duration-500 group-hover:scale-[1.035] ${
                      relatedEvent.status === "upcoming"
                        ? "object-contain p-8"
                        : "object-cover"
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#354630]">
                      {relatedEvent.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#697066]">
                      {relatedEvent.location}, {relatedEvent.country}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-[#6b854f] transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/trade-shows"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4f713b] sm:hidden"
          >
            All trade shows
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}
