"use client"

import { Instrument } from "@/types/instrument";
import InstrumentPicture from "../ui/instrumentation/instrumentation-picture";
import InstrumentDescription from "../ui/instrumentation/description";
import InstrumentTitle from "../ui/instrumentation/title";
import Timeline from "../ui/instrumentation/date";
import { useInstrumentStore } from "@/store/instrumentationStore";
import ToolTitle from "../ui/instrumentation/tool-title";
import InstrumentLocation from "../ui/instrumentation/location";

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
        <div key={props.id + "_card"} className="relative h-160 w-90 md:w-100 flex flex-col justify-center items-center gap-4 shadow-xl shadow-gray-600 rounded-2xl">
            <div className="absolute h-full z-[-1] top-0 inset-0">
            <InstrumentPicture id={cardDisplayPic} imageUrl={cardDisplayPic} height={350} width={350} alt={props.id + "_picture"}></InstrumentPicture>
            </div>
            <div className="absolute h-4/10 z-1 bottom-0 inset-x-0 bg-linear-300 from-[#334142]/80 via-[#727f85]/80 to-[#334142]/80 flex flex-col rounded-b-2xl">
            
                <div className="p-4 flex flex-col justify-center items-start h-full backdrop-blur-3xl rounded-b-2xl">
                    {/* <Navigator id={props.id} hasTools={props.hasTools} {...LogosList}></Navigator> */}
                    <InstrumentTitle id={cardId} instrument_title={props.instrument_title}></InstrumentTitle>
                    <div className="flex px-2 py-1 justify-start gap-2 flex-col">
                        <Timeline date_installed={props.date_installed} date_uninstalled={props.date_uninstalled}></Timeline>
                        <InstrumentLocation instrument_location={props.instrument_location}></InstrumentLocation>
                    </div>
                    <InstrumentDescription id={cardId} instrument_desc={props.instrument_desc}></InstrumentDescription>
                </div>
            </div>
        </div>
    )
}