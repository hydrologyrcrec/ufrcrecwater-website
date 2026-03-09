import { InsDesc } from "@/types/instrument"

export default function InstrumentDescription(props: InsDesc){
    return (
        <div className="flex flex-1 mb-4 overflow-y-auto">
            <p key={props.id + "_desc"} className="h-44 px-2 py-1 mb-4 text-sm text-[#aeabab] font-medium">{props.instrument_desc}</p>
        </div>
    )
}   