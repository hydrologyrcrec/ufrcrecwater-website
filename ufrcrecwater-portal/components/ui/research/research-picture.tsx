import { ResPic } from "@/types/research";
import Image from "next/image";

export default function ResearchPicture(props: ResPic){
    return (
        <Image
        key={props.id + "_image"}
        src = {props.imageUrl}
        height={props.height}
        width={props.width}
        alt = {props.alt}
        className="rounded-l-2xl aspect-square object-contain"
        ></Image>
    )
}