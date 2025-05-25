import React from 'react';

export default function ResumeDownload() {
  return (
    <div className="max-w-xs mx-auto text-center mt-10">
      <a
        href="/assets/resume.pdf"  // Put your resume file path here
        download
        className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md transition"
      >
        Download Resume
      </a>
    </div>
  );
}
