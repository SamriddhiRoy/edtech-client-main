import React, { useRef, useEffect, useState } from 'react';
import Testimonial from './Testimonial'; 

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: 'https://via.placeholder.com/150', 
      name: 'John Doe',
      position: 'CEO, Company ABC',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis mauris a dui consectetur, ac gravida elit tempus.'
    },
    {
      image: 'https://via.placeholder.com/150', 
      name: 'Jane Smith',
      position: 'Designer',
      quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      image: 'https://via.placeholder.com/150', 
      name: 'Michael Johnson',
      position: 'Developer',
      quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${nextIndex * 100}%)`;
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 overflow-hidden relative">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">Kids Love Us!</h2>
        <div className="flex space-x-8 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ width: `${testimonials.length * 100}%`, transform: `translateX(-${currentIndex * 100}%)` }} ref={containerRef}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;


