import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.applications.title,
  description: PAGES.applications.description,
};
  
export default function ApplicationsPage() {
  return (
    <h1> {PAGES.applications.title} </h1>
  );
};