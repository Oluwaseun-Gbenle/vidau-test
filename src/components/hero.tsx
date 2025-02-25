"use client"
import React from "react"
import { Element } from "react-scroll"
import { PiLinkSimpleBold } from "react-icons/pi";
import Button from "./shared/button";
import Image from "next/image";
import { supportList } from "@/data";

const Hero = () => {
    const Icon = <div className="bg-[#F2F2F2] rounded-full p-[5px] border border-[#0D2440]">
        <Image
            src="/svg/arrow-right-round.svg"
            alt="arrow-right"
            height={30}
            width={30}
        />
    </div>
    return (
        <Element name="features" className="bg-[#4131f9]  text-white background-color">
            <div className="background-effect">
                <div className="flex flex-col w-[70%] mx-auto justify-center items-center h-screen text-center">
                    <div className="text-[60px] 2xl:text-[72px] xl:leading-[80px] font-medium">Product URL to Video AI Video Ads Generator</div>
                    <div className="text-[20px] 2xl:text-[24px] mt-2 text-grey95">Convert URL to Video Ads Online for Free! <br />
                        Turn your product URL into Engaging videos ads in minutes with VidAU AI URL to Video ad maker.Effortlessly create Amazon, Shopify and Etsy products URL to video.
                    </div>
                    <div className="mt-10 ps-10 pe-6 py-3 rounded-[58px] font-semibold bg-white w-[80%] mx-auto flex justify-between">
                        <div className="flex gap-4 items-center w-[70%]">
                            <PiLinkSimpleBold color={"#6366F1"} size={30} />
                            <input type="url"
                                className="placeholder:text-[rgba(48, 0, 60, 0.6)] focus:outline-none p-3 w-full text-magenta12 font-medium"
                                placeholder="Enter your product link to generate amazing video" />
                        </div>
                        <Button text={"Generate Video"} className="bg-indigo01 px-0 pe-2 ps-6 py-[4px]" icon={Icon} />
                    </div>

                    <div className="mt-6">
                        <div className="flex gap-2 items-center">
                            <div className="me-2">Supported Platforms:</div>
                            {supportList?.map((support, index) =>
                                <Image
                                    key={index}
                                    src={support}
                                    alt="arrow-right"
                                    height={30}
                                    width={30}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Hero