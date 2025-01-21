import React from 'react'
import Image from 'next/image';
import logo from './../../../public/Logo.jpg'
import MobileNav from './MobileNavBar';
import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <div className="flex justify-between p-6 shadow-xl">
                <Link className=" ml-10 flex justify-center items-center" href='/'>
                    <Image src={logo} alt='img' className='w-[100px] lg:w-auto'/>
                </Link>
                <ul className='font-medium text-lg lg:flex gap-12 mr-10 hidden'>
                    <Link href='/Services' className='hover:text-[#F9BC6E] cursor-pointer'>Services</Link >
                    <Link href='/Industries' className='hover:text-[#F9BC6E] cursor-pointer'>Industries</Link >
                    <Link href='/About' className='hover:text-[#F9BC6E] cursor-pointer'>About Us</Link >
                    <Link href='/Team' className='hover:text-[#F9BC6E] cursor-pointer'>Team DaPixel</Link >
                    <Link href='/Blog' className='hover:text-[#F9BC6E] cursor-pointer'>Blog</Link >
                    <Link href='/Contact' className='text-[#F9BC6E] cursor-pointer border-[1px] pr-5 pl-5 rounded-full border-[#F9BC6E]'>Contact Us</Link>
                </ul>
                <MobileNav/>
            </div>
        </div>
    )
}

export default Navbar
