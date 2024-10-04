// HomePage.js
import React ,{ useEffect }from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { FaRobot, FaCode, FaPiggyBank, FaLanguage, FaBrain, FaMobileAlt, FaShieldAlt, FaCalculator } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const courses = [
    {
      icon: <FaRobot size={48} className="text-red-500" />,
      title: 'Web Development',
      description: [
        '• Learn HTML, CSS, JavaScript, React.js, Node.js, and Express.js to create awesome websites and apps from scratch.',
        '• Build real projects to get hands-on experience making beautiful, responsive sites that work perfectly on any device.',
        '• Become a skilled full-stack developer by mastering both frontend and backend technologies.',
        '• Work on real-world projects, improve performance, and ensure security to become a confident and capable web developer.'
      ],
      bgColor: 'bg-red-100',
      hoverColor: 'hover:bg-red-200',
      shadowColor: 'bg-red-300',
      link: '/webdevelopment'
    },
    {
      icon: <SiPython size={48} className="text-blue-500" />,
      title: 'Python + Machine Learning',
      description: [
        '• Master Python and dive into machine learning and AI to build smart, data-driven applications.',
        '• Get hands-on experience with real projects, learning to create powerful models that make predictions and decisions.',
        '• Learn key concepts like data analysis, neural networks, and deep learning to become proficient in AI technologies.',
        '• Work on real-world problems, optimize models, and ensure accuracy to become a confident AI developer.'
      ],
      bgColor: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200',
      shadowColor: 'bg-blue-300',
      link: '/python-machine-learning'
    },
    {
      icon: <FaMobileAlt size={48} className="text-green-500" />,
      title: 'App Development',
      description: [
        '• Learn app development using modern tools and languages like Kotlin or Swift to create intuitive mobile applications.',
        '• Gain practical experience by building real apps, from design to deployment, ensuring they run smoothly on iOS and Android devices.',
        '• Master UI/UX design principles and backend integration to deliver seamless user experiences.',
        '• Work on real-world projects, optimize app performance, and ensure security to become a skilled app developer ready for the industry.'
      ],
      bgColor: 'bg-green-100',
      hoverColor: 'hover:bg-green-200',
      shadowColor: 'bg-green-300',
      link: '/appdevelopment'
    },
    {
      icon: <FaShieldAlt size={48} className="text-yellow-500" />,
      title: 'Cyber Security',
      description: [
        '• Dive into cybersecurity to learn how to protect systems and data from cyber threats and attacks.',
        '• Gain hands-on experience with practical exercises in identifying vulnerabilities and implementing defenses.',
        '• Master techniques in encryption, network security, and ethical hacking to secure systems effectively.',
        '• Work on real-world scenarios to assess risks, mitigate threats, and become a proficient cybersecurity professional.'
      ],
      bgColor: 'bg-yellow-100',
      hoverColor: 'hover:bg-yellow-200',
      shadowColor: 'bg-yellow-300',
      link: '/cybersecurity'
    },
    {
      icon: <FaCode size={48} className="text-purple-500" />,
      title: 'Scratch',
      description: [
        '• Discover Scratch to learn programming concepts through creative and interactive projects.',
        '• Build games, animations, and stories using Scratch\'s intuitive block-based coding environment.',
        '• Master coding fundamentals like loops, conditionals, and variables while having fun with coding.',
        '• Develop problem-solving skills and creativity by designing your own projects in Scratch.'
      ],
      bgColor: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-200',
      shadowColor: 'bg-purple-300',
      link: '/scratch'
    },
    {
      icon: <FaCalculator size={48} className="text-indigo-500" />,
      title: 'Mathematics',
      description: [
        '• Embark on a mathematical adventure to explore core concepts and their practical uses.',
        '• Develop strong problem-solving skills through hands-on exercises and real-world scenarios.',
        '• Master algebra, calculus, statistics, and more, building a solid foundation in mathematical theory.',
        '• Apply mathematical principles to analyze data, solve complex problems, and excel in fields ranging from science to finance.'
      ],
      bgColor: 'bg-indigo-100',
      hoverColor: 'hover:bg-indigo-200',
      shadowColor: 'bg-indigo-300',
      link: '/mathematics'
    }
  ];

  return (
    <div className="relative pt-20 pb-12 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-full"></div>
      <h2 className="text-4xl font-bold text-center text-indigo-700 mt-8 mb-12">Our Courses</h2>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <Link to={course.link} key={index}>
            <CourseCard {...course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;


