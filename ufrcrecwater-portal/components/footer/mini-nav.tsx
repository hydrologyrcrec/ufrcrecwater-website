import PageLink from "../ui/footer/page-links";
import { Page, PAGES } from "@/config/navigation";
import PlayIcon from "../ui/footer/play-icon";
import FooterHeading from "../ui/footer/footer-heading";

export default function MiniNav() {
    const navItems = Object.values(PAGES as Record<string, Page>)
    .filter((page) => page.rank >= 1)
    .sort((a, b) => a.rank - b.rank);
    return (
        <div className="w-max flex flex-col items-start justify-center gap-4">
          <FooterHeading title="Quick Links"></FooterHeading>
          <div className="flex flex-col gap-1">
          {navItems.map((page) => (
              <div key={page.title+"_container"} className="flex justify-start gap-4">
                {/* <PlayIcon key={page.rank+"_playIcon"}></PlayIcon> */}
                <PageLink key={page.title+"_pageLink"} {...page}></PageLink>
              </div>
          ))}
          </div>
      </div>
    );
}