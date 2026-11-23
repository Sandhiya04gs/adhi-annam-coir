import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTradeShow, tradeShows } from "@/data/trade-shows";

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

  const relatedEvents = tradeShows.filter(
    (relatedEvent) => relatedEvent.slug !== event.slug,
  );

  return (
    <article className="mx-auto max-w-[1080px] px-5 py-9 md:px-8 md:py-12">
      <Link
        href="/trade-shows"
        className="text-sm font-medium text-[#4f713b] underline underline-offset-4 hover:text-[#3e4930]"
      >
        ← Back to Trade Shows
      </Link>

      <header className="mt-6">
        <p className="text-sm font-medium uppercase tracking-wide text-[#777]">
          {event.status === "upcoming" ? "Upcoming Event" : "Past Event"}
        </p>
        <h1 className="mt-2 text-3xl font-medium text-[#3e4930] md:text-[38px]">
          {event.name}
        </h1>
        <p className="mt-3 text-base text-[#555]">
          {event.location}, {event.country}
        </p>
      </header>

      <div
        className={`relative mt-7 overflow-hidden bg-[#f5f5f1] ${
          event.status === "upcoming"
            ? "mx-auto aspect-[331/123] max-w-[760px] bg-white"
            : "aspect-square max-w-[720px]"
        }`}
      >
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className={event.status === "upcoming" ? "object-contain" : "object-cover"}
        />
      </div>

      {event.galleryImages && (
        <section className="mx-auto mt-8 max-w-[760px]">
          <h2 className="text-xl font-medium text-[#3e4930]">
            Exhibition Gallery
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {event.galleryImages.map((image) => (
              <div
                key={image.src}
                className="relative aspect-square overflow-hidden bg-[#f5f5f1]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto mt-7 max-w-[760px]">
        {event.description && (
          <p className="text-[16px] leading-7 text-[#555]">
            {event.description}
          </p>
        )}
        {event.status === "upcoming" && (
          <dl className="mt-5 space-y-3 text-[15px] leading-6 text-[#555]">
            {event.date && (
              <div>
                <dt className="inline font-medium text-[#3e4930]">Date: </dt>
                <dd className="inline">{event.date}</dd>
              </div>
            )}
            {event.venue && (
              <div>
                <dt className="inline font-medium text-[#3e4930]">Venue: </dt>
                <dd className="inline">{event.venue}</dd>
              </div>
            )}
            {event.stallNumber && (
              <div>
                <dt className="inline font-medium text-[#3e4930]">
                  Stall Number:{" "}
                </dt>
                <dd className="inline">{event.stallNumber}</dd>
              </div>
            )}
          </dl>
        )}
      </div>

      <nav aria-label="Related exhibitions" className="mt-12 border-t border-[#e6e6e0] pt-7">
        <h2 className="text-xl font-medium text-[#3e4930]">
          Related Exhibitions
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedEvents.map((relatedEvent) => (
            <Link
              key={relatedEvent.slug}
              href={`/trade-shows/${relatedEvent.slug}`}
              className="border border-[#e6e6e0] px-4 py-3 text-sm text-[#4f713b] hover:bg-[#f5f6ef]"
            >
              {relatedEvent.name}
              <span className="mt-1 block text-[#777]">
                {relatedEvent.location}, {relatedEvent.country}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
