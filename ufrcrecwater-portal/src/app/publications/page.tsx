import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import { publicationsMockData } from "@/data/publications";
import Publications from "../../../components/publications/publications-list";

export const metadata: Metadata = {
  title: PAGES.publications.title,
  description: PAGES.publications.description,
};  

export default function PublicationsPage() {
  return (
    <Publications publications={publicationsMockData}></Publications>
  );
};