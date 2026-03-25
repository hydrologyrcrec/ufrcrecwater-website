import ResearchCard from "./card";
import { Research, ResearchList } from "@/types/research";

export default function ResearchHistory(props: ResearchList){
    return (
            <div className="p-5 grid sm:grid-cols-[repeat(auto-fit,1000px)] gap-8 justify-center">
                {props.research.map((research: Research)=> 
                    <ResearchCard key={research.id + "_card"} {...research}></ResearchCard>
                )}
            </div>
    )
}