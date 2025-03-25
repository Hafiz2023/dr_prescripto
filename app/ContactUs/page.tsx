"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Heading with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-center mb-8"
      >
        CONTACT <span className="text-blue-600">US</span>
      </motion.h2>

      {/* Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side: Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[48%]"
        >
          <Image
            src="/contactUs.png"
            alt="Doctor with patient"
            width={500}
            height={350}
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Right Side: Contact Details with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[48%] space-y-6"
        >
          {/* Office Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">OUR OFFICE</h3>
            <p className="text-gray-700">Prescripto Station</p>
            <p className="text-gray-700">Hafiz M Adil</p>
            <p className="text-gray-700">Tel: (320) 4338-215</p>
            <p className="text-gray-700">Email: adilamin374@gmail.com</p>
          </div>

          {/* Careers Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              CAREERS AT PRESCRIPTO
            </h3>
            <p className="text-gray-700">
              Learn more about our teams and job openings.
            </p>
          </div>

          {/* Explore Jobs Button with Animation */}
          <Link href="/careers">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#2563eb",
                color: "#ffffff",
              }}
              transition={{ duration: 0.2 }}
              className="border border-gray-500 px-6 py-2 rounded-md text-gray-900 hover:bg-blue-600 hover:text-white transition duration-300 mt-10"
            >
              Explore Jobs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
