// app/neurosurgery/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function Neurosurgery() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    doctor: "",
    appointmentTime: "",
    procedureType: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every((val) => val.trim() !== "")) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        doctor: "",
        appointmentTime: "",
        procedureType: "",
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
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your neurosurgery consultation request has been received.
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
            <AlertDescription>All fields are required.</AlertDescription>
          </Alert>
        </motion.div>
      )}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Advanced Neurosurgery & Brain Care
        </motion.h1>
        <motion.p className="text-lg text-gray-600">
          Cutting-edge neurosurgical interventions with precision and compassion
        </motion.p>
      </motion.section>

      <section className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="space-y-2">
            <li>• Brain Tumor Surgery</li>
            <li>• Minimally Invasive Spine Surgery</li>
            <li>• Aneurysm & Stroke Treatment</li>
            <li>• Epilepsy Surgery</li>
            <li>• Pediatric Neurosurgery</li>
          </ul>
          <ul className="space-y-2">
            <li>• Endoscopic Brain Procedures</li>
            <li>• Trigeminal Neuralgia Management</li>
            <li>• Hydrocephalus Treatment</li>
            <li>• Trauma & Emergency Neurosurgery</li>
            <li>• Neuro-navigation & Robotics</li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Meet Our Neurosurgeons
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg">
            <div className="relative h-64 w-full">
              <Image
                src="/doctor/doc7.png"
                alt="Dr. Ahmed Syed"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Ahmed Syed</CardTitle>
              <CardDescription>
                MD, FRCS, Spine and Neurotrauma Specialist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Focused on neurotrauma, spinal reconstruction & minimally invasive techniques.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg">
            <div className="relative h-64 w-full">
              <Image
                src="/doctor/doc9.png"
                alt="Dr. Sana Khan"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Sana Khan</CardTitle>
              <CardDescription>
                MD, PhD, Pediatric Neurosurgeon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Specialist in complex congenital brain conditions and pediatric tumors.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Neurosurgery Consultation Request
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your email"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Surgeon</Label>
              <Select
                value={formData.doctor}
                onValueChange={(value) => handleSelectChange(value, "doctor")}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose neurosurgeon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-syed">Dr. Ahmed Syed</SelectItem>
                  <SelectItem value="dr-khan">Dr. Sana Khan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Procedure Type</Label>
              <Select
                value={formData.procedureType}
                onValueChange={(value) => handleSelectChange(value, "procedureType")}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select procedure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tumor">Brain Tumor</SelectItem>
                  <SelectItem value="spine">Spine Surgery</SelectItem>
                  <SelectItem value="stroke">Stroke Treatment</SelectItem>
                  <SelectItem value="pediatric">Pediatric Neurosurgery</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Consultation Date</Label>
            <Input
              id="appointmentTime"
              type="datetime-local"
              value={formData.appointmentTime}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Medical History Summary (Optional)</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Previous neurological conditions or surgeries"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800"
            size="lg"
          >
            Request Consultation
          </Button>
        </form>
      </section>
    </div>
  );
}
