import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.applications.title,
  description: PAGES.applications.description,
};
  
export default function ApplicationsPage() {
  return (
    <h1 className="p-25 text-center"> {PAGES.applications.title} Under Progress </h1>
  );
};