import { MemDesc } from "@/types/team";

export default function MemberDescription(props: MemDesc){
    return (
        <p className="text-sm text-[#aeabab] font-medium px-2 overflow-scroll">{props.description}</p>
    )
}   