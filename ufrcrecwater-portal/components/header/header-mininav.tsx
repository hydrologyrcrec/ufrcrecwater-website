import Link from "next/link";
import { PAGES } from "@/config/navigation";
import { Page } from "@/config/navigation"; 
import { menuProps } from "./header";

export function HeaderMiniNav(props: menuProps) {
  const navItems = Object.values(PAGES as Record<string, Page>)
  return (
    <nav
      aria-label="Primary navigation"
      className={[
        "xl:hidden fixed z-8 flex items-start", 
        "text-black",
        "bg-[#afafaf]",
        "whitespace-nowrap",
        props.menuStatusProp && "w-screen h-screen"
      ].join(" ")}
    >
      {props.menuStatusProp && <ul className="w-full h-full px-7.5 py-20 flex flex-col justify-start items-center gap-2 backdrop-blur-3xl">
        {navItems.map((page) => (
          <li key={page.href} className="shrink-0">
            <Link
              href={page.href}
              className={[
                "text-lg font-semibold",
                "transition-opacity hover:opacity-90",
                "focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent",
              ].join(" ")}
              onClick={() => props.changeMenuStatusProp(!props.menuStatusProp)}
            >
              {page.heading}
            </Link>
          </li>
        ))}
      </ul>}
    </nav>
  );
}
