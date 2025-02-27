"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { howToChooseList } from '@/data'
import { TryForFreeBtn } from './shared/try-for-free-btn'

const HowToCreateURL = () => {
    return (
        <div className='px-6 sm:px-12 pt-24 pb-24  gradient-bg'>
            <Heading text={"How to Create Product URL to Video Ads with AI"} className='text-[#6437F5]' />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:px-12'>
                {howToChooseList?.map((item, index) =>
                    <div key={index} className={`w-full h-full bg-[rgb(255,255,255,0.72)] rounded-[24px] pt-8 flex flex-col`}>
                        <div className='px-8 md:px-8 flex-grow'>
                            <div className='font-[150] text-8xl text-[rgb(120,89,246,0.6)] mb-6'>{item.number}</div>
                            <div className='font-bold text-3xl md:text-2xl text-indigo01'>{item.title}</div>
                            <div className='text-lg md:text-xl mt-2 mb-8 text-mangenta1260'>{item.text} <br />{item.extaText}</div>
                        </div>
                        <div className={`mt-auto ${index === 1 ? "justify-end" : index === 2 ? "justify-center px-8" : ""}`}>
                            <Image src={item.image} alt="item-icon" height={481} width={561} className='rounded-b-[24px]' />
                        </div>
                    </div>
                )}
            </div>
          <TryForFreeBtn/>
        </div>
    )
}

export default HowToCreateURL