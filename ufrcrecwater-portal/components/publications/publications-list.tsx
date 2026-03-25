import Search from "../ui/Search1";
import PublicationCard from "./card";
import { PublicationList } from "@/types/publications";
import { FilterCheckboxOptions } from "@/data/publications";
import FilterSort from "../ui/Filter1";

export default function Publications (props: PublicationList){
    return (
        <div className="p-5 w-full flex flex-col items-center gap-6 font-bold">
            {/* <Search label="PublicationSearch" placeholder="Search by Research Name, Author, Journal, or Date of Publication, etc" />
            <FilterSort {...FilterCheckboxOptions} /> */}
            {/* <div className="pb-10 w-full flex flex-wrap gap-8 items-center justify-center overflow-auto"> */}
            <div className="pb-10 w-full flex flex-col items-center justify-center gap-8 overflow-auto">
                {props.publications.map((publication) => (
                    <PublicationCard key={publication.id} {...publication} />
                ))}
            </div>
        </div>
    )
}