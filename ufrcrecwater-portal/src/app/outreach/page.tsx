import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.outreach.title,
  description: PAGES.outreach.description,
};

export default function OutreachPage() {
  return (
    <h1 className="p-25 text-center"> {PAGES.outreach.title} Under Progress </h1>
  );
};
  