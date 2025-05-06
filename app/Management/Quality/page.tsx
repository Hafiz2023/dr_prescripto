'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ShieldCheck, BarChart2, Target, ClipboardCheck } from "lucide-react";

export default function Quality() {
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

  const qualityPillars = [
    {
      title: "Patient Safety",
      description: "Rigorous protocols to ensure zero harm to patients",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Clinical Excellence",
      description: "Evidence-based practices and cutting-edge treatments",
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time tracking of quality indicators",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Outcome Measurement",
      description: "Data-driven approach to improve results",
      icon: <Target className="w-6 h-6 text-blue-600" />
    }
  ];

  const certifications = [
    {
      name: "JCI Accredited",
      description: "Joint Commission International standards",
      year: "Since 2018"
    },
    {
      name: "ISO 9001 Certified",
      description: "Quality management systems certification",
      year: "Since 2015"
    },
    {
      name: "NABH Approved",
      description: "National Accreditation Board for Hospitals",
      year: "Since 2020"
    }
  ];

  return (
    <div className="text-gray-700 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[16/6] md:aspect-[16/5] overflow-hidden"
      >
        <Image
          src="/quality-banner.jpg"
          alt="Quality Healthcare Standards"
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
            Commitment to Quality Care
          </motion.h1>
        </div>
      </motion.div>

      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Quality Approach */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Quality Approach
          </motion.h2>
          <motion.p variants={fadeIn} className="mb-8 text-gray-600 leading-relaxed text-lg">
            At Evercare Hospital Lahore, quality is not just a department - it is embedded in every aspect 
            of our operations. We measure, monitor, and continuously improve our services to ensure 
            exceptional outcomes for our patients.
          </motion.p>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {qualityPillars.map((pillar, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                      {pillar.icon}
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Accreditations & Certifications
          </motion.h2>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="relative h-40 bg-white flex items-center justify-center">
                    <Image
                      src={`/cart${index+1}.png`}
                      alt={cert.name}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                    <p className="text-blue-600 font-medium">{cert.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Quality Initiatives */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quality Improvement Initiatives
          </motion.h2>
          
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <ClipboardCheck className="w-5 h-5 mr-2 text-blue-600" />
                  Clinical Quality Programs
                </h3>
                <ul className="space-y-3">
                  {[
                    "Daily safety briefings for all clinical teams",
                    "Monthly morbidity and mortality reviews",
                    "Infection prevention task force",
                    "Medication safety monitoring system",
                    "Patient fall prevention program"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-blue-600" />
                  Performance Metrics
                </h3>
                <ul className="space-y-3">
                  {[
                    "98% patient satisfaction scores (2023)",
                    "0.5% hospital-acquired infection rate",
                    "<30 minute ER wait times average",
                    "95% compliance with clinical pathways",
                    "100% staff training completion"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Patient Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Patient Experience Matters</h3>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            We continuously measure and improve patient satisfaction across all touchpoints of care.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/Management/Quality/PatientExperience" className="font-semibold">
              See Our Patient Stories
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}