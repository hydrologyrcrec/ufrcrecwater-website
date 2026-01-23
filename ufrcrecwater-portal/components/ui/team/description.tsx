import { MemDesc } from "@/types/team";

export default function MemberDescription(props: MemDesc){
    return (
        <p key={props.id + "_desc"} className="px-2 text-sm text-[#aeabab] font-medium overflow-scroll">{props.description}</p>
    )
}   