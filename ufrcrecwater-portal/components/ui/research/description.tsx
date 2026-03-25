import { ResDesc } from "@/types/research"

export default function ResearchDescription(props: ResDesc){
    return (
        <div className="flex flex-1 overflow-y-auto pb-4 min-h-0">
            <p key={props.id + "_desc"} className="py-1 mb-4 text-sm text-black font-medium">{props.research_desc}</p>
        </div>
    )
}   