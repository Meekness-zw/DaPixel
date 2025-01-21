'use client'
import React, { useState, useEffect } from 'react';
import wave from './../../../public/Wave.svg';
import Image from 'next/image';
import Team from '../Components/Team';
import tim from './../../../public/Tim.svg';
import { FaAngleRight, FaSpinner } from 'react-icons/fa';
import market from './../../../public/Marketing 1.svg';

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
                    className={`transition-transform duration-500 ease-out ${
                        showContent ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
                >
                    <div className="p-20 md:mt-20 pb-0">
                        <h1 className="text-4xl md:text-6xl font-bold xl:w-[85%]">DaPixel Specialist</h1>
                        <p className="font-medium pt-3 text-[25px] text-[#F9BC6E]">
                            Meet the awesome team behind Lunar Strategy.
                        </p>
                    </div>
                    <Image src={wave} alt="img" />
                    <div className="flex justify-center items-center">
                        <div className="w-[90%] grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <Team
                                    key={index}
                                    img={tim}
                                    name="Tim Haldorsson"
                                    title="Paid Search Manager"
                                    info="Gothenburg, Sweden tim@lunarstrategy.com"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-around lg:p-20 lg:mt-20">
                        <div className="p-10">
                            <h1 className="font-bold text-4xl mb-10">Why DaPixel?</h1>
                            <p className="text-[#1f1f1f] font-thin lg:w-[70%]">
                                To get customers, it is imperative to be seen by the mass. Every successful company is
                                unique and needs contrasting digital marketing strategies. Book a meeting with us and
                                we will help you find the correct strategy for your company.
                            </p>
                            <button className="bg-[#F9BC6E] p-3 flex items-center justify-center pl-10 pr-10 text-white font-medium rounded-[10px] mt-5 gap-3">
                                Book free meeting <FaAngleRight className="text-white" />
                            </button>
                        </div>
                        <div className="mt-[14px]">
                            <Image src={market} alt="img" width={2000} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
