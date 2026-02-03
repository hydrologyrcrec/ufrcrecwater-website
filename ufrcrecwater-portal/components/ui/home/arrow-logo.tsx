"use client"

import { useUIStore } from "@/store/homeUIStore";
import { ArrowNavigatorProps, Icon } from "@/types/home";
import Image from "next/image";

export default function ArrowLogo(props: ArrowNavigatorProps){
    const {slidesLength, currentSlide, setCurrentSlide, left} = useUIStore();
    function changeSlide(direction: "left" | "right"){
        if(direction === "left"){
            currentSlide === 0 ? setCurrentSlide(slidesLength - 1) : left()
        }else{
            setCurrentSlide((currentSlide + 1) % slidesLength)
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