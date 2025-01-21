import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface Componet {
  title: string;
  content: string;
  style?: React.CSSProperties;
}

function Articles(props: Componet) {
  return (
    <div className="flex justify-center items-center mt-10 lg:mt-0">
      <div className="bg-[#DFA762] border-[1px] border-[#DFA762] rounded-lg p-5 md:w-[80%] lg:w-[600px] lg:h-[300px]" style={props.style}>
        <h1 className="text-white font-bold text-2xl md:w-[80%] lg:w-[70%]">{props.title}</h1>
        <p className="font-extralight text-white mt-5">{props.content}</p>
        <button className="bg-white p-5 pr-6 pl-6 rounded-lg mt-5 gap-5 flex items-center justify-center">
          Read more <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Articles;
