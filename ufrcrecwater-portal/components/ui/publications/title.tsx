import { PubTitle } from "@/types/publications";

export default function PublicationTitle(props: PubTitle) {
    return (
        <h2 key={props.id + "_title"} className="text-xl text-[#DB7E31]">{props.title}</h2>
    )
}