import React from 'react';
import { FaRobot } from 'react-icons/fa';

const RoboCHAMPS = () => {
  return (
    <div className="bg-gradient-to-br from-red-100 to-red-200 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex items-center justify-center mb-8">
          <FaRobot size={64} className="text-red-500 mr-4" />
          <h1 className="text-4xl font-bold text-red-700">RoboCHAMPS</h1>
        </div>
        <p className="text-xl text-gray-800 mb-6">
          Unleash your robotics genius. Innovate. Tinker. Experiment.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg text-gray-700 mb-2">Introduction to robotics fundamentals</li>
            <li className="text-lg text-gray-700 mb-2">Building and programming robots</li>
            <li className="text-lg text-gray-700 mb-2">Hands-on projects and challenges</li>
            <li className="text-lg text-gray-700 mb-2">Collaborative problem-solving</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <a href="/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Back to Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoboCHAMPS;


