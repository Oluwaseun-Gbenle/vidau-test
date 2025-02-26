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
    };
    return (
        <div className='px-5 sm:px-12 xl:px-16'>
            <div className='bg-[#6437F5] rounded-[32px] py-12'>
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