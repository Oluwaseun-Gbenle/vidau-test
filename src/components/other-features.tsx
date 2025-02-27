"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import Slider from "react-slick"
import { tools1, tools2 } from '@/data'

const OtherFeatures = () => {
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
    const rtlSettings = { ...settings, rtl: true };

    return (
        <div className=''>
            <div className='bg-[#6437F5] py-16'>
                <Heading text={"Check Out Other AI Features"} className='text-white px-6' />
                <div className='text-white font-medium sm:text-lg mt-2 sm:mt-0 text-center w-[70%] sm:w-[80%] mx-auto'>Explore a range of innovative AI tools designed to drive efficiency, spark creativity, and achieve optimal results for your marketing or advertising campaigns.</div>
                <div className='flex flex-wrap mt-16 custom-slider'>
                    <Slider {...settings} >
                        {tools1?.map((item, index) => (
                            <div key={index} className="px-2  ">
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={230}
                                    width={402}
                                    className="h-[230px] w-full rounded-t-[16px] object-cover"
                                />
                                <div className="text-center rounded-b-[16px] bg-black p-4 font-semibold text-white text-xl">{item.title}</div>
                            </div>
                        ))}
                    </Slider>

                    <Slider {...rtlSettings} >
                        {tools2?.map((item, index) => (
                            <div key={index} className="px-2 mt-4  ">
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={230}
                                    width={402}
                                    className="h-[230px] w-full rounded-t-[16px] object-cover"
                                />
                                <div className=" text-center rounded-b-[16px] bg-black p-4 font-semibold text-white text-xl">{item.title}</div>
                            </div>
                        ))}
                    </Slider>

                </div>
                <div className='flex justify-center mt-3'>
                    <button
                        className={` px-4 py-3 rounded-[58px] text-indigo01 mt-8 bg-white font-medium`}
                    >
                        <div className='flex items-center gap-4'>View All AI Tools</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OtherFeatures