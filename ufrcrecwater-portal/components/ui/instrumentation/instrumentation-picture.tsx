
import { InsPic } from "@/types/instrument";
import Image from "next/image";

export default function InstrumentPicture(props: InsPic){
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