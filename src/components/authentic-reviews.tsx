"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { reviewDetails1, reviewDetails2, reviewDetails3 } from '@/data'

const AuthenticReviews = () => {
  
    return (
        <div className='bg-transparent px-5 sm:px-12 pt-36 pb-24 xl:px-16 '>
            <Heading text={"Authentic User Reviews of VidAU"} className='text-black' />
            <div className='flex gap-6 mt-12 gradient-bg'>
                <div className='mt-16'>
                    {reviewDetails1?.map((item, index) =>
                        <div key={index} className={`w-full bg-[#ededed]  rounded-[24px] mt-6 py-6`}>
                            <div className='px-8 md:px-8 flex flex-col items-center justify-center'>
                                <div className='font-bold text-3xl text-[#3459FF] uppercase'>{item.heading}</div>
                                <div className='text-xs font-[300] text-azure50'>{item.title}</div>
                                <div className='text-sm my-2 text-black text-center'>{item.text} </div>
                            </div>
                            <div className={`flex gap-4 justify-center items-center`}>
                                <Image src={item.image} alt="item-icon" height={58} width={58} className='rounded-full' />
                                <div>
                                    <div className='text-black font-semibold'>{item.name}</div>
                                    <div className='text-black text-sm'>{item.profession}</div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4 gap-2'>
                                {Array.from({ length: 5 }, (_, i) =>
                                    < FaStar key={i} color={"#F59E0B"} size={24} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className=''>
                    {reviewDetails2?.map((item, index) =>
                        <div key={index} className={`w-full bg-[#ededed] rounded-[24px] mt-6 py-6`}>
                            <div className='px-8 md:px-8 flex flex-col items-center justify-center'>
                                <div className='font-bold text-3xl text-[#3459FF] uppercase'>{item.heading}</div>
                                <div className='text-xs font-[300] text-azure50'>{item.title}</div>
                                <div className='text-sm my-2 text-black text-center'>{item.text} </div>
                            </div>
                            <div className={`flex gap-4 justify-center items-center`}>
                                <Image src={item.image} alt="item-icon" height={58} width={58} className='rounded-full' />
                                <div>
                                    <div className='text-black font-semibold'>{item.name}</div>
                                    <div className='text-black text-sm'>{item.profession}</div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4 gap-2'>
                                {Array.from({ length: 5 }, (_, i) =>
                                    < FaStar key={i} color={"#F59E0B"} size={24} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className='mt-16'>
                    {reviewDetails3?.map((item, index) =>
                        <div key={index} className={`w-full bg-[#ededed] rounded-[24px] py-6 mt-6`}>
                            <div className='px-8 md:px-8 flex flex-col items-center justify-center'>
                                <div className='font-bold text-3xl text-[#3459FF] uppercase'>{item.heading}</div>
                                <div className='text-xs font-[300] text-azure50'>{item.title}</div>
                                <div className='text-sm my-2 text-black text-center'>{item.text} </div>
                            </div>
                            <div className={`flex gap-4 justify-center items-center`}>
                                <Image src={item.image} alt="item-icon" height={58} width={58} className='rounded-full' />
                                <div>
                                    <div className='text-black font-semibold'>{item.name}</div>
                                    <div className='text-black text-sm'>{item.profession}</div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4 gap-2'>
                                {Array.from({ length: 5 }, (_, i) =>
                                    < FaStar key={i} color={"#F59E0B"} size={24} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
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

export default AuthenticReviews