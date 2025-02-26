"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import Slider from "react-slick"

const OtherFeatures = () => {
    const trasformProductList = [
        {
            image: "/images/ai-explanation.png",
        },
        {
            image: "/images/ai-woman.png",
        },
        {
            image: "/images/ai-holding-package.png",
        },
        {
            image: "/images/ai-brandname.png",

        },
        {
            image: "/images/ai-man.png",

        },

    ];
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
                <Heading text={"Check Out Other AI Features"} className='text-white ' />
                <div className='text-white font-medium text-lg mt-6 text-center sm:w-[80%] mx-auto'>Explore a range of innovative AI tools designed to drive efficiency, spark creativity, and achieve optimal results for your marketing or advertising campaigns.</div>
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