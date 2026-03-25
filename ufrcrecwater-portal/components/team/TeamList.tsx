import { MembersList } from "@/types/team";
import MemberCard from "./card";
import Search from "../ui/Search1";
import FilterSort from "../ui/Filter1";
import { FilterCheckboxOptions } from "@/data/team";

export default function Team (props: MembersList){
    const activeMembers = props.members.filter(m => m.tenure_end === "current")
    const formerMembers = props.members.filter(m => m.tenure_end !== "current")
    return (
        <div className="p-5 grid grid-cols-1 gap-6 font-bold justify-center">
            {/* <Search label="PublicationSearch" placeholder="Search by Member Name or Title"></Search> */}
            {/* <FilterSort {...FilterCheckboxOptions}></FilterSort> */}
            <div className="grid grid-cols-[repeat(auto-fit,800px)] gap-8 justify-center">
                {activeMembers.map((member)=> 
                <MemberCard key={member.user_id + "_card"} {...member} />
                )}
                {formerMembers.map((member)=> 
                    <MemberCard key={member.user_id + "_card"} {...member}></MemberCard>
                )}
            </div>
        </div>
    )
}