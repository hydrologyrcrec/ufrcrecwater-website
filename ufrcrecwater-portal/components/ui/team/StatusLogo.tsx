'use client'

import { MemStatus } from "@/types/team";
import { logosList } from "@/data/team";
import Image from "next/image";

export default function MemberStatus(props: MemStatus){
    return (
        <Image
        src = {props.status === "current" ? logosList.current.src : logosList.former.src}
        height={20}
        width={28}
        alt = {props.status === "current" ? logosList.current.alt : logosList.former.alt}
        className="object-contain"
        ></Image>
    )
}