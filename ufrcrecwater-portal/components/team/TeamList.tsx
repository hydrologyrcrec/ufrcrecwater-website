import { MembersList } from "@/types/team";
import MemberCard from "./Card1";
import Search from "../ui/Search1";
import FilterSort from "../ui/Filter1";
import { FilterCheckboxOptions } from "@/data/team";

export default function Team (props: MembersList){
    const activeMembers = props.members.filter(m => m.tenure_end === "current")
    const formerMembers = props.members.filter(m => m.tenure_end !== "current")
    return (
        <div className="p-5 flex justify-center flex-wrap gap-6 font-bold">
            {/* <Search label="PublicationSearch" placeholder="Search by Member Name or Title"></Search> */}
            {/* <FilterSort {...FilterCheckboxOptions}></FilterSort> */}
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