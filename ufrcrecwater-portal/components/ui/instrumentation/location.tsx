import LocationLogo from "../LocationIcon";

export default function InstrumentLocation(props: {instrument_location: string}) {
    return (
        <div className="flex justify-start gap-2">
            <LocationLogo></LocationLogo>
            <p className="text-black font-medium overflow-scroll">{props.instrument_location}</p>
        </div>
    )
}