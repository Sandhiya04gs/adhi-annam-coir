import Image from "next/image";
import type { OfficialPageImage } from "@/data/original-site";

type Props = {
  title: string;
  description: string;
  images: OfficialPageImage[];
};

export default function OriginalGallery({
  title,
  description,
  images,
}: Props) {
  if (images.length === 0) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Original Website Gallery
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#183d2b] md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 leading-7 text-stone-600">{description}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 bg-[#fafbf7]"
            >
              <Image
                src={image.src}
                alt={image.alt || `${title} image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
