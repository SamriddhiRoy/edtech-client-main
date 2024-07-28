import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RiHome2Line, RiInformationLine, RiContactsLine, RiBook2Line } from 'react-icons/ri'; // Import icons for links

const Footer = () => {
  return (
    <footer className="bg-indigo-600 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
     
          <div className="flex flex-col mb-4 md:mb-0 md:mr-8">
            <h3 className="text-white text-xl mb-4">Explore</h3>
            <a href="#" className="text-white hover:text-gray-300 flex items-center mb-2 transition duration-300">
              <RiHome2Line className="mr-2" size={20} /> Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 flex items-center mb-2 transition duration-300">
              <RiInformationLine className="mr-2" size={20} /> About Us
            </a>
            <a href="#" className="text-white hover:text-gray-300 flex items-center mb-2 transition duration-300">
              <RiBook2Line className="mr-2" size={20} /> Courses
            </a>
            <a href="#" className="text-white hover:text-gray-300 flex items-center mb-2 transition duration-300">
              <RiContactsLine className="mr-2" size={20} /> Contact
            </a>
          </div>

      
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



