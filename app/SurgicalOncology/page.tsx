// app/surgical-specialties/page.tsx
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

export default function SurgicalOncology() {
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
              Your appointment has been booked successfully. We`ll contact you shortly.
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
          Advanced Surgical Specialties for Comprehensive Care
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600"
        >
          Expert surgical interventions for complex dental and maxillofacial conditions
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 rounded-xl p-6 mb-16"
      >
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Surgical Services</h2>
        <p className="text-gray-700">
          We provide a full range of oral and maxillofacial surgical procedures including dental implants, 
          wisdom teeth removal, corrective jaw surgery, facial trauma reconstruction, and treatment of 
          oral pathologies. Our team uses the latest techniques to ensure optimal outcomes with minimal discomfort.
        </p>
      </motion.section>

      {/* Doctors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Surgical Specialists</h2>
        
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
                  src="/doctor/doc (1).webp" // Replace with your actual image path
                  alt="Dr. Robert Langdon"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Robert Langdon</CardTitle>
                <CardDescription className="italic text-gray-600">
                  DDS, MD, Board Certified Oral & Maxillofacial Surgeon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  With over 20 years of experience, Dr. Langdon specializes in complex dental implant 
                  procedures and full-mouth reconstructions.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-blue-600">Specialization:</span> Dental Implants, Bone Grafting
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
                  src="/doctor/doc (2).webp" // Replace with your actual image path
                  alt="Dr. Elizabeth Wong"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Elizabeth Wong</CardTitle>
                <CardDescription className="italic text-gray-600">
                  DMD, PhD, Fellowship in Craniofacial Surgery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Wong is renowned for her expertise in orthognathic surgery and treatment of 
                  congenital facial deformities in children and adults.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-blue-600">Specialization:</span> Jaw Surgery, Facial Reconstruction
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
                  src="/doctor/doc (3).webp" // Replace with your actual image path
                  alt="Dr. Michael Rodriguez"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Michael Rodriguez</CardTitle>
                <CardDescription className="italic text-gray-600">
                  DDS, MS, Fellowship in Head & Neck Oncology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Rodriguez specializes in the surgical management of oral pathologies, TMJ disorders, 
                  and facial trauma reconstruction.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-blue-600">Specialization:</span> Oral Pathology, TMJ Surgery
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
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Request a Surgical Consultation</h2>
        
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
            <Label>Select Surgeon</Label>
            <Select required value={formData.doctor} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a surgeon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-langdon">Dr. Robert Langdon</SelectItem>
                <SelectItem value="dr-wong">Dr. Elizabeth Wong</SelectItem>
                <SelectItem value="dr-rodriguez">Dr. Michael Rodriguez</SelectItem>
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
            <Label>Type of Consultation</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select consultation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="implant">Dental Implants</SelectItem>
                <SelectItem value="wisdom">Wisdom Teeth</SelectItem>
                <SelectItem value="jaw">Jaw Surgery</SelectItem>
                <SelectItem value="trauma">Facial Trauma</SelectItem>
                <SelectItem value="other">Other Procedure</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
            size="lg"
          >
            Request Consultation
          </Button>
        </form>
      </motion.section>
    </div>
  );
}