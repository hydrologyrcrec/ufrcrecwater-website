import ResearchCard from "./card";
import { Research, ResearchList } from "@/types/research";

export default function ResearchHistory(props: ResearchList){
    return (
        <div className="p-5 flex justify-center flex-wrap gap-6 font-bold">
            <div className="flex flex-col gap-6 items-center justify-center">
                {props.research.map((research: Research)=> 
                    <ResearchCard key={research.id + "_card"} {...research}></ResearchCard>
                )}
            </div>
        </div>
    )
}