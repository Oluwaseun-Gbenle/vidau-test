"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { generateMarketingList } from '@/data'

const GenerateMarketing = () => {
    return (
        <div className='px-5 sm:px-12 xl:px-16'>
            <div className='bg-[#6437F5] rounded-[32px] sm:px-16 py-28'>
                <Heading text={"Generate Marketing Video Ads from Product URL with VidAU AI"} className='text-white ' />
                <div className='flex flex-wrap gap-4 mt-12'>
                    {generateMarketingList?.map((item, index) => {
                        const width = index < 2  ? 'md:w-[30%]' : index === 2 ? 'md:w-[37%]' : 'md:w-[49%]';
                        return (
                            <div key={index} className={`w-full ${width} bg-[#774ff6] rounded-[24px] px-6 pt-6 pb-6`}>
                                 <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={24}
                                    width={24}
                                />
                                <div className='font-semibold text-2xl'>{item.title}</div>
                                <div className=' mt-3 text-[rgb(237,240,255,0.8)] text-lg font-normal leading-snug'>{item.text}</div>
                            </div>
                        );
                    })}
                </div>
                <div className='flex justify-center mt-3'>
                    <button
                        className={` px-4 py-3 rounded-[58px] text-indigo01 mt-8 bg-white font-medium text-xl`}
                    >
                        <div className='flex items-center gap-4'>Try VidAU Video Ad Maker for<span className='font-semibold -ms-2'>Free</span></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GenerateMarketing