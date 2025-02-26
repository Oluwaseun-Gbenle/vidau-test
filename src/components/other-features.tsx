"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import Slider from "react-slick"

const OtherFeatures = () => {
    const tools1 = [
        { title: "Video Downloader", image: "/video-downloader.png" },
        { title: "YouTube to MP3", image: "/youtube-mp3.png" },
        { title: "Facebook Video Downloader", image: "/facebook-downloader.png" },
        { title: "AI Video Generator", image: "/ai-generator.png" },
    ]
    const tools2 = [
        { title: "Watermark Remover", image: "/watermark-remover.png" },
        { title: "Subtitles Remover", image: "/subtitles-remover.png" },
        { title: "Subtitles Translator", image: "/subtitles-translator.png" },
        { title: "Instagram Video Downloader", image: "/instagram-downloader.png" },
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
                <div className='flex flex-wrap mt-16 custom-slider'>
                    <Slider {...settings} >
                        {tools1?.map((item, index) => (
                            <div key={index} className="px-2 rounded-[16px] bg-black p-4 overflow-hidden ">
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={502}
                                    width={304}
                                />
                                <div className="text-center mt-2 font-semibold text-white text-xl">{item.title}</div>
                            </div>
                        ))}
                    </Slider>

                    <Slider {...settings} >
                        {tools2?.map((item, index) => (
                            <div key={index} className="px-2 rounded-[16px] bg-black p-4 overflow-hidden ">
                                <Image
                                    src={item.image}
                                    alt="item-icon"
                                    height={502}
                                    width={304}
                                    className="h-[502px] w-full rounded-[24px] object-cover"
                                />
                                  <div className="text-center mt-2 font-semibold text-white text-xl">{item.title}</div>
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