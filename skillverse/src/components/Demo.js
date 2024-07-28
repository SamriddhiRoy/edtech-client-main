import React from "react";

function Demo() {
  return (
    <div className=" bg-transparent grid grid-cols-2 mt-10">
      <div>
        <img
          src="https://develop.skillcraftersco.pages.dev/static/media/confusedBoy.d7f4dc8ee2078adbd578f3c765d5eb73.svg"
          alt=""
          className="m-5 w-[41vw]"
        />
      </div>
      <div className="m-5 flex flex-col justify-between h-[41vw]">
        <div>
          <h2 className="text-[2rem] font-bold text-yellow-400">Confused ?</h2>
          <h1 className="text-[3rem] font-bold	">Take Our Exploration Class </h1>
          {/* <ol className="list-image-[url(https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png)]"> */}
          <ol>
            <ol className="list-disc list-inside">
              <li className="mb-2">
                Hands-on exploration and live project demonstrations.
              </li>
              <li className="mb-2">
                Discuss future trends and opportunities in each domain.
              </li>
              <li className="mb-2">
                Understand the basics and advanced concepts of each field.
              </li>
              <li className="mb-2">
                Gain insights into potential careers and job roles.
              </li>
              <li className="mb-2">
                Learn about industry trends and skill demand.
              </li>
              <li className="mb-2">
                Help students identify their interests and strengths.
              </li>
              <li className="mb-2">Provide guidance on course selection.</li>
              <li className="mb-2">
                Q&A sessions to address student queries and concerns.
              </li>
              <div>
                <button className="px-7 py-1 mx-2 my-4 text-[1.3rem] bg-green-600 rounded-lg text-white  border-2 border-green-600 hover:bg-white hover:text-green-600 ">
                  Book free demo
                </button>
              </div>
            </ol>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Demo;
