import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.data.title,
  description: PAGES.data.description,
};
  
export default function DataPage() {
  return (
    <h1 className="p-25"> {PAGES.data.title} Under Progress </h1>
  );
};