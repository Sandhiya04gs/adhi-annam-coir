import type { Metadata } from "next";
import Image from "next/image";
import { getOfficialPageByPath } from "@/data/original-site";

const originalTradeShowsPage = getOfficialPageByPath("/trade-shows");
const eventDetails =
  originalTradeShowsPage?.blocks.filter(
    (block) =>
      block.type === "paragraph" &&
      /^(Date|Place|Stall number)-/.test(block.text),
  ) ?? [];
const eventTitle =
  originalTradeShowsPage?.blocks.find(
    (block) =>
      block.type === "heading" && block.text.startsWith("PackVision"),
  )?.text ?? "PackVision Expo - Chennai, India 2026";
const galleryImages = originalTradeShowsPage?.images ?? [];
const heroImage = galleryImages[0];
const upcomingEventImage = galleryImages[1];
const pastEventImages = galleryImages.slice(2);
const eventCopy =
  originalTradeShowsPage?.blocks.filter(
    (block) =>
      block.type === "paragraph" &&
      !/^(Date|Place|Stall number)-/.test(block.text),
  ) ?? [];

export const metadata: Metadata = {
  title:
    originalTradeShowsPage?.title.replace(/\s*\|\s*Adhi Annam Coir\s*$/, "") ??
    "Trade Shows",
  description:
    originalTradeShowsPage?.description ??
    "Adhi Annam Coir at international trade shows and exhibitions.",
};

export default function TradeShowsPage() {
  return (
    <div className="bg-white text-[#343434]">
      {heroImage && (
        <div className="relative h-[280px] w-full overflow-hidden bg-[#f5f5f1] md:h-[396px]">
          <Image
            src={heroImage.src}
            alt="Adhi Annam Coir exhibiting natural coir products at international trade shows"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <section className="mx-auto max-w-[1230px] px-5 pb-8 pt-5 md:px-8">
        <h1 className="text-center text-3xl font-medium text-[#3e4930] md:text-[38px]">
          {originalTradeShowsPage?.blocks.find(
            (block) => block.type === "heading",
          )?.text ?? "Global Footprint in Trade Shows"}
        </h1>
        <div className="mx-auto mt-5 max-w-4xl space-y-4 text-center text-[15px] leading-7 text-[#555]">
          {eventCopy.slice(0, 3).map((block, index) => (
            <p key={`${index}-${block.text.slice(0, 20)}`}>{block.text}</p>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f6ef] px-5 py-9 md:px-8">
        <div className="mx-auto grid max-w-[1056px] items-center gap-8 md:grid-cols-[1fr_417px]">
          <div>
            <h2 className="text-2xl font-medium text-[#3e4930]">
              Upcoming Event
            </h2>
            <h3 className="mt-4 text-xl font-semibold text-[#4f713b] md:text-2xl">
              {eventTitle}
            </h3>
            <div className="mt-4 space-y-2 text-[15px] text-[#555]">
              {eventDetails.map((detail) => (
                <p key={detail.text}>{detail.text}</p>
              ))}
            </div>
          </div>
          {upcomingEventImage && (
            <div className="relative aspect-[2.69] w-full overflow-hidden bg-white">
              <Image
                src={upcomingEventImage.src}
                alt="PackVision Expo, Chennai"
                fill
                sizes="(max-width: 768px) 100vw, 417px"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-5 py-10 md:px-8">
        <h2 className="mb-6 text-2xl font-medium text-[#3e4930]">
          Past Events Gallery
        </h2>
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 sm:grid-cols-2">
          {pastEventImages.map((image, index) => (
            <div
              className="relative aspect-square overflow-hidden bg-[#f5f5f1]"
              key={`${image.src}-${index}`}
            >
              <Image
                src={image.src}
                alt={
                  image.alt && !/\.(png|jpe?g|webp)$/i.test(image.alt)
                    ? image.alt
                    : `Adhi Annam Coir trade show gallery photograph ${index + 1}`
                }
                fill
                sizes="(max-width: 640px) 100vw, 532px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
