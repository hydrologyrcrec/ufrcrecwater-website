import { PubDesc } from "@/types/publications";

export default function PublicationDescription(props: PubDesc){
    return (
        <p key={props.id + "_desc"} className="text-sm font-medium text-[#aeabab] overflow-scroll">{props.description}</p>
    )
}