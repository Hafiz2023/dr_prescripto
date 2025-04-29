// app/gastroenterology/page.tsx
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

export default function GastroenterologyClinic() {
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
        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
          Gastroenterology Care
        </motion.h1>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-lg text-gray-600">
          Specialized diagnosis and treatment for gastrointestinal disorders
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-green-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Gastroenterology Services</h2>
        <p className="text-gray-700">
          Our gastroenterology specialists provide comprehensive care for gastrointestinal conditions including stomach disorders, liver diseases, inflammatory bowel disease (IBD), and more.
        </p>
      </motion.section>

      {/* Doctors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Gastroenterology Specialists</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc7.png"
                  alt="Dr. Ameena Siddiqui"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-green-700">Dr. Ayesha Siddiqui</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Gastroenterology Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Siddiqui specializes in treating gastrointestinal disorders including IBS, liver diseases, and colon cancer.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-green-600">Specialties:</span> IBS, Liver Diseases, Colon Cancer, Endoscopy, Colonoscopy
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Appointment Form */}
      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Book A Consultation</h2>
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
            <Input id="healthConcerns" placeholder="Describe your condition or symptoms" value={formData.healthConcerns} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label>Select Doctor</Label>
            <Select required value={formData.doctor} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a specialist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-ayesha">Dr. Ayesha Siddiqui</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 transition-colors" size="lg">
            Book Consultation
          </Button>
        </form>
      </motion.section>
    </div>
  );
}
