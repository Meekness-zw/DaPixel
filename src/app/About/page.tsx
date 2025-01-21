'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import wave from './../../../public/Wave.svg';
import pile from './../../../public/Management.svg';
import About from '../Components/About';
import market from './../../../public/Marketing 1.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaAngleRight, FaSpinner } from 'react-icons/fa';
import Articles from '../Components/Articles';

function Page() {
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
    const [isLgScreen, setIsLgScreen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    // Check if the screen is large (lg) or larger
    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Automatically change the article index for large screens
    useEffect(() => {
        if (isLgScreen) {
            const interval = setInterval(() => {
                setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % 2);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [isLgScreen]);

    // Simulate a loading effect
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
                    <div className="relative lg:flex lg:justify-around">
                        <div>
                            <div className="ml-5 lg:mt-32 lg:ml-20 relative">
                                <div className="absolute w-[35%] md:w-[20%] lg:w-[55%] xl:w-[72%] h-[20px] bg-[#F9BC6E] opacity-[25%] top-5 md:top-8"></div>
                                <h1 className="text-4xl md:text-6xl font-bold md:mt-0 lg:w-[75%] mt-10">
                                    What will you get from the audit?
                                </h1>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src={pile} alt="img" className="z-50" />
                        </div>
                        <Image
                            src={wave}
                            alt="img"
                            className="absolute bottom-[70px] md:bottom-[100px] lg:-bottom-[100px] xl:-bottom-[70px] -z-50"
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 lg:gap-32 xl:mr-32 xl:ml-32">
                        <About
                            title="Step 01"
                            content="You can get a free audit by us where we go through your current online presence. Once we have the information from your end, we can set up ideas and a strategy to improve your positioning. You will get a report of, for example, search terms that your website is shown for on Google, how people reach your website, and from which type of device people visited your. We only need your website name and contact details."
                        />
                        <About
                            title="Step 02"
                            content="You will then receive a summary to your email inbox within 24-48 hours, where we lay out the methods of improving your online marketing and presence. No worries, no strings attached. If you do however like to proceed in collaboration with us, please let us know as soon as possible."
                        />
                    </div>
                    <div className="bg-[#F9BC6E] mb-20">
                        <div className="p-20 text-center grid gap-5">
                            <h1 className="text-2xl font-bold text-white">Who are we?</h1>
                            <p className="font-medium text-white">
                                A growing team of digital marketing professionals, who most of us previously worked for the
                                official Google Ads support team. We are certified and specialized in Google Ads, Merchant
                                Center, Google Analytics, YouTube, and Display marketing.
                                <br />
                                We are dedicated to giving companies cost-effective, high-quality marketing support that we
                                know they need. Through our tailored digital marketing strategies, we help companies reach
                                their business goals.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-20">
                        <div className="shadow-lg border-t-2 border-t-[#F9BC6E] rounded-md w-[90%] grid lg:grid-cols-2">
                            <div className=" flex justify-center items-center">
                                <div className=" p-10 xl:pt-0 grid gap-5">
                                    <h1 className='font-extrabold text-4xl'>Let us discuss your marketing strategy!</h1>
                                    <div className='bg-[#F9BC6E] h-1 w-[25%] md:w-[15%] xl:w-[10%]'></div>
                                    <ul className='text-[#4D4D4D] font- grid gap-3'>
                                        <li>Org.nr: 559264 - 1871</li>
                                        <li>Lunar Holding LDA</li>
                                        <li>info@lunarstrategy.com</li>
                                        <li>+467 - 20478390</li>
                                    </ul>
                                    <div className="text-[#F9BC6E] flex gap-5">
                                        <FaFacebook className='cursor-pointer' />
                                        <FaTwitter className='cursor-pointer' />
                                        <FaLinkedin className='cursor-pointer' />
                                        <FaInstagram className='cursor-pointer' />
                                    </div>
                                    <button className='text-[#F9BC6E] font-medium border border-1 border-[#F9BC6E] p-3 pl-7 pr-7 rounded-md'>Book free consultaion</button>
                                </div>
                                <div className=""></div>
                            </div>
                            <div className="flex flex-col p-10 gap-5">
                                <p className='font-thin lg:pt-10'>Or you can also contact us here</p>
                                <div className="grid gap-3">
                                    <input type="text" placeholder='Name' className='border border-1 border-[#4D4D4D] rounded-md p-3 pr-10' />
                                    <input type="email" placeholder='Email' className='border border-1 border-[#4D4D4D] rounded-md p-3 pr-10' />
                                    <input type="text" placeholder='Subject' className='border border-1 border-[#4D4D4D] rounded-md p-3 pr-10' />
                                    <textarea name="" id="" placeholder='Message' className='border border-1 border-[#4D4D4D] rounded-md p-3 pr-10 pb-20'></textarea>
                                    <button className='bg-[#F9BC6E] text-white font-medium p-3 pl-10 pr-10 rounded-md'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9BC6E] p-10 lg:p-20 lg:flex lg:justify-around mt-20 overflow-hidden lg:gap-10">
                        <div className="md:ml-[40px]">
                            <div className=' bg-gradient-to-r from-white to-[#7a787800] h-1 w-[25%] md:w-[25%] xl:w-[10%]' ></div>
                            <h1 className='text-white font-bold text-4xl md:w-[80%] lg:w-[100%] xl:w-[70%] mt-5' >
                                Digital Marketing Articles
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10">
                            <Articles
                                title='Top 5 SaaS Businesses –August 2021'
                                content='Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS'
                                style={{ display: currentArticleIndex === 0 ? 'block' : 'none' }}
                            />
                            <Articles
                                title='12 Best SaaS WordPress Themes To Convert Lead'
                                content='Lead conversion is an essential goal for any business. Be it converting site visitors into members, increasing their email subscription list, or converting members into'
                                style={{ display: currentArticleIndex === 1 ? 'block' : 'none' }}
                            />
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-around  lg:p-20  lg:mt-20">
                        <div className="p-10">
                            <h1 className='font-bold text-4xl mb-10 '>Why DaPixel?</h1>
                            <p className='text-[#1f1f1f] font-thin lg:w-[70%]'>To get customers, it is imperative to be seen by the mass. Every successful company is unique and needs contrasting digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.</p>
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
    )
}

export default Page
