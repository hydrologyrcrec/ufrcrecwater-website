import PageLink from "../ui/footer/page-links";
import { Page, PAGES } from "@/config/navigation";
import PlayIcon from "../ui/footer/play-icon";

export default function MiniNav() {
    const navItems = Object.values(PAGES as Record<string, Page>)
    .filter((page) => page.rank >= 1)
    .sort((a, b) => a.rank - b.rank);
    return (
        <div className="w-max p-2 flex flex-col items-start justify-center gap-1">
          {navItems.map((page) => (
              <div key={page.title+"_container"} className="flex justify-start gap-4">
                <PlayIcon key={page.rank+"_playIcon"}></PlayIcon>
                <PageLink key={page.title+"_pageLink"} {...page}></PageLink>
              </div>
          ))}
      </div>
    );
}