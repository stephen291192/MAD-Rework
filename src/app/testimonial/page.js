// components/TestimonialSlider.js

import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = ({ testimonials }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(1);

  const handleTestimonialClick = (index) => {
    setSelectedTestimonial(index === selectedTestimonial ? null : index);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds) as needed
  };

  return (
    <div>
         {selectedTestimonial !== null && (
        <div className="p-4 bg-gray-200 mt-4 mb-8">
          <h3 className="text-3xl text-gray-700 font-semibold mb-2">
            {testimonials[selectedTestimonial].content}
          </h3>
          <p className="text-gray-500">{testimonials[selectedTestimonial].name}</p>
        </div>
      )}
     <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`p-7 bg-white shadow-md border-2 rounded-sm cursor-pointer slick-slide ${
            selectedTestimonial === index ? 'border-blue-500' : 'border-gray-300'
          }`}
          onClick={() => handleTestimonialClick(index)}
        >
           <img
            src={testimonial.logo}
            alt={`Logo for ${testimonial.name}`}
            className=" mC h-8 w-auto "
          />
          {/* <h3 className="text-lg font-semibold mb-2 ">{testimonial.name}</h3> */}
          <p className="text-gray-500 mt-3">{testimonial.content}</p>
          
        </div>
      ))}
    </Slider>

     
    </div>
  );
};

export default TestimonialSlider;
