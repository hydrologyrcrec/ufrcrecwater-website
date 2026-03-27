"use client"

import { InsPic } from "@/types/instrument";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InstrumentPicture(props: InsPic){
    const fallbackImage = "/default.jpg"
    const [src, setSrc] = useState(props.imageUrl);
    useEffect(() => {
        setSrc(props.imageUrl);
      }, [props.imageUrl]);

    return (
        <Image
          src={src}
          height={props.height}
          width={props.width}
          alt={props.alt}
          onError={() => setSrc(fallbackImage)}
          className="object-cover w-full h-full rounded-2xl"
        />
    )
}