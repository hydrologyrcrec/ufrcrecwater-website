import { MemTitle } from "@/types/team";

export default function MemberTitle(props: MemTitle){
    return (
        <h2 className="px-2 text-lg text-center font-semibold text-[#DB7E31]">{props.position}</h2>
    )
}