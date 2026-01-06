import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.outreach.title,
  description: PAGES.outreach.description,
};

export default function OutreachPage() {
  return (
    <h1> {PAGES.outreach.title} </h1>
  );
};
  