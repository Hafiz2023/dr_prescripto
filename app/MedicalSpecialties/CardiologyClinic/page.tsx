// app/cardiology/page.tsx
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

export default function CardiologyClinic() {
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
              Your appointment has been booked successfully. We `ll contact you shortly.
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
        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
          Cardiology Care
        </motion.h1>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-lg text-gray-600">
          Specialized care for your heart health
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-amber-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Cardiology Services</h2>
        <p className="text-gray-700">
          Our cardiology team provides comprehensive care for heart conditions including coronary artery disease, heart failure, arrhythmias, and valvular heart disease using state-of-the-art diagnostic and treatment technologies.
        </p>
      </motion.section>

      {/* Doctors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Our Cardiology Specialists</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc1.png"
                  alt="Dr. Sanjay Gupta"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-700">Dr. Sanjay Gupta</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Interventional Cardiology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Gupta specializes in angioplasty, stenting, and other catheter-based treatments for heart disease.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-amber-600">Specialties:</span> Angioplasty, Stents, Coronary Interventions, Structural Heart Disease
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc2.png"
                  alt="Dr. Priya Sharma"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-700">Dr. Priya Sharma</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Electrophysiology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Sharma focuses on heart rhythm disorders and performs advanced ablation procedures and pacemaker implants.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-amber-600">Specialties:</span> Arrhythmias, Ablation, Pacemakers, Defibrillators
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc3.png"
                  alt="Dr. Rahul Mehta"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-700">Dr. Rahul Mehta</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Heart Failure Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Mehta specializes in advanced heart failure management, including ventricular assist devices and transplant evaluation.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-amber-600">Specialties:</span> Heart Failure, Transplant Cardiology, Ventricular Assist Devices
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Diagnostic Services */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Advanced Cardiac Diagnostics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Echocardiogram</h3>
            <p className="text-gray-600 text-sm">Ultrasound imaging of the heart</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Stress Testing</h3>
            <p className="text-gray-600 text-sm">Evaluating heart function under exertion</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Cardiac CT/MRI</h3>
            <p className="text-gray-600 text-sm">Advanced imaging of heart structures</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Holter Monitoring</h3>
            <p className="text-gray-600 text-sm">24-48 hour heart rhythm recording</p>
          </Card>
        </div>
      </motion.section>

      {/* Appointment Form */}
      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Book A Consultation</h2>
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
            <Input id="healthConcerns" placeholder="Describe your symptoms or condition" value={formData.healthConcerns} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label>Select Doctor</Label>
            <Select required value={formData.doctor} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a cardiologist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-sanjay">Dr. Sanjay Gupta (Interventional Cardiology)</SelectItem>
                <SelectItem value="dr-priya">Dr. Priya Sharma (Electrophysiology)</SelectItem>
                <SelectItem value="dr-rahul">Dr. Rahul Mehta (Heart Failure Specialist)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>
          <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 transition-colors" size="lg">
            Book Consultation
          </Button>
        </form>
      </motion.section>

      {/* Prevention Tips */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-16">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Heart Health Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Lifestyle Changes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc pl-5">
                <li>Maintain a healthy weight</li>
                <li>Exercise regularly (30 mins/day)</li>
                <li>Eat a heart-healthy diet (fruits, vegetables, whole grains)</li>
                <li>Limit salt and saturated fats</li>
                <li>Manage stress through relaxation techniques</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Warning Signs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc pl-5">
                <li>Chest pain or discomfort</li>
                <li>Shortness of breath</li>
                <li>Irregular heartbeats</li>
                <li>Swelling in legs/ankles</li>
                <li>Unexplained fatigue</li>
                <li>Dizziness or fainting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}