import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-[#fafbf7] px-6 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
        Error 404
      </p>
      <h1 className="mt-5 text-4xl font-semibold text-[#183d2b] md:text-6xl">
        Page not found
      </h1>
      <p className="mx-auto mt-6 max-w-md leading-7 text-stone-600">
        The page you are looking for may have moved or no longer exists.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full bg-[#183d2b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          Back to Home
          <ArrowUpRight size={18} />
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-stone-300 px-7 py-4 text-sm font-semibold text-stone-700 transition hover:border-green-800 hover:text-green-800"
        >
          View Products
        </Link>
      </div>
    </section>
  );
}
