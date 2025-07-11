import React from 'react';

// Import all PDFs
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

// Use this image as preview for all
import previewImage from '../assets/certificate16.jpg';

const certificates = [
  { title: 'Principles of Generative AI', file: certificate1 },
  { title: 'Applied Generative AI', file: certificate2 },
  { title: 'Intro to OpenAI GPT Models', file: certificate3 },
  { title: 'GPT-3 for Developers', file: certificate4 },
  { title: 'Generative Models for Developers', file: certificate5 },
  { title: 'NLP using Python', file: certificate6 },
  { title: 'Practical AWS for DevOps', file: certificate7 },
  { title: 'Automation with Ansible', file: certificate8 },
  { title: 'Practical Jenkins', file: certificate9 },
  { title: 'Linux for DevOps', file: certificate10 },
  { title: 'Dockerization Techniques', file: certificate11 },
  { title: 'DevOps Foundation', file: certificate12 },
  { title: 'CI/CD Pipeline with GitHub', file: certificate13 },
  { title: 'Agile Methodology', file: certificate14 },
  { title: 'Junos Associate', file: certificate15 },
  {
    title: 'Data Science with Python',
    file: previewImage, // this one is image itself
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
                src={previewImage}
                alt={cert.title}
                className="h-36 w-auto mb-4 rounded shadow object-contain bg-white"
              />
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                View or download your certificate
              </p>
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
