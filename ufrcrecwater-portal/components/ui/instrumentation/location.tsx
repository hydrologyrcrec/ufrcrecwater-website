import LocationLogo from "../LocationIcon";

export default function InstrumentLocation(props: {instrument_location: string}) {
    console.log("instrument_location is: ", props.instrument_location)
    return (
        <div className="flex justify-start gap-2">
            <LocationLogo></LocationLogo>
            <p className="text-white font-medium overflow-scroll">{props.instrument_location}</p>
        </div>
    )
}