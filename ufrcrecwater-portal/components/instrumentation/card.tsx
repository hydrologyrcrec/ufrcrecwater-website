"use client"

import { Instrument } from "@/types/instrument";
import InstrumentPicture from "../ui/instrumentation/instrumentation-picture";
import InstrumentDescription from "../ui/instrumentation/description";
import InstrumentTitle from "../ui/instrumentation/title";
import Timeline from "../ui/instrumentation/date";
import Navigator from "./navigator";
import { LogosList } from "@/data/instrument";
import { useInstrumentStore } from "@/store/instrumentationStore";
import ToolTitle from "../ui/instrumentation/tool-title";

export default function InstrumentCard(props: Instrument) {
    const { data } = useInstrumentStore();
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
        <div key={props.id + "_card"} className="h-fit w-3/5 flex items-start justify-start gap-4 bg-[#302370] rounded-2xl shadow-gray-600 shadow-xl">
            <div className="h-full flex justify-start items-start">
                <InstrumentPicture id={cardDisplayPic} imageUrl={cardDisplayPic} height={350} width={350} alt={props.id + "_picture"}></InstrumentPicture>
            </div>
            <div className="h-full w-2/3 m-2 overflow-hidden">
                <div className="relative h-full w-full flex flex-col px-2 justify-start items-start text-sm text-white rounded-2xl">
                    <Navigator id={props.id} hasTools={props.hasTools} {...LogosList}></Navigator>
                    <InstrumentTitle id={cardId} instrument_title={props.instrument_title}></InstrumentTitle>
                    <Timeline date_installed={props.date_installed} date_uninstalled={props.date_uninstalled}></Timeline>
                    {toolTitle && <ToolTitle tool_title={toolTitle}></ToolTitle>}
                    {cardDescription!=="Tool" && <InstrumentDescription id={cardId} instrument_desc={cardDescription}></InstrumentDescription>}
                </div>
            </div>
        </div>
    )
}