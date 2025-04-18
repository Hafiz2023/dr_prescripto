// app/obstetrics-gynaecology/page.tsx
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

export default function ObstetricsGynaecology() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    doctor: "",
    appointmentTime: "",
    procedureType: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        address: "",
        doctor: "",
        appointmentTime: "",
        procedureType: ""
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
              Your consultation request has been submitted. Our team will contact you shortly.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {showError && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-4 right-4 z-50 w-full max-w-md">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Please complete all required fields.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      <motion.section initial="hidden" animate="show" className="text-center mb-16">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Comprehensive Obstetrics & Gynaecology Care
        </motion.h1>
        <motion.p className="text-lg text-gray-600">
          Women`s health services tailored to every life stage
        </motion.p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-pink-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Core Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Obstetrics</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Prenatal care & monitoring</li>
              <li>• High-risk pregnancy management</li>
              <li>• Labor & delivery services</li>
              <li>• Postpartum support</li>
              <li>• Family planning</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Gynaecology</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Menstrual disorders</li>
              <li>• Infertility evaluation</li>
              <li>• Laparoscopic surgery</li>
              <li>• Menopause management</li>
              <li>• Cervical cancer screening</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/SurgicalSpecialties/Dr.-Sadia-Sarwar-2.webp" alt="Dr. Sadia Sarwar" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Sadia Sarwar</CardTitle>
              <CardDescription className="italic text-gray-600">MD, OB-GYN Specialist</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Expert in high-risk pregnancies and minimally invasive gynecologic surgeries.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Maternal health, Laparoscopy</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/SurgicalSpecialties/Dr-Mariam-Malik-2.webp" alt="Dr. Rabia Farooq" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Rabia Farooq</CardTitle>
              <CardDescription className="italic text-gray-600">MBBS, MS Gynaecology</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Specialist in menstrual disorders, menopause, and fertility treatments.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Hormonal therapies, Infertility care</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book a Gynaecology Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" required value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" type="tel" placeholder="Phone number" required value={formData.phone} onChange={handleInputChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Your email" required value={formData.email} onChange={handleInputChange} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Doctor</Label>
              <Select required value={formData.doctor} onValueChange={(value) => handleSelectChange(value, "doctor")}>
                <SelectTrigger><SelectValue placeholder="Choose doctor" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-saeed">Dr. Amina Saeed</SelectItem>
                  <SelectItem value="dr-farooq">Dr. Rabia Farooq</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Consultation Type</Label>
              <Select required value={formData.procedureType} onValueChange={(value) => handleSelectChange(value, "procedureType")}>
                <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="pregnancy">Pregnancy</SelectItem>
                  <SelectItem value="infertility">Infertility</SelectItem>
                  <SelectItem value="menstrual">Menstrual Issues</SelectItem>
                  <SelectItem value="general">General Checkup</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Date & Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Medical Concerns (Optional)</Label>
            <Input id="address" placeholder="Your health concerns..." value={formData.address} onChange={handleInputChange} />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" size="lg">
            Book Consultation
          </Button>
        </form>
      </motion.section>
    </div>
  );
}