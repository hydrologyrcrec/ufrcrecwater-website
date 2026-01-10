import type { Metadata } from "next";
import { PAGES } from "@/config/navigation";
import { membersMockData } from "@/data/team";
import Team from "../../../components/team/team-list";

export const metadata: Metadata = {
  title: PAGES.team.title,
  description: PAGES.team.description,
};  

export default function TeamPage() {
  return (
    <Team members={membersMockData.members}></Team>
  );
}