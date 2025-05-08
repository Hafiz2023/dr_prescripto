'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, HeartHandshake, CalendarCheck, Smile, Shield } from "lucide-react";

export default function PatientExperience() {
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

  const experiencePillars = [
    {
      title: "Compassionate Care",
      description: "Our staff treats every patient with empathy and respect",
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Seamless Appointments",
      description: "Easy scheduling and minimal wait times",
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Patient Education",
      description: "Clear communication about your condition and treatment",
      icon: <Smile className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Safety First",
      description: "Rigorous protocols to ensure your wellbeing",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    }
  ];

  const testimonials = [
    {
      quote: "The care I received was exceptional from check-in to discharge. The nurses went above and beyond!",
      author: "Aisha Khan",
      treatment: "Cardiac Surgery"
    },
    {
      quote: "My doctor took the time to explain everything in detail and made me feel truly cared for.",
      author: "Rahim Ahmed",
      treatment: "Orthopedic Consultation"
    },
    {
      quote: "The facilities are world-class and the staff made my child feel comfortable throughout.",
      author: "Fatima Malik",
      treatment: "Pediatric Care"
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
          src="/Patient-experience-banner2.jpg"
          alt="Exceptional Patient Experience"
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
            Your Experience Matters
          </motion.h1>
        </div>
      </motion.div>

      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Patient Promise */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Patient Promise
          </motion.h2>
          <motion.p variants={fadeIn} className="mb-8 text-gray-600 leading-relaxed text-lg">
            At Evercare Hospital Lahore, we are committed to making your healthcare experience as comfortable, 
            transparent, and effective as possible. From your first contact through follow-up care, 
            we prioritize your needs at every step.
          </motion.p>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {experiencePillars.map((pillar, index) => (
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

        {/* Patient Stories */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Patient Stories
          </motion.h2>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="relative h-48 bg-blue-50 flex items-center justify-center">
                    <Quote className="w-12 h-12 text-blue-200" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{testimonial.author}</CardTitle>
                    <p className="text-blue-600 font-medium">{testimonial.treatment}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Patient Journey */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Patient Journey
          </motion.h2>
          
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Before Your Visit
                </h3>
                <ul className="space-y-3">
                  {[
                    "Easy online appointment scheduling",
                    "Pre-visit instructions via SMS/email",
                    "Digital forms to complete in advance",
                    "Virtual consultation options",
                    "Directions and parking information"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  During Your Stay
                </h3>
                <ul className="space-y-3">
                  {[
                    "Comfortable, private rooms",
                    "Multilingual staff available",
                    "Personalized meal options",
                    "Daily updates from your care team",
                    "Family accommodation options"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  After Your Treatment
                </h3>
                <ul className="space-y-3">
                  {[
                    "Detailed discharge instructions",
                    "Follow-up appointment scheduling",
                    "24/7 nurse advice line",
                    "Prescription delivery service",
                    "Recovery progress tracking"
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

        {/* Feedback CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Share Your Experience</h3>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            We value your feedback to help us continuously improve our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="/Management/Quality/PatientExperience/PatientFeedback" className="font-semibold">
                Provide Feedback
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <a href="/ContactUs" className="font-semibold">
                Contact Patient 
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}