"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    return (
        <div>
            <div className='py-16 px-6 sm:px-16  grid md:grid-cols-[1.3fr_1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8  text-[#4B4757]'>
                <div className='space-y-4'>
                    <div className=''>
                        <Image
                            src="/images/logo2.png"
                            alt="logo"
                            width={115}
                            height={39}
                        />
                        <div className='mt-4'>VidAU - AI Video Ads for you.
                            Start successful video promo using VidAU AI Video Generator</div>
                    </div>
                    <div className="relative">
                        <button
                            className="flex items-center gap-2 bg-[rgba(109,141,255,0.07)] text-black font-semibold px-4 py-2 rounded-lg"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {language}
                            <IoMdArrowDropdown color={"#222222"} size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
 />
                        </button>
                        {isOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg">
                                <ul>
                                    <li onClick={()=>setLanguage("English")} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">English</li>
                                    <li  onClick={()=>setLanguage("Spanish")}  className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Spanish</li>
                                    <li  onClick={()=>setLanguage("French")}  className="px-4 py-2 hover:bg-gray-200 cursor-pointer">French</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='space-y-3'>
                        <div className='flex items-center gap-4'>
                            <FaFacebook size={24} color={"#73869F"} />
                            <FaInstagram size={24} color={"#73869F"} />
                            <FaYoutube size={24} color={"#73869F"} />
                            <FaXTwitter size={24} color={"#73869F"} />
                            <FaTiktok size={24} color={"#73869F"} />
                            <FaLinkedin size={24} color={"#73869F"} />
                        </div>
                        <div className='mt-2'>Copyright © 2024 VidAU.ai .All rights reserved.</div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='font-semibold text-base text-[#3459FF]'>ToolBox</p>
                    <p className=' font-medium'>Product URL to Video</p>
                    <p className=' font-medium'>AI Avatars</p>
                    <p className=' font-medium'>Image to Video AI</p>
                    <p className=' font-medium'>AI Text to Audio/TTS</p>
                    <p className=' font-medium'>Video Subtitle Remover</p>
                    <p className=' font-medium'>AI Video Translate</p>
                    <p className=' font-medium'>AI Video Subtitle Translator</p>
                    <p className=' font-medium'>View All AI Tools</p>
                </div>
                <div className='space-y-3'>
                    <p className='font-semibold text-base text-[#3459FF]'>Quick Links</p>
                    <p className=' font-medium'>Pricing</p>
                    <p className=' font-medium'>Video Templates Center</p>
                    <p className=' font-medium'>VidAU User Guide</p>
                    <p className=' font-medium'>How to Make an AI UGC Video Us</p>
                    <p className=' font-medium'>How to Make an AI UGC Video</p>
                    <p className=' font-medium'>Video Tips & Tricks</p>
                    <p className=' font-medium'>Learning Center</p>
                    <p className=' font-medium'>Partners</p>
                    <p className=' font-medium'>Affiliate Program</p>
                    <p className=' font-medium'>API</p>
                </div>

                <div className='space-y-3'>
                    <p className='font-semibold text-base text-[#3459FF]'>About Us</p>
                    <p className=' font-medium'>Privacy Policy</p>
                    <p className=' font-medium'>Terms of Service</p>
                    <p className=' font-medium'>Refund Policy Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer