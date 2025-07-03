import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: "3rd International Conference on Power Engineering and Intelligent Systems",
    description:
      "Participated in the conference organized by NIT Uttarakhand where my research paper was selected for presentation.",
  },
  {
    title: "Ingenious 2025 – National Level Technical Project Competition",
    description:
      "Participated in Ingenious 2025 held at Angadi Institute of Technology and Management.",
  },
  {
    title: "Shrishti 2025 – 36-Hour Hackathon",
    description:
      "Participated in a national-level hackathon at Acharya Institute of Technology, Bangalore.",
  },
  {
    title: "Workshop on Generative AI",
    description:
      "Attended a GenAI workshop at KLE Dr. M. S. Sheshgiri College of Engineering and Technology, Belagavi.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="w-full min-h-screen px-4 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center scroll-mt-20"
    >
      <div className="max-w-[1000px] w-full" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-600 dark:text-indigo-400">
          🏆 Achievements
        </h2>

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaTrophy className="text-yellow-500 text-xl" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
