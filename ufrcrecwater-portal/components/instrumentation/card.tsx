import { Instrument } from "@/types/instrument";
import InstrumentPicture from "../ui/instrumentation/instrumentation-picture";
import InstrumentDescription from "../ui/instrumentation/description";
import InstrumentTitle from "../ui/instrumentation/title";
import DateInstalled from "../ui/instrumentation/date";

export default function InstrumentCard(props: Instrument) {
    return (
        <div key={props.id + "_card"} className="h-2/5 w-3/5 flex items-start justify-start gap-4 bg-[#302370] rounded-2xl shadow-gray-600 shadow-xl">
            <div className="h-full flex justify-start items-start">
                <InstrumentPicture id={props.s3_url} imageUrl={props.s3_url} height={350} width={350} alt={props.id + "_picture"}></InstrumentPicture>
            </div>
            <div className="h-full w-2/3 m-2 p-2 flex flex-col justify-start items-start text-sm text-white rounded-2xl">
                <InstrumentTitle id={props.id} instrument_title={props.instrument_title}></InstrumentTitle>
                <DateInstalled date_installed={props.date_installed}></DateInstalled>
                <InstrumentDescription id={props.id} instrument_desc={props.instrument_desc}></InstrumentDescription>
            </div>
        </div>
    )
}