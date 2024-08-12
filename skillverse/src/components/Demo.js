import React from 'react';
import { FaGraduationCap, FaUserTie, FaRegHandshake, FaChartLine, FaQuestionCircle, FaMoneyBillWave, FaClock, FaPlayCircle } from 'react-icons/fa';

function AboutUsMission() {
  return (
    <>
      {/* About Us Section */}
      <div className="bg-transparent grid grid-cols-2 mt-10">
        <div className="flex items-center justify-center">
          <div className="p-5 bg-pastel-yellow rounded-lg">
            <h1 className="text-[3rem] font-bold text-green-600 mb-4">About Us</h1>
            <p className="text-lg mb-6">
              Welcome to SkillVerses, where learning meets innovation and every lesson is an exciting journey! We're a passionate community of tech enthusiasts committed to empowering learners through cutting-edge education. Our dynamic programs, guided by expert instructors, foster a supportive environment where individuals of all ages can explore, create, and excel in the world of technology.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://develop.skillcraftersco.pages.dev/static/media/confusedBoy.d7f4dc8ee2078adbd578f3c765d5eb73.svg"
            alt="About Us"
            className="m-5 w-[41vw]"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-transparent grid grid-cols-2 mt-10">
        <div className="flex items-center justify-center">
          <img
            src="https://develop.skillcraftersco.pages.dev/static/media/confusedBoy.d7f4dc8ee2078adbd578f3c765d5eb73.svg"
            alt="Our Mission"
            className="m-5 w-[41vw]"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="p-5 bg-pastel-blue rounded-lg">
            <h1 className="text-[3rem] font-bold text-yellow-500 mb-4">Our Mission</h1>
            <p className="text-lg mb-6">
              Welcome to SkillVerses, where we empower individuals with a wide range of essential skills for the digital age. Our mission is to transform education through interactive, project-based learning that makes acquiring new skills an exciting journey. By fostering creativity, critical thinking, and innovation, we aim to inspire a lifelong passion for learning. Join us in building a brighter future, where each new skill opens doors to endless possibilities.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <div className="why-choose-us-overlay"></div>
        <div className="why-choose-us-content">
          <h2 className="why-choose-us-title">Why Choose Us?</h2>
          <div className="why-choose-us-grid">
            {[
              {
                icon: <FaGraduationCap className="why-choose-us-icon" />,
                title: "Transformative Project-Based Learning",
                description: "Dive into exciting, hands-on projects that turn theoretical knowledge into practical skills."
              },
              {
                icon: <FaUserTie className="why-choose-us-icon" />,
                title: "Expert Mentorship",
                description: "Learn from top-tier industry professionals who are passionate about sharing their expertise and guiding you every step of the way."
              },
              {
                icon: <FaRegHandshake className="why-choose-us-icon" />,
                title: "Personalized Learning Experience",
                description: "Benefit from a curriculum tailored to your unique learning style, pace, and interests, ensuring an engaging and effective educational journey."
              },
              {
                icon: <FaChartLine className="why-choose-us-icon" />,
                title: "Comprehensive Progress Tracking",
                description: "Stay informed with detailed, regular updates on your progress, helping you identify strengths and areas for improvement."
              },
              {
                icon: <FaQuestionCircle className="why-choose-us-icon" />,
                title: "24/7 Doubt Resolution",
                description: "Never get stuck—access round-the-clock support to overcome any learning hurdles instantly."
              },
              {
                icon: <FaMoneyBillWave className="why-choose-us-icon" />,
                title: "Risk-Free Enrollment",
                description: "Enjoy peace of mind with our 100% satisfaction guarantee—get a full refund if you're not completely satisfied with our services."
              },
              {
                icon: <FaClock className="why-choose-us-icon" />,
                title: "Flexible Learning Formats",
                description: "Choose the learning setup that works best for you: personalized one-on-one sessions or collaborative small group classes with peers."
              },
              {
                icon: <FaPlayCircle className="why-choose-us-icon" />,
                title: "Future-Ready Skill Development",
                description: "Prepare for the digital future with skills that are in high demand, positioning yourself for success in a rapidly evolving tech landscape."
              }
            ].map((item, index) => (
              <div key={index} className="why-choose-us-box">
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsMission;



