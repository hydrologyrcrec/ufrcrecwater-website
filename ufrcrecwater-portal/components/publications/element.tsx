import Image from "next/image"
import { Element } from "@/types/publications"

export default function PublicationElement(props: Element){
    return ( 
        <div className={`lg:flex ${props.css??""} md:font-bold font-semibold`}>
            <div key={props.id} className="py-1 flex items-start gap-2">
                <Image src={props.img.src} alt={props.img.alt} height={20} width={20}></Image>
                {props.component}
            </div>
        </div>
    )
}