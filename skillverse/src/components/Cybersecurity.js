import React ,{ useEffect }from 'react';
import { FaLock, FaShieldAlt, FaTools, FaVirus } from 'react-icons/fa';

const CybersecurityPackages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-5 md:p-10 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <img
              src="/cyber.png"
              alt="Web Development"
              className="w-full max-w-[900px] h-[300px] rounded-lg shadow-lg animate-fadeIn object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-4 animate-fade-in">Cybersecurity</h1>
              <p className="text-base md:text-lg text-gray-700 mb-4 animate-slide-left">
                Protect vital information and systems from cyber threats with our engaging, hands-on courses. Start with the basics and advance to cutting-edge techniques, all through real-world practice. Learn from expert instructors who will guide you in understanding and applying essential cybersecurity skills. Gain practical experience by working on real-world scenarios and stay current with the latest cybersecurity trends and technologies. Our courses open doors to exciting and rewarding career opportunities in cybersecurity. Plus, you’ll join a supportive community of learners and professionals dedicated to digital security. Safeguard digital environments, tackle cyber challenges, and make a difference in the tech world. Begin your journey with us and play a crucial role in securing the digital world!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-4 animate-fade-in">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <FaLock />, title: 'Real-World Skills', description: 'Gain hands-on experience with real-world scenarios, learning to protect against actual cyber threats.' },
              { icon: <FaShieldAlt />, title: 'Expert-Led Training', description: 'Learn from seasoned cybersecurity professionals who bring real-world expertise to the classroom.' },
              { icon: <FaTools />, title: 'Stay Ahead of Threats', description: 'Stay current with the latest trends and technologies in cybersecurity, ensuring you\'re always prepared.' },
              { icon: <FaVirus />, title: 'Career Opportunities', description: 'Open doors to high-demand cybersecurity roles and advance your career with in-demand skills.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start animate-slide-left">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.icon}
                </div>
                <div className="ml-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-4 animate-fade-in">Cybersecurity Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLock />,
                title: 'Basic Package',
                features: [
                  'Introduction to Cybersecurity: Understand the basics and importance of cybersecurity.',
                  'Cyber Threats & Vulnerabilities: Learn about common threats and vulnerabilities.',
                  'Network Security Basics: Discover fundamental network security practices.',
                  'Security Protocols: Study key security protocols and their uses.',
                  'Password Protection & Encryption: Implement techniques to secure passwords and data.',
                  'Intro to Ethical Hacking: Get a glimpse into ethical hacking practices.',
                  'Projects: Complete 10+ practical projects to apply what you\'ve learned.',
                ],
                price: '$15 per class',
              },
              {
                icon: <FaShieldAlt />,
                title: 'Standard Package',
                features: [
                  'Advanced Network Security: Dive deeper into securing network environments.',
                  'Threat Detection & Prevention: Learn methods to detect and prevent cyber threats.',
                  'Security Policies & Procedures: Understand how to create effective security policies.',
                  'Incident Response & Management: Explore how to manage and respond to security incidents.',
                  'Digital Forensics: Introduction to investigating cyber incidents.',
                  'Penetration Testing: Gain skills in identifying system vulnerabilities.',
                  'Projects: Work on 20+ comprehensive projects to build expertise.',
                ],
                price: '$15 per class',
              },
              {
                icon: <FaVirus />,
                title: 'Premium Package',
                features: [
                  'Comprehensive Cybersecurity Frameworks: Master various cybersecurity frameworks and standards.',
                  'Advanced Ethical Hacking: Explore advanced ethical hacking techniques and tools.',
                  'Malware Analysis and Reverse Engineering: Learn to analyze and reverse-engineer malware.',
                  'Advanced Threat Intelligence: Understand and use advanced threat intelligence for proactive defense.',
                  'Security Architecture and Design: Design robust security architectures for different systems.',
                  'Compliance and Legal Issues: Explore compliance requirements and legal aspects of cybersecurity.',
                  'Projects: Develop 30+ advanced projects to showcase your skills and prepare for complex cybersecurity challenges.',
                ],
                price: '$15 per class',
              },
            ].map((packageItem, index) => (
              <div key={index} className="bg-white rounded-lg p-4 md:p-6 shadow-md animate-slide-up">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {packageItem.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-purple-600 ml-4">{packageItem.title}</h3>
                </div>
                <ul className="text-gray-700 mb-4 list-disc list-inside">
                  {packageItem.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <p className="text-purple-500 mb-4">
                  Start your journey for just <span className="bg-yellow-200 text-purple-600 font-bold">{packageItem.price}</span>
                </p>
                <div className="text-center mt-4">
                  <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Choose {packageItem.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityPackages;
