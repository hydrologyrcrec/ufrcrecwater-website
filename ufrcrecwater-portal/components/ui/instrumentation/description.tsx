import { InsDesc } from "@/types/instrument"

export default function InstrumentDescription(props: InsDesc){
    return (
        <div className="flex flex-1 w-full overflow-y-auto mb-2">
            <p key={props.id + "_desc"} className="px-2 py-1 mb-4 text-sm text-black font-medium">{props.instrument_desc}</p>
        </div>
    )
}   