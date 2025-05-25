import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <header className="fixed top-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-md z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <a href="#hero" className="text-2xl font-bold hover:text-indigo-400">MyPortfolio</a>
          <ul className="flex space-x-6 text-lg">
            {['home','about','skills','projects','contact','resume'].map((sec) => (
              <li key={sec}>
                <a href={`#${sec}`} className="hover:text-indigo-400 capitalize">{sec}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-19">
        <section id="home"><Hero /></section>
         <section id="about" className="container mx-auto px-4 py-20"><About /></section>
     <section id="skills" className="container mx-auto px-4 py-20"><Skills /></section>
          <section id="projects" className="container mx-auto px-4 py-20"><Projects /></section>
        <section id="contact" className="container mx-auto px-4 py-20"><Contact /></section>
        <section id="resume" className="container mx-auto px-4 py-20"><ResumeDownload /></section>
      </main>

      <footer className="text-center text-gray-500 py-8">
        © {new Date().getFullYear()} Full-Stack Developer Portfolio
      </footer>
    </div>
  );
}

export default App;
