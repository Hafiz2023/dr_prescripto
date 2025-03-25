"use client"; 

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { useState } from "react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 shadow-md bg-white relative">
      {/* ✅ Clickable Logo */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Prescripto Logo"
          width={120}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      {/* ✅ Center Navigation Links (Hidden on Small Screens) */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-black font-medium hover:text-blue-500">
          HOME
        </Link>
        <Link href="/AllDoctors" className="text-black font-medium hover:text-blue-500">
          ALL DOCTORS
        </Link>
        <Link href="/AboutUs" className="text-black font-medium hover:text-blue-500">
          ABOUT
        </Link>
        <Link href="/ContactUs" className="text-black font-medium hover:text-blue-500">
          CONTACT
        </Link>
      </div>

      {/* ✅ Right Side: Buttons (Hidden on Small Screens) */}
      <div className="hidden md:flex space-x-4">
        <button className="border border-gray-300 px-4 py-2 rounded-full text-black hover:bg-gray-100">
          Admin Panel
        </button>

        {/* ✅ Motion Button with Link */}
        <Link href="/SignUp">
          <motion.button
            whileHover={{ scale: 1.1 }} // ✅ Hover Animation
            whileTap={{ scale: 0.95 }} // ✅ Click Effect
            className="bg-blue-500 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-600"
          >
            Create Account
          </motion.button>
        </Link>
      </div>

      {/* ✅ Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-black focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* ✅ Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden"
        >
          <Link href="/" className="text-black font-medium hover:text-blue-500" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link href="/AllDoctors" className="text-black font-medium hover:text-blue-500" onClick={() => setIsOpen(false)}>
            ALL DOCTORS
          </Link>
          <Link href="/AboutUs" className="text-black font-medium hover:text-blue-500" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
          <Link href="/ContactUs" className="text-black font-medium hover:text-blue-500" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>
          <button className="border border-gray-300 px-4 py-2 rounded-full text-black hover:bg-gray-100 w-3/4">
            Admin Panel
          </button>
          <Link href="/SignUp" className="w-3/4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-2 rounded-full w-full transition-all duration-300 hover:bg-blue-600"
            >
              Create Account
            </motion.button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
