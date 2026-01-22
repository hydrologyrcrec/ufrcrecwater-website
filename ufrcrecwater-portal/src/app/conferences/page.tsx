import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.conferences.title,
  description: PAGES.conferences.description,
};

export default function ConferencesPage() {
  return (
    <h1 className="p-25 text-center"> {PAGES.conferences.title} Under Progress </h1>
  );
};