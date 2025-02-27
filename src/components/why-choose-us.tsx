"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { whyChooseList } from '@/data'
import { WhiteTryForFreeBtn } from './shared/try-for-free-btn'

const WhyChooseUs = () => {
    return (
        <div className='sm:px-12 py-16'>
            <div className='bg-[#6437F5] sm:rounded-[32px] px-6 sm:px-16 py-16'>
                <Heading text={"Why Choose VidAU AI Product URL to Video?"} className='text-white' />
                <div className='lg:flex flex-wrap gap-6 mt-12'>
                    {whyChooseList?.map((item, index) => {
                        const width = (index === 1 || index === 2) ? 'lg:w-[51%]' : 'lg:w-[45%]';
                        return (
                            <div key={index} className={`w-full ${width}  bg-[#774ff6] rounded-[24px] p-8 mt-4 lg:mt-0`}>
                                <div className='font-semibold text-xl sm:text-3xl'>{item.title}</div>
                                <div className='sm:text-xl mt-5 mb-8 text-[rgb(237,240,255,0.6)]'>{item.text}</div>
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={150}
                                    width={150}
                                    className='sm:w-[150px] w-[100px]'
                                />
                            </div>
                        );
                    })}
                </div>
                <WhiteTryForFreeBtn/>
            </div>
        </div>
    )
}

export default WhyChooseUs