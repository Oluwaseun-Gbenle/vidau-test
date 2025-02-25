"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { howToChooseList } from '@/data'

const HowToCreateURL = () => {
    return (
        <div className='px-5 sm:px-12 pt-16 pb-16 xl:px-16 gradient-bg'>
            <Heading text={"How to Create Product URL to Video Ads with AI"} className='text-[#6437F5]' />
            <div className='flex gap-6 mt-12'>
                {howToChooseList?.map((item, index) =>
                    <div key={index} className={`w-full h-full bg-[rgb(255,255,255,0.72)] rounded-[24px] pt-8`}>
                        <div className='px-8 md:px-8'>
                            <div className='font-[150] text-3xl md:text-8xl text-[rgb(120,89,246,0.6)] mb-6'>{item.number}</div>
                            <div className='font-bold text-3xl md:text-2xl text-indigo01'>{item.title}</div>
                            <div className='text-lg md:text-xl mt-2 mb-8 text-mangenta1260'>{item.text} <br />{item.extaText}</div>
                        </div>
                        <div className={`flex ${index === 1 ? "justify-end" : index === 2 ? "justify-center px-8 pt-4" : ""}`}>
                            <Image src={item.image} alt="item-icon" height={481} width={561} />
                        </div>
                    </div>
                )}
            </div>
            <div className='flex justify-center mt-3'>
                <button
                    className={` px-4 py-3 rounded-[58px] bg-indigo01 mt-8 text-white font-medium text-xl`}
                >
                    <div className='flex items-center gap-4'>Try VidAU Video Ad Maker for<span className='font-semibold -ms-2'>Free</span></div>
                </button>
            </div>
        </div>
    )
}

export default HowToCreateURL