import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.research.title,
  description: PAGES.research.description,
};  

export default function ResearchPage() {
  return (
    <h1 className="p-25"> {PAGES.research.title} Under Progress </h1>
  );
}