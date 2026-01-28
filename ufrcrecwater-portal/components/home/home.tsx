"use client"

import { LogosList } from "@/data/home";
import Navigator from "./navigator";
import Background from "../ui/home/background";
import Category from "../ui/home/headline-category";
import Information from "./info";
import { mockSlides } from "@/data/home";
import { useState } from "react";
export default function Home(){
    const apiResponse = mockSlides;
    const apiResponseLength = apiResponse.length;
    const [currentSlide, setCurrentSlide] = useState(0);
    setTimeout(() => {
        setCurrentSlide((currentSlide + 1 )% apiResponseLength);
    }, 4000);
    return (
        <div className="relative w-10/12 h-10/12 shadow-gray-600 shadow-xl rounded-2xl overflow-hidden">
            <Category title={mockSlides[currentSlide].headline_type} ></Category>
            <Background id={mockSlides[currentSlide].slide_info.id} s3_url={mockSlides[currentSlide].slide_info.s3_url}></Background>
            <Navigator logos={LogosList} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} listLength={apiResponseLength}></Navigator>
            <Information {...apiResponse[currentSlide]}></Information>
        </div>
    )
}