"use client"
import { shopingLinkList, tryitList } from '@/data';
import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import Button from './shared/button';

const TryItNow = () => {
    const handleOpenLink = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <div className=' px-5 sm:px-12 xl:px-16 pt-20 relative'>
            <div className="flex gap-8 justify-center absolute -top-20 left-0 right-0">
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
                            <div onClick={() => handleOpenLink(item.link)} className={`max-w-[220px] cursor-pointer text-sm ps-4 pe-[6px] py-2 flex justify-between items-center gap-4 mt-4 rounded-[58px] ${item.linkBgColor} font-semibold`} >
                                <Image
                                    src={item.icon}
                                    alt="item-icon"
                                    height={26}
                                    width={26}
                                />
                                <div className="text-black text-xs truncate block overflow-hidden text-ellipsis"
                                >{item.link}</div>
                                <div className={`${item.buttonBgColor} rounded-full p-[5px]`}>
                                    <FiArrowUpRight color={"white"} size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="py-16">
                {tryitList?.map((item, index) =>
                    <div key={index} className={`rounded-[40px] h-[450px] sm:flex ${index=== 1 ? "md:flex-row-reverse": "md:flex-row"} items-center justify-center mt-8 px-10`}
                        style={{ background: "linear-gradient(90deg, rgba(57, 79, 247, 0.08) 0%, rgba(113, 66, 247, 0.08) 100%)" }}>
                        <Image
                            src={item.image}
                            alt="item-icon"
                            height={566}
                            width={442}
                            className={index=== 1 ? "md:me-10": ""}
                        />
                        <div className='w-[50%] mx-auto'>
                            <div className='text-indigo01 text-3xl font-bold w-[90%]'>{item.title}</div>
                            <div className='text-mangenta1260 text-lg my-4'>{item.text}
                                {item.extraText ? <div className='font-semibold'>VidAU is the best AI video ad generator—<span className='font-normal'>Definitely worth a try!</span></div>
                                    : <div className='mt-1'>Maximize product reach, increase exposure, boost visibility, and drive more sales.</div>}
                            </div>
                            <Button text={"Try it now"} className='bg-indigo01' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TryItNow