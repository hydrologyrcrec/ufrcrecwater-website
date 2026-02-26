import Search from "../ui/Search1";
import PublicationCard from "./card";
import { PublicationList } from "@/types/publications";
import { FilterCheckboxOptions } from "@/data/publications";
import FilterSort from "../ui/Filter1";

export default function Publications (props: PublicationList){
    return (
        <div className="w-full p-5 flex flex-col items-center gap-6 font-bold">
            {/* <Search label="PublicationSearch" placeholder="Search by Research Name, Author, Journal, or Date of Publication, etc" />
            <FilterSort {...FilterCheckboxOptions} /> */}
            <div className="w-full max-w-6xl flex flex-col gap-6 items-center overflow-auto">
                {props.publications.map((publication) => (
                    <PublicationCard key={publication.id} {...publication} />
                ))}
            </div>
        </div>
    )
}