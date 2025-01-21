'use client'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const testimonials = [
    {
        text: "Lunar Strategy helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.",
        author: "Kimmo Hakonen - Skrum Master at DaGear AB",
    },
    {
        text: "The team at Lunar Strategy delivered beyond expectations, and the results speak for themselves. Highly satisfied with their work.",
        author: "John Doe - CEO at TechCorp",
    },
    {
        text: "Lunar Strategy is the go-to digital marketing team. Their strategies are top-notch and have driven amazing results for our business.",
        author: "Sarah Lee - Marketing Head at InnovateX",
    },
];

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current testimonial
    const [fade, setFade] = useState(false); // Track the fade effect

    const handleNext = () => {
        setFade(false); // Reset fade effect before changing testimonial
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Go to next, loop around
        }, 300); // Wait for fade-out to complete (300ms)
    };

    const handlePrevious = () => {
        setFade(false); // Reset fade effect before changing testimonial
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1 // Go to previous, loop around
            );
        }, 300); // Wait for fade-out to complete (300ms)
    };

    const currentTestimonial = testimonials[currentIndex];

    // After the state has updated, trigger the fade-in effect
    React.useEffect(() => {
        setFade(true);
    }, [currentIndex]); // Trigger fade effect when the currentIndex changes

    return (
        <div className='flex justify-center items-center'>
            <div className="flex gap-5 mt-20 w-[95%] md:w-[80%] lg:w-[70%] shadow-md p-10">
                <div className="bg-[#F9BC6E] h-32 w-32 md:h-44 md:w-44 relative">
                    <p className='text-[200px] font-bold absolute -bottom-48'></p>
                </div>
                <div className="w-[50%] md:w-[60%]  relative">
                    <p className={`text-[#1f1f1f] font-thin mt-1 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        {currentTestimonial.text}
                    </p>
                    <p className={`text-[#F9BC6E] font-thin text-sm transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        — {currentTestimonial.author}
                    </p>
                    <div className="absolute flex gap-2 bottom-1 -right-6 md:-right-10 md:bottom-2">
                        <FaArrowLeft onClick={handlePrevious} className='cursor-pointer' />
                        <FaArrowRight className='text-[#F9BC6E] cursor-pointer' onClick={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
