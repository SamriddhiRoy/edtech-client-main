import React from "react";

const Card = ({ title, description, bgColor, hoverColor, shadowColor }) => {
  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg py-6 px-4 mx-4 mb-8 ${bgColor} transform transition duration-500 relative ${hoverColor} animate-bounce-on-hover`}
    >
      <div className="font-bold text-xl mb-2 text-center text-indigo-600 relative z-10">
        {title}
      </div>
      <p className="text-gray-700 text-base text-center relative z-10">
        {description}
      </p>

      <div
        className={`absolute inset-0 w-1/2 ${shadowColor} opacity-25 rounded-lg`}
      ></div>
    </div>
  );
};

export default Card;
