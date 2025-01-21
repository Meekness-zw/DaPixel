import React from 'react'
import logo from './../../../public/Logo-B6.jpg'
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link';

function Footer() {
    return (
        <div>
            <div className="bg-[#F9BC6E] p-10 md:grid md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                    <Image src={logo} alt='img' className='w-[100px] lg:w-auto' />
                    <ul className='font-medium text-lg mt-10'>
                        <li className='pb-2'>REBORN STUDIO AB</li>
                        <li className='pb-2'>Org.nr:559264-1871</li>
                        <li className='pb-2'>Lunar Holding LDA</li>
                        <li className='pb-2'>info@dapixel.io</li>
                        <li className=''>+467-20478390</li>
                    </ul>
                    <div className=" flex gap-3 mt-3">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <div className=" mt-10 md:mt-0">
                    <h2 className='font-bold text-2xl'>Contact</h2>
                    <ul className='font-medium text-lg mt-5 flex flex-col gap-2'>
                        <Link href='/' className='hover:text-white cursor-pointer'>Home</Link>
                        <Link href='/' className='hover:text-white cursor-pointer'>About Us</Link>
                        <Link href='/' className='hover:text-white cursor-pointer'>Lunar Blog</Link>
                        <Link href='/' className='hover:text-white cursor-pointer'>Our Specialist</Link>
                        <Link href='/' className='hover:text-white cursor-pointer'>Contct Us</Link>
                        <Link href='/' className='hover:text-white cursor-pointer'>Privacy And Policy</Link>
                    </ul>
                </div>
                <div className="mt-10 lg:mt-0">
                    <h2 className='font-bold text-2xl'>Services</h2>
                    <ul className='font-medium text-lg mt-5 flex flex-col gap-2'>
                        <li>Digital Marketing</li>
                        <li>Free Audit</li>
                        <li>Google Ads</li>
                        <li>Cryptocurrency Marketing</li>
                        <li>SEO</li>
                        <li>SAAS Marketing</li>
                        <li>Website & SEO</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
