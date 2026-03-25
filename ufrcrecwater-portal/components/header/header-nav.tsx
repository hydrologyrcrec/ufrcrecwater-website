"use client";

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
    .sort((a, b) => a.rank - b.rank);

  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary navigation"
      className={[
        // WHY: Gradient background exactly as requested
        "xl:flex hidden h-16 flex-1 rounded-md", 
        "text-black my-2",
        "bg-linear-300 from-[#334142]/80 via-[#727f85]/80 to-[#334142]/80",
        // WHY: On small screens, allow horizontal scroll rather than wrapping into ugly rows
        "whitespace-nowrap",
      ].join(" ")}
    >
      <ul className="w-full px-7.5 flex justify-evenly items-center">
        {navItems.map((page) => (
          <li key={page.href} className="shrink-0">
            <Link
              href={page.href}
              className={[
                pathname === page.href ? "text-2xl font-extrabold" : "text-xl font-semibold",
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
