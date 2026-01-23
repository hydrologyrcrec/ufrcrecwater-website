import { PubTnail } from "@/types/publications";
import Image from "next/image";

export default function Thumbnail(props: PubTnail){
    return (
        <Image
        key={props.id + "_image"}
        src = {props.imageUrl}
        height={props.height}
        width={props.width}
        alt = {props.alt}
        className="w-full h-full rounded-l-2xl object-contain"
        ></Image>
    )
}
