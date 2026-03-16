import { ResDesc } from "@/types/research"

export default function ResearchDescription(props: ResDesc){
    return (
        <p key={props.id + "_desc"} className="px-2 text-sm text-white font-semibold overflow-scroll">{props.research_desc}</p>
    )
}   