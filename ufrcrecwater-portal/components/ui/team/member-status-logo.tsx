import { MemStatus } from "@/types/team";
import { logosList } from "@/data/team";
import Image from "next/image";

export default function MemberStatus(props: MemStatus){
    return (
        <Image
        key={props.id + "_status"}
        src = {props.userStatus === "current" ? logosList.current.src : logosList.former.src}
        height={20}
        width={28}
        alt = {props.userStatus === "current" ? logosList.current.alt : logosList.former.alt}
        className="object-contain"
        ></Image>
    )
}