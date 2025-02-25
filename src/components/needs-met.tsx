"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { needsMetList } from '@/data'

const NeedsMet = () => {

    return (
        <div className='bg-transparent px-5 sm:px-12 pt-36 pb-24 xl:px-16 gradient-bg'>
            <Heading text={"Fully Meets Your Commercial Advertising and Marketing Needs"} className='text-[#6437F5]' />
            <div className='flex gap-6 mt-12'>
                {needsMetList?.map((item, index) =>
                    <div key={index} className={`w-full h-full bg-[rgb(255,255,255,0.72)] rounded-[24px] pt-10`}>
                        <div className='px-8 md:px-8'>
                            <div className='font-bold text-xl text-indigo01 mb-6 uppercase'>{item.heading}</div>
                            <div className='font-bold md:text-3xl text-indigo01 xl:w-[80%] '>{item.title}</div>
                            <div className='text-lg md:text-xl mt-2 mb-8 text-mangenta1260'>{item.text} </div>
                        </div>
                        <div className={`flex ${index === 2 ? "xl:pt-[50px]" : ""}`}>
                            <Image src={item.image} alt="item-icon" height={426} width={400} />
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

export default NeedsMet