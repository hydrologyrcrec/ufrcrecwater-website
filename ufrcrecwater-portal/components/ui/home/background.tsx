import { BgImg } from "@/types/home";
import Image from "next/image";

export default function Background(props: BgImg){
    return (
        <div className="absolute inset-0 z-2 flex justify-center items-center w-full h-full">
            <Image src={props.s3_url} alt="Walpaper" fill className="object-cover"></Image>
        </div>
    )
}