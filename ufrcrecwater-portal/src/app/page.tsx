/**
 * Home page.
 * WHY: Keep the root page minimal, semantic, and SEO-friendly.
 * Layout and styling belong in layout/components, not here.
 */
import { PAGES } from "@/config/navigation";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-(--color-bg) text-(--color-text)] flex justify-center items-center h-screen">
      <Image 
      src='/wallpaper.png'
      fill
      alt='Website Wallpaper'
      className="z-[-1]"
      >
      </Image>
      <h1 className="text-5xl font-bold"> {PAGES.home.title} </h1>
    </main>
  );
}