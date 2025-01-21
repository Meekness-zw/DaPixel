'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import wave from './../../../public/Wave.svg'
import robot from './../../../public/Robot.svg'
import Expertise from '../Components/Expertise'
import saas from './../../../public/saas.svg'
import cart from './../../../public/cart.svg'
import b2b from './../../../public/b2b.svg'
import Testimonial from '../Components/Testimonial'
import book from './../../../public/Book.svg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaAngleRight, FaSpinner } from 'react-icons/fa'
import tp from './../../../public/TP.svg'
import code from './../../../public/dacode.svg'
import hyg from './../../../public/hyg.svg'
import tak from './../../../public/talk.svg'
import omni from './../../../public/omni.svg'
import market from './../../../public/Marketing 1.svg'

const IndustriesPage = () => { // Changed 'page' to 'IndustriesPage'
    const [loading, setLoading] = useState(true)
    const [showContent, setShowContent] = useState(false)

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
            setShowContent(true) // Trigger content to slide in
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

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
                        <div className="lg:flex :justify-around">
                            <div className="">
                                <div className="ml-5 lg:mt-20 lg:ml-20 relative">
                                    <div className='absolute w-[95%] md:w-[73%] lg:w-[95%] xl:w-[68%] h-[20px] bg-[#F9BC6E] opacity-[25%] top-8 md:top-10'></div>
                                    <h1 className='text-3xl md:text-5xl font-bold md:mt-0 mt-10 p-5'>Industries & Expertise</h1>
                                    <p className='font-medium pt-3 text-[25px] md:w-[80%] lg:w-[80%] p-5'>A specialist lead generation agency that guides you along the whole road to growth. We help a wide range of B2B, SaaS, and E-commerce clients optimizing and maximizing their digital marketing. We generate unlimited leads for your business using a proven and unique strategy. Along the way, you have a full overview.</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Image src={robot} alt='img' className='z-50 lg:mt-32 xl:mt-0' width={2000} />
                            </div>
                        </div>
                        <Image src={wave} alt='img' className='absolute bottom-[70px] md:bottom-[100px] lg:-bottom-[100px] xl:-bottom-[70px] -z-50' />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20">
                        <h1 className='font-bold text-2xl md:text-3xl '>Our industries & expertise</h1>
                        <div className="grid lg:grid-cols-3 gap-10 mb-20 md:grid-cols-2 w-[80%]">
                            <Expertise img={saas} title='SaaS' info='We help a wide range of SaaS companies growing their lead generation online.' />
                            <Expertise img={b2b} title='B2B' info='Professional funnel advertising optimized for generating leads for B2B.' />
                            <Expertise img={cart} title='E - Commerce' info='Grow your Ecommerce company and let us help attract and convert more customers.' />
                        </div>
                    </div>
                    <div className="bg-[#F9BC6E] mb-20">
                        <div className="md:p-20 p-10 text-center gap-5 flex flex-col items-center justify-center">
                            <h1 className='lg:text-2xl text-[25px] font-bold text-white'>Get a free digital marketing consultation</h1>
                            <p className='font-medium text-white '>Book a free 30-minute consultation with one of our experts. Absolutely no <br /> pressure, just a friendly rundown and some great advice.</p>
                            <button className='bg-[#C59E6F] pl-10 pr-10 md:pl-10 md:pr-10 xl:w-[25%] p-3 rounded-full text-white font-thin cursor-pointer'>Yes, I would like some advice</button>
                        </div>
                    </div>
                    <div className="mt-20 mb-20">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className='text-3xl font-bold'>Our Testimonials</h1>
                            <div className='bg-[#F9BC6E] h-1 w-[25%] md:w-[15%] xl:w-[10%]'></div>
                        </div>
                        <div className="">
                            <Testimonial />
                        </div>
                    </div>
                    <div className="bg-[#F9BC6E] p-10 grid lg:grid-cols-2 mb-20">
                        <Image src={book} alt='img' className='w-auto' />
                        <div className="text-white flex flex-col space-y-5 justify-center items-center ">
                            <h1 className='md:text-3xl text-[25px] font-bold'>Get a FREE complete editorial guide for social media growth</h1>
                            <p>Download your guide filled with clear, actionable tips on how your company can create successful organic content on social media. You will find useful statistics as well as real-life examples and insights based on our own experiences as a social media agency.</p>
                            <div className=" w-[100%]">
                                <button className='bg-[#C59E6F] font-thin text-white p-3 lg:p-3 pl-5 pr-5 md:w-[30%] lg:w-[70%] rounded-full '>Download now</button>
                            </div>
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
                    <div className=" flex justify-center items-center">
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-14 items-center justify-center w-[80%]">
                            <Image src={tp} alt='' />
                            <Image src={code} alt='' />
                            <Image src={omni} alt='' />
                            <Image src={tak} alt='' />
                            <Image src={hyg} alt='' />
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

export default IndustriesPage
