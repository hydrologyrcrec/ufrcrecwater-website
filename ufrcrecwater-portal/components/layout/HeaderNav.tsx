import Link from "next/link";
import { PAGES } from "@/config/navigation";
import { Page } from "@/config/navigation"; 

/**
 * HeaderNav
 * WHY:
 * - Converts object config (PAGES) → ordered array (rank)
 * - Filters out ranks <= 1 (per requirement)
 * - Keeps logic here so Header.tsx stays clean
 */
export function HeaderNav() {
  const navItems = Object.values(PAGES as Record<string, Page>)
    .filter((page) => page.rank >= 1)
    .sort((a, b) => a.rank - b.rank);

  return (
    <nav
      aria-label="Primary navigation"
      className={[
        // WHY: Gradient background exactly as requested
        "flex flex-1 h-16 items-center rounded-md",
        "bg-[linear-gradient(90deg,#13137A_0%,#533562_50%,#FF9123_100%)]",
        "text-white",
        // WHY: On small screens, allow horizontal scroll rather than wrapping into ugly rows
        "whitespace-nowrap",
      ].join(" ")}
    >
      <ul className="flex w-full items-center justify-between px-7.5">
        {navItems.map((page) => (
          <li key={page.href} className="shrink-0">
            <Link
              href={page.href}
              className={[
                "text-base font-semibold",
                "transition-opacity hover:opacity-90",
                "focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent",
              ].join(" ")}
            >
              {page.heading}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
