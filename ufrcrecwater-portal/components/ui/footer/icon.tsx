import { Icon } from "@/types/footer"
import Image from "next/image"
import Link from "next/link"

export default function SocMed(props: Icon) {
    return (
        <Link href={props.link} key={props.alt+"_link"} className="flex justify-start items-center gap-2">
            <Image src={props.src} alt={props.alt + "_Icon"} height={40} width={40}></Image>
            <p className="text-lg font-normal">{props.alt}</p>
        </Link> 
    )
}