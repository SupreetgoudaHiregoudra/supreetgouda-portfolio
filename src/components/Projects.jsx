import React from 'react';

const projects = [
  {
    title: 'Wildlife Classification using ResNet-101',
    description:
      'Contributed to a deep learning model that classifies wildlife species using ResNet-101. Trained on a custom dataset, the project was selected for presentation at the 3rd International Conference on Emerging Technologies in Computer Engineering.',
    tag: 'Deep Learning',
    github: 'https://github.com/SupreetgoudaHiregoudra/Wild-life-classification',
  },
  {
    title: 'Virtual Keyboard using AI and Computer Vision',
    description:
      'Developed a gesture-based virtual keyboard using Python, OpenCV, and MediaPipe. Enabled real-time hand-tracked input. Presented at Ingenious 2025, a national-level competition.',
    tag: 'Computer Vision',
    github: 'https://github.com/SupreetgoudaHiregoudra/virtual-keyboard',
  },
  {
    title: 'AI Image Generator – Full Stack Web App',
    description:
      'Built a web app using React.js and Flask that uses Stable Diffusion on Kaggle GPU to generate images from text prompts. Contributed to frontend and backend integration.',
    tag: 'Full Stack AI',
    github: 'https://github.com/SupreetgoudaHiregoudra/ai-image-generator',
  },
  {
    title: 'Chest X-ray Report Generator using Generative AI',
    description:
      'Helped train and integrate BLIP and GPT-2 models into a chatbot that generates diagnostic reports from X-ray images using Gradio. Showcased AI use in healthcare.',
    tag: 'GenAI & Healthcare',
    github: 'https://github.com/SupreetgoudaHiregoudra/medical-qa-app',
  },
  {
    title: 'Personal Expense Tracker with DevOps Automation',
    description:
      'Worked on CI/CD pipelines with GitHub, Docker, Jenkins, and AWS EC2 for a cloud-based expense tracker. Focused on DevOps automation and cloud deployment.',
    tag: 'DevOps & Cloud',
    github: 'https://github.com/SupreetgoudaHiregoudra/expense-tracker-devops',
  },
  {
    title: 'Automatic Chocolate Dispensing Machine',
    description:
      'Designed and implemented a chocolate vending machine using embedded systems and sensors. Automated the dispensing process with user selection and payment simulation.',
    tag: 'Embedded Systems',
    github: 'https://github.com/SupreetgoudaHiregoudra/automatic-chocolate-dispensing-machine',
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
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm mb-3">{project.description}</p>
                <span className="inline-block text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-100 px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
