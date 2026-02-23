import { MemPic } from "@/types/team";
import Image from "next/image";

export default function MemberPicture(props: MemPic){
    return (
        <Image
        src = {props.imageUrl}
        height={props.height}
        width={props.width}
        alt = {props.alt}
        className="rounded-l-2xl object-cover"
        ></Image>
    )
}