'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import wave from './../../../public/Wave.svg';
import volc from './../../../public/High Quality Products 1.svg';
import boat from './../../../public/04_educationalresources.svg';
import lattern from './../../../public/Product Release.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaAngleRight, FaSpinner } from 'react-icons/fa';
import market from './../../../public/Marketing 1.svg';

function Page() {
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setShowContent(true); // Trigger content to slide in
        }, 2000); // Adjust the time as needed

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
                        <div className="lg:flex lg:justify-around">
                            <div>
                                <div className="ml-5 lg:mt-20 lg:ml-20 relative">
                                    <div className="absolute w-[95%] md:w-[73%] lg:w-[95%] xl:w-[75%] h-[20px] bg-[#F9BC6E] opacity-[25%] top-8 md:top-10"></div>
                                    <h1 className="text-3xl md:text-5xl font-bold md:mt-0 mt-10 p-5">
                                        Consistency - Drive - Curiosity - Passion&nbsp;
                                    </h1>
                                    <p className="font-medium pt-3 text-[25px] md:w-[80%] lg:w-[80%] p-5">
                                        In a constantly evolving and competitive digital world, it is imperative to stay on top and in the know, be
                                        highly visible among search results and feeds, and be responsive to your audience.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <Image src={volc} alt="High-Quality Products" className="z-50 lg:mt-32 xl:mt-0" width={2000} />
                            </div>
                        </div>
                        <Image
                            src={wave}
                            alt="Wave background"
                            className="absolute bottom-[70px] md:bottom-[100px] lg:-bottom-[100px] xl:-bottom-[70px] -z-50"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col justify-center items-center mb-20">
                        <h1 className="font-bold text-xl md:text-3xl">Make a Difference For Your Business!</h1>
                        <div className="flex flex-col justify-center items-center mt-10">
                            {/* Section 1 */}
                            <div className="w-[80%] grid lg:grid-cols-2 justify-center items-center">
                                <p className="text-[#1f1f1f] font-thin">
                                    We understand that not every company has an in-house department that is always updated and tracks the algorithms,
                                    trends, and changes within digital marketing, but we strongly believe every company should have somebody to do so! <br />
                                    Therefore, we started Lunar Strategy digital marketing agency – to offer companies solutions that are completely
                                    customized to fit their business needs and goals. <br />
                                    Lunar Strategy is a professional digital marketing agency with a highly motivated team.
                                </p>
                                <Image src={boat} alt="Educational Resources" />
                            </div>

                            {/* Section 2 */}
                            <div className="w-[80%] grid lg:grid-cols-2 justify-center items-center">
                                <Image src={lattern} alt="Product Release" />
                                <p className="text-[#1f1f1f] font-thin">
                                    We understand that not every company has an in-house department that is always updated and tracks the algorithms,
                                    trends, and changes within digital marketing, but we strongly believe every company should have somebody to do so! <br />
                                    Therefore, we started Lunar Strategy digital marketing agency – to offer companies solutions that are completely
                                    customized to fit their business needs and goals. <br />
                                    Lunar Strategy is a professional digital marketing agency with a highly motivated team.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex justify-center items-center mb-20">
                        <div className="shadow-lg border-t-2 border-t-[#F9BC6E] rounded-md w-[90%] grid lg:grid-cols-2">
                            <div className="flex justify-center items-center">
                                <div className="p-10 xl:pt-0 grid gap-5">
                                    <h1 className="font-extrabold text-4xl">Let us discuss your marketing strategy!</h1>
                                    <div className="bg-[#F9BC6E] h-1 w-[25%] md:w-[15%] xl:w-[10%]"></div>
                                    <ul className="text-[#4D4D4D] font- grid gap-3">
                                        <li>Org.nr: 559264 - 1871</li>
                                        <li>Lunar Holding LDA</li>
                                        <li>info@lunarstrategy.com</li>
                                        <li>+467 - 20478390</li>
                                    </ul>
                                    <div className="text-[#F9BC6E] flex gap-5">
                                        <FaFacebook className="cursor-pointer" />
                                        <FaTwitter className="cursor-pointer" />
                                        <FaLinkedin className="cursor-pointer" />
                                        <FaInstagram className="cursor-pointer" />
                                    </div>
                                    <button className="text-[#F9BC6E] font-medium border border-1 border-[#F9BC6E] p-3 pl-7 pr-7 rounded-md">
                                        Book free consultation
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col p-10 gap-5">
                                <p className="font-thin lg:pt-10">Or you can also contact us here</p>
                                <div className="grid gap-3">
                                    <input type="text" placeholder="Name" className="border border-1 border-[#4D4D4D] rounded-md p-3 pr-10" />
                                    <input type="email" placeholder="Email" className="border border-1 border-[#4D4D4D] rounded-md p-3 pr-10" />
                                    <input type="text" placeholder="Subject" className="border border-1 border-[#4D4D4D] rounded-md p-3 pr-10" />
                                    <textarea
                                        placeholder="Message"
                                        className="border border-1 border-[#4D4D4D] rounded-md p-3 pr-10 pb-20"
                                    ></textarea>
                                    <button className="bg-[#F9BC6E] text-white font-medium p-3 pl-10 pr-10 rounded-md">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="lg:flex lg:justify-around lg:p-20 lg:mt-20">
                        <div className="p-10">
                            <h1 className="font-bold text-4xl mb-10">Why DaPixel?</h1>
                            <p className="text-[#1f1f1f] font-thin lg:w-[70%]">
                                To get customers, it&apos;s imperative to be seen by the mass. Every successful company is unique and needs contrasting
                                digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.
                            </p>
                            <button className="bg-[#F9BC6E] p-3 flex items-center justify-center pl-10 pr-10 text-white font-medium rounded-[10px] mt-5 gap-3">
                                Book free meeting <FaAngleRight className="text-white" />
                            </button>
                        </div>
                        <div className="mt-[14px]">
                            <Image src={market} alt="Marketing" width={2000} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
