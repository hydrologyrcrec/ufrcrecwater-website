import { PAGES } from "@/config/navigation"
import Image from "next/image"

export default function InstrumentPageSubject(){
    return (
        <div className="flex justify-center px-6 gap-2 w-full">
            {/* <Image src="/instrumentation/right-play.png" alt="right-play-icon" height={25} width={25}></Image> */}
            <h1 className="text-black text-4xl">{PAGES.instrumentation.description}</h1>
        </div>
    )
}