import { Member, MembersList } from "@/types/team";
import MemberCard from "./card";
import Search from "../ui/search";
import FilterSort from "../ui/publications/filter";
import { FilterCheckboxOptions } from "@/data/team";

export default function Team (props: MembersList){
    const activeMembers: typeof props.members = [] 
    const formerMembers: typeof props.members = []
    props.members.forEach(member => {
        if (member.status === "current") {
            activeMembers.push(member)
        } else {
            formerMembers.push(member)
        }
    })
    return (
        <div className="p-25 flex justify-center flex-wrap gap-6 font-bold">
            <Search label="PublicationSearch" placeholder="Search by Member Name or Title"></Search>
            <FilterSort {...FilterCheckboxOptions}></FilterSort>
            <div className="flex flex-col gap-6 items-center justify-center">
                {activeMembers.map((member)=> 
                    <MemberCard key={member.user_id + "_card"} {...member}></MemberCard>
                )}
                <p className="p-2 text-3xl font-bold">Former Members</p>
                {formerMembers.map((member)=> 
                    <MemberCard key={member.user_id + "_card"} {...member}></MemberCard>
                )}
            </div>
        </div>
    )
}