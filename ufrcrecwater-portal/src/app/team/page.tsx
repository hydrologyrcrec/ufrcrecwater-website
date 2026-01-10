import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.team.title,
  description: PAGES.team.description,
};  

export default function TeamPage() {
  return (
    <h1> {PAGES.team.title} </h1>
  );
}