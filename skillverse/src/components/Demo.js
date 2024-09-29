import React from 'react';
import {
  FaGraduationCap,
  FaUserTie,
  FaRegHandshake,
  FaChartLine,
  FaQuestionCircle,
  FaMoneyBillWave,
  FaClock,
  FaPlayCircle
} from 'react-icons/fa';

function AboutUsMission() {
  return (
    <>
      {/* About Us Section */}
      <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 mt-10 gap-12">
        <div className="flex items-center justify-center">
          <img
            src="/about.png" // Using about.png from public folder
            alt="About Us"
            className="w-full max-w-[800px] h-[500px] rounded-lg shadow-lg animate-fadeIn object-cover"
            loading="lazy" // Improves performance by lazy loading the image
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="p-8 bg-yellow-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl font-bold text-green-600 mb-6">About Us</h1>
            <p className="text-xl text-gray-700">
              Welcome to SkillVerses, where learning meets innovation and every lesson is an exciting journey! We're a passionate community of tech enthusiasts committed to empowering learners through cutting-edge education. Our dynamic programs, guided by expert instructors, foster a supportive environment where individuals of all ages can explore, create, and excel in the world of technology.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 mt-16 gap-12">
        <div className="flex items-center justify-center">
          <div className="p-8 bg-blue-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl font-bold text-yellow-500 mb-6">Our Mission</h1>
            <p className="text-xl text-gray-700">
              At SkillVerses, we empower individuals with a wide range of essential skills for the digital age. Our mission is to transform education through interactive, project-based learning that makes acquiring new skills an exciting journey. By fostering creativity, critical thinking, and innovation, we aim to inspire a lifelong passion for learning. Join us in building a brighter future, where each new skill opens doors to endless possibilities.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/mission.png" // Using mission.png from public folder
            alt="Our Mission"
            className="w-full max-w-[800px] h-[500px] rounded-lg shadow-lg animate-fadeIn object-cover"
            loading="lazy" // Improves performance by lazy loading the image
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-indigo-700 mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <FaGraduationCap className="text-5xl text-indigo-500 mb-6" />,
                title: "Transformative Project-Based Learning",
                description: "Dive into exciting, hands-on projects that turn theoretical knowledge into practical skills."
              },
              {
                icon: <FaUserTie className="text-5xl text-indigo-500 mb-6" />,
                title: "Expert Mentorship",
                description: "Learn from top-tier industry professionals who are passionate about sharing their expertise and guiding you every step of the way."
              },
              {
                icon: <FaRegHandshake className="text-5xl text-indigo-500 mb-6" />,
                title: "Personalized Learning Experience",
                description: "Benefit from a curriculum tailored to your unique learning style, pace, and interests, ensuring an engaging and effective educational journey."
              },
              {
                icon: <FaChartLine className="text-5xl text-indigo-500 mb-6" />,
                title: "Comprehensive Progress Tracking",
                description: "Stay informed with detailed, regular updates on your progress, helping you identify strengths and areas for improvement."
              },
              {
                icon: <FaQuestionCircle className="text-5xl text-indigo-500 mb-6" />,
                title: "24/7 Doubt Resolution",
                description: "Never get stuck—access round-the-clock support to overcome any learning hurdles instantly."
              },
              {
                icon: <FaMoneyBillWave className="text-5xl text-indigo-500 mb-6" />,
                title: "Risk-Free Enrollment",
                description: "Enjoy peace of mind with our 100% satisfaction guarantee—get a full refund if you're not completely satisfied with our services."
              },
              {
                icon: <FaClock className="text-5xl text-indigo-500 mb-6" />,
                title: "Flexible Learning Formats",
                description: "Choose the learning setup that works best for you: personalized one-on-one sessions or collaborative small group classes with peers."
              },
              {
                icon: <FaPlayCircle className="text-5xl text-indigo-500 mb-6" />,
                title: "Future-Ready Skill Development",
                description: "Prepare for the digital future with skills that are in high demand, positioning yourself for success in a rapidly evolving tech landscape."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {item.icon}
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsMission;

