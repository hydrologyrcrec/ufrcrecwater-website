import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import Publications from "../../../components/publications/publications-list";
import type { PublicationList } from "@/types/publications";
import { baseURL } from "@/data/constants";

export const metadata: Metadata = {
  title: PAGES.publications.title,
  description: PAGES.publications.description,
};

async function getPublications(): Promise<PublicationList> {
  const res = (await fetch(`${baseURL}/publications`, { cache: "no-store" }))
  return res.json();
}

export default async function PublicationsPage() {
  const data = await getPublications();

  return <Publications publications={data.publications} />;
}
