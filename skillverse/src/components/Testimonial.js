import React from 'react';

const Testimonial = ({ image, name, position, quote }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg p-6 m-4 bg-white transform transition duration-500 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="h-12 w-12 rounded-full mr-4" />
        <div>
          <div className="font-bold text-gray-800">{name}</div>
          <div className="text-gray-600">{position}</div>
        </div>
      </div>
      <p className="text-gray-700 text-base italic">{quote}</p>
      <style jsx>{`
        .max-w-xs {
          max-width: 600px; /* Adjust this value for wider boxes */
        }
        .rounded-lg {
          border-radius: 10px; /* Slightly curved corners */
        }
      `}</style>
    </div>
  );
};

export default Testimonial;

