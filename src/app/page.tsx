'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import one from './../../public/one.svg'
import two from './../../public/two.svg'
import three from './../../public/three.svg'
import hero from './../../public/hero.svg'
import wave from './../../public/Wave.svg'
import Cards from './Components/Cards';
import goal from './../../public/goal.svg'
import strategy from './../../public/Strategy.svg'
import Card from './Components/Card';
import competitors from './../../public/Competitors.svg'
import launch from './../../public/Launch.svg'
import Testimonial from './Components/Testimonial';
import Articles from './Components/Articles';
import { FaAngleRight, FaSpinner } from 'react-icons/fa'
import market from './../../public/Marketing 1.svg'

function Page() { // Renamed from page to Page
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(false);

  // Check if screen is large (lg) or larger
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (isLgScreen) {
      const interval = setInterval(() => {
        setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % 2);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLgScreen]);
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
          <div className="relative mt-10 lg:flex">
            <div className="">
              <div className="ml-5 lg:mt-20 lg:ml-20 relative">
                <div className='absolute w-[83%] md:w-[88%] lg:w-[75%] xl:w-[80%] h-[20px] bg-[#F9BC6E] opacity-[25%] top-5 md:top-8'></div>
                <h1 className='text-4xl md:text-6xl font-bold xl:w-[85%]'>We help you grow your <span className='text-[#F9BC6E]'>conversions.</span></h1>
                <p className='font-medium pt-3 text-[25px]'>Featured in leading publications around the world</p>
              </div>
              <div className="flex gap-5 ml-5 lg:ml-20">
                <Image src={one} alt='img' className='w-[100px] md:w-auto' />
                <Image src={two} alt='img' className='w-[100px] md:w-auto' />
                <Image src={three} alt='img' className='w-[100px] md:w-auto' />
              </div>
              <button className='bg-[#F9BC6E] p-3 pl-10 pr-10 lg:ml-20 text-white font-medium rounded-[10px] ml-5 mt-5'>Contact Us</button>
            </div>
            <div className="relative">
              <Image src={hero} alt='img' className='z-50' />
            </div>
            <Image src={wave} alt='img' className='absolute bottom-[70px] md:bottom-[100px] lg:bottom-[0px] xl:-bottom-[50px] -z-50' />
          </div>
          <div className="mt-20 mb-20">
            <div className="flex flex-col justify-center items-center">
              <h1 className='font-bold text-3xl'>How it works</h1>
              <div className='bg-[#F9BC6E] h-1 w-[25%] md:w-[15%] xl:w-[10%]'></div>
            </div>
            <div className="xl:ml-32 xl:mr-32 lg:mr-20 lg:ml-20">
              <Cards img={goal} head='Goal' para='To help your company grow, we want to understand your goals. With that, we can provide you with a complete road map towards achieving them.' num='01' />
              <Card img={competitors} head='Competitors' para='Everybody wants to be the best in their field. To achieve success, we audit your competitors and find out what is working and what is not. All this to help you save time, money, and effort on things that do not work and focus on what does.' num='02' />
              <Cards img={strategy} head='Strategy' para='Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​ We also make sure to get you the most value for your money​.' num='03' />
              <Card img={launch} head='Launch' para='Launching everything into action will be the start of your new marketing strategy. Taking every step we have planned and carefully following the laid-out road map to reach your business goals.​' num='04' />
            </div>
          </div>
          <div className="bg-[#F9BC6E] p-10 lg:p-20 md:flex lg:justify-around">
            <div className="">
              <div className=' bg-gradient-to-r from-white to-[#7a787800] h-1 w-[25%] md:w-[15%] xl:w-[10%]g '></div>
              <h1 className='text-white font-bold text-4xl md:w-[80%] lg:w-[70%] xl:w-[60%] mt-5' >
                Book A Free Digital Marketing Consultation
              </h1>
            </div>
            <div className="flex flex-col gap-5 mt-10 md:mt-0">
              <input type="email" placeholder='Your Email' className='bg-white p-3 pr-14 rounded-full pl-3 font-thin md:mt-8 lg:mt-5' />
              <button className='bg-[#C59E6F] pr-14 pl-14 md:pl-5 md:pr-5 xl:pr-20 xl:pl-20 p-3 rounded-full text-white font-thin cursor-pointer'>Book my free meeting</button>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex flex-col justify-center items-center">
              <h1 className='text-3xl font-bold'>Our Testimonials</h1>
              <div className='bg-[#F9BC6E] h-1 w-[25%] md:w-[15%] xl:w-[10%]'></div>
            </div>
            <div className="">
              <Testimonial />
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

export default Page; 
