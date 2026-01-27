import InstrumentCard from "./card";
import { Instrument, InstrumentList } from "@/types/instrument";

export default function InstrumentHistory(props: InstrumentList){
    return (
        <div className="p-5 flex justify-center flex-wrap gap-6 font-bold">
            <div className="flex flex-col gap-6 items-center justify-center">
                {props.instruments.map((instrument: Instrument)=> 
                    <InstrumentCard key={instrument.id + "_card"} {...instrument}></InstrumentCard>
                )}
            </div>
        </div>
    )
}