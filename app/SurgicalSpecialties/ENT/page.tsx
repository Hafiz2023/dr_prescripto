// app/ent/page.tsx
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function ENT() {
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
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
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
              Your ENT consultation request has been submitted.
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
              Please complete all required fields.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      <motion.section
        initial="hidden"
        animate="show"
        className="text-center mb-16"
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          ENT (Ear, Nose & Throat) Surgery
        </motion.h1>
        <motion.p className="text-lg text-gray-600">
          Advanced care for hearing, breathing, and voice issues
        </motion.p>
      </motion.section>

      <section className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Common ENT Procedures
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Tonsillectomy and adenoidectomy</li>
          <li>Sinus surgery</li>
          <li>Septoplasty and turbinate reduction</li>
          <li>Ear tube placement</li>
          <li>Head and neck cancer surgery</li>
          <li>Microsurgery for vocal cord disorders</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Meet Our ENT Specialists
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/Dr.-Shafqat-Mukhtar-2.webp"
                alt="Dr. Ayesha Khan"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Ayesha Khan</CardTitle>
              <CardDescription className="italic text-gray-600">
                MBBS, FCPS (ENT), Endoscopic Sinus Surgeon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Expert in treating chronic sinusitis, snoring, and nasal polyps with
                minimally invasive techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/Dr.-Sadia-Sarwar-2.webp"
                alt="Dr. Sadia Sarwar"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Sadia Sarwar</CardTitle>
              <CardDescription className="italic text-gray-600">
                MBBS, MS (ENT), Otologist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Specialist in ear surgery including cochlear implants, hearing
                restoration, and tympanoplasty.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          ENT Consultation Request
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Your phone number" value={formData.phone} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Doctor</Label>
              <Select required value={formData.doctor} onValueChange={val => handleSelectChange(val, "doctor")}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-khan">Dr. Ayesha Khan</SelectItem>
                  <SelectItem value="dr-hassan">Dr. Faisal Hassan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Procedure Type</Label>
              <Select required value={formData.procedureType} onValueChange={val => handleSelectChange(val, "procedureType")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select procedure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tonsillectomy">Tonsillectomy</SelectItem>
                  <SelectItem value="sinus">Sinus Surgery</SelectItem>
                  <SelectItem value="ear">Ear Surgery</SelectItem>
                  <SelectItem value="voice">Vocal Cord Surgery</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Date</Label>
            <Input id="appointmentTime" type="datetime-local" value={formData.appointmentTime} onChange={handleInputChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Brief Medical History (optional)</Label>
            <Input id="address" placeholder="Any past ENT issues or surgeries" value={formData.address} onChange={handleInputChange} />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Submit Consultation Request
          </Button>
        </form>
      </section>
    </div>
  );
}
