import { MemStatus } from "@/types/team";
import { logosList } from "@/data/team";
import Image from "next/image";

export default function MemberStatus(props: MemStatus){
    return (
        <Image
        key={props.id + "_status"}
        src = {props.status === "Active" ? logosList.active.src : logosList.former.src}
        height={20}
        width={28}
        alt = {props.status === "Active" ? logosList.active.alt : logosList.former.alt}
        ></Image>
    )
}