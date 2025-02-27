"use client"
import { tryitList } from '@/data';
import Image from 'next/image'
import React from 'react'
import Button from './shared/button';

const TryItNow = () => {

    return (
        <div className=' px-6 sm:px-12 pt-40 lg:pt-26 relative'>
            <div className="py-16">
                {tryitList?.map((item, index) =>
                    <div key={index} className={`rounded-[40px] py-10 gap-5 md:flex ${index === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center mt-8 px-6 lg:px-10`}
                        style={{ background: "linear-gradient(90deg, rgba(57, 79, 247, 0.08) 0%, rgba(113, 66, 247, 0.08) 100%)" }}>
                       <div className='flex justify-center md:block'>
                        <Image
                            src={item.image}
                            alt="item-icon"
                            height={566}
                            width={442}
                            className={` ${index === 1 && "md:me-10"}`}
                        />
                        </div>
                        <div className='md:w-[50%] mx-auto mt-12 md:mt-0'>
                            <div className='text-indigo01 text-center md:text-start text-xl sm:text-3xl font-bold w-[90%]'>{item.title}</div>
                            <div className='text-mangenta1260 text-center md:text-start text-sm sm:text-md my-4'>{item.text}
                                {item.extraText ? <div className='font-semibold'>VidAU is the best AI video ad generator—<span className='font-normal'>Definitely worth a try!</span></div>
                                    : <div className='mt-1'>Maximize product reach, increase exposure, boost visibility, and drive more sales.</div>}
                            </div>
                            <div className='flex justify-center md:block'>
                            <Button text={"Try it now"} className='bg-indigo01 mt-2' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TryItNow