import { logosList } from "@/data/publications";
import Image from "next/image";
export default function FullScreenCloser(props: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <button className="absolute w-full top-4 right-4 z-4 px-2 flex justify-end gap-2 items-center appearance-none" onClick={(e) => {props.setOpen(false)}}>
            <Image src={logosList.close.src} alt={logosList.close.alt} height={20} width={20}></Image>
        </button>
    )
}