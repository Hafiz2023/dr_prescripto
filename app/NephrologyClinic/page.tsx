// app/nephrology/page.tsx
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

export default function NephrologyClinic() {
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
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-4 right-4 z-50 w-full max-w-md">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Your appointment has been booked successfully. We&apos;ll contact you shortly.</AlertDescription>
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

      <section className="text-center mb-16">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
          Kidney Health & Nephrology Care
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
          Specialized care for kidney diseases, hypertension, and dialysis support.
        </motion.p>
      </section>

      <section className="bg-emerald-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Our Services</h2>
        <p className="text-gray-700">
          We provide expert care for acute and chronic kidney diseases, hypertension, kidney stones, and dialysis support. Our nephrologists are committed to preserving kidney function and improving quality of life.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Nephrology Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/dr-nida-ahsan.webp" alt="Dr. Nida Ahsan" fill className="object-cover transition-all duration-500 hover:scale-105" />
            </div>
            <CardHeader>
              <CardTitle className="text-emerald-700">Dr. Nida Ahsan</CardTitle>
              <CardDescription className="italic text-gray-600">MBBS, FCPS Nephrology</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Dr. Nida specializes in managing chronic kidney disease, dialysis, and kidney transplantation.</p>
              <p className="mt-4 font-medium">
                <span className="text-emerald-700">Specialties:</span> CKD, Dialysis, Transplant
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/dr-hassan-ali.webp" alt="Dr. Hassan Ali" fill className="object-cover transition-all duration-500 hover:scale-105" />
            </div>
            <CardHeader>
              <CardTitle className="text-emerald-700">Dr. Hassan Ali</CardTitle>
              <CardDescription className="italic text-gray-600">MBBS, FCPS, Consultant Nephrologist</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Dr. Ali treats glomerular diseases, hypertension-related kidney issues, and offers dialysis management.</p>
              <p className="mt-4 font-medium">
                <span className="text-emerald-700">Specialties:</span> Glomerulonephritis, Hypertension, Hemodialysis
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-8">Book A Nephrology Appointment</h2>
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
            <Label htmlFor="healthGoals">Symptoms / Concerns</Label>
            <Input id="healthGoals" placeholder="Describe your kidney health issues" value={formData.healthGoals} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label>Select Doctor</Label>
            <Select required value={formData.doctor} onValueChange={handleSelectChange}>
              <SelectTrigger><SelectValue placeholder="Choose a nephrologist" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="nida-ahsan">Dr. Nida Ahsan</SelectItem>
                <SelectItem value="hassan-ali">Dr. Hassan Ali</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>
          <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800" size="lg">
            Book Appointment
          </Button>
        </form>
      </section>
    </div>
  );
}
