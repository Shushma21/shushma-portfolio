import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="max-w-md w-full p-6 bg-gray-800 rounded-lg border-2 border-green-500 shadow-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl mb-4 text-green-300">Contact Me</h2>

        <form
          action="https://formsubmit.co/33fcf3adf21fb2e1ad593eae79987353"
          method="POST"
          className="space-y-4 relative"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-[-60px] right-[-1px] text-green-300 hover:text-green-500"
          >
            ✖
          </button>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-green-500 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-green-500 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-green-500 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
