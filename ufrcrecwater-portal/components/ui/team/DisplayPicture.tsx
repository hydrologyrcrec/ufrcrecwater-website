"use client"

import { MemPic } from "@/types/team";
import Image from "next/image";
import { useState } from "react";


export default function MemberPicture(props: MemPic){
    const fallbackImage = "/default.jpg"
    const [src, setSrc] = useState(props.imageUrl);
    return (
        <Image
        src = {src}
        height={props.height}
        width={props.width}
        alt = {props.alt}
        onError={() => setSrc(fallbackImage)}
        className="rounded-l-2xl object-cover"
        ></Image>
    )
}