// app/paediatric-ophthalmology/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Eye, Glasses, EyeOff, Accessibility } from "lucide-react";
import Image from "next/image";

export default function PaediatricOphthalmology() {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    phone: "",
    email: "",
    age: "",
    doctor: "",
    appointmentTime: "",
    eyeCondition: ""
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
        childName: "",
        parentName: "",
        phone: "",
        email: "",
        age: "",
        doctor: "",
        appointmentTime: "",
        eyeCondition: ""
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
              Your child s eye consultation has been booked. We ll contact you to confirm details.
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
          Paediatric Ophthalmology Specialists
        </motion.h1>
        <motion.p className="text-lg text-gray-600">
          Expert eye care for children s vision development and eye health
        </motion.p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-purple-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center justify-center gap-2">
          <Eye className="text-blue-600" /> Childhood Eye Conditions We Treat
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-3 flex items-center gap-2">
              <Glasses className="h-5 w-5" /> Refractive Errors
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Myopia (nearsightedness)</li>
              <li>• Hyperopia (farsightedness)</li>
              <li>• Astigmatism</li>
              <li>• Anisometropia</li>
              <li>• Prescription glasses fitting</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-3 flex items-center gap-2">
              <EyeOff className="h-5 w-5" /> Eye Alignment
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Strabismus (crossed eyes)</li>
              <li>• Amblyopia (lazy eye)</li>
              <li>• Nystagmus</li>
              <li>• Double vision</li>
              <li>• Eye tracking problems</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-3 flex items-center gap-2">
              <Accessibility className="h-5 w-5" /> Eye Diseases
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Childhood cataracts</li>
              <li>• Glaucoma in children</li>
              <li>• Retinopathy of prematurity</li>
              <li>• Blocked tear ducts</li>
              <li>• Eye infections</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Pediatric Eye Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/doctor/doc (1).webp" alt="Dr.  Ahmed" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr.  Ahmed</CardTitle>
              <CardDescription className="italic text-gray-600">MD, Pediatric Ophthalmologist</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Specialist in strabismus surgery and amblyopia treatment for children.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Eye muscle disorders, Vision therapy</p>
                <p><span className="font-medium">Experience:</span> 15+ years</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/doctor/doc (3).webp" alt="Dr. Imran Khan" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Imran Khan</CardTitle>
              <CardDescription className="italic text-gray-600">FRCS, Pediatric Eye Surgeon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Expert in congenital cataracts and pediatric glaucoma surgeries.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Surgical interventions, Complex cases</p>
                <p><span className="font-medium">Experience:</span> 12+ years</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image src="/doctor/doc (4).webp" alt="Dr. Fahad Malik" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Fahad Malik</CardTitle>
              <CardDescription className="italic text-gray-600">PhD, Orthoptist</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Specializes in vision therapy and non-surgical treatment of eye alignment disorders.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Focus:</span> Vision rehabilitation, Patching therapy</p>
                <p><span className="font-medium">Experience:</span> 10+ years</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section className="mb-16 bg-amber-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Child-Friendly Eye Exams</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Eye className="h-5 w-5" /> Vision Screening
            </h3>
            <p className="text-gray-700">
              Age-appropriate tests to detect refractive errors and vision problems early.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Glasses className="h-5 w-5" /> Binocular Vision Assessment
            </h3>
            <p className="text-gray-700">
              Evaluating how well both eyes work together for proper depth perception.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Accessibility className="h-5 w-5" /> Developmental Testing
            </h3>
            <p className="text-gray-700">
              Assessing visual milestones crucial for learning and development.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book a Pediatric Eye Exam</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="childName">Child s Name</Label>
              <Input id="childName" placeholder="Child's full name" required value={formData.childName} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent/Guardian Name</Label>
              <Input id="parentName" placeholder="Your name" required value={formData.parentName} onChange={handleInputChange} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" type="tel" placeholder="Phone number" required value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Your email" required value={formData.email} onChange={handleInputChange} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Child s Age</Label>
              <Input id="age" type="text" placeholder="Age in years/months" required value={formData.age} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label>Select Eye Specialist</Label>
              <Select required value={formData.doctor} onValueChange={(value) => handleSelectChange(value, "doctor")}>
                <SelectTrigger><SelectValue placeholder="Choose doctor" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-ahmed">Dr. Sarah Ahmed</SelectItem>
                  <SelectItem value="dr-khan">Dr. Imran Khan</SelectItem>
                  <SelectItem value="dr-malik">Dr. Fatima Malik</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Eye Condition/Concern</Label>
              <Select required value={formData.eyeCondition} onValueChange={(value) => handleSelectChange(value, "eyeCondition")}>
                <SelectTrigger><SelectValue placeholder="Select concern" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="vision-check">Routine vision check</SelectItem>
                  <SelectItem value="squint">Squint/Crossed eyes</SelectItem>
                  <SelectItem value="lazy-eye">Lazy eye treatment</SelectItem>
                  <SelectItem value="glasses">Glasses prescription</SelectItem>
                  <SelectItem value="other">Other eye problem</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="appointmentTime">Preferred Date & Time</Label>
              <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" size="lg">
            Schedule Eye Examination
          </Button>
        </form>
      </motion.section>
    </div>
  );
}