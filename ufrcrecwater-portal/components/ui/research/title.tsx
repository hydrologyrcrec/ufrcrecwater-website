import { ResTitle } from "@/types/research";

export default function ResearchTitle(props: ResTitle){
    return (
        <h2 key={props.id + "_title"} className="text-xl font-bold text-black">{props.research_title}</h2>
    )
}