"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ y: -5 }}
            animate={{ y: 5 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
          >
            <Image src="/logo.svg" alt="Logo" width={150} height={155} />
          </motion.div>
          <p className="text-gray-600 mt-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold">COMPANY</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            {["Home", "About us", "Delivery", "Privacy policy"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition duration-300 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold">GET IN TOUCH</h3>
          <p className="text-gray-600 mt-3">+92-320-4338-215</p>
          <p className="text-gray-600">adilamin374@gmail.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-300 mt-8 pt-4">
        Copyright 2024 @ Hafiz2023 - All Rights Reserved.
      </div>
      {/* ✅ WhatsApp Button */}
      <motion.a
        href="https://wa.me/923204338215"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:right-10  p-4 "
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image src="/whatapp.png" alt="WhatsApp" width={50} height={50} />
      </motion.a>
    </footer>
  );
};

export default Footer;
