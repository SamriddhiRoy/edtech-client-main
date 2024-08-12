import React from 'react';
import { FaMobileAlt, FaCode, FaDatabase, FaRocket } from 'react-icons/fa';

const AppDevelopmentPackages = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-600 mb-4">App Development</h1>
          <p className="text-lg text-gray-700 mb-4">
            Dive into the exciting world of app development and learn how to create impactful mobile applications. Our comprehensive courses cover everything from the basics of React and React Native to advanced app development techniques. Gain practical experience with real-world projects and modern tools. Learn from expert instructors who will guide you in building and launching your own apps. Start your journey with us and unlock new opportunities in the app development industry!
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-yellow-600 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaMobileAlt />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Real-World Skills</h3>
                <p className="text-gray-700">Build practical skills with hands-on projects and real-world scenarios.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaCode />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert-Led Learning</h3>
                <p className="text-gray-700">Learn from industry professionals with real-world experience.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaDatabase />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Techniques</h3>
                <p className="text-gray-700">Master advanced app development techniques and tools.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaRocket />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Career Opportunities</h3>
                <p className="text-gray-700">Unlock new career opportunities with in-demand app development skills.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-yellow-600 mb-4">App Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaMobileAlt />
                </div>
                <h3 className="text-xl font-bold text-yellow-600 ml-4">Basic Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside">
                <li className="mb-2">Introduction to App Development: Learn the fundamentals of mobile app development.</li>
                <li className="mb-2">React Fundamentals and React Native Introduction: Understand the basics of React and get introduced to React Native.</li>
                <li className="mb-2">React Native Components and Styling: Learn to build and style components in React Native.</li>
                <li className="mb-2">Navigation in React Native: Understand how to implement navigation within your apps.</li>
                <li className="mb-2">Handling User Input: Learn methods to handle user input effectively.</li>
                <li className="mb-2">Data Fetching and API Integration: Discover how to fetch data and integrate APIs.</li>
                <li className="mb-2">Native Features and Device Integration: Learn to integrate native features and device capabilities.</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaCode />
                </div>
                <h3 className="text-xl font-bold text-yellow-600 ml-4">Standard Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside">
                <li className="mb-2">Advanced React Native Components: Dive deeper into building complex components.</li>
                <li className="mb-2">State Management: Learn advanced state management techniques.</li>
                <li className="mb-2">Advanced Navigation: Implement complex navigation patterns.</li>
                <li className="mb-2">Advanced Data Fetching: Explore advanced data fetching techniques and optimization.</li>
                <li className="mb-2">API Integration and Security: Learn to integrate and secure APIs.</li>
                <li className="mb-2">Performance Optimization: Understand techniques to optimize app performance.</li>
                <li className="mb-2">Offline Functionality: Discover how to implement offline capabilities in your apps.</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Standard
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaRocket />
                </div>
                <h3 className="text-xl font-bold text-yellow-600 ml-4">Premium Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside">
                <li className="mb-2">Comprehensive App Development Frameworks: Master various app development frameworks.</li>
                <li className="mb-2">Advanced Features Implementation: Implement advanced features like push notifications and in-app purchases.</li>
                <li className="mb-2">Machine Learning Integration: Discover how to integrate machine learning models into your apps.</li>
                <li className="mb-2">Advanced Native Features: Learn to use advanced native features and device integration.</li>
                <li className="mb-2">App Monetization Strategies: Explore different strategies for monetizing your apps.</li>
                <li className="mb-2">Publishing and Marketing: Learn how to publish and market your apps effectively.</li>
                <li className="mb-2">Cross-Platform Development: Explore how to develop apps for multiple platforms using React Native and other tools.</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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

export default AppDevelopmentPackages;
