import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Name & Resume */}
          <div>
            <h2 className="text-xl font-bold">Supreetgouda Hiregoudra</h2>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Engineering Student | Developer | Tech Explorer
            </p>
            <p className="text-sm mt-2">
              Turning ideas into innovations, useful experiences through innovative technology solutions.
            </p>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              View Resume
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-indigo-600 dark:text-indigo-400">Quick Links</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social + Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-indigo-600 dark:text-indigo-400">Connect With Me</h3>
            <div className="flex gap-4 text-2xl mb-4">
              <a href="https://github.com/SupreetgoudaHiregoudra" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-indigo-600" />
              </a>
              <a href="https://www.linkedin.com/in/supreetgouda-hiregoudra-b66b92278/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-indigo-600" />
              </a>
              <a href="https://www.instagram.com/s_hiregoudra__/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="https://wa.me/918971759646" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500" />
              </a>
            </div>
            <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <p>📍 Belagavi, Karnataka, India</p>
              <p>📧 supreetgoudahiregoudra@gmail.com</p>
              <p>📱 +91 8971759646</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} Supreetgouda Hiregoudra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
