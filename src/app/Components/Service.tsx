import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Componet {
    img: StaticImageData,
    about: string,
    info: string
}
function Service(props: Componet) {
    return (
        <div>
            <div className="p-10 shadow-lg flex flex-col gap-3 ">
                <Image src={props.img} alt='img' />
                <h2 className='text-black font-bold text-2xl'>{props.about}</h2>
                <p className='font-extralight text-black'>{props.info}</p>
                <button className="bg-[#DFA762] text-white p-3 pr-8 pl-8 rounded-lg mt-5 gap-5 flex items-center justify-center">
                    Book a free 30 minute meeting</button>
            </div>
        </div>
    )
}

export default Service
