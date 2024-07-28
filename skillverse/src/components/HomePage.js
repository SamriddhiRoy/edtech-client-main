import React from 'react';
import CourseCard from './CourseCard';
import { FaRobot, FaCode, FaPiggyBank, FaLanguage, FaBrain } from 'react-icons/fa';

const HomePage = () => {
  const courses = [
    {
      icon: <FaRobot size={48} className="text-red-500" />,
      title: 'RoboCHAMPS',
      description: 'Unleash your robotics genius. Innovate. Tinker. Experiment.',
      bgColor: 'bg-red-100',
      hoverColor: 'hover:bg-red-200',
      shadowColor: 'bg-red-300',
       link: '/robochamps'
    },
    {
      icon: <FaCode size={48} className="text-blue-500" />,
      title: 'CodeCHAMPS',
      description: 'Code with confidence. Build apps. Innovate. Succeed.',
      bgColor: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200',
      shadowColor: 'bg-blue-300'
    },
    {
      icon: <FaPiggyBank size={48} className="text-green-500" />,
      title: 'FinCHAMPS',
      description: 'Ensure your child\'s financial success with simulation-based money classes.',
      bgColor: 'bg-green-100',
      hoverColor: 'hover:bg-green-200',
      shadowColor: 'bg-green-300'
    },
    {
      icon: <FaLanguage size={48} className="text-yellow-500" />,
      title: 'LingoCHAMPS',
      description: 'Communicate for success with our language courses.',
      bgColor: 'bg-yellow-100',
      hoverColor: 'hover:bg-yellow-200',
      shadowColor: 'bg-yellow-300'
    },
    {
      icon: <FaBrain size={48} className="text-purple-500" />,
      title: 'Generative AI',
      description: 'Explore the magic of artificial intelligence with our AI courses.',
      bgColor: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-200',
      shadowColor: 'bg-purple-300'
    }
  ];

  return (
    <div className="relative pt-20 pb-12 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-full"></div>
      <h2 className="text-4xl font-bold text-center text-indigo-700 mt-8 mb-12">Our Courses</h2>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;







