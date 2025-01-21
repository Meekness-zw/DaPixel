'use client';
import React, { useState, useEffect } from 'react';
import wave from './../../../public/Wave.svg';
import Image from 'next/image';
import Blog from '../Components/Blog';
import { FaAngleRight, FaSpinner } from 'react-icons/fa';
import market from './../../../public/Marketing 1.svg';

function Page() { // Capitalized to comply with React component naming conventions
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setShowContent(true); // Trigger content to slide in
        }, 2000); // Adjust the time as needed (e.g., 2 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                // Loading Screen
                <div className="flex items-center justify-center h-screen bg-white">
                    <FaSpinner className="text-4xl text-[#F9BC6E] animate-spin" />
                </div>
            ) : (
                // Content with Tailwind slide-in-from-top animation
                <div
                    className={`transition-transform duration-500 ease-out ${
                        showContent ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
                >
                    <div className="p-20 md:mt-20 pb-0">
                        <h1 className='text-4xl md:text-6xl font-bold xl:w-[85%]'>DaPixel Blog</h1>
                        <p className='font-medium pt-3 text-[25px] text-[#F9BC6E]'>Digital Marketing Articles</p>
                    </div>
                    <Image src={wave} alt='img' />
                    <div className="flex justify-center items-center flex-col">
                        <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:w-[90%]">
                            {[...Array(9)].map((_, index) => (
                                <Blog 
                                    key={index} 
                                    title={`Top 5 SaaS Businesses – August 2021`} 
                                    content={`Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS`} 
                                />
                            ))}
                        </div>
                        <div className="mb-10">
                            <ul className='flex gap-3 font-semibold'>
                                <li className='hover:text-[#F9BC6E] cursor-pointer'>Previous</li>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <li key={num} className='hover:text-[#F9BC6E] cursor-pointer'>{num}</li>
                                ))}
                                <li className='hover:text-[#F9BC6E] cursor-pointer'>Next</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-around lg:p-20 lg:mt-20">
                        <div className="p-10">
                            <h1 className='font-bold text-4xl mb-10'>Why DaPixel?</h1>
                            <p className='text-[#1f1f1f] font-thin lg:w-[70%]'>
                                To get customers, it is imperative to be seen by the mass. Every successful company is unique and needs contrasting digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.
                            </p>
                            <button className='bg-[#F9BC6E] p-3 flex items-center justify-center pl-10 pr-10 text-white font-medium rounded-[10px] mt-5 gap-3'>
                                Book free meeting <FaAngleRight className='text-white' />
                            </button>
                        </div>
                        <div className="mt-[14px]">
                            <Image src={market} alt='img' width={2000} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
