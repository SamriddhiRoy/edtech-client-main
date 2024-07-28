import React from "react";

function Banner() {
  return (
    <div className="bg-[url('https://develop.skillcraftersco.pages.dev/static/media/bg_illustration_3.4fd52d6a6586919ab156.svg')]  bg-cover pl-[2.5rem]">
      <div className=" bg-transparent grid grid-cols-2 pt-10">
        <div className="m-5 flex flex-col justify-between h-[41vw]">
          <div>
            <h1 className="text-[3rem] font-bold	">
              Learning made <span className="text-yellow-400">fun</span> for
              young minds{" "}
            </h1>
            <h2 className="text-[1.5rem]">Turning Visions into Reality</h2>
            {/* <ol className="list-image-[url(https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png)]"> */}
            <ol className="mt-5">
              <ol className="list-disc list-inside">
                <li className="mb-2">Learn from Tech Buddies</li>
                <li className="mb-2">Project-Based Learning</li>
                <li className="mb-2">
                  Comprehensive Exploration of Technologies
                </li>
                <li className="mb-2">
                  Customized Learning Lifetime courses access
                </li>
              </ol>
            </ol>
            <div>
              <button className="px-7 py-1 mx-2 my-4 text-[1.3rem] bg-green-600 rounded-lg text-white border-2 border-green-600 hover:bg-white hover:text-green-600 ">
                View all courses
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://develop.skillcraftersco.pages.dev/static/media/heroImg.9cb2b37f680870c1e42616d116428891.svg"
            alt=""
            className="m-5 w-[41vw]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
