"use client"

import { ArrowNavigatorProps, Icon } from "@/types/home";
import Image from "next/image";

export default function ArrowLogo(props: ArrowNavigatorProps){
    function changeSlide(direction: "left" | "right"){
        if(direction === "left"){
            if(props.slideCurrState.currentSlide === 0){
                props.slideCurrState.setCurrentSlide(props.slideCurrState.listLength - 1)
            } else {
                props.slideCurrState.setCurrentSlide(props.slideCurrState.currentSlide - 1)
            }
        }else{
            props.slideCurrState.setCurrentSlide((props.slideCurrState.currentSlide + 1)% props.slideCurrState.listLength)
        }
    }
    return (
        <Image 
        src={props.logo.src} 
        alt={props.logo.alt} 
        height={40} 
        width={40} 
        className="cursor-pointer" 
        onClick={() => changeSlide(props.direction)}>
        </Image>
    )
}