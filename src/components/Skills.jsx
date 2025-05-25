import React from 'react';

const frontEndSkills = [
  'React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux', 'TypeScript',
];
const backEndSkills = [
  'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL', 'SQL', 'Docker',
];

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Frontend */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 border-b border-indigo-400 pb-2">Front-End</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {frontEndSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 border-b border-indigo-400 pb-2">Back-End</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {backEndSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
