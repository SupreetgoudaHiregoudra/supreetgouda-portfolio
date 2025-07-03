import React from 'react';

const technicalSkills = [
  {
    category: 'Languages & Frameworks',
    skills: ['Python', 'C', 'JavaScript', 'HTML/CSS', 'MySQL'],
  },
  {
    category: 'Concepts & Methodologies',
    skills: [
      'Data Structures and Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Software Design Patterns (Singleton, Factory, Observer)',
      'TCP/IP',
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'GitHub', 'VS Code', 'Jupyter Notebook', 'GitHub Actions (CI/CD)', 'Google Colab', 'AWS EC2',
    ],
  },
];

const softSkills = [
  'Effective Communication',
  'Teamwork & Collaboration',
  'Adaptability',
  'Time Management',
  'Critical Thinking',
  'Leadership',
  'Attention to Detail',
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen px-4 py-16 flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
    >
      <div className="max-w-[1400px] w-full" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600 dark:text-indigo-400">
          💻 Skills Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">🧠 Technical Skills</h3>
            {technicalSkills.map((section, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-md font-semibold mb-2">{section.category}</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  {section.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">🤝 Soft Skills</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              {softSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
