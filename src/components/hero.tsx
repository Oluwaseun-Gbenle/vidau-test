"use client"
import React from "react"
import { Element } from "react-scroll"
import { PiLinkSimpleBold } from "react-icons/pi";
import Button from "./shared/button";
import Image from "next/image";
import { shopingLinkList, supportList } from "@/data";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
    const handleOpenLink = (link: string) => {
        window.open(link, "_blank");
    };

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
                <div className="flex flex-col w-[65%] mx-auto justify-center items-center h-screen text-center">
                    <div className="text-[56px] xl:leading-[80px] font-medium">Product URL to Video AI Video Ads Generator</div>
                    <div className="text-[20px] 2xl:text-[24px] mt-2 text-grey95">Convert URL to Video Ads Online for Free! <br />
                        Turn your product URL into Engaging videos ads in minutes with VidAU AI URL to Video ad maker.Effortlessly create Amazon, Shopify and Etsy products URL to video.
                    </div>
                    <div className="mt-10 ps-10 pe-3 py-3 rounded-[58px] font-semibold bg-white w-[80%] mx-auto flex justify-between">
                        <div className="flex gap-4 items-center w-[70%]">
                            <PiLinkSimpleBold color={"#6366F1"} size={30} />
                            <input type="url"
                                className="placeholder:text-[rgb(48, 0, 60, 0.6)] focus:outline-none p-3 lg:w-[90%] xl:w-full text-magenta12 font-medium"
                                placeholder="Enter your product link to generate amazing video" />
                        </div>
                        <Button text={"Generate Video"} className="bg-indigo01 ms-3 px-0 pe-2 ps-6 py-[4px]" icon={Icon} />
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
            <div className="flex gap-8 justify-center absolute -bottom-20 left-0 right-0">
                {shopingLinkList?.map((item, index) =>
                    <div key={index}
                        className="rounded-[24px] bg-white justify-between flex gap-5  items-center py-3 px-6  w-full max-w-[400px]"
                        style={{ boxShadow: "0px 4px 52px 0px rgba(106, 59, 255, 0.4)" }}>
                        <Image
                            src={item.image}
                            alt="shopping-item"
                            height={156}
                            width={150}
                            className=''
                        />
                        <div className=''>
                            <div className='text-grey27 text-wrap line-clamp-2'>{item.details}</div>
                            <div onClick={() => handleOpenLink(item.link)} className={`max-w-[220px] cursor-pointer text-sm ps-4 pe-[6px] py-2 flex justify-between items-center gap-4 mt-4 rounded-[58px] ${index > 1 ? "bg-[#0063D129]" : index > 0 ? "bg-[#FBDED7]" : "bg-[#FBF1DB]"} font-semibold`} >
                                <Image
                                    src={item.icon}
                                    alt="item-icon"
                                    height={26}
                                    width={26}
                                />
                                <div className="text-black text-xs truncate block overflow-hidden text-ellipsis"
                                >{item.link}</div>
                                <div className={`${index > 1 ? "bg-[#0365D1]" : index > 0 ? "bg-[#E62E04]" : "bg-[#E49B00]"} rounded-full p-[5px]`}>
                                    <FiArrowUpRight color={"white"} size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Element>
    )
}

export default Hero