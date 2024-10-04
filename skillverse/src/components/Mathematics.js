import React ,{ useEffect }from 'react';

const MathematicsPackages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className="p-10 bg-green-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-green-600 mb-4">Mathematics</h1>
          <p className="text-lg text-gray-700">
            Our expertly designed curriculum ensures your child builds a solid foundation in math while exploring engaging and age-appropriate content. We focus on aligning with school standards and promoting a deep understanding of mathematical principles. With personalized support and enrichment opportunities, we aim to boost your child’s confidence and skills in math. Join us to provide your child with the tools and knowledge needed for academic success and a love for learning!
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">Why Choose Our Mathematics Course?</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li className="mb-2">Holistic Curriculum: Covers essential math topics from Kindergarten through 8th grade.</li>
            <li className="mb-2">Standards-Aligned Learning: Ensures adherence to current educational standards and practices.</li>
            <li className="mb-2">Conceptual Mastery: Prioritizes understanding fundamental concepts rather than just memorization.</li>
            <li className="mb-2">Enhanced Skill Development: Offers targeted practice to build and strengthen key math skills.</li>
            <li className="mb-2">Personalized Support: Provides tailored enrichment programs and support to meet individual learning needs.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">Comprehensive Mathematics Package</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li className="mb-2">Holistic Curriculum Coverage: Thorough content spanning Kindergarten to 8th grade.</li>
            <li className="mb-2">Standards-Aligned Learning: Lessons designed to meet and exceed school curriculum standards.</li>
            <li className="mb-2">Conceptual Mastery: Focus on deep understanding of mathematical principles.</li>
            <li className="mb-2">Enhanced Skill Development: Structured practice to develop and refine essential math skills.</li>
            <li className="mb-2">Personalized Support: Additional resources and personalized support to cater to each student's needs.</li>
          </ul>
          <p className="text-blue-500 mt-4">
            Start your child’s journey with us and help them excel in math with a starting price of <span className="bg-yellow-200 text-blue-600 font-bold">$15 per class.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MathematicsPackages;
