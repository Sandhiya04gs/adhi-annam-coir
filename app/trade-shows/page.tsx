import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TradeShowCard from "@/components/TradeShowCard";
import { tradeShowIntro, tradeShows } from "@/data/trade-shows";

const upcomingEvent = tradeShows.find((event) => event.status === "upcoming");
const pastEvents = tradeShows.filter((event) => event.status === "past");

export const metadata: Metadata = {
  title: "Trade Shows",
  description:
    "Explore Adhi Annam Coir’s global trade show participation, including IPM Essen, Cultivate, Pack Expo and leading horticulture and packaging exhibitions.",
};

export default function TradeShowsPage() {
  return (
    <div className="bg-white text-[#343434]">
      <div className="relative aspect-[980/396] max-h-[396px] w-full overflow-hidden bg-[#f5f5f1]">
        <Image
          src="/images/trade-shows/trade-show-hero.webp"
          alt="Adhi Annam Coir exhibition booths at international trade shows"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="mx-auto max-w-[1230px] px-5 pb-9 pt-8 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[28px] font-medium text-[#3e4930] md:text-[36px]">
            {tradeShowIntro.heading}
          </h1>
          <p className="mt-3 text-base leading-7 text-[#555]">
            {tradeShowIntro.tagline}
          </p>
          <div className="mt-4 space-y-4 text-[15px] leading-7 text-[#555]">
            {tradeShowIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {upcomingEvent && (
        <section className="bg-[#f5f6ef] px-5 py-9 md:px-8">
          <div className="mx-auto grid max-w-[1056px] items-center gap-8 md:grid-cols-[1fr_417px]">
            <div>
              <h2 className="text-2xl font-medium text-[#3e4930]">
                Upcoming Event
              </h2>
              <h3 className="mt-4 text-xl font-semibold text-[#4f713b] md:text-2xl">
                <Link
                  href={`/trade-shows/${upcomingEvent.slug}`}
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3e4930]"
                >
                  {upcomingEvent.name}
                </Link>
              </h3>
              <dl className="mt-4 space-y-2 text-[15px] text-[#555]">
                {upcomingEvent.date && (
                  <div>
                    <dt className="inline font-medium">Date- </dt>
                    <dd className="inline">{upcomingEvent.date}</dd>
                  </div>
                )}
                {upcomingEvent.venue && (
                  <div>
                    <dt className="inline font-medium">Place- </dt>
                    <dd className="inline">{upcomingEvent.venue}</dd>
                  </div>
                )}
                {upcomingEvent.stallNumber && (
                  <div>
                    <dt className="inline font-medium">Stall number- </dt>
                    <dd className="inline">{upcomingEvent.stallNumber}</dd>
                  </div>
                )}
              </dl>
            </div>
            <Link
              href={`/trade-shows/${upcomingEvent.slug}`}
              className="relative block aspect-[331/123] w-full bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e4930]"
              aria-label={`View ${upcomingEvent.name}`}
            >
              <Image
                src={upcomingEvent.image}
                alt={upcomingEvent.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 417px"
                className="object-contain"
              />
            </Link>
          </div>
        </section>
      )}

      <section
        id="past-events"
        className="mx-auto max-w-[1230px] px-5 py-10 md:px-8"
      >
        <h2 className="mb-6 text-2xl font-medium text-[#3e4930]">
          Past Events Gallery
        </h2>
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event) => (
            <TradeShowCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
