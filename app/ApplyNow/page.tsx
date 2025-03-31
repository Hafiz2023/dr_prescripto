"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyNow() {  // <-- Ensure this is a valid React component
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
  
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
  
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
   
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Application submitted successfully!");
    } else {
      alert("Error submitting application.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Apply for a Job
      </motion.h1>

      <motion.form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-left text-gray-700 font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="block text-left text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="block text-left text-gray-700 font-medium">Phone</label>
        <input
          type="text"
          name="phone"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

       

        <label className="block text-left text-gray-700 font-medium">Message</label>
        <textarea
          name="message"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Why should we hire you?"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
          whileTap={{ scale: 0.95 }}
        >
          Submit Application
        </motion.button>
      </motion.form>
    </div>
  );
}
