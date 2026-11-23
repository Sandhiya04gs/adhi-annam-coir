import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog | Adhi Annam Coir",
  description: "Explore the latest blogs from Adhi Annam Coir.",
};

export default function BlogPage() {
  return <BlogIndex pageNumber={1} />;
}
