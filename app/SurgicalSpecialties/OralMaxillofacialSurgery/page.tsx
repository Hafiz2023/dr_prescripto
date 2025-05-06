// app/oral-maxillofacial-surgery/page.tsx
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

export default function OralMaxillofacialSurgery() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concerns: "",
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
        concerns: "",
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
          Advanced Oral & Maxillofacial Surgery
        </motion.h1>
        <motion.p className="text-lg text-gray-600">
          Comprehensive surgical solutions for facial trauma, jaw disorders, and dental implants
        </motion.p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Surgical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Oral Surgery</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Wisdom teeth removal</li>
              <li>• Dental implants</li>
              <li>• Bone grafting</li>
              <li>• Corrective jaw surgery</li>
              <li>• TMJ disorders treatment</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Maxillofacial Procedures</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Facial trauma reconstruction</li>
              <li>• Cleft lip/palate surgery</li>
              <li>• Orthognathic surgery</li>
              <li>• Oral pathology treatment</li>
              <li>• Facial cosmetic surgery</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Surgical Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/SurgicalSpecialties/Dr-Mariam-Malik-2.webp" alt="Dr. Ahmed Khan" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Mariam Malik</CardTitle>
              <CardDescription className="italic text-gray-600">DDS, MD, Oral & Maxillofacial Surgeon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Specialist in complex dental implant procedures and jaw reconstruction surgeries.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Dental implants, Bone grafting</p>
                <p><span className="font-medium">Experience:</span> 15+ years</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/SurgicalSpecialties/Dr.-Shumaila-Zia-2.webp" alt="Dr. Shumaila Zai" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Shumaila Zai</CardTitle>
              <CardDescription className="italic text-gray-600">MBBS, FACS, Maxillofacial Surgeon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Expert in facial trauma reconstruction and orthognathic surgery.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Facial trauma, Jaw correction</p>
                <p><span className="font-medium">Experience:</span> 12+ years</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/SurgicalSpecialties/Dr.-Shafqat-Mukhtar-2.webp" alt="Dr. Noor Fatima" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Noor Fatima</CardTitle>
              <CardDescription className="italic text-gray-600">BDS, MDS, Oral Surgeon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Specializes in wisdom teeth extractions and TMJ disorder treatments.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Oral surgery, TMJ disorders</p>
                <p><span className="font-medium">Experience:</span> 10+ years</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section className="mb-16 bg-gray-100 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Advanced Surgical Technology</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-3">3D Imaging & Planning</h3>
            <p className="text-gray-700">
              Cone beam CT scans and digital planning for precise surgical outcomes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-3">Minimally Invasive Techniques</h3>
            <p className="text-gray-700">
              Reduced recovery times with advanced endoscopic and laser procedures.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-3">Computer-Guided Surgery</h3>
            <p className="text-gray-700">
              Enhanced accuracy for dental implants and reconstructive procedures.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Schedule a Surgical Consultation</h2>
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
              <Label>Select Surgeon</Label>
              <Select required value={formData.doctor} onValueChange={(value) => handleSelectChange(value, "doctor")}>
                <SelectTrigger><SelectValue placeholder="Choose surgeon" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-khan">Dr. Noor Fatima</SelectItem>
                  <SelectItem value="dr-mahmood">Dr. Mariam Malik</SelectItem>
                  <SelectItem value="dr-ali">Dr.Shumaila Zai</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Procedure Type</Label>
              <Select required value={formData.procedureType} onValueChange={(value) => handleSelectChange(value, "procedureType")}>
                <SelectTrigger><SelectValue placeholder="Select procedure" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="implants">Dental Implants</SelectItem>
                  <SelectItem value="wisdom-teeth">Wisdom Teeth</SelectItem>
                  <SelectItem value="jaw-surgery">Jaw Surgery</SelectItem>
                  <SelectItem value="facial-trauma">Facial Trauma</SelectItem>
                  <SelectItem value="other">Other Procedure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Date & Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="concerns">Medical Concerns</Label>
            <Input id="concerns" placeholder="Describe your condition or concerns..." required value={formData.concerns} onChange={handleInputChange} />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" size="lg">
            Request Surgical Consultation
          </Button>
        </form>
      </motion.section>
    </div>
  );
}