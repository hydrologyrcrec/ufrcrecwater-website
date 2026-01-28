import Image from "next/image";

export default function PlayIcon(){
    return (
        <Image src="/play.png" alt="Play Icon" height={10} width={10} className="object-contain"></Image>
    )
}