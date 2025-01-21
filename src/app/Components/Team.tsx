import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

interface Component {
    img: StaticImageData
    name: string,
    title: string,
    info: string,
}
function Team(props:Component) {
    return (
        <div>
            <div className="shadow-lg rounded-lg flex flex-col justify-center items-center p-7 gap-5">
                <Image src={props.img} alt='img' className='rounded-full border-[3px] border-[#DFA762]'/>
                <h2 className='text-2xl font-bold'>{props.name}</h2>
                <p className='font-semibold'>{props.title}</p>
                <span className='font-thin text-[#B070FF] w-[50%] text-center'>{props.info}</span>
                <button className="bg-[#DFA762] text-white p-3 pr-6 pl-6 rounded-lg mt-5 gap-5 flex items-center justify-center">Book a free meeting<FaAngleRight />
                </button>
            </div>
        </div>
    )
}

export default Team
