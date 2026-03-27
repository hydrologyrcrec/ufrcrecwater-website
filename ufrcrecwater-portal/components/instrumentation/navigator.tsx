import { Logos } from "@/types/instrument";
import ArrowLogo from "../ui/instrumentation/arrow-logo";

export default function Navigator(props: Logos & {id: string, hasTools: boolean, css: string, iconHeight: number, iconWidth: number, isBlack: boolean}){
    return (
        <div className={`absolute w-full left-0 z-10 px-2 flex justify-between gap-2 items-center ${props.css}`}>
            <ArrowLogo key="left_navigation" direction="left" instrument_id={props.id} toolsFetchRequired={props.hasTools} logo={props.hasTools? props.isBlack? props["left-arrow"]: props["large-left-slider-white"] : props["left-blocked-arrow"]} iconHeight={props.iconHeight} iconWidth={props.iconWidth}></ArrowLogo>
            <ArrowLogo key="right_navigation" direction="right" instrument_id={props.id} toolsFetchRequired={props.hasTools} logo={props.hasTools? props.isBlack? props["right-arrow"] : props["large-right-slider-white"] : props["right-blocked-arrow"]} iconHeight={props.iconHeight} iconWidth={props.iconWidth}></ArrowLogo>
        </div>
    )
}