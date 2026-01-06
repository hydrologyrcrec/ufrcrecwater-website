import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.data.title,
  description: PAGES.data.description,
};
  
export default function DataPage() {
  return (
    <h1> {PAGES.data.title} </h1>
  );
};