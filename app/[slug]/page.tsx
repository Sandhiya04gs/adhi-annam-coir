import { notFound, redirect } from "next/navigation";
import {
  getLocalProductHrefForSourcePath,
  getOfficialPages,
} from "@/data/original-site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getSourceProductSlugs() {
  return Array.from(
    new Set(
      getOfficialPages()
        .map((page) => new URL(page.url).pathname)
        .filter((path) => {
          const segments = path.split("/").filter(Boolean);
          return (
            segments.length === 1 &&
            Boolean(getLocalProductHrefForSourcePath(path))
          );
        })
        .map((path) => path.slice(1)),
    ),
  );
}

export function generateStaticParams() {
  return getSourceProductSlugs().map((slug) => ({ slug }));
}

export default async function OfficialProductAlias({ params }: PageProps) {
  const { slug } = await params;
  const target = getLocalProductHrefForSourcePath(`/${slug}`);

  if (!target) notFound();

  redirect(target);
}
