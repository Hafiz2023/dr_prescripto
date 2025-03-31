"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const careers = [
  {
    title: "General Physician",
    location: "New York, USA",
    type: "Full-Time",
    image: "/doctor/doc1.png",
    description: "Join our team to provide world-class healthcare services and make a difference in patients' lives.",
  },
  {
    title: "Cardiologist",
    location: "Los Angeles, USA",
    type: "Part-Time",
    image: "/doctor/doc2.png",
    description: "Looking for experienced cardiologists to consult patients and provide expert medical care.",
  },
  {
    title: "Pediatrician",
    location: "London, UK",
    type: "Full-Time",
    image: "/doctor/doc3.png",
    description: "Passionate about child healthcare? Join our team and help shape young lives with expert pediatric care.",
  },
  {
    title: "Medical Researcher",
    location: "Berlin, Germany",
    type: "Remote",
    image: "/doctor/doc4.png",
    description: "Conduct cutting-edge research to advance medical science and improve healthcare globally.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 text-center">
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Join Our Medical Team
      </motion.h1>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        We are looking for skilled professionals to enhance healthcare services. Explore our openings below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {careers.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={job.image} alt={job.title} width={400} height={250} className="rounded-lg" />
            
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {job.title}
            </motion.h2>
            
            <p className="text-gray-500 mt-2">{job.location} • {job.type}</p>
            <p className="text-gray-600 mt-3">{job.description}</p>

            <Link href="/ApplyNow" passHref>
              <motion.button
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Careers;

