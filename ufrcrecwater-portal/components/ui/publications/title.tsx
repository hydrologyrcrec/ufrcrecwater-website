import { PubTitle } from "@/types/publications";

export default function PublicationTitle(props: PubTitle) {
    return (
        <h2 key={props.id + "_title"} className="md:text-xl text-md text-black">{props.publication_title}</h2>
    )
}