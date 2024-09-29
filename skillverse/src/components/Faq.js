import React, { useState } from 'react';
import { FaShieldAlt, FaUserCheck, FaBookReader, FaTachometerAlt, FaCertificate, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do you ensure the safety and privacy of students during online classes?",
      answer: "We use secure, reliable platforms for our online classes and have strict privacy policies in place to protect students' personal information. Our instructors are trained to create a safe and respectful learning environment, and we monitor classes to ensure compliance with our safety standards.",
      icon: <FaShieldAlt size={40} className="text-blue-500" />,
      color: 'bg-blue-100',
    },
    {
      question: "Can parents track their child's progress?",
      answer: "Yes, parents can track their child's progress through regular updates, progress reports, and parent-teacher meetings. We believe in keeping parents involved and informed about their child's learning journey. Additionally, we provide feedback and recommendations to help support the child's continued growth.",
      icon: <FaUserCheck size={40} className="text-green-500" />,
      color: 'bg-green-100',
    },
    {
      question: "What type of support do you offer if a student struggles with the material?",
      answer: "We provide additional support through one-on-one tutoring sessions, extra practice materials, and regular check-ins to ensure that no student is left behind. Our instructors are always available to help students overcome any challenges they may face, offering personalized attention and tailored learning plans.",
      icon: <FaBookReader size={40} className="text-yellow-500" />,
      color: 'bg-yellow-100',
    },
    {
      question: "How do you keep students engaged and motivated?",
      answer: "We use a variety of interactive and hands-on activities, gamification techniques, and real-world projects to keep students engaged and motivated. Our goal is to make learning enjoyable and relevant to their interests and goals. By incorporating elements such as coding games, challenges, and project-based learning, we ensure that students remain excited about their education.",
      icon: <FaTachometerAlt size={40} className="text-orange-500" />,
      color: 'bg-orange-100',
    },
    {
      question: "Do you offer any certification upon course completion?",
      answer: "Yes, we provide certificates of completion for our courses, which can be a great addition to students' academic portfolios and help them demonstrate their skills and achievements. These certificates are recognized by many educational institutions and can be a valuable asset for future academic and career opportunities.",
      icon: <FaCertificate size={40} className="text-purple-500" />,
      color: 'bg-purple-100',
    },
    {
      question: "What sets our platform apart from others?",
      answer: "We stand out by offering personalized learning experiences tailored to each student's needs. Our curriculum is designed by experts and incorporates interactive and hands-on activities to make learning engaging and fun. Additionally, our instructors are highly qualified and passionate about teaching, ensuring that students receive the best education possible. Our focus on real-world applications and project-based learning helps students not only understand theoretical concepts but also apply them in practical scenarios.",
      icon: <FaStar size={40} className="text-red-500" />,
      color: 'bg-red-100',
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${faq.color}`}>
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex-shrink-0 mr-4">{faq.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 flex-1">{faq.question}</h2>
              <div>
                {activeIndex === index ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
            >
              <p className="text-gray-700 mt-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

