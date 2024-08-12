import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 z-20">
      <div className="h-27 flex flex-row justify-between bg-white drop-shadow-md py-2">
        <div>
          <img
            src="/logo.png"
            alt="SkillVerses Logo"
            className="p-2" // Keep the padding
            style={{ width: '120px', height: '100px' }} // Adjust size
          />
        </div>
        <div className="flex flex-row justify-around">
          <button className="px-8 py-1 my-4 mx-2 bg-orange-500 rounded-lg text-white font-bold">
            Explore
          </button>
          <button className="px-4 py-1 mx-2 my-4 font-bold hover:text-orange-400">
            Courses
          </button>
          <button className="px-4 py-1 mx-2 my-4 font-bold hover:text-orange-400">
            About us
          </button>
          <button className="px-7 py-1 mx-2 my-4 bg-green-600 rounded-lg text-white font-bold border-2 border-green-600 hover:bg-white hover:text-green-600">
            Book free demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
