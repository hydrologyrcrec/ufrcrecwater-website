import { MembersList } from "@/types/team";
import MemberCard from "./card";
import Search from "../ui/Search1";
import FilterSort from "../ui/Filter1";
import { FilterCheckboxOptions } from "@/data/team";

export default function Team (props: MembersList){
    const activeMembers = props.members.filter(m => m.tenure_end === "current")
    const formerMembers = props.members.filter(m => m.tenure_end !== "current")
    return (
        <div className="relative xl:top-30 top-5 p-5 grid grid-cols-1 gap-6 font-bold justify-center">
            {/* <Search label="PublicationSearch" placeholder="Search by Member Name or Title"></Search> */}
            {/* <FilterSort {...FilterCheckboxOptions}></FilterSort> */}
            <div className="flex flex-col items-center justify-center gap-8">
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