'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Stethoscope, HeartPulse } from "lucide-react";

export default function Careers() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance bonuses"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement"
    },
    {
      title: "Health Benefits",
      description: "Comprehensive medical coverage for you and your family"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling and generous leave policies"
    }
  ];

  return (
    <div className="text-gray-700 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Banner with Parallax Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[16/6] md:aspect-[16/5] overflow-hidden"
      >
        <Image
          src="/Careers.png"
          alt="Careers at Evercare Hospital Lahore"
          fill
          className="object-cover rounded-b-xl shadow-lg"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4"
          >
            Build Your Career With Us
          </motion.h1>
        </div>
      </motion.div>

      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Why Work Here Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Work at Evercare Hospital Lahore?
          </motion.h2>
          <motion.p variants={fadeIn} className="mb-8 text-gray-600 leading-relaxed text-lg">
            Evercare Hospital Lahore believes in offering exceptional medical facilities with advanced technologies and personalized care.
            We have a supportive work environment for our staff to help them deliver the best services to our patients.
          </motion.p>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <HeartPulse className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeIn} className="text-lg bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            If you want to grow your career where compassion blends with cutting-edge healthcare, we love to hear from you!
          </motion.p>
        </motion.section>

        {/* Equal Opportunities Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Equal Opportunities for Everyone
          </motion.h2>
          <motion.p variants={fadeIn} className="mb-6 text-gray-600 leading-relaxed text-lg">
            Evercare Hospital Lahore provides equal opportunities to all employees and job candidates.
          </motion.p>
          
          <motion.ul variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "No discrimination based on race, religion, or nationality",
              "Gender equality in all positions",
              "Accessibility for people with disabilities",
              "Fair consideration for military veterans",
              "Equal marital status treatment",
              "Uniform application to hiring and promotions"
            ].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Application Sections */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-10"
        >
          {/* General Application */}
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-2" />
                  General Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Interested in joining our team? Send us your resume and cover letter.
                </p>
                <Button asChild>
                  <a 
                    href="mailto:careers.lahore@evercare.pk?subject=Application for [Position Name]" 
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Apply Now
                  </a>
                </Button>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Email:</strong> careers.lahore@evercare.pk<br />
                  <strong>Subject:</strong> Position you are applying for<br />
                  <strong>Include:</strong> Resume, Cover Letter, References
                </p>
              </div>
            </div>
          </motion.div>

          {/* Medical Consultant Application */}
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                  <Stethoscope className="w-6 h-6 text-blue-600 mr-2" />
                  Medical Consultant Positions
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialists and consultants are invited to join our medical team.
                </p>
                <Button variant="outline" asChild>
                  <a 
                    href="mailto:careers.consultant@evercare.pk?subject=Application for [Specialty]" 
                    className="flex items-center gap-2"
                  >
                    <Stethoscope className="w-4 h-4" />
                    Apply as Consultant
                  </a>
                </Button>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Email:</strong> careers.consultant@evercare.pk<br />
                  <strong>Subject:</strong> Specialty you are applying for<br />
                  <strong>Include:</strong> CV, Certifications, References
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Join our team of healthcare professionals dedicated to excellence in patient care.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="#apply" className="font-semibold">
              View Current Openings
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}