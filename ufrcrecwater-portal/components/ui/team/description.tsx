import { MemDesc } from "@/types/team";

export default function MemberDescription(props: MemDesc){
    return (
        <p key={props.id + "_desc"} className="text-sm font-medium text-[#aeabab] px-2 overflow-scroll">{props.description}</p>
    )
}   