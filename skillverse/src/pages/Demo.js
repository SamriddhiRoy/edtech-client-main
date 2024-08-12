import React, { useState } from "react";
import Card from "../components/Card";

function DemoPage() {
  const courses = [
    {
      title: "Hands-On Experience",
      description:
        "Get a feel for the interactive and engaging teaching style.",
      bgColor: "bg-red-100",
      hoverColor: "hover:bg-red-200",
      shadowColor: "bg-red-300",
    },
    {
      title: "Curriculum Overview",
      description:
        "Understand the course structure and content that will be covered.",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      shadowColor: "bg-blue-300",
    },
    {
      title: "Meet the Instructor",
      description:
        "Interact with the instructor to gauge their expertise and teaching methods.",
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-200",
      shadowColor: "bg-green-300",
    },
    {
      title: "Interactive Learning Environment",
      description:
        "Experience the dynamic and supportive learning environment first-hand.",
      bgColor: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
      shadowColor: "bg-yellow-300",
    },
    {
      title: "Q&A Session",
      description:
        "Get all your questions answered about the course, schedule, and outcomes.",
      bgColor: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      shadowColor: "bg-purple-300",
    },
  ];
  const rightInput = [
    {
      id: "email",
      value: "email",
      placeholder: "Email id",
    },
    {
      id: "number",
      value: "number",
      placeholder: "Contact No.",
    },
    {
      id: "course",
      value: "course",
      placeholder: "Interested Course",
    },
    {
      id: "country",
      value: "country",
      placeholder: "Country",
    },
  ];
  const leftInput = [
    {
      id: "pName",
      value: "pName",
      placeholder: "Parent's Name",
    },
    {
      id: "sName",
      value: "sName",
      placeholder: "Student's Name",
    },
    {
      id: "grade",
      value: "grade",
      placeholder: "Grade",
    },
    {
      id: "city",
      value: "city",
      placeholder: "City",
    },
  ];
  const [formData, setFormData] = useState({
    pName: "",
    sName: "",
    city: "",
    grade: "",
    email: "",
    number: "",
    country: "",
  });
  const handleSubmit = () => {
    // make request with form Data
  };

  return (
    <div className="mb-20">
      <div
        className=" m-7 h-72 bg-[length:95vw_288px] rounded-3xl flex justify-center items-center text-center"
        style={{ backgroundImage: "url('/DemoBanner4.png')" }}
      >
        <h2 className="sm:text-5xl md:text-6xl text-9xl font-semibold uppercase bg">
          Take our demo
          <br />
          class today!
        </h2>
      </div>
      <div className="flex flex-row justify-center">
        <div className="bg-[url('https://develop.skillcraftersco.pages.dev/static/media/bg_illustration_3.4fd52d6a6586919ab156.svg')] border-2 border-gray-200 rounded-lg w-[60vw] mr-5 p-7">
          <div className="flex flex-col items-center w-full mb-10">
            <h1 className="font-bold text-center w-full uppercase text-4xl mt-8">
              Take Free Demo
            </h1>
            <div className="mt-8 flex w-[70%] justify-center">
              <div className="flex items-center flex-col">
                <img
                  className="sm:w-10 sm:h-10 h-6 w-6"
                  src="https://cdn-icons-png.flaticon.com/512/8634/8634230.png"
                  alt=""
                />
                <h3 className="text-center sm:w-32 w-24 font-medium sm:text-sm text-xs mt-2">
                  Apply for Demo className
                </h3>
              </div>
              <div className="border-t-4 border-black w-full h-2 mt-7"></div>
              <div className="flex items-center flex-col">
                <img
                  className="sm:w-10 sm:h-10 h-6 w-6"
                  src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                  alt=""
                />
                <h3 className="text-center sm:w-32 w-24 font-medium sm:text-sm text-xs mt-2">
                  Schedule a meet
                </h3>
              </div>
              <div className="border-t-4 border-black w-full h-2 mt-7"></div>
              <div className="flex items-center flex-col">
                <img
                  className="sm:w-10 sm:h-10 h-6 w-6"
                  src="https://cdn-icons-png.flaticon.com/512/2997/2997592.png"
                  alt=""
                />
                <h3 className="text-center sm:w-32 w-24 font-medium sm:text-sm text-xs mt-2">
                  Take the Demo class
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <div>
              {leftInput.map((input, index) => (
                <div className="mb-7">
                  <input
                    className="shadow appearance-none border rounded w-[120%] py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    id={`${input.id}`}
                    type="text"
                    value={formData[input.value]}
                    onChange={(e) => {
                      setFormData({ ...formData, [input.id]: e.target.value });
                    }}
                    placeholder={`${input.placeholder}`}
                  />
                </div>
              ))}
            </div>
            <div>
              {rightInput.map((input, index) => (
                <div className="mb-7">
                  <input
                    className="shadow appearance-none border rounded w-[120%] py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    id={`${input.id}`}
                    type="text"
                    value={formData[input.value]}
                    onChange={(e) => {
                      setFormData({ ...formData, [input.id]: e.target.value });
                    }}
                    placeholder={`${input.placeholder}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center ">
            <button
              className=" mt-4 px-7 py-1 mx-2 my-4 text-[1.3rem] bg-green-600 rounded-lg text-white border-2 border-green-600 hover:bg-white hover:text-green-600 "
              onClick={handleSubmit}
            >
              Register for Demo Class
            </button>
          </div>
        </div>
        <div className="w-[33vw]">
          <div className="flex flex-col justify-center">
            {courses.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoPage;
