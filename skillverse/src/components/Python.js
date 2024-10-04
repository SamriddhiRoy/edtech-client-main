import React ,{ useEffect } from 'react';
import { FaBrain, FaCode, FaDatabase, FaChartLine } from 'react-icons/fa';

const PythonCourses = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className="p-5 sm:p-10 bg-green-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-8 mb-5 sm:mb-0">
            <img
              src="/python.png" 
              alt="Web Development"
              className="w-full max-w-[900px] h-auto rounded-lg shadow-lg animate-fadeIn object-cover"
              loading="lazy" 
            />
          </div>
          <div className="w-full sm:w-1/2">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-600 mb-8 animate-fade-in">AI and Machine Learning with Python</h1>
              <p className="text-base sm:text-lg text-gray-700 mb-4 animate-slide-left">
                Dive into the exciting world of artificial intelligence and learn how to turn data into smart solutions. Our courses cover everything from the basics of Python to advanced machine learning techniques. Gain practical experience with real-world projects and modern tools used in AI. Learn from experienced instructors who will help you build and understand intelligent systems. Equip yourself with the skills to solve real problems and make a difference in the tech world. Start your journey with us and unlock new opportunities in AI and machine learning!
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 animate-slide-right">
                Explore the future of technology with our comprehensive AI and machine learning courses. From foundational Python programming to advanced AI concepts, we offer a range of packages to fit your learning goals. Join our expert-led sessions and gain hands-on experience with real-world projects. Discover the tools and techniques to excel in this dynamic field.
              </p>
            </div>
            <div className="text-center mt-8">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-bounce">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-5 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-4 animate-fade-in">Why Choose AI and Machine Learning?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaBrain />
              </div>
              <div className="ml-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Build Smart Models</h3>
                <p className="text-gray-700">Create real-world AI models and see your code come to life.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaCode />
              </div>
              <div className="ml-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Hands-On Data Analysis</h3>
                <p className="text-gray-700">Dive into data with interactive tools and practical exercises.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaDatabase />
              </div>
              <div className="ml-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Expert-Led Learning</h3>
                <p className="text-gray-700">Gain insights from top experts and get tailored support.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaChartLine />
              </div>
              <div className="ml-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Future-Proof Skills</h3>
                <p className="text-gray-700">Master Python and machine learning techniques that are in high demand.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-4 animate-fade-in">Python Programming Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaBrain />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 ml-4">Basic Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Introduction to Programming and Python: Start with the basics of programming and Python.</li>
                <li className="mb-2">Variables & Data Types: Learn about different data types and how to use them.</li>
                <li className="mb-2">Operators & Conditional Statements: Understand operators and control flow.</li>
                <li className="mb-2">Loops and Functions: Master loops and functions to write efficient code.</li>
                <li className="mb-2">Object-Oriented Programming (OOP): Dive into classes and objects.</li>
                <li className="mb-2">Game Development: Create simple games to apply your skills in a fun way.</li>
                <li className="mb-2">Projects: Complete 10+ engaging projects to build practical skills.</li>
              </ul>
              <p className="text-green-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-green-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaCode />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 ml-4">Standard Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Data Structures and Algorithms: Enhance problem-solving with advanced data structures.</li>
                <li className="mb-2">Advanced Patterns and Logic Building: Develop complex logic and patterns.</li>
                <li className="mb-2">Statistics and Probability: Understand key concepts for data analysis.</li>
                <li className="mb-2">Data Manipulation and Visualization: Learn to handle and visualize data effectively.</li>
                <li className="mb-2">Data Analysis Libraries: Use libraries like Pandas and Matplotlib for data tasks.</li>
                <li className="mb-2">Projects: Tackle 20+ detailed projects to apply advanced techniques.</li>
              </ul>
              <p className="text-green-500 mb-4">
                Unlock advanced skills for <span className="bg-yellow-200 text-green-600 font-bold">$25 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Standard
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaChartLine />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 ml-4">Premium Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Deep Learning and Neural Networks: Explore deep learning techniques.</li>
                <li className="mb-2">Artificial Intelligence Techniques: Master AI concepts for smart applications.</li>
                <li className="mb-2">Natural Language Processing: Understand how machines interpret human language.</li>
                <li className="mb-2">Computer Vision: Learn to analyze and understand images.</li>
                <li className="mb-2">AI Ethics and Responsibilities: Discuss the ethical implications of AI technology.</li>
                <li className="mb-2">Projects: Complete 30+ advanced projects showcasing your expertise.</li>
              </ul>
              <p className="text-green-500 mb-4">
                Become an AI expert for just <span className="bg-yellow-200 text-green-600 font-bold">$40 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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

export default PythonCourses;

