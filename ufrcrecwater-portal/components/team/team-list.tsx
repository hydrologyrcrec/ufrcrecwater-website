import { MembersList } from "@/types/team";
import MemberCard from "./card";
import Search from "../ui/search";
import FilterSort from "../ui/publications/filter";
import { FilterCheckboxOptions } from "@/data/team";

export default function Team (props: MembersList){
    return (
        <div className="p-25 flex justify-center flex-wrap gap-6 font-bold">
            <Search label="PublicationSearch" placeholder="Search by Member Name or Title"></Search>
            <FilterSort {...FilterCheckboxOptions}></FilterSort>
            <div className="flex flex-col gap-3 items-center justify-center">
                {props.members.map((member)=> 
                    <MemberCard key={member.user_id + "_card"} {...member}></MemberCard>
                )}
            </div>
        </div>
    )
}