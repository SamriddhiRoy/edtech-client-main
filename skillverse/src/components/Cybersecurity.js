import React from 'react';
import { FaLock, FaShieldAlt, FaTools, FaVirus } from 'react-icons/fa';

const CybersecurityPackages = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          <div className="w-1/2 pr-8">
          <img
              src="/cyber.png" // Using web.png from the public folder
              alt="Web Development"
              className="w-full max-w-[900px] h-[300px] rounded-lg shadow-lg animate-fadeIn object-cover"
              loading="lazy" // Improves performance by lazy loading the image
            />
          </div>
          <div className="w-1/2">
            <div>
              <h1 className="text-5xl font-bold text-center text-purple-600 mb-8 animate-fade-in">Cybersecurity</h1>
              <p className="text-lg text-gray-700 mb-4 animate-slide-left">
                Protect vital information and systems from cyber threats with our engaging, hands-on courses. Start with the basics and advance to cutting-edge techniques, all through real-world practice. Learn from expert instructors who will guide you in understanding and applying essential cybersecurity skills. Gain practical experience by working on real-world scenarios and stay current with the latest cybersecurity trends and technologies. Our courses open doors to exciting and rewarding career opportunities in cybersecurity. Plus, you’ll join a supportive community of learners and professionals dedicated to digital security. Safeguard digital environments, tackle cyber challenges, and make a difference in the tech world. Begin your journey with us and play a crucial role in securing the digital world!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4 animate-fade-in">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaLock />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Real-World Skills</h3>
                <p className="text-gray-700">Gain hands-on experience with real-world scenarios, learning to protect against actual cyber threats.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaShieldAlt />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert-Led Training</h3>
                <p className="text-gray-700">Learn from seasoned cybersecurity professionals who bring real-world expertise to the classroom.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-left">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaTools />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Stay Ahead of Threats</h3>
                <p className="text-gray-700">Stay current with the latest trends and technologies in cybersecurity, ensuring you're always prepared.</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-right">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                <FaVirus />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Career Opportunities</h3>
                <p className="text-gray-700">Open doors to high-demand cybersecurity roles and advance your career with in-demand skills.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4 animate-fade-in">Cybersecurity Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaLock />
                </div>
                <h3 className="text-xl font-bold text-purple-600 ml-4">Basic Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Introduction to Cybersecurity: Understand the basics and importance of cybersecurity.</li>
                <li className="mb-2">Cyber Threats & Vulnerabilities: Learn about common threats and vulnerabilities.</li>
                <li className="mb-2">Network Security Basics: Discover fundamental network security practices.</li>
                <li className="mb-2">Security Protocols: Study key security protocols and their uses.</li>
                <li className="mb-2">Password Protection & Encryption: Implement techniques to secure passwords and data.</li>
                <li className="mb-2">Intro to Ethical Hacking: Get a glimpse into ethical hacking practices.</li>
                <li className="mb-2">Projects: Complete 10+ practical projects to apply what you've learned.</li>
              </ul>
              <p className="text-purple-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-purple-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-bold text-purple-600 ml-4">Standard Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Advanced Network Security: Dive deeper into securing network environments.</li>
                <li className="mb-2">Threat Detection & Prevention: Learn methods to detect and prevent cyber threats.</li>
                <li className="mb-2">Security Policies & Procedures: Understand how to create effective security policies.</li>
                <li className="mb-2">Incident Response & Management: Explore how to manage and respond to security incidents.</li>
                <li className="mb-2">Digital Forensics: Introduction to investigating cyber incidents.</li>
                <li className="mb-2">Penetration Testing: Gain skills in identifying system vulnerabilities.</li>
                <li className="mb-2">Projects: Work on 20+ comprehensive projects to build expertise.</li>
              </ul>
              <p className="text-purple-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-purple-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Standard
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg p-6 shadow-md animate-slide-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  <FaVirus />
                </div>
                <h3 className="text-xl font-bold text-purple-600 ml-4">Premium Package</h3>
              </div>
              <ul className="text-gray-700 mb-4 list-disc list-inside blue-star-list">
                <li className="mb-2">Comprehensive Cybersecurity Frameworks: Master various cybersecurity frameworks and standards.</li>
                <li className="mb-2">Advanced Ethical Hacking: Explore advanced ethical hacking techniques and tools.</li>
                <li className="mb-2">Malware Analysis and Reverse Engineering: Learn to analyze and reverse-engineer malware.</li>
                <li className="mb-2">Advanced Threat Intelligence: Understand and use advanced threat intelligence for proactive defense.</li>
                <li className="mb-2">Security Architecture and Design: Design robust security architectures for different systems.</li>
                <li className="mb-2">Compliance and Legal Issues: Explore compliance requirements and legal aspects of cybersecurity.</li>
                <li className="mb-2">Projects: Develop 30+ advanced projects to showcase your skills and prepare for complex cybersecurity challenges.</li>
              </ul>
              <p className="text-purple-500 mb-4">
                Start your journey for just <span className="bg-yellow-200 text-purple-600 font-bold">$15 per class.</span>
              </p>
              <div className="text-center mt-4">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Choose Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityPackages;
