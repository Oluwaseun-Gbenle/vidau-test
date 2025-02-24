"use client"
import React from "react"
import { Element } from "react-scroll"
import { PiLinkSimpleBold } from "react-icons/pi";
import Button from "./shared/button";
import Image from "next/image";

const Hero = () => {
    const supportList = ["/images/amazon.png.png", "/images/shopify.png.png", "/images/icon_etsy2x-1.png.png",
        "/images/icon_aliexpress2x-2.png.png", "/images/icon_tiktok_shop2x-1.png.png", "/images/icon_ebay2x-1.png.png",
        "/images/icon_google_play2x-1.png.png", "/images/icon_apple_store2x-1.png.png", "/images/icon_more2x-1.png.png"];
    const Icon = <div className="bg-[#F2F2F2] rounded-full p-[5px] border border-[#0D2440]">
        <Image
            src="/svg/arrow-right-round.svg"
            alt="arrow-right"
            height={30}
            width={30}
        />
    </div>
    return (
        <Element name="features" className="bg-[#4131f9] pt-28 text-white">
            <div className="flex flex-col w-[80%] mx-auto justify-center items-center h-[85vh] text-center">
                <div className="text-[72px] leading-[91px] font-medium">Product URL to Video AI Video Ads Generator</div>
                <div className="text-[24px] mt-6 text-grey95">Convert URL to Video Ads Online for Free! <br />
                    Turn your product URL into Engaging videos ads in minutes with VidAU AI URL to Video ad maker.Effortlessly create Amazon, Shopify and Etsy products URL to video.
                </div>
                <div className="mt-10 ps-10 pe-6 py-5 rounded-[58px] font-semibold bg-white w-full flex justify-between">
                    <div className="flex gap-4 items-center w-[70%]">
                        <PiLinkSimpleBold color={"#6366F1"} size={30} />
                        <input type="url" className="placeholder:text-[#30003C99] focus:outline-none p-3 w-full text-magenta12 font-medium" placeholder="Enter your product link to generate amazing video" />
                    </div>
                    <Button text={"Generate Video"} className="bg-indigo01 px-0 pe-2 ps-6 py-1" icon={Icon} />
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
        </Element>
    )
}

export default Hero