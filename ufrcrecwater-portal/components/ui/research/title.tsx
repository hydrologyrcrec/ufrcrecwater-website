import { ResTitle } from "@/types/research";

export default function ResearchTitle(props: ResTitle){
    return (
        <h2 key={props.id + "_title"} className="px-2 text-lg font-semibold text-[#DB7E31]">{props.research_title}</h2>
    )
}