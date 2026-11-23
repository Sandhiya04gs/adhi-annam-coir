import Image from "next/image";
import Link from "next/link";
import type { TradeShow } from "@/data/trade-shows";

export default function TradeShowCard({ event }: { event: TradeShow }) {
  return (
    <Link
      href={`/trade-shows/${event.slug}`}
      className="group block text-[#343434] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e4930]"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f5f5f1]">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-medium text-[#3e4930]">{event.name}</h3>
        <p className="mt-1 text-sm text-[#666]">
          {event.location}, {event.country}
        </p>
        {event.description && (
          <p className="mt-3 text-sm leading-6 text-[#555]">
            {event.description}
          </p>
        )}
      </div>
    </Link>
  );
}
