"use client"

import { PubTnail } from "@/types/publications";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PubThumbnail(props: PubTnail){
    const fallbackImage = "/default.jpg"
    const [src, setSrc] = useState(props.imageUrl);
    return (
        <Link key={props.id + "_image"} href={props.publication_url} className="w-full h-full" target="_blank" rel="noopener noreferrer">
            <Image
            src = {src}
            height={props.height}
            width={props.width}
            alt = {props.alt}
            onError={() => setSrc(fallbackImage)}
            className="w-full h-full rounded-l-2xl object-contain"
            ></Image>
        </Link>
    )
}
