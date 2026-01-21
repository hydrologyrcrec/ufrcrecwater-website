import Link from "next/link";
import { PAGES } from "@/config/navigation";
import { Page } from "@/config/navigation"; 
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary navigation"
      className={[
        // WHY: Gradient background exactly as requested
        "xl:flex hidden h-16 flex-1 items-center rounded-md", 
        "text-[#DB7E31]",
        "bg-[#302370]",
        // WHY: On small screens, allow horizontal scroll rather than wrapping into ugly rows
        "whitespace-nowrap",
      ].join(" ")}
    >
      <ul className="w-full px-7.5 flex justify-between items-center">
        {navItems.map((page) => (
          <li key={page.href} className="shrink-0">
            <Link
              href={page.href}
              className={[
                "text-lg font-semibold",
                // "transition-opacity hover:opacity-90",
                "focus:shadow-xl focus:shadow-gray-400",
                "bg-transparent focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:underline"
                // "shadow-xl shadow-gray-400",
                // pathname === page.href && "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white/60 after:shadow-[0_2px_8px_rgba(255,255,255,0.5)]"
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
