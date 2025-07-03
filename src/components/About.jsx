import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-4 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Journey */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4">✨ My Journey</h3>
            <p className="leading-relaxed text-md">
              I'm <span className="font-semibold text-pink-500 underline decoration-pink-500 underline-offset-4">Supreetgouda Hiregoudra</span>, an engineering student based in <span className="font-semibold text-pink-500 underline">Belagavi, Karnataka</span>. I’m passionate about solving real-world problems using <span className="text-pink-500 font-semibold underline">web development</span>, <span className="text-pink-500 font-semibold underline">Python</span>, <span className="text-pink-500 font-semibold underline">JavaScript</span>, <span className="text-pink-500 font-semibold underline">ML</span>, <span className="text-pink-500 font-semibold underline">GenAI</span> and <span className="text-pink-500 font-semibold underline">DevOps</span>.
              <br /><br />
              When I’m not coding, I participate in hackathons, explore tech, or build fun side projects 🚀
            </p>
          </div>

          {/* Right - Education */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow border-l-4 border-indigo-500">
              <h4 className="text-lg font-bold mb-1">🎓 B.E. in CSE</h4>
              <p className="text-sm">
                KLE Technological University, Belagavi
                <br />
                <span className="text-indigo-500">2022 - 2026</span>
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow border-l-4 border-indigo-400">
              <h4 className="text-lg font-bold mb-1">🏫 PU College</h4>
              <p className="text-sm">
                ICS Mahesh PU College, Dharwad
                <br />
                <span className="text-indigo-400">2020 - 2022</span>
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow border-l-4 border-indigo-300">
              <h4 className="text-lg font-bold mb-1">🏫 10th Grade</h4>
              <p className="text-sm">
                JTRS, Mundargi
                <br />
                <span className="text-indigo-300">2019 - 2020</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
