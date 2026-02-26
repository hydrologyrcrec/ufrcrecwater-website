"use client"

import { ResPic } from "@/types/research";
import Image from "next/image";
import { useState } from "react";

export default function ResearchPicture(props: ResPic){
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
        className="rounded-l-2xl object-cover"
        ></Image>
    )
}