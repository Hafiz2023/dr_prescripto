// app/dermatology/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function DermatologyClinic() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    healthConcerns: "",
    doctor: "",
    appointmentTime: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, doctor: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(val => val.trim() !== "")) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({
        name: "",
        phone: "",
        email: "",
        healthConcerns: "",
        doctor: "",
        appointmentTime: ""
      });
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 relative">
      {showSuccess && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-4 right-4 z-50 w-full max-w-md">
          <Alert variant="default">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your appointment has been booked successfully. We&apos;ll contact you shortly.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
      {showError && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-4 right-4 z-50 w-full max-w-md">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Please fill out all required fields correctly.</AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* Header */}
      <motion.section initial="hidden" animate="show" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="text-center mb-16">
        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
          Dermatology Care
        </motion.h1>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-lg text-gray-600">
          Expert care for your skin, hair, and nail health
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-purple-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Our Dermatology Services</h2>
        <p className="text-gray-700">
          Our board-certified dermatologists provide comprehensive care for acne, eczema, psoriasis, skin cancer, cosmetic concerns, and more using the latest treatments and technologies.
        </p>
      </motion.section>

      {/* Doctors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Our Dermatology Specialists</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/Dr-Nisha-Dermatology.webp"
                  alt="Dr. Nisha Kapoor"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-700">Dr. Nisha Kapoor</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Dermatology & Cosmetic Surgery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Kapoor specializes in medical and cosmetic dermatology with expertise in laser treatments and anti-aging therapies.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-purple-600">Specialties:</span> Acne, Rosacea, Laser Treatments, Botox, Fillers
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/Dr-Arjun-Dermatology.webp"
                  alt="Dr. Arjun Patel"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-700">Dr. Arjun Patel</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Dermatopathology Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Patel focuses on skin cancer detection and treatment, with special training in Mohs surgery.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-purple-600">Specialties:</span> Skin Cancer, Mohs Surgery, Dermatopathology, Mole Evaluation
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/Dr-Preeti-Dermatology.webp"
                  alt="Dr. Preeti Verma"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-700">Dr. Preeti Verma</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Pediatric Dermatology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Verma specializes in childhood skin conditions including eczema, birthmarks, and genetic skin disorders.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-purple-600">Specialties:</span> Pediatric Eczema, Birthmarks, Genetic Skin Disorders, Childhood Rashes
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatments */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Advanced Dermatology Treatments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Laser Therapy</h3>
            <p className="text-gray-600 text-sm">For acne scars, pigmentation, and hair removal</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Botox & Fillers</h3>
            <p className="text-gray-600 text-sm">For wrinkle reduction and facial rejuvenation</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Skin Cancer Screening</h3>
            <p className="text-gray-600 text-sm">Advanced detection with dermatoscopy</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Chemical Peels</h3>
            <p className="text-gray-600 text-sm">For skin rejuvenation and texture improvement</p>
          </Card>
        </div>
      </motion.section>

      {/* Appointment Form */}
      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Book A Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your name" required value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Contact Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your contact number" required value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="healthConcerns">Health Concerns</Label>
            <Input id="healthConcerns" placeholder="Describe your skin condition or concerns" value={formData.healthConcerns} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label>Select Doctor</Label>
            <Select required value={formData.doctor} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a dermatologist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-nisha">Dr. Nisha Kapoor (Medical & Cosmetic)</SelectItem>
                <SelectItem value="dr-arjun">Dr. Arjun Patel (Skin Cancer Specialist)</SelectItem>
                <SelectItem value="dr-preeti">Dr. Preeti Verma (Pediatric Dermatology)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition-colors" size="lg">
            Book Consultation
          </Button>
        </form>
      </motion.section>

      {/* FAQ Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-16">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-700">How often should I get a skin check?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We recommend annual skin cancer screenings for most adults, or every 6 months if you have a history of skin cancer or are at high risk.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-700">What should I expect during my first visit?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your dermatologist will review your medical history, examine your skin thoroughly, discuss any concerns, and recommend appropriate treatments or follow-up.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-700">Do you treat hair loss conditions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Yes, we offer comprehensive evaluation and treatment for various types of hair loss including alopecia, pattern baldness, and hair shaft disorders.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}