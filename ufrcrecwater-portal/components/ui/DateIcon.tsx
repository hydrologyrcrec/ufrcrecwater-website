import { LogosList } from "@/data/instrument"
import Image from "next/image"

export default function DateLogo() {
    return (
        <Image src={LogosList["calendar"].src} alt={LogosList["calendar"].alt} height={15} width={20}></Image>
    )
}