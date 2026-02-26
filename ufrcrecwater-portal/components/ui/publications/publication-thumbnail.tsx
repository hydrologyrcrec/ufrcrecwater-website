"use client"

import { PubTnail } from "@/types/publications";
import Image from "next/image";
import { useState } from "react";

export default function Thumbnail(props: PubTnail){
    const fallbackImage = "/default.jpg"
    const [src, setSrc] = useState(props.imageUrl);
    return (
        <Image
        key={props.id + "_image"}
        src = {src}
        height={props.height}
        width={props.width}
        alt = {props.alt}
        onError={() => setSrc(fallbackImage)}
        className="w-full h-full rounded-l-2xl object-contain"
        ></Image>
    )
}
