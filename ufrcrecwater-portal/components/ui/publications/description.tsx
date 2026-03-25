import { PubDesc } from "@/types/publications";

export default function PubDescription(props: PubDesc){
    return (
        <div className="flex flex-1 overflow-y-auto pb-4 min-h-0">
             <p key={props.id + "_desc"} className="text-sm font-medium text-black">{props.publication_desc}</p>
        </div>
    )
}