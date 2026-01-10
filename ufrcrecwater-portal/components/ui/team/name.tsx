import { MemName } from "@/types/team";

export default function MemberName(props: MemName){
    return (
        <h2 key={props.id + "_name"} className="text-xl text-white">{props.name}</h2>
    )
}