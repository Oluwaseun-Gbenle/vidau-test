"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { whyChooseList } from '@/data'

const WhyChooseUs = () => {
    return (
        <div className=' px-5 sm:px-12 xl:px-16 py-16'>
            <div className='bg-[#6437F5] rounded-[32px] sm:px-16 py-28'>
                <Heading text={"Why Choose VidAU AI Product URL to Video?"} className='text-white' />
                <div className='flex flex-wrap gap-6 mt-12'>
                    {whyChooseList?.map((item, index) => {
                        const width = (index === 1 || index === 2) ? 'md:w-[51%]' : 'md:w-[45%]';
                        return (
                            <div key={index} className={`w-full ${width} bg-[#774ff6] rounded-[24px] p-8 md:p-12`}>
                                <div className='font-semibold text-3xl md:text-3xl'>{item.title}</div>
                                <div className='text-lg md:text-xl mt-5 mb-8 text-[rgb(237,240,255,0.6)]'>{item.text}</div>
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={150}
                                    width={150}
                                />
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

export default WhyChooseUs