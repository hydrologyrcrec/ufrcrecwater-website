import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.facilities.title,
  description: PAGES.facilities.description,
};  

export default function FacilitiesPage() {
  return (
    <h1 className="p-25"> {PAGES.facilities.title} Under Progress </h1>
  );
};