import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.news.title,
  description: PAGES.news.description,
};  

export default function NewsPage() {
  return (
    <h1 className="p-5 text-center"> {PAGES.news.title} Under Progress </h1>
  );
};