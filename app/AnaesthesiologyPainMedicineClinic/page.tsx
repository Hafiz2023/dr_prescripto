// app/anaesthesiology-pain-medicine/page.tsx
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

export default function AnaesthesiologyPainMedicineClinic() {
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
        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
          Anaesthesiology & Pain Medicine
        </motion.h1>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-lg text-gray-600">
          Expert care for pain management and surgical anaesthesia
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-indigo-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Our Anaesthesiology & Pain Medicine Services</h2>
        <p className="text-gray-700">
          Our specialists provide comprehensive pain management solutions and anaesthesia care for surgical procedures, including acute pain, chronic pain conditions, and perioperative medicine using advanced techniques and technologies.
        </p>
      </motion.section>

      {/* Doctors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">Our Specialists</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/Dr-Neha-Anaesthesia.webp"
                  alt="Dr. Neha Kapoor"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-indigo-700">Dr. Neha Kapoor</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Anaesthesiology & Pain Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Kapoor specializes in regional anaesthesia and advanced pain management techniques including nerve blocks and spinal interventions.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-indigo-600">Specialties:</span> Regional Anaesthesia, Chronic Pain Management, Nerve Blocks, Epidurals
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/Dr-Arvind-Anaesthesia.webp"
                  alt="Dr. Arvind Singh"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-indigo-700">Dr. Arvind Singh</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Cardiac Anaesthesiology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Singh specializes in anaesthesia for cardiac surgeries and complex high-risk procedures with expertise in hemodynamic monitoring.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-indigo-600">Specialties:</span> Cardiac Anaesthesia, Critical Care, ECMO, Advanced Hemodynamic Monitoring
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/Dr-Priya-Anaesthesia.webp"
                  alt="Dr. Priya Reddy"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-indigo-700">Dr. Priya Reddy</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, Paediatric Anaesthesia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dr. Reddy specializes in anaesthesia for children and pain management for paediatric patients with complex conditions.
                </p>
                <p className="mt-4 font-medium">
                  <span className="text-indigo-600">Specialties:</span> Paediatric Anaesthesia, Neonatal Anaesthesia, Pain Management for Children
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Options */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">Pain Management Treatments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Nerve Blocks</h3>
            <p className="text-gray-600 text-sm">Targeted pain relief injections</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Epidural Steroids</h3>
            <p className="text-gray-600 text-sm">For spinal pain and inflammation</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Radiofrequency Ablation</h3>
            <p className="text-gray-600 text-sm">For long-term joint pain relief</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mx-auto bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Spinal Cord Stimulation</h3>
            <p className="text-gray-600 text-sm">For chronic neuropathic pain</p>
          </Card>
        </div>
      </motion.section>

      {/* Appointment Form */}
      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Book A Consultation</h2>
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
            <Input id="healthConcerns" placeholder="Describe your pain symptoms or surgical needs" value={formData.healthConcerns} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label>Select Specialist</Label>
            <Select required value={formData.doctor} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a specialist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-neha">Dr. Neha Kapoor (Pain Management)</SelectItem>
                <SelectItem value="dr-arvind">Dr. Arvind Singh (Cardiac Anaesthesia)</SelectItem>
                <SelectItem value="dr-priya">Dr. Priya Reddy (Paediatric Anaesthesia)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors" size="lg">
            Book Consultation
          </Button>
        </form>
      </motion.section>

      {/* FAQ Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-16">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-indigo-700">What `s the difference between acute and chronic pain management?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Acute pain management focuses on short-term pain relief after surgery or injury, while chronic pain management deals with persistent pain lasting more than 3 months with multidisciplinary approaches.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-indigo-700">Are anaesthesia procedures safe?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Modern anaesthesia is extremely safe with comprehensive monitoring. Our specialists perform thorough pre-operative evaluations to minimize risks and tailor anaesthesia to each patient `s needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-indigo-700">What pain conditions do you treat?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We treat various conditions including back pain, neuropathic pain, arthritis, cancer pain, post-surgical pain, and complex regional pain syndrome using evidence-based approaches.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}