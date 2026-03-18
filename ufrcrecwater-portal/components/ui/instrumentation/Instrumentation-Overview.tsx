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
        <div className="w-full flex justify-center items-center px-6 pt-6">
            <div className="w-19/20 flex flex-col justify-center items-center gap-6">
                <div className="inline-block">

                    {/* Title (defines width) */}
                    <div>
                        <h1 className="text-black text-4xl">
                            {PAGES.instrumentation.description}
                        </h1>
                        <hr className="mt-2 mb-6 border-gray-400" />
                    </div>

                    {/* Description forced to same width */}
                    <div className="flex mb-6">
                        <div className="w-0 grow">
                            <p className="text-lg font-normal">
                            A comprehensive set of environmental monitoring instruments was deployed at both the Ona Research and Education Center (Ona REC) and DeLuca Preserve to collect high-resolution data on hydrologic, soil, and atmospheric conditions. These included weather stations for measuring meteorological variables, soil moisture sensors (TEROS 12 and TEROS 54) for monitoring soil water content and potential, lysimeters for assessing subsurface drainage and nutrient leaching, and groundwater monitoring wells equipped with water level sensors to track groundwater fluctuations. In addition, flow meters and water quality sondes were used to monitor surface water dynamics and quality. All instruments were integrated with data loggers and telemetry systems to enable continuous recording and remote access to data, supporting detailed analysis of water balance and water quality processes.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex flex-col gap-2 pb-6">

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
                    </div>
                <div>
                    <h2 className="text-black text-4xl">Instruments</h2>
                    <hr className="mt-2 mb-6 border-gray-400" />
                </div>

                </div>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}