import Search from "../ui/search";
import PublicationCard from "./card";
import { PublicationList } from "@/types/publications";
import { FilterCheckboxOptions } from "@/data/publications";
import FilterSort from "../ui/publications/filter";

export default function Publications (props: PublicationList){
    return (
        <div className="p-25 h-screen flex flex-wrap justify-center gap-6 font-bold">
            <Search label="PublicationSearch" placeholder="Search by Research Name, Author, Journal, or Date of Publication, etc"></Search>
            <FilterSort {...FilterCheckboxOptions}></FilterSort>
            <div className="flex flex-col gap-3 items-center justify-center">
                {props.publications.map((publication) => 
                    <PublicationCard key={publication.id} {...publication}></PublicationCard>
                )}
            </div>
        </div>
    )
}