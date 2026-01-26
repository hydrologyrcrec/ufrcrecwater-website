import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import Team from "../../../components/team/team-list";
import type { MembersList, Member } from "@/types/team";
import { baseURL } from "@/data/constants";

export const metadata: Metadata = {
  title: PAGES.team.title,
  description: PAGES.team.description,
};  

async function getMembers(): Promise<MembersList> {
  const res = (await fetch(`${baseURL}/team`, { cache: "no-store" }))
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