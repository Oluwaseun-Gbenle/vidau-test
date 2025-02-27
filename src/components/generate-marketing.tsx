"use client"
import React, { ElementType } from 'react'
import Heading from './shared/Heading'
import { generateMarketingList } from '@/data'
import { WhiteTryForFreeBtn } from './shared/try-for-free-btn'
interface IMarketing {
    title: string,
    icon: ElementType,
    text: string,
}
const GenerateMarketing = () => {
    return (
        <div className='sm:px-12'>
            <div className='bg-[#6437F5] sm:rounded-[32px] px-6 sm:px-16 py-16'>
                <Heading text={"Generate Marketing Video Ads from Product URL with VidAU AI"} className='text-white ' />
                <div className='grid md:grid-cols-[50%_50%] xl:grid-cols-6 gap-4 mt-12'>
                    {generateMarketingList?.map(({ title, icon: Icon, text }: IMarketing, index) => {
                                const colSpan = index < 3 ? 'xl:col-span-2' : 'xl:col-span-3';
                        return (
                            <div key={index} className={`w-full ${colSpan} bg-[#774ff6] rounded-[24px] px-6 pt-6 pb-6`}>
                                <div className='p-4 rounded-full mb-4 w-fit bg-[#8d6cf8]'>
                                    <Icon size={27} color={"white"} />
                                </div>
                                <div className='font-semibold text-xl sm:text-2xl'>{title}</div>
                                <div className=' mt-3 text-[rgb(237,240,255,0.8)] sm:text-lg font-normal leading-snug'>{text}</div>
                            </div>
                        );
                    })}
                    </div>
                <WhiteTryForFreeBtn />
            </div>
        </div>
    )
}

export default GenerateMarketing