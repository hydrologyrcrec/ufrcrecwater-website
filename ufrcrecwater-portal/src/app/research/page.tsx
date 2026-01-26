import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import ResearchHistory from "../../../components/research/research-list";
import type { ResearchList } from "@/types/research";
import { baseURL } from "@/data/constants";

export const metadata: Metadata = {
  title: PAGES.research.title,
  description: PAGES.research.description,
};  

async function getResearch(): Promise<ResearchList> {
  const res = (await fetch(`${baseURL}/research`, { cache: "no-store" }))
  return res.json();
}

export default async function ResearchPage() {
  const data = await getResearch();
  
  return <ResearchHistory research={data.research} />;
}
