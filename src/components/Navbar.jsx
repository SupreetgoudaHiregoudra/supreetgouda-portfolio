import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ onNavigate, selected }) => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

 const links = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'contact'];


  return (
    <nav className="fixed w-full z-20 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Supreetgouda Hiregoudra
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map(link => (
            <button
              key={link}
              onClick={() => onNavigate(link)}
              className={`capitalize hover:text-indigo-500 dark:hover:text-indigo-400 ${
                selected === link ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-800 dark:text-gray-200 ml-4"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
          {links.map(link => (
            <button
              key={link}
              onClick={() => {
                onNavigate(link);
                setOpen(false);
              }}
              className="block w-full text-left capitalize text-gray-800 dark:text-white"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-800 dark:text-white mt-4"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
