import Search from "../ui/search";
import PublicationCard from "./card";
import { PublicationList } from "@/types/publications";
import Filter from "../ui/publications/filter";

export default function Publications (props: PublicationList){
    return (
        <div className="p-4 flex flex-wrap justify-center gap-6 font-bold" >
            <Search label="PublicationSearch" placeholder="Search by Research Name, Author, Journal, or Date of Publication, etc"></Search>
            <Filter></Filter>
            {props.publications.map((publication) => 
                <PublicationCard key={publication.id} {...publication}></PublicationCard>
            )}
        </div>
    )
}