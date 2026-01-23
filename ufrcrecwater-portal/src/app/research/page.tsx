import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import ResearchHistory from "../../../components/research/research-list";
import type { ResearchList } from "@/types/research";

export const metadata: Metadata = {
  title: PAGES.research.title,
  description: PAGES.research.description,
};  

async function getResearch(): Promise<ResearchList> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  const res = await fetch(`${baseUrl}/api/research`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch research");
  }
  return res.json();
}

export default async function ResearchPage() {
  const data = await getResearch();
  
  return <ResearchHistory research={data.research} />;
}
