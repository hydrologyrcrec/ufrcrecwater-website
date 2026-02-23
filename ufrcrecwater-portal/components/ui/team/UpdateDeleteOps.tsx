"use client"

import { logosList } from "@/data/general";
import Action from "../DataOps1";
import { useSelectionStore } from "@/store/dataOpsStore";
import { usePathname } from "next/navigation";

export default function UpdateDeleteOps(props: {id: string}){
    const {page, cardId, editState, deleteState} = useSelectionStore()
    return (
        <div className="xl:flex xl:items-start xl:justify-end xl:gap-2 xl:text-[#a8a8a8] xl:text-md xl:absolute xl:top-4 xl:right-4 hidden">
            {(props.id === cardId || cardId === "") && editState && <Action {...logosList.Edit} cardId={props.id}></Action>}
            {(props.id === cardId || cardId === "") && deleteState && <Action {...logosList.Delete} cardId={props.id}></Action>}
        </div>
    )
}