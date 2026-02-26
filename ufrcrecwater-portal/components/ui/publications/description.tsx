import { PubDesc } from "@/types/publications";

export default function PublicationDescription(props: PubDesc){
    return (
        <div className="flex flex-1 mb-4 overflow-scroll">
             <p key={props.id + "_desc"} className="h-72 text-sm font-medium text-[#aeabab]">{props.publication_desc}</p>
        </div>
    )
}