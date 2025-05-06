'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, Layers, Target } from "lucide-react";

export default function Management() {
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

  const leadershipPrinciples = [
    {
      title: "Patient-Centered Approach",
      description: "Every decision starts with what's best for our patients"
    },
    {
      title: "Clinical Excellence",
      description: "Maintaining the highest standards of medical care"
    },
    {
      title: "Operational Efficiency",
      description: "Streamlined processes for better healthcare delivery"
    },
    {
      title: "Continuous Improvement",
      description: "Regular evaluation and enhancement of our services"
    }
  ];

  const executiveTeam = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Executive Officer",
      expertise: "Healthcare Administration, Strategic Planning"
    },
    {
      name: "Dr. Michael Chen",
      position: "Chief Medical Officer",
      expertise: "Clinical Operations, Quality Assurance"
    },
    {
      name: "Fatima Ahmed",
      position: "Chief Nursing Officer",
      expertise: "Patient Care Standards, Nursing Excellence"
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
          src="/management-banner.jpg"
          alt="Hospital Management Team"
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
            Leadership & Governance
          </motion.h1>
        </div>
      </motion.div>

      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Management Philosophy */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Management Philosophy
          </motion.h2>
          <motion.p variants={fadeIn} className="mb-8 text-gray-600 leading-relaxed text-lg">
            At Evercare Hospital Lahore, our management team combines healthcare expertise with 
            compassionate leadership to create an environment where both patients and staff thrive.
          </motion.p>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {leadershipPrinciples.map((principle, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                      {index === 0 ? <Users className="w-5 h-5 text-blue-600" /> : 
                       index === 1 ? <Shield className="w-5 h-5 text-blue-600" /> :
                       index === 2 ? <Layers className="w-5 h-5 text-blue-600" /> :
                       <Target className="w-5 h-5 text-blue-600" />}
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Executive Team */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Executive Leadership Team
          </motion.h2>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="relative aspect-square">
                    <Image
                      src={`/team${index+1}.png`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{member.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Governance Structure */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Governance Structure
          </motion.h2>
          
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Board of Directors</h3>
                <p className="text-gray-600 mb-4">
                  Our Board provides strategic oversight and ensures we meet our mission of delivering exceptional healthcare.
                </p>
                <ul className="space-y-2">
                  {[
                    "Quarterly performance reviews",
                    "Financial oversight",
                    "Strategic planning",
                    "Risk management",
                    "Quality assurance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Advisory Board</h3>
                <p className="text-gray-600 mb-4">
                  Comprised of leading physicians who guide our clinical practices and standards.
                </p>
                <ul className="space-y-2">
                  {[
                    "Clinical protocol development",
                    "Peer review processes",
                    "Medical staff credentialing",
                    "Research oversight",
                    "Continuing education"
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

        {/* Quality Initiatives */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Quality & Safety Initiatives</h3>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Our management team is committed to continuous quality improvement and patient safety.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/Management/Quality" className="font-semibold">
              Learn About Our Standards
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}