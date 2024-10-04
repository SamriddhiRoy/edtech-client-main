import React from "react";

function Banner() {
  return (
    <div className="bg-[url('https://develop.skillcraftersco.pages.dev/static/media/bg_illustration_3.4fd52d6a6586919ab156.svg')] bg-cover flex items-center pl-[2.5rem]">
      <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 pt-10 w-full">
        <div className="m-5 flex flex-col justify-center h-auto md:h-[41vw]">
          <div>
            <h1 className="text-[2rem] md:text-[3rem] font-bold">
              Enriching<span className="text-yellow-400"> Young Minds </span> with Lifelong Skills
            </h1>
            <h2 className="text-[1.2rem] md:text-[1.5rem]">
              Dream Big, Achieve More: Making Ambitions Come True
            </h2>
            <ol className="mt-5 list-disc list-inside">
              <li className="mb-2">Discover Tech with Inspiring Mentors</li>
              <li className="mb-2">Immerse Yourself in Project-Based Learning</li>
              <li className="mb-2">Explore Technologies Inside Out</li>
              <li className="mb-2">Customize Your Learning Journey</li>
              <li className="mb-2">Unlock Lifetime Access to Courses</li>
            </ol>
            <div>
              <button className="px-5 py-2 mx-2 my-4 text-[1rem] md:text-[1.3rem] bg-green-600 rounded-lg text-white border-2 border-green-600 hover:bg-white hover:text-green-600">
                View all courses
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://develop.skillcraftersco.pages.dev/static/media/heroImg.9cb2b37f680870c1e42616d116428891.svg"
            alt="Banner"
            className="m-5 w-[70%] md:w-[41vw] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

