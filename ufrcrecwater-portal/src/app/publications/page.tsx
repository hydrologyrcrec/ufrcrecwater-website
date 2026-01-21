import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import Publications from "../../../components/publications/publications-list";
import type { PublicationList } from "@/types/publications";

export const metadata: Metadata = {
  title: PAGES.publications.title,
  description: PAGES.publications.description,
};

async function getPublications(): Promise<PublicationList> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const res = await fetch(`${baseUrl}/api/publications`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch publications");
  }

  return res.json();
}

export default async function PublicationsPage() {
  const data = await getPublications();

  return <Publications publications={data.publications} />;
}
