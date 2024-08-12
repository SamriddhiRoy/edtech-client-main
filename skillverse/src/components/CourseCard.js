import React from 'react';
import { Link } from 'react-router-dom'; 

const CourseCard = ({ icon, title, description, bgColor, hoverColor, shadowColor }) => {

  // Define the course paths based on the title
  const coursePaths = {
    'Web Development': '/RoboCHAMPS',
    'Python + Machine Learning': '/Python',
    'App Development': '/AppDevelopment',
    'Cyber Security': '/Cybersecurity',
    'Scratch': '/scratch',
    'Mathematics': '/Mathematics'
  };

  // Get the path for the course based on the title
  const getCoursePath = (title) => {
    return coursePaths[title] || '/';
  };

  return (
    <div className={`max-w-sm rounded-lg overflow-hidden shadow-lg p-6 m-4 ${bgColor} transform transition duration-500 relative ${hoverColor} animate-bounce-on-hover`}>
      <div className="flex justify-center mb-4 relative z-10">
        {icon}
      </div>
      <div className="font-bold text-xl mb-2 text-center text-indigo-600 relative z-10">{title}</div>
      <div className="text-gray-700 text-base text-center relative z-10">
        {description.map((line, index) => (
          <p key={index} className="mb-2">{line}</p>
        ))}
      </div>
      <div className="flex justify-center mt-4 relative z-10">
        <Link to={getCoursePath(title)} className="text-center">
          <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Explore Now
          </button>
        </Link>
      </div>
      <div className={`absolute inset-0 w-1/2 ${shadowColor} opacity-25 rounded-lg`}></div>
    </div>
  );
};

export default CourseCard;


















