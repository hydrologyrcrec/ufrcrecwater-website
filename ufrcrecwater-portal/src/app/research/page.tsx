import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.research.title,
  description: PAGES.research.description,
};  

export default function ResearchPage() {
  return (
    <h1> {PAGES.research.title} </h1>
  );
}