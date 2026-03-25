import { Research } from "@/types/research";
import ResearchPicture from "../ui/research/research-picture";
import ResearchTitle from "../ui/research/title";
import ResearchDescription from "../ui/research/description";

export default function ResearchCard(props: Research) {
    return (
        <div key={props.id + "_card"} className="h-150 lg:w-250 md:w-220 w-84 flex flex-col sm:h-96 sm:flex-row sm:items-stretch sm:justify-start rounded-2xl shadow-xl bg-linear-300 from-[#334142]/90 via-[#727f85]/90 to-[#334142]/90 shadow-gray-600 overflow-hidden">
            <div className="h-96 sm:h-full sm:flex sm:justify-start sm:shrink-0 sm:items-start">
                <ResearchPicture id={props.s3_url} imageUrl={props.s3_url} height={350} width={350} alt={props.id + "_picture"}></ResearchPicture>
            </div>
            <div className="p-4 flex flex-col flex-1 gap-1 justify-start backdrop-blur-3xl overflow-scroll">
                <ResearchTitle id={props.id} research_title={props.research_title}></ResearchTitle>
                <ResearchDescription id={props.id} research_desc={props.research_desc + "Our lab advances the use of artificial intelligence and machine learning to improve environmental prediction, mapping, and process understanding. We integrate AI methods with traditional hydrologic knowledge to enhance model performance, interpretability, and scalability. Applications include: * Pattern recognition from large geospatial datasets * Hybrid modeling frameworks combining physics and data-driven approaches * Flood and environmental risk mapping A strong emphasis is placed on explainable and responsible AI, ensuring transparency and usability for scientific and applied decision-making. Our lab advances the use of artificial intelligence and machine learning to improve environmental prediction, mapping, and process understanding. We integrate AI methods with traditional hydrologic knowledge to enhance model performance, interpretability, and scalability. Applications include: * Pattern recognition from large geospatial datasets * Hybrid modeling frameworks combining physics and data-driven approaches * Flood and environmental risk mapping A strong emphasis is placed on explainable and responsible AI, ensuring transparency and usability for scientific and applied decision-making."}></ResearchDescription>
            </div>
        </div>
    )
}