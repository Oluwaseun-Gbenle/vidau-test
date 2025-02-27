import React from 'react'
import Heading from './shared/Heading'
import Image from 'next/image'
import { articles } from '@/data'

const LearnMore = () => {

    return (
        <div className='bg-transparent px-6 sm:px-12 pt-36 pb-24  '>
            <Heading text={"Learn more about Product URL to Video"} className='text-[#6437F5]' />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-8">
                {articles.map((article, index) => (
                    <div key={index} className="">
                        <Image src={article.image} alt={article.title} width={371} height={226} className="w-full h-48 object-cover rounded-[20px] border border-mangenta1260" />
                        <div className="p-4">
                            <h3 className="text-lg text-gray27">{article.title}</h3>
                            <p className="text-[#1E293C] text-sm font-medium mt-4">{article.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LearnMore