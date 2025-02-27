"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import Slider from "react-slick"
import { trasformProductList } from '@/data'
import { WhiteTryForFreeBtn } from './shared/try-for-free-btn'

const TransformProduct = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 0.5,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        cssEase: "linear",
        swipeToSlide: true,
        touchThreshold: 10,
        className: "overflow-hidden",
        containerClassName: "w-full max-w-full overflow-hidden",
        responsive: [
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 0.3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0.2,
                }
            }
        ],
    };
    return (
        <div className='sm:px-12'>
            <div className='bg-[#6437F5] sm:rounded-[32px] py-16'>
                <Heading text={"Transform Your Product URL to Video Ads like these!"} className='text-white w-[80%] mx-auto' />
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
               <WhiteTryForFreeBtn/>
            </div>
        </div>
    )
}

export default TransformProduct