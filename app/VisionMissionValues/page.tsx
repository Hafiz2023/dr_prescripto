'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Target, HeartHandshake, Star, Gem } from "lucide-react";

export default function VisionMissionValues() {
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

  const coreValues = [
    {
      title: "Patient-Centered Care",
      description: "Putting patients at the heart of everything we do",
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Clinical Excellence",
      description: "Highest standards of medical practice",
      icon: <Star className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Integrity",
      description: "Honest, ethical, and transparent in all actions",
      icon: <Gem className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Innovation",
      description: "Embracing advances in medical science",
      icon: <Eye className="w-6 h-6 text-blue-600" />
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
          src="/VisionMissionValues.png"
          alt="Our Vision and Mission"
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
            Our Guiding Principles
          </motion.h1>
        </div>
      </motion.div>

      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Vision Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-blue-100 p-6 rounded-full w-40 h-40 flex items-center justify-center">
                <Eye className="w-16 h-16 text-blue-600" />
              </div>
            </div>
            <div className="md:w-2/3">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Vision
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4">
                To be the leading healthcare institution in Pakistan, recognized for exceptional patient care, 
                innovative treatments, and medical education excellence by 2030.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3 flex justify-center order-2 md:order-1">
              <div className="bg-blue-100 p-6 rounded-full w-40 h-40 flex items-center justify-center">
                <Target className="w-16 h-16 text-blue-600" />
              </div>
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4">
                To provide compassionate, high-quality healthcare services through
              </motion.p>
              <motion.ul variants={fadeIn} className="mt-4 space-y-3">
                {[
                  "Advanced medical technologies and treatments",
                  "Highly skilled and caring professionals",
                  "Continuous medical education and research",
                  "Community health initiatives",
                  "Affordable and accessible services"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Core Values
          </motion.h2>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Commitment Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Commitment to You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Quality Pledge</h4>
                <ul className="space-y-3">
                  {[
                    "JCI-accredited standards of care",
                    "Regular staff training and development",
                    "Continuous quality improvement programs",
                    "Patient safety as top priority"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Community Promise</h4>
                <ul className="space-y-3">
                  {[
                    "Free medical camps in underserved areas",
                    "Health education programs",
                    "Partnerships with local organizations",
                    "Environmental sustainability initiatives"
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

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Live Our Values With Us</h3>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Join our team of healthcare professionals dedicated to these principles.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/Careers" className="font-semibold">
              Explore Career Opportunities
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}