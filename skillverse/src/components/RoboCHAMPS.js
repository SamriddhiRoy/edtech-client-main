import React ,{ useEffect }from 'react';
import { FaHandsHelping, FaChalkboardTeacher, FaLightbulb, FaChild } from 'react-icons/fa';

const WebDevelopmentPackages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className="p-5 md:p-10 bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-5 md:p-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <img
              src="/web.png" 
              alt="Web Development"
              className="w-full h-[200px] md:h-[300px] rounded-lg shadow-lg animate-fadeIn object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-center text-indigo-600 mb-4 md:mb-8 animate-fade-in">Web Development</h1>
              <p className="text-lg text-gray-700 mb-2 md:mb-4 animate-slide-left">
                Embark on an exciting journey as you master web technologies and create interactive digital experiences. In our comprehensive course, you’ll unlock your potential with hands-on training and real-world projects. Transform your ideas into functional websites and explore cutting-edge technologies with expert guidance.
              </p>
              <p className="text-lg text-gray-700 mb-2 md:mb-4 animate-slide-right">
                Get ready to dive into the future of digital innovation, develop essential skills for the modern web, and start building your career with interactive lessons and practical coding experience. Join us and take the first step towards crafting engaging and impactful web solutions.
              </p>
            </div>
            <div className="text-center mt-5 md:mt-8">
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-bounce">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-5 md:p-8 mb-5 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-4 animate-fade-in">Why Choose Web Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="flex items-center animate-slide-left">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaHandsHelping />
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Hands-On Learning</h3>
                <p className="text-gray-700">Build Real-World Skills with Hands-On Projects and Interactive Coding</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaChalkboardTeacher />
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Expert Instructors</h3>
                <p className="text-gray-700">Master the Latest Web Technologies with Guidance from Industry Experts</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-left">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaLightbulb />
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Career Support</h3>
                <p className="text-gray-700">Receive Personalized Career Support and Advice to Launch Your Future</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaChild />
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Real-World Application</h3>
                <p className="text-gray-700">Apply What You Learn to Real-World Projects and Build a Strong Portfolio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-5 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-4 animate-fade-in">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg p-5 md:p-6 shadow-md animate-slide-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaHandsHelping />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 ml-2 md:ml-4">Basic Package</h3>
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
              <div className="text-center mt-2 md:mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-lg p-5 md:p-6 shadow-md animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaChalkboardTeacher />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 ml-2 md:ml-4">Standard Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Advanced HTML & CSS: Dive deeper into sophisticated web design techniques.</li>
                <li className="mb-2">Modern JavaScript: Learn the latest features and best practices.</li>
                <li className="mb-2">CSS and Its Frameworks: Utilize popular frameworks to enhance your designs.</li>
                <li className="mb-2">Problem-Solving: Develop critical thinking and coding skills.</li>
                <li className="mb-2">Building Web Applications: Create interactive web apps with user authentication.</li>
                <li className="mb-2">React Introduction: Start your journey with React.js for modern web development.</li>
                <li className="mb-2">Projects: Build 15+ projects to strengthen your portfolio.</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$25 per class.</span>
              </p>
              <div className="text-center mt-2 md:mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Standard
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg p-5 md:p-6 shadow-md animate-slide-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaLightbulb />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 ml-2 md:ml-4">Premium Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Full Stack Development: Master both front-end and back-end technologies.</li>
                <li className="mb-2">JavaScript Frameworks: Deep dive into React, Angular, or Vue.</li>
                <li className="mb-2">Database Management: Understand databases and back-end connections.</li>
                <li className="mb-2">Deployment and Hosting: Learn to deploy and host your applications.</li>
                <li className="mb-2">Data Structures and Algorithms: Build a strong foundation for technical interviews.</li>
                <li className="mb-2">Soft Skills Development: Enhance communication and teamwork abilities.</li>
                <li className="mb-2">Projects: Complete 20+ complex projects to showcase your expertise.</li>
              </ul>
              <p className="text-blue-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-blue-600 font-bold">$35 per class.</span>
              </p>
              <div className="text-center mt-2 md:mt-4">
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
