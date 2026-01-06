import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.facilities.title,
  description: PAGES.facilities.description,
};  

export default function FacilitiesPage() {
  return (
    <h1> {PAGES.facilities.title} </h1>
  );
};