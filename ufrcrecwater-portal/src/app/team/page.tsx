import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import Team from "../../../components/team/team-list";
import type { MembersList, Member } from "@/types/team";

export const metadata: Metadata = {
  title: PAGES.team.title,
  description: PAGES.team.description,
};  

async function getMembers(): Promise<MembersList> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const res = await fetch(`${baseUrl}/api/team`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }
  return res.json();
}

export default async function TeamPage() {
  const data = await getMembers();
  const members: Member[] = data.members.map((m) => ({
    ...m,
    tenure_start: new Date(m.tenure_start),
    tenure_end:
      m.tenure_end === "Present" || m.tenure_end === null
        ? "Present"
        : new Date(m.tenure_end as unknown as string),
  }));

  return <Team members={members}></Team>;
}