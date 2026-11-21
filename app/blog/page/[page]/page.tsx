import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ page: string }>;
};

export function generateStaticParams() {
  return ["2", "3", "4", "5"].map((page) => ({ page }));
}

export default async function BlogPaginationAlias({ params }: PageProps) {
  const { page } = await params;

  if (!/^\d+$/.test(page) || Number(page) < 2) {
    notFound();
  }

  redirect("/blog");
}
