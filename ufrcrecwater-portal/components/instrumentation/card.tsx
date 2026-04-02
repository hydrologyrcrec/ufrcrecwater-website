"use client"

import { Instrument } from "@/types/instrument";
import InstrumentPicture from "../ui/instrumentation/instrumentation-picture";
import InstrumentDescription from "../ui/instrumentation/description";
import InstrumentTitle from "../ui/instrumentation/title";
import Timeline from "../ui/instrumentation/date";
import { useInstrumentStore } from "@/store/instrumentationStore";
import ToolTitle from "../ui/instrumentation/tool-title";
import InstrumentLocation from "../ui/instrumentation/location";
import Navigator from "./navigator";
import { LogosList } from "@/data/instrument";
import { useState } from "react";
import Image from "next/image";
import FullScreenViewer from "../ui/instrumentation/full-screen-viewer";
import FullScreenCloser from "../ui/instrumentation/full-screen-closer";

export default function InstrumentCard(props: Instrument) {
    const { data } = useInstrumentStore();
    const [open, setOpen] = useState(false);
    const currentIndex = data?.get(props.id)?.currentIndex
    var cardId, toolTitle, cardDescription, cardDisplayPic
    if (currentIndex === 0 || currentIndex === undefined) {
        cardId = props.id
        cardDescription = props.instrument_desc
        cardDisplayPic = props.s3_url
    } else {
        cardId = data?.get(props.id)?.tools[currentIndex-1].id!
        toolTitle = data?.get(props.id)?.tools[currentIndex-1].tool_title!
        cardDescription = data?.get(props.id)?.tools[currentIndex-1].tool_desc!
        cardDisplayPic = data?.get(props.id)?.tools[currentIndex-1].s3_url!
    }
    
    return (
        <>
        {open && (
            <div
                className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            >
                <FullScreenCloser open={open} setOpen={setOpen}></FullScreenCloser>
                <Image
                src={cardDisplayPic}
                alt={cardId + "_picture"}
                width={1200}
                height={800}
                className="object-contain max-w-[90%] max-h-[90%] rounded-lg"
                />
                <Navigator id={props.id} hasTools={props.hasTools} {...LogosList} isBlack={false} css="top-1/2" iconHeight={50} iconWidth={50}></Navigator>
            </div>
        )}
        <div key={props.id + "_card"} className="relative md:h-160 h-120 w-full max-w-100 flex flex-col justify-center items-center gap-4 shadow-xl shadow-gray-600 rounded-2xl">
            <FullScreenViewer open={open} setOpen={setOpen} {...LogosList} ></FullScreenViewer>
            <Navigator id={props.id} hasTools={props.hasTools} {...LogosList} isBlack={true} css="top-1/3" iconHeight={30} iconWidth={30}></Navigator>
            <div className="absolute h-full z-[-2] top-0 inset-0">
            <InstrumentPicture id={cardDisplayPic} imageUrl={cardDisplayPic} height={350} width={350} alt={props.id + "_picture"}></InstrumentPicture>
            </div>
            <div className="absolute h-4/10 z-1 bottom-0 inset-x-0 bg-[#D9E2EC] flex flex-col rounded-b-2xl">
                <div className="p-4 flex flex-col justify-center items-start h-full backdrop-blur-3xl rounded-b-2xl">
                    <InstrumentTitle id={cardId} instrument_title={props.instrument_title}></InstrumentTitle>
                    <div className="flex px-2 py-1 justify-start gap-2 flex-col">
                        <Timeline date_installed={props.date_installed} date_uninstalled={props.date_uninstalled}></Timeline>
                        <InstrumentLocation instrument_location={props.instrument_location}></InstrumentLocation>
                    </div>
                    <InstrumentDescription id={cardId} instrument_desc={props.instrument_desc}></InstrumentDescription>
                </div>
            </div>
        </div>
        </>
        
    )
}