import { Research } from "@/types/research";
import ResearchPicture from "../ui/research/research-picture";
import ResearchTitle from "../ui/research/title";
import ResearchDescription from "../ui/research/description";

export default function ResearchCard(props: Research) {
    return (
        <div key={props.id + "_card"} className="h-2/5 w-2/5 gap-1 flex items-start justify-between bg-[#302370] rounded-2xl shadow-gray-600 shadow-xl">
            <div className="h-full w-1/3 flex justify-start items-start object-contain">
                <ResearchPicture id={props.s3_url} imageUrl={props.s3_url} height={350} width={350} alt={props.id + "_picture"}></ResearchPicture>
            </div>
            <div className="h-full w-2/3 m-2 p-2 flex flex-col justify-start items-start rounded-2xl">
                <ResearchTitle id={props.id} research_title={props.research_title}></ResearchTitle>
                <ResearchDescription id={props.id} research_desc={props.research_desc}></ResearchDescription>
            </div>
        </div>
    )
}