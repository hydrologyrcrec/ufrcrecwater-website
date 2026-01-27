/**
 * Home page.
 * WHY: Keep the root page minimal, semantic, and SEO-friendly.
 * Layout and styling belong in layout/components, not here.
 */
import { PAGES } from "@/config/navigation";

export default function HomePage() {
  return (
    <main className="h-screen flex justify-center bg-(--color-bg) text-(--color-text)]">
      <h1 className="flex items-center text-5xl text-center font-bold"> {PAGES.home.title} </h1>
    </main>
  );
}