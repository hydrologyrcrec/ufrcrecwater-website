'use client'

import { PAGES } from "@/config/navigation"
import Image from "next/image"
import { useState } from "react"

export default function InstrumentOverview(){
    const images = ['/instrumentation/map-overview.jpg', '/instrumentation/ona-rec-map.jpg', '/instrumentation/deluca-preserve-map.jpg']
    const [slide, setSlide] = useState(0);
    function changeSlide(direction: "left" | "right"){
        if(direction === "left"){
            setSlide(slide - 1 < 0 ? images.length - 1 : slide - 1)
        }else{
            setSlide((slide + 1) % images.length)
        }
    }
    return (
        <>
        <div className="w-full flex justify-center items-center px-6">
            <div className="w-19/20 flex flex-col justify-center items-center gap-6">
                <div className="inline-block w-full">

                    {/* Title (defines width) */}
                    <div>
                        <h1 className="text-black text-4xl">
                            {PAGES.facilities.description}
                        </h1>
                        <hr className="mt-2 mb-6 border-red-300/50" />
                    </div>

                    {/* Description forced to same width */}
                    <div className="flex mb-6">
                        <div className="w-0 grow">
                            <p className="text-lg font-normal">
                            A comprehensive suite of field instruments has been deployed across research sites at the Range Cattle Research and Education Center (RCREC) and DeLuca Preserve to collect high-resolution data on hydrological, soil, forage, and atmospheric conditions. This network includes weather stations for measuring meteorological variables, soil moisture sensors for monitoring soil water content and potential, lysimeters for assessing subsurface drainage and nutrient leaching, and groundwater monitoring well equipped with water level sensors to track groundwater fluctuations. Additionally, flow meters and water quality sondes monitor surface water dynamics and quality. All instruments are integrated with data loggers and telemetry systems, to enable continuous recording and remote access supporting detailed analyses of water balance and water quality processes. Furthermore, the Hydrology laboratory at RCREC is equipped to conduct necessary analyses of collected soil, water and forage samples.
                            </p>
                        </div>
                    </div>

                    {/* <div className="relative flex flex-col gap-2 pb-6">

                        <div className="flex">
                            <Image
                                src={images[slide]}
                                alt="Information Map"
                                width={700}
                                height={700}
                                className="w-0 grow object-cover"
                            />
                        </div>

                        <div className="absolute bottom-10 right-5 z-1">
                            {slide+1 + "/" +images.length}
                        </div>

                        <div className="absolute z-4 top-0 h-full w-full px-4 flex justify-center items-center">
                            <div className="h-max w-full flex justify-between z-4">
                                <Image 
                                    src="/home/large-left-slider.png" 
                                    alt="left-arrow" 
                                    height={40} 
                                    width={40} 
                                    className="cursor-pointer" 
                                    onClick={() => changeSlide("left")}>
                                </Image>
                                <Image
                                    src="/home/large-right-slider.png"
                                    alt="right-arrow"
                                    height={40}
                                    width={40}
                                    className="cursor-pointer"
                                    onClick={() => changeSlide("right")}
                                ></Image>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}