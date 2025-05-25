import React from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900">
      
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6 max-w-xl animate-fadeInLeft">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400">
          Hi, I’m Dipak Jayswal
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl">
         I am a passionate Full-Stack Developer specializing in building modern web and mobile applications that deliver seamless user experiences and robust performance.
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 px-8 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-12 md:mt-0 flex justify-center animate-fadeInRight">
        <img
          src="https://media.licdn.com/dms/image/v2/C4E03AQE16VY8U8DmjQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635446307649?e=1753920000&v=beta&t=G1hJArNDTcsrt_AOVNAt3vaLHlUTnRXWhDtUypoYcxw" 
          alt="Dipak Jayswal"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-400 shadow-lg"
        />
      </div>
    </div>
  );
}
