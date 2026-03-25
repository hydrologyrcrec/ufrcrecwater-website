import ResearchCard from "./card";
import { Research, ResearchList } from "@/types/research";

export default function ResearchHistory(props: ResearchList){
    return (
            <div className="p-5 flex flex-col items-center justify-center gap-8">
                {props.research.map((research: Research)=> 
                    <ResearchCard key={research.id + "_card"} {...research}></ResearchCard>
                )}
            </div>
    )
}