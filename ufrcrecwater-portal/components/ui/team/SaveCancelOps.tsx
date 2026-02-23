"use client"

import { logosList } from "@/data/general";
import Action from "../DataOps1";
import { useSelectionStore } from "@/store/dataOpsStore";
import { usePathname } from "next/navigation";

export default function SaveCancelOps(props: {id: string}){
    const {page, cardId, saveState, cancelState} = useSelectionStore()
    return (
        <div className="xl:flex xl:items-end xl:justify-end xl:gap-2 xl:text-[#a8a8a8] xl:text-md xl:absolute xl:bottom-4 xl:right-4 hidden">
            {props.id === cardId && saveState && <Action {...logosList.Save} cardId={props.id}></Action>}
            {props.id === cardId && cancelState && <Action {...logosList.Cancel} cardId={props.id}></Action>}
        </div>
    )
}