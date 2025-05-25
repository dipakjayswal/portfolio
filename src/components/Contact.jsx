import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }
    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }

    // Simulate sending message
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:outline-none transition"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:outline-none transition"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:outline-none transition resize-none"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold transition"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`mt-4 text-center ${
              status.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
