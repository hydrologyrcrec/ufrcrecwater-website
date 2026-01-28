import { Title } from "@/types/home"

export default function HeadlineTitle(props: Title){
    return (
        <h2 key={props.id + "_title"} className="px-2 text-4xl font-bold text-[#DB7E31]">{props.title}</h2>
    )
}