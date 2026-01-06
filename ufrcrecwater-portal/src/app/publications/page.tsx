import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.publications.title,
  description: PAGES.publications.description,
};  

export default function PublicationsPage() {
  return (
    <h1> {PAGES.publications.title} </h1>
  );
};