"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    type: "INPATIENT",
    image: "/Dr.-Muhammad-Imran-Ul-Hasan-2.webp",
    title: "How can we Prevent falls?",
    description:
      "Falls are a leading cause of injuries and accidental deaths, both in and outside of hospitals. Several factors contribute to an increased risk of falling.",
  },
  {
    id: 2,
    type: "OUTPATIENT",
    image: "/Dr.-Umaira-Anjum-2.webp",
    title: "How can we Prevent falls?",
    description:
      "Falls are a leading cause of injuries and accidental deaths, both in and outside of hospitals. Several factors contribute to an increased risk of falling.",
  },
];

export default function FallPreventionPage() {
  return (
    <div className="p-4 md:p-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Fall Prevention & Safety Protocols
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This information is provided for patients and their caregivers to help
          prevent falls in both inpatient and outpatient settings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Card className="transition-transform duration-300 ease-in-out overflow-hidden">
              <CardContent className="p-4 flex flex-col items-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.type}
                    width={400}
                    height={250}
                    className="w-full h-auto rounded border transition-transform duration-500 ease-in-out"
                  />
                </motion.div>

                <h2 className="text-xl font-semibold mt-4 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Button
                  variant="default"
                  className="transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
