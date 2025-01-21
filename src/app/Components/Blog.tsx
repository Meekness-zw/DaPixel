import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

interface Componet {
  title: string;
  content: string;
  style?: React.CSSProperties;
}

function Blog(props: Componet) {
  return (
    <div className="flex justify-center items-center mt-10 lg:mt-0">
      <div className="bg-white border-[1px] shadow-md border-white rounded-lg p-5 md:w-[80%] w-[90%] lg:w-[600px] " style={props.style}>
        <h1 className="text-black font-bold text-2xl md:w-[80%] lg:w-[70%]">{props.title}</h1>
        <p className="font-extralight text-black mt-5">{props.content}</p>
        <button className="bg-[#DFA762] p-5 pr-6 pl-6 rounded-lg mt-5 gap-5 flex items-center justify-center">
          Read more <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Blog
