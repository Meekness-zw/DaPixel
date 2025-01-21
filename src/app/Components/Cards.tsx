import React from 'react'
import Image, { StaticImageData } from 'next/image';


interface Cards {
    img: StaticImageData;
    head: string;
    para: string;
    num: string;
}
function Cards(props: Cards) {
    return (
        <div className='flex justify-center items-center mt-20 lg:justify-start'>
            <div className="relative flex shadow-md w-[90%] md:w-[80%] lg:w-[70%]">
                <Image src={props.img} alt='img' className='w-[100px] lg:w-[200px] ml-5' />
                <div className="p-5">
                    <h1 className='text-4xl font-bold text-[#F9BC6E] mb-2'>{props.head}</h1>
                    <div className='bg-[#F9BC6E] h-1 w-[25%] md:w-[80px]'></div>
                    <p className='text-[#1f1f1f] font-thin mt-4'>{props.para}</p>
                </div>
                <p className='absolute text-[#F9BC6E] text-6xl font-extrabold opacity-[45%] -top-12 -left-5'>{props.num}</p>
            </div>
        </div>
    )
}

export default Cards
