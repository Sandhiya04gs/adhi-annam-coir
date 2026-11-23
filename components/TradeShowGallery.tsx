"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export type TradeShowGalleryImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export default function TradeShowGallery({
  images,
  eventName,
  imageNumberOffset = 0,
}: {
  images: TradeShowGalleryImage[];
  eventName: string;
  imageNumberOffset?: number;
}) {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    if (activeImage === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveImage(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-4 ${
          images.length > 1 ? "md:grid-cols-2" : ""
        }`}
      >
        {images.map((image, index) => {
          const isFeatured = images.length > 1 && index === 0;
          const fit = image.fit ?? "cover";

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`View ${eventName} image ${
                index + imageNumberOffset + 1
              } enlarged`}
              className={`group relative block w-full overflow-hidden rounded-xl bg-[#f0f1eb] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e4930] ${
                images.length === 1
                  ? "aspect-[16/10]"
                  : isFeatured
                    ? "aspect-[16/9] md:col-span-2"
                    : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  images.length === 1
                    ? "(max-width: 768px) 100vw, 1080px"
                    : isFeatured
                      ? "(max-width: 768px) 100vw, 1080px"
                      : "(max-width: 768px) 100vw, 540px"
                }
                className={`transition-transform duration-500 group-hover:scale-[1.035] ${
                  fit === "contain" ? "object-contain p-8" : "object-cover"
                }`}
              />
              <span className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-white/90 text-[#3e4930] shadow-sm transition-colors group-hover:bg-white">
                <ZoomIn size={19} aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      {activeImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${eventName} image gallery`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101710]/95 p-4 sm:p-8"
          onClick={(clickEvent) => {
            if (clickEvent.target === clickEvent.currentTarget) {
              setActiveImage(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close enlarged image"
            className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-7 sm:top-7"
          >
            <X size={22} aria-hidden="true" />
          </button>
          <div className="relative h-[80vh] w-full max-w-[1200px]">
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
