// app/page.tsx
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

export default function Orthodontics() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    doctor: "",
    appointmentTime: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, doctor: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (Object.values(formData).every(val => val.trim() !== "")) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
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
      {/* Success/Error Alerts */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 w-full max-w-md"
        >
          <Alert variant="default">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your appointment has been booked successfully. Well contact you shortly.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 w-full max-w-md"
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Please fill out all required fields correctly.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* Header Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
        >
          Expert Orthodontic Care for Beautiful Smiles
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600"
        >
          Specialized treatments for teeth alignment and bite correction
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 rounded-xl p-6 mb-16"
      >
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Orthodontic Services</h2>
        <p className="text-gray-700">
          We provide comprehensive orthodontic treatments including traditional braces, clear aligners, 
          retainers, and other corrective appliances. Our services are designed for children, teens, 
          and adults to achieve optimal dental health and beautiful smiles.
        </p>
      </motion.section>

      {/* Doctors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Orthodontists</h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc1.png" // Replace with your actual image path
                  alt="Dr. Kashif Ali"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Kashif Ali</CardTitle>
                <CardDescription className="italic text-gray-600">
                  DDS, MS (Orthodontics), Board Certified Orthodontist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  With over 15 years of experience, Dr. Johnson specializes in invisible aligners and 
                  complex bite corrections for patients of all ages.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-blue-600">Specialization:</span> Invisalign, Adult Orthodontics
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc2.png" // Replace with your actual image path
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr Sarah Johnson</CardTitle>
                <CardDescription className="italic text-gray-600">
                  DMD, PhD (Orthodontics), Fellow of the AAO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Chen is renowned for his expertise in early interceptive treatment and 
                  innovative approaches to pediatric orthodontics.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-blue-600">Specialization:</span> Pediatric Orthodontics, Early Treatment
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc3.png" // Replace with your actual image path
                  alt="Dr. Rahman"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Rahman</CardTitle>
                <CardDescription className="italic text-gray-600">
                  BDS, MOrth (RCSEd), Certified Lingual Braces Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Rahman is one of the few orthodontists in the region certified in lingual 
                  (behind-the-teeth) braces and complex surgical orthodontics cases.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-blue-600">Specialization:</span> Lingual Braces, Surgical Orthodontics
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Appointment Form */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-xl p-8 shadow-sm"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book An Orthodontic Consultation</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="Enter your name" 
              required 
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Contact Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Enter your contact number" 
              required 
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input 
              id="address" 
              placeholder="Enter your address" 
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Select Orthodontist</Label>
            <Select required value={formData.doctor} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select an orthodontist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-johnson">Dr. Sarah Johnson</SelectItem>
                <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                <SelectItem value="dr-rahman">Dr. Aisha Rahman</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Consultation Time</Label>
            <Input 
              id="appointmentTime" 
              type="datetime-local" 
              required 
              value={formData.appointmentTime}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Patient Age Group</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select age group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="child">Child (Under 12)</SelectItem>
                <SelectItem value="teen">Teenager (13-19)</SelectItem>
                <SelectItem value="adult">Adult (20+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
            size="lg"
          >
            Book Consultation
          </Button>
        </form>
      </motion.section>
    </div>
  );
}