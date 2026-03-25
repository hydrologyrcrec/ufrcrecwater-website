"use client"

import { useSelectionStore } from "@/store/dataOpsStore";
import { Button } from "@/types/general";
import { PageKey } from "@/types/state";
import { UserOnClick } from "@/types/team";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Action(props: Button & {cardId: string;}){
    const {setPage, setCardId, setCancelState, setDeleteState, setEditState, setSaveState} = useSelectionStore();
    const isPageKey = (v: string): v is PageKey => ["research","publications","team","facilities","instrumentation","news","conferences","applications","gallery",""].includes(v);
    const segment = (usePathname()?.split("/")[1] ?? "");
    const pathname: PageKey = isPageKey(segment) ? segment : "";

    function onClick(params: UserOnClick){
        setPage(params.page);
        switch(params.label){
            case "Edit":
                setCardId(params.cardId);
                setEditState(false);
                setDeleteState(false);
                setSaveState(true);
                setCancelState(true);
                break;
            case "Delete":
                const confirmed = confirm("Are you sure you want to delete the team member?");
                if (!confirmed) return;
                setCardId("");
                setEditState(true);
                setDeleteState(true);
                setSaveState(false);
                setCancelState(false);
                break;
            case "Cancel":
                setCardId("");
                setEditState(true);
                setDeleteState(true);
                setSaveState(false);
                setCancelState(false);
                break;
        }
    }

    return (
        <button key={props.label+"_container"} className={`appearance-none w-max py-1 px-2 flex gap-2 cursor-pointer items-center ${props.bgColor} rounded-lg text-black`} type={props.type} onClick={() => onClick({page: pathname, cardId: props.cardId, label: props.label})}>
            <Image src={props.src} alt={props.alt} height={props.height} width={props.width} className="object-contain"></Image><span>{props.label}</span>
        </button>
    )
}