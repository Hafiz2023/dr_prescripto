"use client";

import { BriefcaseMedical, ClipboardList, Users, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    icon: HeartPulse,
    value: 8,
    suffix: "",
    label: "Operation Theatres",
    description: "A legacy of excellence in compassionate and exceptional healthcare services.",
  },
  {
    icon: HeartPulse,
    value: 40,
    suffix: "",
    label: "ICU and CCU Beds",
    description: "Exceptional care and advanced technology for critically ill patients.",
  },
  {
    icon: HeartPulse,
    value: 500,
    suffix: "+",
    label: "Successful Surgeries",
    description: "Delivering outstanding results with expert surgeries and compassionate care.",
  },
  {
    icon: BriefcaseMedical,
    value: 250,
    suffix: "+",
    label: "Experienced Doctors",
    description: "Trusted medical professionals committed to your health and recovery.",
  },
  {
    icon: ClipboardList,
    value: 150,
    suffix: "",
    label: "Beds",
    description: "Comprehensive healthcare services with exceptional facilities and patient care.",
  },
  {
    icon: Users,
    value: 6000,
    suffix: "+",
    label: "Treated Patients",
    description: "Transforming lives through high-quality care and advanced treatment.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-2xl">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="bg-sky-100 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-sky-600 mb-1">
                        <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix} />
                      </h3>
                      <p className="text-lg font-semibold text-gray-800">{stat.label}</p>
                      <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
