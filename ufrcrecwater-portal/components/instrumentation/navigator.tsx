import { Logos } from "@/types/instrument";
import ArrowLogo from "../ui/instrumentation/arrow-logo";

export default function Navigator(props: Logos & {id: string, hasTools: boolean}){
    return (
        <div className="absolute w-full top-2 left-0 z-4 px-2 flex justify-end gap-2 items-center">
            <ArrowLogo key="left_navigation" direction="left" instrument_id={props.id} toolsFetchRequired={props.hasTools} logo={props.hasTools? props["left-arrow"] : props["left-blocked-arrow"]}></ArrowLogo>
            <ArrowLogo key="right_navigation" direction="right" instrument_id={props.id} toolsFetchRequired={props.hasTools} logo={props.hasTools? props["right-arrow"] : props["right-blocked-arrow"]}></ArrowLogo>
        </div>
    )
}