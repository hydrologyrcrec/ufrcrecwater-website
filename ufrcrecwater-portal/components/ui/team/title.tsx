import { MemTitle } from "@/types/team";

export default function MemberTitle(props: MemTitle){
    return (
        <h2 key={props.id + "_title"} className="text-lg text-center font-semibold text-[#DB7E31]">{props.position}</h2>
    )
}