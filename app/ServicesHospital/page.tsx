"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
  specialists?: string;
  technology?: string;
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      custom={index}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          quality={90}
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {service.specialists && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              Our Specialists:
            </h4>
            <p className="text-gray-600">{service.specialists}</p>
          </div>
        )}
        {service.technology && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Technology:</h4>
            <p className="text-gray-600">{service.technology}</p>
          </div>
        )}
        <Link
          href={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 group"
        >
          Learn More
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default function ServicesHospital() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const medicalServices = [
    {
      title: "Cardiology",
      description:
        "Comprehensive heart care with our state-of-the-art cardiac center featuring modern catheterization labs and non-invasive testing facilities.",
      icon: "❤️",
      image: "/cardiology.jpg",

      features: [
        "24/7 Cardiac Emergency Services",
        "Echocardiography (2D, 3D, Stress Echo)",
        "Angioplasty & Stenting",
        "Pacemaker & ICD Implantation",
      ],

      specialists:
        "Board-certified cardiologists and cardiac surgeons with international training",
      technology:
        "Latest Philips EPIQ CVx ultrasound systems and Siemens biplane cath lab",
    },
    {
      title: "Oncology",
      description:
        "Multidisciplinary cancer care with personalized treatment plans combining chemotherapy, radiation therapy, and surgical oncology.",
      icon: "🦠",
      image: "/oncology.jpg",
      features: [
        "Medical Oncology",
        "Radiation Therapy (IMRT, IGRT)",
        "Palliative Care Services",
        "Cancer Screening Programs",
      ],
      specialists:
        "Oncologists, hematologists, and oncology surgeons with subspecialty expertise",
      technology: "Varian TrueBeam linear accelerator and PET-CT imaging",
    },
    {
      title: "Neurology",
      description:
        "Advanced neurological care for disorders of the brain, spine, and nervous system with cutting-edge diagnostic and treatment options.",
      icon: "🧠",
      image: "/neurology.jpg",
      features: [
        "EEG & EMG/NCS Testing",
        "Stroke Center with 24/7 Intervention",
        "Epilepsy Monitoring Unit",
        "Movement Disorders Clinic",
      ],
      specialists:
        "Neurologists and neurosurgeons fellowship-trained in subspecialties",
      technology: "3T MRI, video EEG monitoring, and neuro-navigation systems",
    },
  ];

  const surgicalServices = [
    {
      title: "Orthopedics",
      description:
        "Comprehensive orthopedic care including joint replacement, sports medicine, and trauma surgery with advanced rehabilitation services.",
      icon: "🦴",
      image: "/orthopedics.jpg",
      features: [
        "Robotic-Assisted Joint Replacement",
        "Arthroscopic Surgery",
        "Spine Surgery",
        "Pediatric Orthopedics",
      ],
      specialists:
        "Orthopedic surgeons with fellowship training in joint replacement and sports medicine",
      technology: "MAKO robotic arm for precision joint replacement",
    },
    {
      title: "General Surgery",
      description:
        "Minimally invasive surgical solutions for a wide range of conditions using laparoscopic and robotic techniques.",
      icon: "🔪",
      image: "/surgery.jpg",
      features: [
        "Laparoscopic Cholecystectomy",
        "Hernia Repair (Open & Laparoscopic)",
        "Bariatric Surgery",
        "Colorectal Surgery",
      ],
      specialists: "General surgeons with advanced laparoscopic training",
      technology: "Da Vinci Xi robotic surgical system",
    },
    {
      title: "ENT",
      description:
        "Comprehensive ear, nose and throat care for both pediatric and adult patients with advanced diagnostic and surgical capabilities.",
      icon: "👂",
      image: "/ent.jpg",
      features: [
        "Hearing and Balance Center",
        "Endoscopic Sinus Surgery",
        "Head and Neck Oncology",
        "Pediatric ENT Services",
      ],
      specialists:
        "ENT surgeons with subspecialty training in otology and rhinology",
      technology: "CO2 laser and endoscopic sinus surgery equipment",
    },
  ];

  const diagnosticServices = [
    {
      title: "Radiology",
      description:
        "Advanced diagnostic imaging services using the latest technology for accurate diagnosis and treatment planning.",
      features: [
        "3T MRI Scanning",
        "128-Slice CT Scanning",
        "Digital Mammography",
        "Ultrasound (4D, Doppler)",
      ],
    },
    {
      title: "Laboratory",
      description:
        "Full-service pathology and clinical laboratory offering comprehensive testing with rapid turnaround times.",
      features: [
        "Clinical Chemistry",
        "Hematology",
        "Microbiology",
        "Histopathology",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Services | Evercare Hospital Lahore</title>
        <meta
          name="description"
          content="Comprehensive healthcare services at Evercare Hospital Lahore including cardiology, oncology, neurology, and surgical specialties"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Banner with Parallax Effect */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] min-h-[500px] w-full bg-blue-900 flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/servise.png"
            alt="Medical Services"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-blue-300">Comprehensive</span> Services
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-8"
          >
            Delivering exceptional patient care through advanced medical
            technology and expert specialists
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/Appointment"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Appointment
            </Link>
            <Link
              href="#medical-services"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Exceptional Care at Evercare Hospital Lahore
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <div className="prose-lg text-gray-600 max-w-4xl mx-auto text-left md:text-center">
              <p>
                At Evercare Hospital Lahore, we offer a comprehensive range of
                medical and surgical services delivered by highly trained
                specialists using state-of-the-art technology. Our
                patient-centered approach ensures that each individual receives
                personalized care tailored to their specific needs.
              </p>
              <p className="mt-4">
                As a JCI-accredited facility, we maintain the highest
                international standards in healthcare delivery, patient safety,
                and clinical outcomes. Our multidisciplinary teams collaborate
                to provide seamless care across all specialties.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "300+",
                subtitle: "Specialists",
                description:
                  "Board-certified physicians across 40+ specialties",
              },
              {
                title: "24/7",
                subtitle: "Emergency Care",
                description:
                  "Fully staffed emergency department with trauma center",
              },
              {
                title: "95%",
                subtitle: "Patient Satisfaction",
                description: "Consistently high ratings for quality of care",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.title}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.subtitle}
                </h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section
        id="medical-services"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold mb-2 block">
              Medical Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Medical Specialties
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <div className="prose text-gray-600 max-w-3xl mx-auto">
              <p>
                Our medical departments bring together renowned specialists and
                cutting-edge technology to provide comprehensive care for
                complex medical conditions. From preventive care to advanced
                treatments, we offer the full spectrum of medical services.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {medicalServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Surgical Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold mb-2 block">
              Surgical Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Surgical Specialties
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <div className="prose text-gray-600 max-w-3xl mx-auto">
              <p>
                Our surgical teams perform thousands of procedures annually
                using minimally invasive and robotic-assisted techniques that
                reduce recovery times and improve outcomes. We maintain the
                highest standards of surgical safety and infection control.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {surgicalServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold mb-2 block">
              Precision Diagnostics
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Diagnostics
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <div className="prose text-gray-600 max-w-3xl mx-auto">
              <p>
                Our diagnostic services, managed in partnership with Islamabad
                Diagnostic Centre (IDC), provide accurate and timely results to
                support clinical decision-making. We utilize the latest
                generation equipment operated by certified technologists.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-96 md:h-auto group overflow-hidden">
                <Image
                  src="/lab.jpg"
                  alt="Diagnostic Lab"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>
              <div className="p-8 md:p-12 md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Comprehensive Diagnostic Center
                </h3>
                <div className="prose text-gray-600 mb-8">
                  <p>
                    Our diagnostic center offers a full spectrum of imaging and
                    pathology services using internationally certified
                    protocols. With rapid turnaround times and digital
                    reporting, we ensure your healthcare providers receive
                    results when they need them.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {diagnosticServices[0].features.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 text-center"
                  >
                    View Radiology Services
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300 text-center"
                  >
                    View Pathology Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 relative h-96 md:h-auto group overflow-hidden">
                <Image
                  src="/d.png"
                  alt="Pathology Lab"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>
              <div className="p-8 md:p-12 md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Advanced Pathology Laboratory
                </h3>
                <div className="prose text-gray-600 mb-8">
                  <p>
                    Our CAP-accredited laboratory provides comprehensive testing
                    services including clinical chemistry, hematology,
                    microbiology, and histopathology. With automated systems and
                    stringent quality controls, we deliver accurate results you
                    can trust.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {diagnosticServices[1].features.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pathology"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 text-center"
                  >
                    View Lab Services
                  </Link>
                  <Link
                    href="/Appointment"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300 text-center"
                  >
                    Book Lab Test
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold mb-2 block">
              Specialized Care
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Special Programs
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <div className="prose text-gray-600 max-w-3xl mx-auto">
              <p>
                Beyond our core services, we offer specialized programs that
                address specific healthcare needs with multidisciplinary
                approaches and exceptional expertise.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Heart Center",
                description:
                  "Comprehensive cardiac care from prevention to rehabilitation",
                icon: "❤️",
                image: "/heart-center.jpg",
              },
              {
                title: "Cancer Center",
                description:
                  "Multidisciplinary oncology care with tumor board review",
                icon: "🦠",
                image: "/cancer-center.jpg",
              },
              {
                title: "Women's Health",
                description: "Specialized care for women at all life stages",
                icon: "👩",
                image: "/womens-health.jpg",
              },
              {
                title: "Pediatrics",
                description:
                  "Child-friendly environment with pediatric specialists",
                icon: "👶",
                image: "/pediatrics.jpg",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-blue-900/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{program.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to experience world-class healthcare?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Our patient care coordinators are available 24/7 to assist you
              with appointments and inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/Appointment"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Book Appointment
              </Link>
              <Link
                href="/ContactUs"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
