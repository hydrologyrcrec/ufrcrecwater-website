import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";

export const metadata: Metadata = {
  title: PAGES.login.title,
  description: PAGES.login.description,
  robots: {
    index: false,
    follow: false,
    // WHY: auth pages should not be indexed
  },
};  

export default function LoginPage() {
  return (
    <h1> {PAGES.login.title} </h1>
  );
};