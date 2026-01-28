import { Icon, Logos, NavigatorProps, SlideState } from "@/types/home";
import ArrowLogo from "../ui/home/arrow-logo";

export default function Navigator(props: NavigatorProps){
    const slideCurrState: SlideState = {
        currentSlide: props.currentSlide,
        setCurrentSlide: props.setCurrentSlide,
        listLength: props.listLength
    }
    return (
        <div className="absolute z-4 h-full w-full px-4 flex justify-center items-center">
            <div className="h-max w-full flex justify-between z-4">
                <ArrowLogo key={"left_navigation"} direction="left" logo={props.logos["large-left-slider-white"]} slideCurrState={slideCurrState}></ArrowLogo>
                <ArrowLogo key={"right_navigation"} direction="right" logo={props.logos["large-right-slider-white"]} slideCurrState={slideCurrState}></ArrowLogo>
            </div>
            <div className="absolute inset-0 z-2 bg-linear-to-b from-transparent from-40% to-black to-100%"/>
        </div>
    )
}