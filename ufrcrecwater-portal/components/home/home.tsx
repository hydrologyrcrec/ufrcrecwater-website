"use client"

import { LogosList } from "@/data/home";
import Navigator from "./navigator";
import Background from "../ui/home/background";
import Category from "../ui/home/headline-category";
import Information from "./info";
import { mockSlides } from "@/data/home";
import { useUIStore } from "@/store/homeUIStore";
import { useEffect } from "react";
export default function Home(){
    const {slidesLength, currentSlide, data, setSlidesData, setSlidesLength, setCurrentSlide, left, right} = useUIStore();
    useEffect(() => {
        setSlidesData(mockSlides)
        setSlidesLength(mockSlides.length)
    }, [setSlidesData, setSlidesLength])
    
    useEffect(() => {
        if (slidesLength === 0) return
        const id = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slidesLength)
        }, 4000)
        return () => clearInterval(id)
    }, [currentSlide, slidesLength, setCurrentSlide])

    if (data.length === 0) return null
    return (
        <div className="relative w-10/12 h-10/12 shadow-gray-600 shadow-xl rounded-2xl overflow-hidden">
            <Category title={data[currentSlide].headline_type} ></Category>
            <Background id={data[currentSlide].slide_info.id} s3_url={mockSlides[currentSlide].slide_info.s3_url}></Background>
            <Navigator {...LogosList}></Navigator>
            <Information {...data[currentSlide]}></Information>
        </div>
    )
}