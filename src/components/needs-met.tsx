"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { needsMetList } from '@/data'
import { TryForFreeBtn } from './shared/try-for-free-btn'

const NeedsMet = () => {

    return (
        <div className='bg-transparent px-6 sm:px-12 pt-36 pb-24 gradient-bg'>
            <Heading text={"Fully Meets Your Commercial Advertising and Marketing Needs"} className='text-[#6437F5]' />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:px-12'>
                {needsMetList?.map((item, index) =>
                    <div key={index} className={`w-full h-full bg-[rgb(255,255,255,0.72)] rounded-[24px] pt-10 flex flex-col`}>
                        <div className='px-8 md:px-8 flex-grow'>
                            <div className='font-bold text-xl text-indigo01 mb-6 uppercase'>{item.heading}</div>
                            <div className='font-bold md:text-3xl text-indigo01 xl:w-[80%] '>{item.title}</div>
                            <div className='text-lg md:text-xl mt-2 mb-8 text-mangenta1260'>{item.text} </div>
                        </div>
                        <div className={`mt-auto`}>
                            <Image src={item.image} alt="item-icon" height={426} width={400} className='rounded-b-[24px]'/>
                        </div>
                    </div>
                )}
            </div>
         <TryForFreeBtn/>
        </div>
    )
}

export default NeedsMet