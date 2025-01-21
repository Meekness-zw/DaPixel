'use client';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../../public/Logo.jpg'
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Services',
        path: '/Services',
    },
    {
        name: 'Industries',
        path: '/Industries',
    },
    {
        name: 'About Us',
        path: '/About',
    },
    {
        name: 'Team DaPixel',
        path: '/Team',
    },
    {
        name: 'Blog',
        path: '/Blog',
    },
    {
        name: 'Contact Us',
        path: '/Contact',
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger className='flex justify-center items-center'>
                    <CiMenuFries className=' text-[32px] text-accent' />
                </SheetTrigger>
                <SheetContent className='flex flex-col'>
                    <div className='mt-32 mb-40 text-center text-2xl'>
                        <Link href="/">
                            <Image src={logo} alt='img' className='w-[100px] lg:w-auto' />
                        </Link>
                    </div>
                    <nav className='flex flex-col justify-center items-center gap-8 font-primary'>
                        {links.map((link, index) => {
                            return (
                                <Link href={link.path} key={index} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'}text-xl capitalize hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
