'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiClock, FiAlertTriangle } from 'react-icons/fi';

const ComplianceHelpline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
          The Compliance <span className="text-blue-500">Helpline</span>
        </h1>
      </motion.div>

      <motion.p 
        variants={itemVariants}
        className="text-gray-700 text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto leading-relaxed"
      >
        The Compliance Helpline is a <span className="font-semibold text-blue-600">confidential</span> and{' '}
        <span className="font-semibold text-blue-600">secure</span> channel through which employees,
        partners, and stakeholders can raise concerns about potential violations.
      </motion.p>

      <motion.div 
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-xl shadow-lg mb-10 
        hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      >
        <div className="flex items-center mb-4">
          <FiAlertTriangle className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-800">Why Use the Helpline?</h2>
        </div>
        <ul className="space-y-3 pl-2">
          {[
            "Report ethical or legal concerns",
            "Ensure transparency and accountability",
            "Protect your identity with confidentiality",
            "Promote a healthy workplace culture",
            "Available 24/7 for urgent matters"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span className="text-gray-700 text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl shadow-lg 
        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          If you have a concern or need assistance, please use one of the following contact methods:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-blue-50 p-5 rounded-lg border border-blue-200 flex items-start"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FiMail className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-1">Email</h3>
              <a 
                href="mailto:compliance@yourcompany.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                compliance@yourcompany.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-blue-50 p-5 rounded-lg border border-blue-200 flex items-start"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FiPhone className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-1">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                +1 (234) 567-890
              </a>
              <p className="text-sm text-gray-600 mt-1">Toll-free available</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-blue-50 p-5 rounded-lg border border-blue-200 flex items-start"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FiClock className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-1">Availability</h3>
              <p className="text-gray-700">Monday to Friday, 9:00 AM – 5:00 PM</p>
              <p className="text-sm text-blue-600 font-medium mt-1">24/7 emergency line available</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-blue-50 p-5 rounded-lg border border-blue-200 flex items-start"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-1">Secure Form</h3>
              <button className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Submit Anonymously
              </button>
              <p className="text-sm text-gray-600 mt-1">100% confidential reporting</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200 text-center"
      >
        <p className="text-gray-600 mb-2">All reports are handled with the strictest confidentiality.</p>
        <p className="text-sm text-gray-500">Your identity will be protected to the fullest extent possible by law.</p>
      </motion.div>
    </motion.div>
  );
};

export default ComplianceHelpline;