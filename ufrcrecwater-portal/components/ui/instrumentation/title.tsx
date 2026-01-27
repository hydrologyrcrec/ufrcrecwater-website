import { InsTitle } from "@/types/instrument";

export default function InstrumentTitle(props: InsTitle){
    return (
        <h2 key={props.id + "_title"} className="px-2 text-lg font-semibold text-[#DB7E31]">{props.instrument_title}</h2>
    )
}