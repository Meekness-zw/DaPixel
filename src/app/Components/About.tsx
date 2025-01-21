import React from 'react'

interface Componet {
  title: string;
  content: string;
}

function About(props: Componet) {
  return (
    <div className="flex justify-center items-center mt-10 lg:mt-0 p-10 ">
      <div className="bg-white border-[1px] shadow-md border-white rounded-lg p-10">
        <h1 className="text-[#F9BC6E] font-bold text-2xl md:w-[80%] lg:w-[70%]">{props.title}</h1>
        <p className="font-extralight text-black mt-5">{props.content}</p>
      </div>
    </div>
  );
}

export default About
