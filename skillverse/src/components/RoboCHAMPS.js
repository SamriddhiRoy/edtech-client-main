import React from 'react';
import { FaHandsHelping, FaChalkboardTeacher, FaLightbulb, FaChild } from 'react-icons/fa';

const WebDevelopmentPackages = () => {
  return (
    <div className="p-10 bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          <div className="w-1/2 pr-8">
            <img
              src="/web.png" // Using web.png from the public folder
              alt="Web Development"
              className="w-full max-w-[900px] h-[300px] rounded-lg shadow-lg animate-fadeIn object-cover"
              loading="lazy" // Improves performance by lazy loading the image
            />
          </div>
          <div className="w-1/2">
            <div>
              <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8 animate-fade-in">Web Development</h1>
              <p className="text-lg text-gray-700 mb-4 animate-slide-left">
                Embark on an exciting journey as you master web technologies and create interactive digital experiences. In our comprehensive course, you’ll unlock your potential with hands-on training and real-world projects. Transform your ideas into functional websites and explore cutting-edge technologies with expert guidance.
              </p>
              <p className="text-lg text-gray-700 mb-4 animate-slide-right">
                Get ready to dive into the future of digital innovation, develop essential skills for the modern web, and start building your career with interactive lessons and practical coding experience. Join us and take the first step towards crafting engaging and impactful web solutions.
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
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4 animate-fade-in">Why Choose Web Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaHandsHelping />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Hands-On Learning</h3>
                <p className="text-gray-700">Build Real-World Skills with Hands-On Projects and Interactive Coding</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaChalkboardTeacher />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Instructors</h3>
                <p className="text-gray-700">Master the Latest Web Technologies with Guidance from Industry Experts</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaLightbulb />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Career Support</h3>
                <p className="text-gray-700">Receive Personalized Career Support and Advice to Launch Your Future</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaChild />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Real-World Application</h3>
                <p className="text-gray-700">Apply What You Learn to Real-World Projects and Build a Strong Portfolio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4 animate-fade-in">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaHandsHelping />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 ml-4">Basic Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">HTML: Build the structure of your websites.</li>
                <li className="mb-2">CSS: Style and layout your web pages.</li>
                <li className="mb-2">JavaScript: Add interactivity to your sites.</li>
                <li className="mb-2">Building Responsive Websites: Create designs that work on any device.</li>
                <li className="mb-2">Version Control: Track changes and collaborate with ease.</li>
                <li className="mb-2">GitHub and Deployment: Manage your code and deploy your projects.</li>
                <li className="mb-2">Projects: Complete 10+ exciting hands-on projects to apply your skills.</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaChalkboardTeacher />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 ml-4">Standard Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Advanced HTML & CSS: Dive deeper into sophisticated web design techniques.</li>
                <li className="mb-2">Modern JavaScript: Learn the latest features and best practices.</li>
                <li className="mb-2">CSS and Its Frameworks: Utilize popular frameworks to enhance your designs.</li>
                <li className="mb-2">Problem Solving and Automation: Tackle coding challenges and automate tasks.</li>
                <li className="mb-2">React: Build dynamic user interfaces with this powerful library.</li>
                <li className="mb-2">APIs and Real-Time Data: Connect your applications to live data sources.</li>
                <li className="mb-2">Projects: Create 20+ impressive projects that showcase your growing expertise!</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Standard
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaLightbulb />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 ml-4">Premium Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Full-Stack Development: Learn both front-end and back-end skills.</li>
                <li className="mb-2">Databases: Gain proficiency in managing and querying data.</li>
                <li className="mb-2">Cloud Hosting: Understand how to deploy your projects to the cloud.</li>
                <li className="mb-2">Security Best Practices: Learn how to secure your applications effectively.</li>
                <li className="mb-2">DevOps: Explore the methodologies and tools for software delivery.</li>
                <li className="mb-2">Career Support: Receive personalized coaching and networking opportunities.</li>
                <li className="mb-2">Projects: Work on 50+ advanced projects that prepare you for the job market!</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$15 per class.</span>
              </p>
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

export default WebDevelopmentPackages;
