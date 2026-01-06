import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.instrumentation.title,
  description: PAGES.instrumentation.description,
};

export default function InstrumentationPage() {
  return (
    <h1> {PAGES.instrumentation.title} </h1>
  );
} 