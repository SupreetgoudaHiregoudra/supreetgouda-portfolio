import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFolderOpen,
} from 'react-icons/fa';
import {
  HiOutlineDocumentArrowDown,
  HiOutlineDocumentMagnifyingGlass,
} from 'react-icons/hi2';
import { GiGraduateCap } from 'react-icons/gi';
import myImage from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';

const Home = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen px-4 py-16 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
    >
      <div className="w-full max-w-[1400px] mx-auto text-center" data-aos="fade-up">
        {/* Name and Title */}
        <h1 className="text-4xl font-bold mb-4">
          Hi, I’m{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            Supreetgouda Hiregoudra
          </span>
        </h1>
        <p className="text-lg mb-6">Engineering Student | Tech Explorer</p>

        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <img
            src={myImage}
            alt="Supreetgouda"
            className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-lg ring-4 ring-white dark:ring-gray-800"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/SupreetgoudaHiregoudra" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-indigo-600" />
          </a>
          <a href="https://www.linkedin.com/in/supreetgouda-hiregoudra-b66b92278/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-indigo-600" />
          </a>
          <a href="https://www.instagram.com/s_hiregoudra__/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://wa.me/918971759646" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:text-green-500" />
          </a>
        </div>

        {/* Short About */}
        <p className="max-w-2xl mx-auto mb-10">
          I’m an enthusiastic developer passionate about crafting responsive and dynamic web experiences using modern tech like React, Python, ML, and more.
        </p>

        {/* Info Cards */}
        <div className="flex justify-center flex-wrap gap-6">
          {/* Projects */}
          <div
            onClick={() => scrollToSection('projects')}
            className="w-64 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl text-indigo-500"><FaFolderOpen /></div>
              <span className="bg-indigo-600 text-white text-sm px-2 py-0.5 rounded-full">5+</span>
            </div>
            <p className="font-semibold text-lg group-hover:underline">Projects</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Full-stack, AI/ML & real-world apps</p>
          </div>

          {/* Resume */}
          <div className="w-64 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl text-indigo-500"><HiOutlineDocumentMagnifyingGlass /></div>
              <HiOutlineDocumentArrowDown className="text-2xl text-indigo-500" />
            </div>
            <p className="font-semibold text-lg">Resume</p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 dark:text-indigo-400 underline"
              >
                View
              </a>
              <a
                href={resume}
                download
                className="text-sm text-indigo-600 dark:text-indigo-400 underline"
              >
                Download
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div
            onClick={() => scrollToSection('about')}
            className="w-64 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl text-indigo-500"><GiGraduateCap /></div>
              <span className="bg-indigo-600 text-white text-sm px-2 py-0.5 rounded-full">5+</span>
            </div>
            <p className="font-semibold text-lg group-hover:underline">Certifications</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Courses & achievements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
