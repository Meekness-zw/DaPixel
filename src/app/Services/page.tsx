'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import web from './../../../public/Web Design.svg'
import wave from './../../../public/Wave.svg'
import Service from '../Components/Service';
import megaphone from './../../../public/Mega Phone.svg'
import script from './../../../public/Script.svg'
import rocket from './../../../public/Rocket.svg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaAngleRight, FaSpinner } from 'react-icons/fa'
import market from './../../../public/Marketing 1.svg'


function Page() {
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
                    className={`transition-transform duration-500 ease-out ${showContent ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                        }`}
                >
                    <div className="relative lg:flex lg:justify-around">
                        <div className="">
                            <div className="ml-5 lg:mt-10 lg:ml-20 relative">
                                <div className='absolute w-[35%] md:w-[20%] lg:w-[35%] xl:w-[25%] h-[20px] bg-[#F9BC6E] opacity-[25%] top-5 md:top-8'></div>
                                <h1 className='text-4xl md:text-6xl font-bold xl:w-[85%] md:mt-0 mt-10'>Service</h1>
                                <p className='font-medium pt-3 text-[25px] md:w-[60%] lg:w-[80%]'>All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.</p>
                            </div>
                            <div className="flex gap-5 ml-5 lg:ml-20">
                            </div>
                            <button className='bg-[#F9BC6E] p-3 pl-10 pr-10 lg:ml-20 text-white font-medium rounded-[10px] ml-5 mt-5'>Contact Us</button>
                        </div>
                        <div className="relative">
                            <Image src={web} alt='img' className='z-50' />
                        </div>
                        <Image src={wave} alt='img' className='absolute bottom-[70px] md:bottom-[100px] lg:-bottom-[100px] xl:-bottom-[70px] -z-50' />
                    </div>
                    <div className="flex justify-center items-center mb-20 mt-10">
                        <div className="w-[90%] grid md:grid-cols-2 gap-10">
                            <div className="grid gap-10">
                                <Service img={megaphone} about='Facebook Marketing' info='Facebook Marketing is a simple, yet powerful marketing platform that allows businesses to market their products and services through the biggest social media platforms (including Instagram as part of Facebook). We offer a range of marketing services including ad campaigns for increasing brand awareness, promotions, customer loyalty, building your social media following, and much more.' />
                                <Service img={rocket} about='Search Engine Optimization' info='Search engine optimization is the process behind the making your website easy to find. Our SEO experts will help you rank higher in search engines and drive more traffic to your site organically. This is the bread and butter of better marketing, where you can influence how many sales can be generated for a lower cost. We make sure your content is aligned with the requirements of SEO.' />
                            </div>
                            <div className="grid gap-20 md:mt-32">
                                <Service img={megaphone} about='Google Marketing' info="Google gets over 3.5 billion searches per day and with Google Ads you increase your visability significantly. It is the platform that allows you to drive qualitative traffic and good-fit customers, to your business while they're searching for products and services. With Google Ads, you can boost your website traffic, receive more phone calls, and increase your in-store visits and more." />
                                <Service img={script} about='Web Content' info='Do you need a content update on your site? Perhaps you are adding information to your website or building it from scratch? Professionally created web content, which is highly informative, well structured, and optimized for search engines is crucial for any web page. These factors not only make the content look great, but are also important for a high ranking among the search results. We also offer our clients continuous web content like blog posts, listicles and similar' />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9BC6E] mb-20">
                        <div className="p-20 text-center grid gap-5">
                            <h1 className='text-2xl font-bold text-white'>What Happens When I Hire Lunar Strategy?</h1>
                            <p className='font-medium text-white '>When you hire Lunar Strategy, you get an external digital marketing team that drives your entire digital marketing towards measurable results. The marketing strategy that we lay out is based on your company’s business needs and goals, and we keep an ongoing dialogue to stay updated. The work is planned three months at a time and is held together by a project manager from Lunar Strategy. <br />

                                The specialists who are part of the team are adjusted when needed, based on what the focus is. We have specialists within most aspects of digital marketing and ensure that you always have access to the expertise you need in order to succeed. <br />
                                The starting point for all work is your business goals, which are translated into key figures that we measure and report on to you. This way, you get follow-up that has a clear connection to what you and the company want to get out of the investment you make in us. You get all this at a fixed monthly price that corresponds to approximately one employee</p>
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

export default Page;
