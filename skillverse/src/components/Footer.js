import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RiHome2Line, RiInformationLine, RiContactsLine, RiBook2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-indigo-600 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
         
          <Link to="/">
            <img
              src="/logo2.png"
              alt="SkillVerses Logo"
              className="h-16 md:h-20 mb-4 md:mb-0" 
            />
          </Link>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <Link
              to="/courses"
              className="px-4 py-1 mx-2 my-2 font-bold text-white hover:text-yellow-400 transition duration-300"
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="px-4 py-1 mx-2 my-2 font-bold text-white hover:text-yellow-400 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/demo"
              className="px-4 py-1 mx-2 my-2 font-bold text-white hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

         
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

      
        <div className="text-center text-white text-sm mt-6">
       Copyright   &copy; {new Date().getFullYear()} Skillverses . All Rights Reserved.
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: #4f46e5; /* Solid color for footer */
        }
        a {
          font-family: 'Comic Sans MS', cursive, sans-serif; /* Fun font for kids */
        }
      `}</style>
    </footer>
  );
};

export default Footer;




