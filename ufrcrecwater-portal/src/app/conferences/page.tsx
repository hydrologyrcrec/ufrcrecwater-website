import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.conferences.title,
  description: PAGES.conferences.description,
};

export default function ConferencesPage() {
  return (
    <h1> {PAGES.conferences.title} </h1>
  );
};