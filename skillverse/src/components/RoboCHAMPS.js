import React from 'react';
import { FaHandsHelping, FaChalkboardTeacher, FaLightbulb, FaChild } from 'react-icons/fa';

const RoboCHAMPS = () => {
  return (
    <div className="p-10 bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
       
        <div className="flex items-center mb-8">
          <div className="w-1/2 pr-8">
            <img src="https://via.placeholder.com/600x400" alt="Robotics" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2">
            <div>
              <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8 animate-fade-in">RoboCHAMPS</h1>
              <p className="text-lg text-gray-700 mb-4 animate-slide-left">
                Welcome to RoboCHAMPS, where you can unleash your robotics genius! Innovate, tinker, and experiment with our comprehensive courses.
              </p>
              <p className="text-lg text-gray-700 mb-4 animate-slide-right">
                Engage in hands-on projects, build problem-solving skills, and explore cutting-edge technology with expert guidance in a supportive learning environment.
              </p>
            </div>
            <div className="text-center mt-8">
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-bounce">
                Get Started
              </button>
            </div>
          </div>
        </div>

       
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4 animate-fade-in">Why Choose RoboCHAMPS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaHandsHelping />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Hands-On Learning</h3>
                <p className="text-gray-700">Experience hands-on projects that spark creativity and problem-solving skills.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaChalkboardTeacher />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Guidance</h3>
                <p className="text-gray-700">Learn from industry experts who provide personalized guidance and support.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaLightbulb />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovative Curriculum</h3>
                <p className="text-gray-700">Explore a curriculum designed to nurture curiosity and innovation in robotics.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaChild />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fun Learning Environment</h3>
                <p className="text-gray-700">Join a community of young innovators in a fun and supportive learning environment.</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4 animate-fade-in">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaHandsHelping />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 ml-4">Basic</h3>
              </div>
              <ul className="text-gray-700">
                <li className="mb-2">Introduction to Robotics</li>
                <li className="mb-2">Basic Programming Concepts</li>
                <li className="mb-2">1 Project</li>
                <li className="mb-2">Community Support</li>
              </ul>
              <div className="text-center mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Basic
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaChalkboardTeacher />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 ml-4">Standard</h3>
              </div>
              <ul className="text-gray-700">
                <li className="mb-2">Advanced Robotics Techniques</li>
                <li className="mb-2">Programming Challenges</li>
                <li className="mb-2">2 Projects</li>
                <li className="mb-2">Expert Mentorship</li>
              </ul>
              <div className="text-center mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Standard
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaLightbulb />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 ml-4">Premium</h3>
              </div>
              <ul className="text-gray-700">
                <li className="mb-2">Advanced Robotics and AI Integration</li>
                <li className="mb-2">Real-World Applications</li>
                <li className="mb-2">3 Projects</li>
                <li className="mb-2">Personalized Coaching</li>
              </ul>
              <div className="text-center mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboCHAMPS;




