import { MemPic } from "@/types/team";
import Image from "next/image";

export default function MemberPicture(props: MemPic){
    return (
        <Image
        key={props.id + "_image"}
        src = {props.imageUrl}
        height={props.height}
        width={props.width}
        alt = {props.alt}
        className="rounded-4xl aspect-square"
        ></Image>
    )
}