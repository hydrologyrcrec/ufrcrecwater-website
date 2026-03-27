/**
 * Home page.
 * WHY: Keep the root page minimal, semantic, and SEO-friendly.
 * Layout and styling belong in layout/components, not here.
 */
import Home from "../../components/home/home";
import Headline from "../../components/ui/home/headline";

export default function HomePage() {
  return (
    <main className="p-5 flex flex-col gap-6 items-center h-screen bg-(--color-bg) text-(--color-text)">
      <Headline></Headline>
      <Home></Home>
    </main>
  );
}