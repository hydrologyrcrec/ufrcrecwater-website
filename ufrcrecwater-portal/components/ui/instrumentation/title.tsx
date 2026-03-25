import { InsTitle } from "@/types/instrument";

export default function InstrumentTitle(props: InsTitle){
    return (
        <h2 key={props.id + "_title"} className="px-2 text-xl font-bold text-black">{props.instrument_title}</h2>
    )
}