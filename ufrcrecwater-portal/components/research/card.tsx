import { Research } from "@/types/research";
import ResearchPicture from "../ui/research/research-picture";
import ResearchTitle from "../ui/research/title";
import ResearchDescription from "../ui/research/description";

export default function ResearchCard(props: Research) {
    return (
        <div key={props.id + "_card"} className="w-84 h-150 md:h-96 md:w-180 lg:w-250 flex flex-col md:flex-row md:items-stretch md:justify-start rounded-2xl shadow-xl bg-[#D9E2EC] shadow-gray-600 overflow-hidden">
            <div className="h-96 md:w-90 md:h-full md:flex md:justify-start md:shrink-0 md:items-start">
                <ResearchPicture id={props.s3_url} imageUrl={props.s3_url} height={350} width={350} alt={props.id + "_picture"}></ResearchPicture>
            </div>
            <div className="p-4 flex flex-col flex-1 gap-1 justify-start backdrop-blur-3xl overflow-scroll">
                <ResearchTitle id={props.id} research_title={props.research_title}></ResearchTitle>
                <ResearchDescription id={props.id} research_desc={props.research_desc + "Our lab advances the use of artificial intelligence and machine learning to improve environmental prediction, mapping, and process understanding. We integrate AI methods with traditional hydrologic knowledge to enhance model performance, interpretability, and scalability. Applications include: * Pattern recognition from large geospatial datasets * Hybrid modeling frameworks combining physics and data-driven approaches * Flood and environmental risk mapping A strong emphasis is placed on explainable and responsible AI, ensuring transparency and usability for scientific and applied decision-making. Our lab advances the use of artificial intelligence and machine learning to improve environmental prediction, mapping, and process understanding. We integrate AI methods with traditional hydrologic knowledge to enhance model performance, interpretability, and scalability. Applications include: * Pattern recognition from large geospatial datasets * Hybrid modeling frameworks combining physics and data-driven approaches * Flood and environmental risk mapping A strong emphasis is placed on explainable and responsible AI, ensuring transparency and usability for scientific and applied decision-making."}></ResearchDescription>
            </div>
        </div>
    )
}