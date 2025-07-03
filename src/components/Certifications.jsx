import React from 'react';
import certificate1 from '../assets/certificate1.pdf';
import certificate2 from '../assets/certificate2.pdf';
import certificate3 from '../assets/certificate3.pdf';
import certificate4 from '../assets/certificate4.pdf';
import certificate5 from '../assets/certificate5.pdf';
import certificate6 from '../assets/certificate6.pdf';
import certificate7 from '../assets/certificate7.pdf';
import certificate8 from '../assets/certificate8.pdf';
import certificate9 from '../assets/certificate9.pdf';
import certificate10 from '../assets/certificate10.pdf';
import certificate11 from '../assets/certificate11.pdf';
import certificate12 from '../assets/certificate12.pdf';
import certificate13 from '../assets/certificate13.pdf';
import certificate14 from '../assets/certificate14.pdf';
import certificate15 from '../assets/certificate15.pdf';
import certificate16 from '../assets/certificate16.jpg';

const certificates = [
  {
    title: 'Principles of Generative AI',
    file: certificate1,
    image: certificate16, // Use the jpg as preview
    description: 'Intro to foundational concepts in GenAI.',
  },
  {
    title: 'Applied Generative AI',
    file: certificate2,
    image: certificate16,
    description: 'Hands-on GenAI implementation techniques.',
  },
  {
    title: 'Intro to OpenAI GPT Models',
    file: certificate3,
    image: certificate16,
    description: 'Fundamentals of GPT-based language models.',
  },
  {
    title: 'GPT-3 for Developers',
    file: certificate4,
    image: certificate16,
    description: 'Building apps with GPT-3 API.',
  },
  {
    title: 'Generative Models for Developers',
    file: certificate5,
    image: certificate16,
    description: 'Focus on diffusion and transformer-based models.',
  },
  {
    title: 'NLP using Python',
    file: certificate6,
    image: certificate16,
    description: 'Text preprocessing and NLTK basics.',
  },
  {
    title: 'Practical AWS for DevOps',
    file: certificate7,
    image: certificate16,
    description: 'Learned CI/CD with AWS.',
  },
  {
    title: 'Automation with Ansible',
    file: certificate8,
    image: certificate16,
    description: 'Hands-on with YAML and Playbooks.',
  },
  {
    title: 'Practical Jenkins',
    file: certificate9,
    image: certificate16,
    description: 'Pipeline creation and automation.',
  },
  {
    title: 'Linux for DevOps',
    file: certificate10,
    image: certificate16,
    description: 'Linux commands, bash scripting.',
  },
  {
    title: 'Dockerization Techniques',
    file: certificate11,
    image: certificate16,
    description: 'Containerized app deployment with Docker.',
  },
  {
    title: 'DevOps Foundation',
    file: certificate12,
    image: certificate16,
    description: 'Intro to CI/CD, automation pipelines.',
  },
  {
    title: 'CI/CD Pipeline with GitHub',
    file: certificate13,
    image: certificate16,
    description: 'Created and deployed full pipelines.',
  },
  {
    title: 'Agile Methodology',
    file: certificate14,
    image: certificate16,
    description: 'Scrum roles and agile sprints.',
  },
  {
    title: 'Junos Associate',
    file: certificate15,
    image: certificate16,
    description: 'Certified Juniper network associate.',
  },
  {
    title: 'Data Science with Python',
    file: certificate1, // Placeholder; you can update this to certificate16.pdf if needed
    image: certificate16,
    description: 'Data wrangling, analysis and visualization.',
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="w-full min-h-screen px-4 py-16 flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
    >
      <div className="max-w-[1400px] w-full" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-600 dark:text-indigo-400">
          🎓 Certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-36 w-auto mb-4 rounded shadow object-contain bg-white"
              />
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm font-medium"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
