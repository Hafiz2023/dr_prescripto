"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle
} from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function PaediatricsNeonatology() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    healthGoals: "",
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

  const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: any) => {
    setFormData((prev) => ({ ...prev, doctor: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (Object.values(formData).every((val) => val.trim() !== "")) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({
        name: "",
        phone: "",
        email: "",
        healthGoals: "",
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 w-full max-w-md"
        >
          <Alert variant="default">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your appointment has been booked successfully.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
          Child & Newborn Healthcare Services
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-gray-600">
          Specialized pediatric and neonatology care for your child’s health and
          development
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 rounded-xl p-6 mb-16"
      >
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-700">
          We provide medical care for children from birth through adolescence.
          Our services include routine checkups, immunizations, developmental
          assessments, and treatment of acute and chronic illnesses.
        </p>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Our Pediatric Specialists
        </h2>

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
                  src="/SurgicalSpecialties/Dr.-Sadia-Sarwar-2.webp"
                  alt="Dr. Sadia Ali"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Sadia Ali</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MBBS, FCPS (Pediatrics), Consultant Pediatrician
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Specializes in infant and child care, childhood infections, and
                  nutrition.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-blue-600">Specialties:</span> Newborn
                  Care, Childhood Illness, Vaccinations
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-xl p-8 shadow-sm"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Book A Consultation
        </h2>

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
            <Label htmlFor="healthGoals">Child `s Health Concerns</Label>
            <Input
              id="healthGoals"
              placeholder="Describe your child's health concerns"
              value={formData.healthGoals}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label>Select Doctor</Label>
            <Select
              required
              value={formData.doctor}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a pediatrician" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-sadia">Dr. Sadia Ali</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input
              id="appointmentTime"
              type="datetime-local"
              required
              value={formData.appointmentTime}
              onChange={handleInputChange}
            />
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
