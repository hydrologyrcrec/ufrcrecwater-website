import { LogosList } from "@/data/instrument"
import Image from "next/image"

export default function LocationLogo() {
    return (
        <div>
             <Image src={LogosList.location.src} alt={LogosList.location.alt} height={20} width={20}></Image>
        </div>
    )
}