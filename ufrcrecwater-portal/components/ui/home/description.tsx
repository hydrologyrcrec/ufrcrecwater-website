import { Description } from "@/types/home"

export default function SlideDescription(props: Description){
    return (
        <div className="flex w-full p-2 overflow-scroll">
            <p key={props.id + "_desc"} className="text-lg text-white">{props.description}</p>
        </div>
    )
}   