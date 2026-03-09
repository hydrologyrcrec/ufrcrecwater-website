"use client"

import Image from "next/image";
import { baseURL } from "@/data/constants";
import { useInstrumentStore } from "@/store/instrumentationStore";
import { ArrowNavigatorProps, Tool } from "@/types/instrument";

export default function ArrowLogo(props: ArrowNavigatorProps){
    const {data, setData, setCurrentInstrumentToolIndex} = useInstrumentStore();
    async function ToolsAction(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, toolsFetchRequired: boolean, direction: "left" | "right"){
        e.preventDefault();
        try {
            if(toolsFetchRequired && data?.get(props.instrument_id)?.isDataFetched===false){
                const res = await fetch(
                    `${baseURL}/instruments/tools?instrument_id=${props.instrument_id}`,
                    { cache: "no-store" }
                  );
                  const payload: { tools: Tool[] } = await res.json();
                  setData(props.instrument_id, payload.tools);
            }
            setCurrentInstrumentToolIndex(props.instrument_id, direction)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button className="appearance-none" disabled={!props.toolsFetchRequired} onClick={(e) => {ToolsAction(e, props.toolsFetchRequired, props.direction)}}>
            <Image 
                src={props.logo.src} 
                alt={props.logo.alt} 
                height={30} 
                width={30} 
                className={props.toolsFetchRequired? "cursor-pointer" : "cursor-not-allowed"}
            />
        </button>
    )
}