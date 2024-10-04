import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="sticky top-0 z-20">
      <div className="flex flex-col md:flex-row justify-between bg-white drop-shadow-md py-2">
        <div className="flex justify-between items-center p-2">
          <Link to="/">
            <img
              src="/logo2.png"
              alt="SkillVerses Logo"
              className="h-16 md:h-20" 
            />
          </Link>
          <button
            className="md:hidden p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">✖️</span>
            ) : (
              <span className="text-2xl">☰</span> 
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`} 
        >
          <div className="flex flex-col md:flex-row">
            <Link
              to="/courses"
              className="px-4 py-1 mx-2 my-2 font-bold hover:text-orange-400"
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="px-4 py-1 mx-2 my-2 font-bold hover:text-orange-400"
            >
              About Us
            </Link>
          </div>
          <Link
            to="/demo"
            className="px-7 py-1 mx-2 my-2 bg-green-600 rounded-lg text-white font-bold border-2 border-green-600 hover:bg-white hover:text-green-600 md:mt-0 mt-2"
          >
            Book Free Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;





