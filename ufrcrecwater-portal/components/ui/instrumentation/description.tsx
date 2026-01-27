import { InsDesc } from "@/types/instrument"

export default function InstrumentDescription(props: InsDesc){
    return (
        <p key={props.id + "_desc"} className="px-2 text-sm text-[#aeabab] font-medium overflow-scroll">{props.instrument_desc}</p>
    )
}   