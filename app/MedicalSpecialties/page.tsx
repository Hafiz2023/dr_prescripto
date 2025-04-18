"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const specialties = [
  { name: "Rheumatology", icon: "/icon/Icons_rheumatology-768x769.webp", link: "/RheumatologyClinic" },
  { name: "Psychology", icon: "/icon/Icons_Psychology-768x768.webp", link: "/PsychologyClinic" },
  { name: "Nutrition & Dietetics", icon: "/icon/Icons_Nutrition-Dietetics-768x768.webp", link: "/NutritionClinic" },
  { name: "Family Medicine", icon: "/icon/Icons_Family-Medicine-768x768.webp", link: "/FamilyMedicineClinic" },
  { name: "Pulmonology", icon: "/icon/Icons_Pulmonology-768x768.webp", link: "/PulmonologyClinic" },
  { name: "Psychiatry", icon: "/icon/Icons_Psychiatry-768x768.webp", link: "/PsychiatryClinic" },
  { name: "Physiotherapy", icon: "/icon/Icons_Physiotherapy-768x768.webp", link: "/PhysiotherapyClinic" },
  { name: "Paediatrics & Neonatology", icon: "/icon/Icons_Paediatrics-Neonatology-768x768.webp", link: "/PaediatricsNeonatology" },
  { name: "Neurology", icon: "/icon/Icons_Neurology-768x768.webp", link: "/NeurologyClinic" },
  { name: "Nephrology", icon: "/icon/Icons_Nephrology-768x768.webp", link: "/NephrologyClinic" },
  { name: "Medical Oncology", icon: "/icon/Icons_Medical-Oncology-768x768.webp", link: "/MedicalOncologyClinic" },
  { name: "Internal Medicine", icon: "/icon/Icons_Internal-Medicine-copy-768x768.webp", link: "/InternalMedicineClinic" },
  { name: "Gastroenterology", icon: "/icon/Icons_Gastroenterology-768x768.webp", link: "/GastroenterologyClinic" },
  { name: "Dermatology", icon: "/icon/Icons_Dermatology-768x768.webp", link: "/DermatologyClinic" },
  { name: "Clinical Hematology", icon: "/icon/Icons_Clinical-Haematology-768x768.webp", link: "/HaematologyClinic" },
  { name: "Cardiology", icon: "/icon/Icons_Cardiology-768x768.webp", link: "/CardiologyClinic" },
  { name: "Anaesthesiology", icon: "/icon/Icons_Anaesthesiology-Pain-Medicine-768x768.webp", link: "/AnaesthesiologyPainMedicineClinic" },
];

export default function MedicalSpecialties() {
  return (
    <div className="bg-white dark:bg-slate-900">
          {/* Responsive Banner Image */}
            <div className="w-full relative aspect-[3/1] sm:aspect-[5/2] md:aspect-[16/5] lg:aspect-[16/4] overflow-hidden">
              <Image
                src="/icon/sergecal.png"
                alt="Healthcare Banner"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {/* Optional dark overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {specialties.map((specialty, index) => (
          <Link href={specialty.link} key={index} passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group h-48 sm:h-56 md:h-60 lg:h-64 flex flex-col items-center justify-center text-center rounded-xl border border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-slate-800 shadow-md hover:shadow-xl transition-all cursor-pointer p-4"
              style={{
                borderImage: "linear-gradient(45deg, #00ff99, #6600ff) 1",
                borderImageSlice: 1,
              }}
            >
              <div className="w-16 h-16 relative mb-3 bg-blue-500 dark:bg-slate-700 rounded-full p-2 flex items-center justify-center">
                <Image
                  src={specialty.icon}
                  alt={specialty.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">
                {specialty.name}
              </h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
