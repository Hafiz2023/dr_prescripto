"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaBookMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-black py-10 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={60}
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link href="/AboutUs" className="hover:text-blue-600 transition">
              About Us
            </Link>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>
                <Link
                  href="/MedicalSpecialties"
                  className="hover:text-blue-600 transition"
                >
                  Medical Specialties
                </Link>
              </li>
              <li>
                <Link
                  href="/SurgicalSpecialties"
                  className="hover:text-blue-600 transition"
                >
                  Surgical Specialties
                </Link>
              </li>
              <li>
                <Link
                  href="/FallPreventionPage"
                  className="hover:text-blue-600 transition"
                >
                  Patient Education
                </Link>
              </li>
              <li>
                <Link
                  href="/Careers"
                  className="hover:text-blue-600 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/HospitalDetails"
                  className="hover:text-blue-600 transition"
                >
                  Hospital Details
                </Link>
              </li>

              <ul>
                <li>
                  <Link
                    href="/ServicesHospital"
                    className="hover:text-blue-600 transition"
                  >
                    Services Hospital
                  </Link>
                </li>
                <ul>
                <li>
                  <Link
                    href="/Management"
                    className="hover:text-blue-600 transition"
                  >
                    Mangement
                  </Link>
                </li>
              </ul>
              </ul>
            </ul>
          </div>
        </div>

        {/* Contact Info & Appointment */}
        <div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">Contact Info</h4>
            <div className="flex items-center text-gray-600 text-sm gap-2 mb-1">
              <FaPhone className="text-blue-500" />
              <span>+92-4338-215</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>adilamin374@gmail</span>
            </div>
            
              <Link
                href="/ComplianceHelpline"
                className="hover:text-blue-600 transition"
              >
                Compliance Helpline
              </Link>
        
          </div>

          <div className="border-t border-gray-300 pt-4">
            <h4 className="font-semibold text-gray-700 mb-2">
              Book An Appointment
            </h4>
            <Link
              href="/Appointment"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition text-sm"
            >
              <FaBookMedical />
              <span>Schedule Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-300 mt-8 pt-4">
        Copyright © {new Date().getFullYear()} Hafiz Adil - All Rights Reserved.
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/923204338215"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:right-10 z-50"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <Image
          src="/whatapp.png"
          alt="WhatsApp"
          width={56}
          height={56}
          className="w-12 h-12 md:w-14 md:h-14"
        />
      </motion.a>
    </footer>
  );
};

export default Footer;
