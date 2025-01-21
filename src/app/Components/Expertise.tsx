import React from 'react'
import Image from 'next/image';
import { StaticImageData } from 'next/image';


interface Component{
    img: StaticImageData,
    title: string,
    info: string,
}
function Expertise(props:Component) {
  return (
    <div className='flex items-center justify-center'>
      <div className=" flex flex-col gap-3 p-10 justify-center items-center shadow-lg w-[90%] ">
        <Image src={props.img} alt='img'/>
        <h1 className='font-bold text-lg
        '>{props.title}</h1>
        <p className='font-thin text-[#333333] text-center'>{props.info}</p>
      </div>
    </div>
  )
}

export default Expertise
