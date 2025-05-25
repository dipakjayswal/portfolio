import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    emailjs
      .send(
        "service_312f7jq",
        "template_5soxaum",
        formData,
        "PTNbubpWr9qhp9KcY"
      )
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
        {/* Input fields */}
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:outline-none resize-none"
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
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
