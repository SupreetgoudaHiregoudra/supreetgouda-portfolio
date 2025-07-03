import React from 'react';

const projects = [
  {
    title: 'Wildlife Classification using ResNet-101',
    description:
      'Contributed to a deep learning model that classifies wildlife species using ResNet-101. Trained on a custom dataset, the project was selected for presentation at the 3rd International Conference on Emerging Technologies in Computer Engineering.',
    tag: 'Deep Learning',
  },
  {
    title: 'Virtual Keyboard using AI and Computer Vision',
    description:
      'Developed a gesture-based virtual keyboard using Python, OpenCV, and MediaPipe. Enabled real-time hand-tracked input. Presented at Ingenious 2025, a national-level competition.',
    tag: 'Computer Vision',
  },
  {
    title: 'AI Image Generator – Full Stack Web App',
    description:
      'Built a web app using React.js and Flask that uses Stable Diffusion on Kaggle GPU to generate images from text prompts. Contributed to frontend and backend integration.',
    tag: 'Full Stack AI',
  },
  {
    title: 'Chest X-ray Report Generator using Generative AI',
    description:
      'Helped train and integrate BLIP and GPT-2 models into a chatbot that generates diagnostic reports from X-ray images using Gradio. Showcased AI use in healthcare.',
    tag: 'GenAI & Healthcare',
  },
  {
    title: 'Personal Expense Tracker with DevOps Automation',
    description:
      'Worked on CI/CD pipelines with GitHub, Docker, Jenkins, and AWS EC2 for a cloud-based expense tracker. Focused on DevOps automation and cloud deployment.',
    tag: 'DevOps & Cloud',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen px-4 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center scroll-mt-20"
    >
      <div className="max-w-[1400px] w-full" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-600 dark:text-indigo-400">
          📁 Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm mb-3">{project.description}</p>
              <span className="inline-block text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-100 px-3 py-1 rounded-full">
                {project.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
