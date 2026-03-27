import { Logos } from "@/types/instrument"
import Image from "next/image"

export default function FullScreenViewer(props: Logos & {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}){
    return (
    <button className="absolute w-full top-4 right-2 z-4 px-2 flex justify-end gap-2 items-center appearance-none" onClick={(e) => {props.setOpen(true)}}>
        <Image 
            src="/instrumentation/fullscreen-new.png" 
            alt="full-screen-viewer"
            height={25} 
            width={25} 
            className="cursor-pointer"
        />
    </button>
    )
}