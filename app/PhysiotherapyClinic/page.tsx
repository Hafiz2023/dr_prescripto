// app/physiotherapy/page.tsx
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

export default function PhysiotherapyClinic() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    physiotherapist: "",
    appointmentTime: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
    setFormData(prev => ({ ...prev, physiotherapist: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(val => val.trim() !== "")) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({ name: "", phone: "", email: "", condition: "", physiotherapist: "", appointmentTime: "" });
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
            <AlertDescription>Your appointment has been booked successfully.</AlertDescription>
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

      <motion.section initial="hidden" animate="show" variants={containerVariants} className="text-center mb-16">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Advanced Physiotherapy & Rehabilitation
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-gray-600">
          Restore function and mobility with expert physiotherapy treatments
        </motion.p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Services</h2>
        <p className="text-gray-700">
          We offer a full range of physiotherapy treatments including orthopedic rehab, sports injury therapy,
          post-surgical recovery, neurological physiotherapy, and chronic pain management.
        </p>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Meet Our Experts</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/Dr-Fahad-Rauf.webp" alt="Dr. Fahad Rauf" fill className="object-cover transition-all duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Fahad Rauf</CardTitle>
                <CardDescription className="italic text-gray-600">
                  DPT, M.Phil in Neurological PT, Certified Manual Therapist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Dr. Rauf specializes in stroke rehab, spinal cord injuries, and postural correction therapies.</p>
                <p className="mt-4 font-medium"><span className="text-blue-600">Specialties:</span> Neuro Rehab, Posture Correction, Manual Therapy</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/Dr-Saba-Nasir.webp" alt="Dr. Saba Nasir" fill className="object-cover transition-all duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Saba Nasir</CardTitle>
                <CardDescription className="italic text-gray-600">
                  DPT, Certified Women`s Health Physiotherapist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Dr. Nasir provides care for musculoskeletal pain, women`s health, and injury rehabilitation.</p>
                <p className="mt-4 font-medium"><span className="text-blue-600">Specialties:</span> Musculoskeletal Therapy, Women`s Health, Rehab</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book A Session</h2>
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
            <Label htmlFor="condition">Describe Condition</Label>
            <Input id="condition" placeholder="Describe the condition or injury" value={formData.condition} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label>Select Physiotherapist</Label>
            <Select required value={formData.physiotherapist} onValueChange={handleSelectChange}>
              <SelectTrigger><SelectValue placeholder="Select a physiotherapist" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-fahad">Dr. Fahad Rauf</SelectItem>
                <SelectItem value="dr-saba">Dr. Saba Nasir</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" size="lg">
            Book Appointment
          </Button>
        </form>
      </motion.section>
    </div>
  );
}
