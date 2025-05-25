import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web app for managing tasks efficiently with React and Node.js.',
    imageUrl: 'https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg', // Put your project image here
    liveDemo: 'https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg',
    repo: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'E-commerce platform built with MERN stack featuring real-time payments.',
    imageUrl: 'https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg',
    liveDemo: 'https://i.etsystatic.com/20116942/r/il/ebb4be/6607106719/il_1588xN.6607106719_ha19.jpg',
    repo: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    description: 'Portfolio website with dark theme and responsive design using React and Tailwind.',
    imageUrl: 'https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg',
    liveDemo: 'https://i.etsystatic.com/20116942/r/il/ebb4be/6607106719/il_1588xN.6607106719_ha19.jpg',
    repo: 'https://github.com/yourusername/project-three',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">Projects</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map(({ title, description, imageUrl, liveDemo, repo }) => (
          <div
            key={title}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <div className="flex space-x-4">
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
