"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import Slider from "react-slick"
import { trasformProductList } from '@/data'

const TransformProduct = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 0.5,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        cssEase: "linear",
        swipeToSlide: true,
        touchThreshold: 10,
        className: "overflow-hidden",
        containerClassName: "w-full max-w-full overflow-hidden",
    };
    return (
        <div className='px-5 sm:px-12 xl:px-16'>
            <div className='bg-[#6437F5] rounded-[32px] py-28'>
                <Heading text={"Transform Your Product URL to Video Ads like these!"} className='text-white ' />
                <div className='flex flex-wrap gap-6 mt-16 custom-slider'>
                    <Slider {...settings} >
                        {trasformProductList?.map((item, index) => (
                            <div key={index} className="px-2">
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={600}
                                    width={400}
                                    className="h-[600px] w-full rounded-[24px] object-cover"
                                />
                            </div>
                        ))}
                    </Slider>

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