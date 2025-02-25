"use client"
import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import Button from './shared/button'

const WhyChooseUs = () => {
    const whyChooseList = [
        {
            title: "Boundless Creative Ads", text: "VidAU's AI video script generator deeply understands your product, intelligently captures key highlights, and automatically generates personalized, viral-ready scripts for creative ads.",
            image: "/images/ps5.png",
          
        },
        {
            title: "Excellent Customization", text: "VidAU AI video editor offers an intuitive and versatile interface, making editing simpler and more efficient. Effortlessly personalize and customize your videos to perfectly align with your brand's marketing needs.",
            image: "/images/tennis-shoe.png",
        },
        {
            title: "Hyper-Realistic AI Avatars", text: "Elevate your brand with hyper-realistic, diverse AI avatars tailored for marketing. VidAU custom avatar designs enhance brand authenticity and boost audience engagement.",
            image: "/images/gadgets.png",
        },
        {
            title: "Marketing Globalization", text: "VidAU URL to Video features an AI voiceover generator that supports over 40 languages, catering to a global audience. Achieve seamless worldwide coverage and effortless marketing localization.",
            image: "/images/tennis-shoe.png",
           
        },
       
    ]
    return (
        <div className='bg-white px-5 sm:px-12 xl:px-16'>
            <div className='bg-[#6437F5] rounded-[32px] sm:px-16 py-20'>
                <Heading text={"Why Choose VidAU AI Product URL to Video?"} className='text-white' />
                <div className='md:grid grid-cols-2 gap-5 mt-12 w-full'>
                {whyChooseList?.map((item, index) =>
                    <div key={index} className={`bg-[#774ff6] rounded-[24px]  min-w-[500px] p-12 py-16 `}>
                        <div className='font-semibold text-4xl'>{item.title}</div>
                        <div className='text-xl mb-16 mt-2 text-indigo02'>{item.text}</div>
                        <Image
                            src={item.image}
                            alt="item-icon"
                            height={221}
                            width={221}
                        />
                    </div>
                )}
                </div>
                <Button text='Try VidAU Video Ad Maker for Free' className='text-indigo01'/>
            </div>
        </div >
    )
}

export default WhyChooseUs