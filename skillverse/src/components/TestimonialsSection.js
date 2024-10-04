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
    {
      image: 'https://via.placeholder.com/150',
      name: 'Emily Clark',
      position: '',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Daniel Brown',
      position: 'Manager',
      quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Olivia Wilson',
      position: 'Marketing Specialist',
      quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
    
      containerRef.current.style.transform = `translateX(-${currentIndex * (100 / testimonials.length)}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 overflow-hidden relative">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">Kids Love Us!</h2>
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${testimonials.length * 100}%` }}
            ref={containerRef}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-white {
          background-color: #ffffff;
        }
        .py-20 {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .transition-transform {
          transition: transform 0.5s ease-in-out;
        }
        .flex {
          display: flex;
        }
        .max-w-4xl {
          max-width: 1280px;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .px-6 {
          padding-left: 24px;
          padding-right: 24px;
        }
        h2 {
          font-size: 2.25rem;
          margin-bottom: 2rem;
          text-align: center;
          color: #5a67d8;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
