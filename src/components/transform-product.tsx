"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { generateMarketingList } from '@/data'

const TransformProduct = () => {
    return (
        <div className='px-5 sm:px-12 xl:px-16'>
            <div className='bg-[#6437F5] rounded-[32px] py-28'>
                <Heading text={"Transform Your Product URL to Video Ads like these!"} className='text-white ' />
                <div className='flex flex-wrap gap-6 mt-12'>
                    {generateMarketingList?.map((item, index) => {
                        return (
                            <div key={index} className={` bg-[#774ff6] rounded-[24px] px-6 pt-6 pb-6`}>
                                 <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={224}
                                    width={224}
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

export default TransformProduct