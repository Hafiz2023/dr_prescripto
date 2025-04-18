"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const specialties = [
  {
    name: "Orthodontics",
    icon: "/SurgicalSpecialties/Icons_ORTHoDONTICS-1024x1024.webp",
    link: "/Orthodontics",
  },
  {
    name: "Urology",
    icon: "/SurgicalSpecialties/Icons_Urology-1024x1024.webp",
    link: "/Urology",
  },
  {
    name: "SurgicalOncology",
    icon: "/SurgicalSpecialties/Icons_Surgical-Oncology-1024x1024.webp",
    link: "/SurgicalOncology",
  },
  {
    name: "Plastic Reconstructive Surgery",
    icon: "/SurgicalSpecialties/Icons_Plastic-Reconstructive-Surgery-1024x1024.webp",
    link: "/PlasticReconstructiveSurgery",
  },
  {
    name: "Obstetrics & Gynaecology",
    icon: "/SurgicalSpecialties/Icons_Obstetrics-Gynaecology-1024x1024.webp",
    link: "/ObstetricsGynaecology",
  },
  {
    name: "Oral Maxillofacial Surgery",
    icon: "/icon/Icons_Oral-Maxillofacial-Surgery-1024x1024.webp",
    link: "/OralMaxillofacialSurgery",
  },
  {
    name: "Paediatric & Ophthalmology",
    icon: "/icon/Icons_Paediatric-Ophthalmology-1024x1024.webp",
    link: "/PaediatricOphthalmology",
  },
  {
    name: "Paediatrics & Neonatology",
    icon: "/icon/Icons_Paediatric-Surgery-1024x1024.webp",
    link: "/PaediatricsNeonatology",
  },
  {
    name: "Neurology",
    icon: "/icon/Icons_Neurology-768x768.webp",
    link: "/NeurologyClinic",
  },

  {
    name: "General Surgery",
    icon: "/icon/Icons_General-Laparoscopic-Surgery-1024x1024.webp",
    link: "/GeneralLaparoscopicSurgery",
  },
  {
    name: "ENT",
    icon: "/icon/Icons_ENT-1024x1024.webp",
    link: "/ENT",
  },
  {
    name: "Cardiac Surgery",
    icon: "/icon/Icons_Cardiothoracic-Vascular-Surgery-1024x1024.webp",
    link: "/CardiacSurgery",
  },
  {
    name: "Breast Surgery",
    icon: "/icon/Icons_Breast-Surgery-1024x1024.webp",
    link: "/BreastSurgery",
  },
  {
    name: "Bariatric Surgery",
    icon: "/icon/Icons_Bariatric-Surgery-Obesity-Medicine-1024x1024.webp",
    link: "/BariatricSurgery",
  },
];

export default function SurgicalSpecialties() {
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

      {/* Specialties Grid */}
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
              <div className="w-16 h-16 relative mb-3 bg-blue-600
               dark:bg-slate-700 rounded-full p-2 flex items-center justify-center">
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
