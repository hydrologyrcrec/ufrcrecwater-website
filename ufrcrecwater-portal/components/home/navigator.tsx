import { Logos } from "@/types/home";
import ArrowLogo from "../ui/home/arrow-logo";

export default function Navigator(props: Logos){
    return (
        <div className="absolute z-4 h-full w-full px-4 flex justify-center items-center">
            <div className="h-max w-full flex justify-between z-4">
                <ArrowLogo key="left_navigation" direction="left" logo={props["large-left-slider-white"]}></ArrowLogo>
                <ArrowLogo key="right_navigation" direction="right" logo={props["large-right-slider-white"]}></ArrowLogo>
            </div>
            <div className="absolute inset-0 z-2 bg-linear-to-b from-transparent from-40% to-black to-100%"/>
        </div>
    )
}