import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';

function App() {
  const [selectedSection, setSelectedSection] = useState('home');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderSection = () => {
    switch (selectedSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar onNavigate={setSelectedSection} selected={selectedSection} />
      <main className="w-full">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
