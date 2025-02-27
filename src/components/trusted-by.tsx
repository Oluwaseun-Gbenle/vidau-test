"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import { trusteeList } from '@/data'

const TrustedBy = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 0.5,
        autoplay: true,
        autoplaySpeed: 800,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        cssEase: "linear",
        swipeToSlide: true,
        touchThreshold: 10,
        className: "overflow-hidden",
        containerClassName: "w-full max-w-full overflow-hidden",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 0.3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 0.2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 0.2,
                }
            }
        ],
    };
    return (
        <div className='sm:px-12 xl:px-16'>
            <div className='bg-[#6437F5] sm:rounded-[32px] py-10'>
                <div className='flex flex-wrap gap-6 custom-slider'>
                    <Slider {...settings} >
                        {trusteeList?.map((item, index) => (
                            <div key={index} className="px-2">
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={58}
                                    width={145}
                                />
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default TrustedBy